# 🔌 Artemis - Exemplos de Integração

## Exemplos Práticos de Código

### 1. Integração Completa com OpenAI

```typescript
// .env
VITE_OPENAI_API_KEY=sk-proj-abc123...
VITE_OPENAI_MODEL=gpt-4

// src/app/config/artemis.config.ts
export const artemisConfig = {
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4',
  temperature: 0.7,
  maxTokens: 500,
  videoEnabled: false
};

// src/app/hooks/useArtemis.ts
// Descomentar linhas 70-95 e usar:

const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${config?.apiKey}`
  },
  body: JSON.stringify({
    model: config?.model || 'gpt-4',
    messages: [
      {
        role: 'system',
        content: getSystemPrompt()
      },
      ...messages.map(m => ({ 
        role: m.role, 
        content: m.content 
      })),
      { 
        role: 'user', 
        content 
      }
    ],
    temperature: config?.temperature || 0.7,
    max_tokens: config?.maxTokens || 500,
    presence_penalty: 0.6,
    frequency_penalty: 0.5
  })
});

const data = await response.json();
const assistantContent = data.choices[0].message.content;

// Processar resposta...
```

---

### 2. Integração com HeyGen (Vídeo)

```typescript
// .env
VITE_HEYGEN_API_KEY=your_heygen_key
VITE_HEYGEN_AVATAR_ID=artemis_tjma_v1
VITE_HEYGEN_VOICE_ID=pt-BR-FranciscaNeural

// src/app/services/artemis.service.ts
async generateVideo(text: string): Promise<VideoResponse> {
  const response = await fetch('https://api.heygen.com/v1/video.generate', {
    method: 'POST',
    headers: {
      'X-Api-Key': this.config.videoApiKey!,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // Script do vídeo
      script: {
        type: 'text',
        input: text,
        audio_url: null
      },
      
      // Avatar
      avatar_id: this.config.avatarId || 'artemis_tjma_v1',
      avatar_style: 'normal',
      
      // Voz
      voice: {
        type: 'text',
        voice_id: this.config.voiceId || 'pt-BR-FranciscaNeural',
        speed: 1.0,
        pitch: 0
      },
      
      // Configurações de vídeo
      background: '#152E5A', // Azul TJMA
      ratio: '16:9',
      resolution: '1080p',
      test: false,
      
      // Marca d'água (opcional)
      watermark: {
        url: 'https://tjma.jus.br/logo.png',
        position: 'bottom-right',
        opacity: 0.8
      }
    })
  });

  if (!response.ok) {
    throw new Error(`HeyGen API Error: ${response.status}`);
  }

  const data = await response.json();
  
  // HeyGen gera vídeos de forma assíncrona
  // Precisamos fazer polling para verificar o status
  const videoId = data.video_id;
  let videoStatus = 'processing';
  let videoUrl = '';
  
  while (videoStatus === 'processing') {
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 segundos
    
    const statusResponse = await fetch(
      `https://api.heygen.com/v1/video_status.get?video_id=${videoId}`,
      {
        headers: {
          'X-Api-Key': this.config.videoApiKey!
        }
      }
    );
    
    const statusData = await statusResponse.json();
    videoStatus = statusData.status;
    
    if (videoStatus === 'completed') {
      videoUrl = statusData.video_url;
    } else if (videoStatus === 'failed') {
      throw new Error('Video generation failed');
    }
  }
  
  return {
    videoUrl,
    videoId,
    duration: data.duration || 0,
    status: 'completed',
    thumbnailUrl: data.thumbnail_url
  };
}

// Uso no componente
const handleGenerateVideo = async () => {
  setIsVideoLoading(true);
  try {
    const lastMessage = messages[messages.length - 1];
    const video = await artemisService.generateVideo(lastMessage.content);
    setCurrentVideoUrl(video.videoUrl);
    setShowVideo(true);
  } catch (error) {
    console.error('Erro ao gerar vídeo:', error);
  } finally {
    setIsVideoLoading(false);
  }
};
```

---

### 3. Integração com WhatsApp Business

```typescript
// Backend - Express.js
// server.ts

import express from 'express';
import { getArtemisService } from './services/artemis.service';

const app = express();
app.use(express.json());

const artemisService = getArtemisService({
  apiKey: process.env.OPENAI_API_KEY
});

// Webhook de verificação (obrigatório para WhatsApp)
app.get('/webhook/whatsapp', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    console.log('Webhook verificado');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Webhook para receber mensagens
app.post('/webhook/whatsapp', async (req, res) => {
  try {
    const body = req.body;

    // Verifica se é uma mensagem
    if (body.object === 'whatsapp_business_account') {
      const entry = body.entry[0];
      const changes = entry.changes[0];
      const value = changes.value;

      // Extrai dados da mensagem
      if (value.messages && value.messages[0]) {
        const message = value.messages[0];
        const phoneNumber = message.from;
        const messageText = message.text.body;

        console.log(`Mensagem de ${phoneNumber}: ${messageText}`);

        // Processa mensagem com Artemis
        const response = await artemisService.processMessage(messageText);

        // Envia resposta via WhatsApp API
        await sendWhatsAppMessage(phoneNumber, response.content);

        res.sendStatus(200);
      }
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    res.sendStatus(500);
  }
});

// Função para enviar mensagem via WhatsApp
async function sendWhatsAppMessage(to: string, text: string) {
  const response = await fetch(
    `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: to,
        type: 'text',
        text: {
          preview_url: false,
          body: text
        }
      })
    }
  );

  if (!response.ok) {
    throw new Error(`WhatsApp API Error: ${response.status}`);
  }

  return await response.json();
}

app.listen(3000, () => {
  console.log('Webhook rodando na porta 3000');
});
```

```typescript
// Frontend - Botão para WhatsApp
// src/app/components/artemis/ArtemisChat.tsx

const handleContinueOnWhatsApp = () => {
  const lastAssistantMessage = messages
    .filter(m => m.role === 'assistant')
    .pop();

  if (lastAssistantMessage) {
    const whatsappNumber = '5598912345678'; // Número institucional
    const message = encodeURIComponent(
      `Olá! Estava conversando com a Artemis no DRH Flow sobre:\n\n${lastAssistantMessage.content.substring(0, 200)}...`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  }
};

// No JSX
<Button
  variant="outline"
  onClick={handleContinueOnWhatsApp}
  className="mt-4"
>
  <MessageCircle className="mr-2 h-4 w-4" />
  Continuar no WhatsApp
</Button>
```

---

### 4. RAG (Retrieval-Augmented Generation)

Sistema para melhorar respostas com documentos TJMA:

```typescript
// src/app/services/rag.service.ts

interface Document {
  id: string;
  title: string;
  content: string;
  category: string;
  embedding?: number[];
}

class RAGService {
  private documents: Document[] = [];

  // Carregar documentos (normativas, resoluções, etc)
  async loadDocuments() {
    const docs = await fetch('/api/documents').then(r => r.json());
    this.documents = docs;
  }

  // Buscar documentos relevantes
  async findRelevantDocuments(query: string, limit = 3): Promise<Document[]> {
    // TODO: Implementar busca semântica com embeddings
    // Por enquanto, busca simples por palavras-chave
    
    const queryLower = query.toLowerCase();
    const scored = this.documents.map(doc => ({
      doc,
      score: this.calculateRelevance(queryLower, doc)
    }));

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.doc);
  }

  private calculateRelevance(query: string, doc: Document): number {
    const words = query.split(' ');
    let score = 0;
    
    words.forEach(word => {
      if (doc.content.toLowerCase().includes(word)) {
        score += 1;
      }
      if (doc.title.toLowerCase().includes(word)) {
        score += 2; // Título tem mais peso
      }
    });
    
    return score;
  }

  // Gerar contexto para o prompt
  generateContext(documents: Document[]): string {
    return documents
      .map(doc => `### ${doc.title}\n${doc.content}`)
      .join('\n\n');
  }
}

// Uso com Artemis
const ragService = new RAGService();
await ragService.loadDocuments();

async function processMessageWithRAG(message: string) {
  // Busca documentos relevantes
  const relevantDocs = await ragService.findRelevantDocuments(message);
  
  // Gera contexto adicional
  const context = ragService.generateContext(relevantDocs);
  
  // Envia para OpenAI com contexto
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `${getSystemPrompt()}\n\nDOCUMENTOS DE REFERÊNCIA:\n${context}`
        },
        {
          role: 'user',
          content: message
        }
      ]
    })
  });
  
  return await response.json();
}
```

---

### 5. Analytics e Métricas

```typescript
// src/app/services/analytics.service.ts

interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: Date;
}

class ArtemisAnalytics {
  private events: AnalyticsEvent[] = [];

  // Rastrear abertura do chat
  trackChatOpened(source: 'floating_button' | 'menu' | 'direct_link') {
    this.track('artemis_chat_opened', { source });
  }

  // Rastrear mensagem enviada
  trackMessageSent(message: string, category?: string) {
    this.track('artemis_message_sent', {
      messageLength: message.length,
      category,
      hasQuickAction: false
    });
  }

  // Rastrear mensagem recebida
  trackMessageReceived(responseTime: number, category?: string) {
    this.track('artemis_message_received', {
      responseTime,
      category
    });
  }

  // Rastrear ação clicada
  trackActionClicked(actionLabel: string, targetModule: string) {
    this.track('artemis_action_clicked', {
      actionLabel,
      targetModule
    });
  }

  // Rastrear vídeo
  trackVideoPlayed(videoId: string, duration: number) {
    this.track('artemis_video_played', {
      videoId,
      duration
    });
  }

  // Rastrear satisfação
  trackSatisfaction(rating: number, comment?: string) {
    this.track('artemis_satisfaction', {
      rating,
      hasComment: !!comment
    });
  }

  // Rastrear transferência WhatsApp
  trackWhatsAppTransfer(conversationLength: number) {
    this.track('artemis_whatsapp_transfer', {
      conversationLength
    });
  }

  private track(event: string, properties: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: new Date()
    };

    this.events.push(analyticsEvent);

    // Enviar para serviço de analytics (Google Analytics, Mixpanel, etc)
    this.sendToAnalytics(analyticsEvent);
  }

  private async sendToAnalytics(event: AnalyticsEvent) {
    // Exemplo com Google Analytics 4
    if (window.gtag) {
      window.gtag('event', event.event, event.properties);
    }

    // Exemplo com endpoint próprio
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error('Erro ao enviar analytics:', error);
    }
  }

  // Obter métricas
  getMetrics() {
    return {
      totalInteractions: this.events.length,
      avgResponseTime: this.calculateAvgResponseTime(),
      topCategories: this.getTopCategories(),
      satisfactionRate: this.calculateSatisfactionRate()
    };
  }

  private calculateAvgResponseTime(): number {
    const responseTimes = this.events
      .filter(e => e.event === 'artemis_message_received')
      .map(e => e.properties.responseTime as number);

    if (responseTimes.length === 0) return 0;

    const sum = responseTimes.reduce((a, b) => a + b, 0);
    return sum / responseTimes.length;
  }

  private getTopCategories(): string[] {
    const categories = this.events
      .filter(e => e.properties.category)
      .map(e => e.properties.category as string);

    const counts = categories.reduce((acc, cat) => {
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([cat]) => cat);
  }

  private calculateSatisfactionRate(): number {
    const ratings = this.events
      .filter(e => e.event === 'artemis_satisfaction')
      .map(e => e.properties.rating as number);

    if (ratings.length === 0) return 0;

    const sum = ratings.reduce((a, b) => a + b, 0);
    return (sum / ratings.length) / 5 * 100; // Percentual
  }
}

// Uso
const analytics = new ArtemisAnalytics();

// No componente
analytics.trackChatOpened('floating_button');
analytics.trackMessageSent('Como solicitar teletrabalho?', 'teletrabalho');
```

---

### 6. Fine-tuning para TJMA

```typescript
// Preparar dados de treinamento
// training_data.jsonl

{"messages": [
  {"role": "system", "content": "Você é a Artemis, assistente do TJMA..."},
  {"role": "user", "content": "Como solicitar teletrabalho?"},
  {"role": "assistant", "content": "Para solicitar teletrabalho no TJMA..."}
]}

{"messages": [
  {"role": "system", "content": "Você é a Artemis, assistente do TJMA..."},
  {"role": "user", "content": "Quais são meus benefícios?"},
  {"role": "assistant", "content": "O TJMA oferece os seguintes benefícios..."}
]}

// ... mais exemplos
```

```python
# Script Python para fine-tuning
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

# Upload do arquivo de treinamento
with open("training_data.jsonl", "rb") as f:
    training_file = openai.File.create(
        file=f,
        purpose="fine-tune"
    )

# Criar job de fine-tuning
fine_tune_job = openai.FineTuningJob.create(
    training_file=training_file.id,
    model="gpt-3.5-turbo",
    hyperparameters={
        "n_epochs": 3
    }
)

print(f"Fine-tuning job criado: {fine_tune_job.id}")

# Aguardar conclusão (pode levar várias horas)
# Depois, usar o modelo customizado:
# model="ft:gpt-3.5-turbo:tjma:artemis:abc123"
```

---

### 7. Cache de Respostas

```typescript
// src/app/services/cache.service.ts

interface CacheItem {
  key: string;
  value: string;
  timestamp: Date;
  hits: number;
}

class ResponseCache {
  private cache = new Map<string, CacheItem>();
  private ttl = 30 * 60 * 1000; // 30 minutos

  // Gerar chave de cache
  private generateKey(message: string): string {
    return message.toLowerCase().trim();
  }

  // Verificar se resposta está em cache
  get(message: string): string | null {
    const key = this.generateKey(message);
    const item = this.cache.get(key);

    if (!item) return null;

    // Verificar se expirou
    const now = new Date().getTime();
    const age = now - item.timestamp.getTime();

    if (age > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    // Incrementar hits
    item.hits++;

    return item.value;
  }

  // Armazenar resposta em cache
  set(message: string, response: string) {
    const key = this.generateKey(message);
    
    this.cache.set(key, {
      key,
      value: response,
      timestamp: new Date(),
      hits: 0
    });
  }

  // Limpar cache
  clear() {
    this.cache.clear();
  }

  // Estatísticas
  getStats() {
    const items = Array.from(this.cache.values());
    
    return {
      totalItems: items.length,
      totalHits: items.reduce((sum, item) => sum + item.hits, 0),
      mostPopular: items
        .sort((a, b) => b.hits - a.hits)
        .slice(0, 5)
        .map(item => ({ message: item.key, hits: item.hits }))
    };
  }
}

// Uso
const cache = new ResponseCache();

async function processWithCache(message: string) {
  // Tentar buscar no cache
  const cached = cache.get(message);
  if (cached) {
    console.log('Resposta do cache');
    return cached;
  }

  // Se não estiver em cache, processar com IA
  const response = await artemisService.processMessage(message);
  
  // Armazenar em cache
  cache.set(message, response.content);
  
  return response.content;
}
```

---

## 🎯 Checklist de Integração

### OpenAI
- [ ] Criar conta OpenAI
- [ ] Gerar API key
- [ ] Adicionar key ao .env
- [ ] Descomentar código em useArtemis.ts
- [ ] Testar integração
- [ ] Configurar rate limits
- [ ] Implementar error handling

### HeyGen
- [ ] Criar conta HeyGen
- [ ] Criar avatar institucional
- [ ] Configurar voz PT-BR
- [ ] Obter API key
- [ ] Adicionar configurações ao .env
- [ ] Descomentar código
- [ ] Implementar polling de status
- [ ] Testar geração de vídeo

### WhatsApp
- [ ] Configurar WhatsApp Business
- [ ] Obter access token
- [ ] Configurar webhook
- [ ] Implementar verificação
- [ ] Implementar recebimento
- [ ] Implementar envio
- [ ] Testar fluxo completo

### Analytics
- [ ] Configurar Google Analytics 4
- [ ] Implementar eventos personalizados
- [ ] Criar dashboard
- [ ] Configurar alertas
- [ ] Testar rastreamento

---

**Desenvolvido com ❤️ para o TJMA | DRH Flow © 2026**
