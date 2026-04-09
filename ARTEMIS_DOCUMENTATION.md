# 🤖 Artemis - Assistente Virtual Inteligente do DRH Flow

## 📋 Visão Geral

A **Artemis** é a assistente virtual oficial do DRH Flow, implementada como um módulo funcional completo e não apenas como elemento visual. O sistema foi desenvolvido com arquitetura preparada para integração futura com APIs de Inteligência Artificial, geração de vídeo e WhatsApp institucional.

---

## 🏗️ Arquitetura do Sistema

### Estrutura de Arquivos

```
/src/app/
├── components/
│   └── artemis/
│       ├── FloatingAssistantButton.tsx   # Botão flutuante de acesso
│       └── ArtemisChat.tsx               # Interface de chat principal
├── hooks/
│   └── useArtemis.ts                     # Lógica de negócio e estado
└── pages/
    └── Assistente.tsx                    # Página institucional
```

---

## 📁 Componentes Principais

### 1. FloatingAssistantButton.tsx

**Responsabilidade:** Botão de acesso à Artemis, sempre visível no sistema.

**Características:**
- Botão flutuante fixo no canto inferior direito
- Animação pulsante para chamar atenção
- Badge de notificação (1 nova mensagem)
- Tooltip informativo
- Responsivo (adapta posição em mobile)
- Abre o chat ao ser clicado

**Props:**
```typescript
// Sem props - componente autocontido
```

**Localização:**
- Desktop: `bottom-6 right-6`
- Mobile: `bottom-20 right-6` (não sobrepõe bottom navigation)

---

### 2. ArtemisChat.tsx

**Responsabilidade:** Interface completa de chat com a Artemis.

**Características:**
- ✅ Chat em tempo real
- ✅ Campo de entrada de mensagens
- ✅ Área de histórico de conversas
- ✅ Estados de carregamento (IA pensando)
- ✅ Perguntas rápidas (quick questions)
- ✅ Ações contextuais (botões dinâmicos)
- ✅ Modo fullscreen
- ✅ Área preparada para vídeo
- ✅ Controles de áudio
- ✅ Auto-scroll para novas mensagens
- ✅ Responsivo (mobile, tablet, desktop)

**Props:**
```typescript
interface ArtemisChatProps {
  onClose: () => void; // Callback para fechar o chat
}
```

**Estrutura de Mensagens:**
```typescript
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  videoUrl?: string;                    // URL do vídeo (futuro)
  actions?: Array<{                     // Ações contextuais
    label: string;
    onClick: () => void;
  }>;
}
```

**Funcionalidades Implementadas:**

**a) Envio de Mensagens:**
- Input de texto multi-linha
- Enter para enviar (Shift+Enter para quebra de linha)
- Contador de caracteres
- Desabilitado durante carregamento

**b) Exibição de Mensagens:**
- Avatar do usuário (azul TJMA)
- Avatar da Artemis (roxo/gradiente)
- Balões de conversa diferenciados
- Timestamp de cada mensagem
- Alinhamento (usuário à direita, Artemis à esquerda)

**c) Perguntas Rápidas:**
```typescript
const quickQuestions = [
  'Como solicitar teletrabalho?',
  'Quais são meus benefícios?',
  'Como consultar meu histórico funcional?',
  'Quais documentos preciso para licença?',
];
```

**d) Área de Vídeo (Preparada):**
```tsx
{message.videoUrl && showVideo && (
  <video
    src={message.videoUrl}
    controls
    className="w-full h-full"
    muted={isMuted}
  />
)}
```

**e) Controles:**
- Botão de fechar
- Botão fullscreen/minimizar
- Botão mostrar/ocultar vídeo
- Botão mutar/desmutar áudio

---

### 3. useArtemis.ts (Hook)

**Responsabilidade:** Lógica de negócio, gerenciamento de estado e integração com APIs.

**Interface Pública:**
```typescript
export function useArtemis(config?: ArtemisConfig) {
  return {
    messages: Message[];           // Histórico de mensagens
    isLoading: boolean;            // Estado de carregamento
    currentVideoUrl: string | null; // URL do vídeo atual
    sendMessage: (content: string) => Promise<void>;
    clearMessages: () => void;
  };
}
```

**Configuração:**
```typescript
interface ArtemisConfig {
  apiKey?: string;        // API key para OpenAI
  model?: string;         // Modelo de IA (default: gpt-4)
  videoEnabled?: boolean; // Habilitar geração de vídeo
  videoApiKey?: string;   // API key para HeyGen
}
```

**Fluxo de Processamento:**

```
1. Usuário digita mensagem
   ↓
2. sendMessage() é chamado
   ↓
3. Mensagem do usuário é adicionada ao estado
   ↓
4. isLoading = true
   ↓
5. [FUTURO] Chamada à API OpenAI
   ↓
6. [ATUAL] Geração de resposta mockada contextualizada
   ↓
7. [FUTURO] Geração de vídeo (opcional)
   ↓
8. Resposta da Artemis é adicionada ao estado
   ↓
9. isLoading = false
   ↓
10. Ações contextuais são geradas
```

**Sistema de Respostas Contextualizadas:**

O hook analisa palavras-chave e gera respostas específicas:

```typescript
// Exemplo: Teletrabalho
if (message.includes('teletrabalho')) {
  return `Para solicitar teletrabalho no TJMA, você precisa seguir estes passos:
  
  1️⃣ Verificar elegibilidade
  2️⃣ Acessar o módulo
  3️⃣ Preencher formulário
  4️⃣ Anexar documentos
  5️⃣ Acompanhar solicitação
  
  ⚖️ Base normativa: Resolução CNJ nº 227/2016`;
}
```

**Geração de Ações Dinâmicas:**

```typescript
function generateActions(userMessage: string) {
  if (message.includes('teletrabalho')) {
    return [
      { label: 'Solicitar Teletrabalho', onClick: () => navigate('/teletrabalho') },
      { label: 'Ver Normativas', onClick: () => navigate('/teletrabalho#normativas') }
    ];
  }
}
```

---

## 🔌 Integração com APIs (Preparado)

### OpenAI API

**Localização:** `useArtemis.ts` (linha ~70)

**Código preparado:**
```typescript
// TODO: Descomentar quando API key estiver disponível
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${config?.apiKey}`
  },
  body: JSON.stringify({
    model: config?.model || 'gpt-4',
    messages: [
      { role: 'system', content: getSystemPrompt() },
      ...messages.map(m => ({ role: m.role, content: m.content })),
      { role: 'user', content }
    ]
  })
});
```

**System Prompt:**
```
Você é a Artemis, assistente virtual oficial do DRH Flow.

IDENTIDADE:
- Nome: Artemis
- Função: Assistente Virtual de Recursos Humanos
- Instituição: TJMA
- Tom: Institucional, acolhedor, claro e objetivo

CONHECIMENTO:
- Vida funcional
- Teletrabalho (Resolução CNJ nº 227/2016)
- Benefícios e indenizações
- Licenças e afastamentos
- Adicionais e gratificações
- Protocolo administrativo
- Direitos e deveres funcionais

COMPORTAMENTO:
- Clara, objetiva e institucional
- Linguagem acessível mas formal
- Cita normativas quando relevante
- Oferece orientações passo a passo
- Não inventa informações
- Empática e acolhedora

LIMITAÇÕES:
- NÃO toma decisões administrativas
- NÃO substitui análise técnica oficial
- NÃO acessa dados sensíveis
- Orienta e direciona
```

**Passos para Ativar:**
1. Obter API key da OpenAI
2. Adicionar ao `.env`: `VITE_OPENAI_API_KEY=sk-...`
3. Descomentar código em `useArtemis.ts`
4. Passar config: `useArtemis({ apiKey: import.meta.env.VITE_OPENAI_API_KEY })`

---

### HeyGen Video API

**Localização:** `useArtemis.ts` (linha ~340)

**Código preparado:**
```typescript
async function generateVideo(text: string, apiKey?: string): Promise<string | null> {
  // TODO: Implementar integração
  const response = await fetch('https://api.heygen.com/v1/video.generate', {
    method: 'POST',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      script: text,
      avatar_id: 'ARTEMIS_AVATAR_ID',
      voice_id: 'PORTUGUESE_BR_FEMALE_VOICE',
      background: 'TJMA_INSTITUTIONAL_BG'
    })
  });
  
  const data = await response.json();
  return data.video_url;
}
```

**Passos para Ativar:**
1. Criar conta no HeyGen
2. Criar/selecionar avatar institucional
3. Configurar voz em português brasileiro
4. Obter API key
5. Adicionar ao `.env`: `VITE_HEYGEN_API_KEY=...`
6. Descomentar código
7. Habilitar em config: `{ videoEnabled: true, videoApiKey: '...' }`

---

### WhatsApp Integration

**Estrutura Preparada:**

**Botão "Continuar no WhatsApp"** (a ser implementado):
```tsx
<Button
  variant="outline"
  onClick={() => {
    const message = encodeURIComponent(lastAssistantMessage);
    window.open(`https://wa.me/559812345678?text=${message}`, '_blank');
  }}
>
  <MessageCircle className="mr-2 h-4 w-4" />
  Continuar no WhatsApp
</Button>
```

**WhatsApp Business API Integration:**
```typescript
// Webhook para receber mensagens
app.post('/webhook/whatsapp', async (req, res) => {
  const { from, body } = req.body;
  
  // Processar mensagem com mesma lógica da Artemis
  const response = await artemis.processMessage(body);
  
  // Enviar resposta via WhatsApp API
  await whatsappAPI.sendMessage(from, response);
});
```

---

## 🎨 Design System

### Paleta de Cores da Artemis

```css
/* Cores principais */
--artemis-primary: #7C3AED;        /* Roxo vibrante */
--artemis-secondary: #6366F1;      /* Índigo */
--artemis-accent: #F59E0B;         /* Âmbar (destaque) */
--artemis-success: #10B981;        /* Verde */
--artemis-bg: #F9FAFB;             /* Fundo claro */
```

### Componentes Visuais

**Botão Flutuante:**
```tsx
<div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-full shadow-2xl">
  <MessageCircle className="h-8 w-8 text-white" />
</div>
```

**Avatar da Artemis:**
```tsx
<div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full">
  <Bot className="h-5 w-5 text-white" />
</div>
```

**Balão de Mensagem (Artemis):**
```tsx
<div className="bg-white border border-purple-200 rounded-2xl rounded-tl-sm p-4">
  <p className="text-sm text-gray-800">{content}</p>
</div>
```

**Balão de Mensagem (Usuário):**
```tsx
<div className="bg-[#152E5A] text-white rounded-2xl rounded-tr-sm p-4">
  <p className="text-sm">{content}</p>
</div>
```

---

## 📱 Responsividade

### Breakpoints

```typescript
// Mobile
bottom-20 right-6 w-[380px] h-[600px]

// Desktop
bottom-6 right-6 w-[420px] h-[680px]

// Fullscreen
inset-4 rounded-2xl
```

### Adaptações Mobile

- Botão flutuante não sobrepõe bottom navigation
- Chat ocupa quase tela inteira
- Fonte e espaçamentos ajustados
- Touch-friendly (botões maiores)
- Scroll otimizado

---

## 🔧 Uso no Sistema

### Importação

```tsx
import { FloatingAssistantButton } from './components/artemis/FloatingAssistantButton';
import { ArtemisChat } from './components/artemis/ArtemisChat';
import { useArtemis } from './hooks/useArtemis';
```

### Implementação no Layout

```tsx
// /src/app/layouts/Root.tsx
export function Root() {
  return (
    <div>
      {/* Conteúdo principal */}
      <Outlet />
      
      {/* Botão flutuante da Artemis */}
      <FloatingAssistantButton />
    </div>
  );
}
```

### Uso Standalone

```tsx
function MyComponent() {
  const [chatOpen, setChatOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setChatOpen(true)}>
        Abrir Artemis
      </Button>
      
      {chatOpen && <ArtemisChat onClose={() => setChatOpen(false)} />}
    </>
  );
}
```

### Uso do Hook

```tsx
function CustomArtemis() {
  const { messages, isLoading, sendMessage } = useArtemis({
    apiKey: 'sk-...',
    model: 'gpt-4',
    videoEnabled: true
  });
  
  const handleSend = async (text: string) => {
    await sendMessage(text);
  };
  
  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>{msg.content}</div>
      ))}
      {isLoading && <Loader />}
    </div>
  );
}
```

---

## 🎯 Casos de Uso

### 1. Dúvida sobre Teletrabalho

**Usuário:** "Como solicitar teletrabalho?"

**Artemis:**
```
Para solicitar teletrabalho no TJMA, você precisa seguir estes passos:

1️⃣ **Verificar elegibilidade**: Estar no exercício efetivo há pelo menos 3 meses

2️⃣ **Acessar o módulo**: Menu lateral > Teletrabalho

3️⃣ **Preencher formulário**: Complete todos os campos obrigatórios

4️⃣ **Anexar documentos**:
   • Declaração de infraestrutura
   • Plano de trabalho
   • Concordância da chefia

5️⃣ **Acompanhar solicitação**: Via módulo "Acompanhamento Processual"

⚖️ **Base normativa**: Resolução CNJ nº 227/2016

[Botão: Solicitar Teletrabalho]
[Botão: Ver Normativas]
```

### 2. Consulta de Benefícios

**Usuário:** "Quais são meus benefícios?"

**Artemis:**
```
O TJMA oferece os seguintes benefícios:

💰 **Auxílio-alimentação**: R$ 658,00/mês
🏥 **Assistência à saúde**: Plano institucional
📚 **Auxílio-educação**: Até R$ 1.200,00
🚗 **Auxílio-transporte**: Conforme distância
👶 **Auxílio pré-escolar**: Para filhos até 5 anos e 11 meses

Para consultar seus benefícios ativos:
Menu lateral > Benefícios e Indenizações > Meus Benefícios

[Botão: Meus Benefícios]
```

### 3. Solicitação de Licença

**Usuário:** "Quais documentos preciso para licença?"

**Artemis:**
```
Depende do tipo de licença:

🏥 **Licença para tratamento de saúde**
- Atestado médico oficial
- Se > 15 dias: perícia médica

👨‍👩‍👧 **Licença maternidade/paternidade**
- Certidão de nascimento/adoção

📚 **Licença capacitação**
- Plano de capacitação aprovado
- Comprovante de inscrição

Para solicitar: Menu > Licenças e Afastamentos

Qual tipo de licença você precisa?

[Botão: Solicitar Licença]
```

---

## ⚠️ Limitações e Avisos

### Avisos Institucionais

```tsx
<Alert variant="info">
  <Shield className="inline h-4 w-4 mr-1" />
  <strong>Informação Importante:</strong> A Artemis é uma assistente de orientação. 
  Para decisões formais, análises técnicas e processos oficiais, a autoridade 
  competente é sempre a Diretoria de Recursos Humanos do TJMA.
</Alert>
```

### O Que a Artemis NÃO Faz

❌ Não toma decisões administrativas  
❌ Não substitui análise técnica oficial  
❌ Não acessa dados sensíveis de servidores  
❌ Não aprova ou reprova solicitações  
❌ Não modifica registros funcionais  
❌ Não cria processos oficiais  

### O Que a Artemis FAZ

✅ Orienta sobre procedimentos  
✅ Explica normativas e resoluções  
✅ Indica documentação necessária  
✅ Direciona para módulos corretos  
✅ Responde dúvidas frequentes  
✅ Fornece informações institucionais  

---

## 📊 Métricas e Monitoramento

### Dados a Coletar (Futuro)

```typescript
interface ArtemisMetrics {
  totalInteractions: number;        // Total de conversas
  avgResponseTime: number;          // Tempo médio de resposta
  satisfactionRate: number;         // Taxa de satisfação (%)
  topQuestions: string[];           // Perguntas mais frequentes
  resolutionRate: number;           // Taxa de resolução
  videoViewRate: number;            // Taxa de visualização de vídeos
  whatsappTransferRate: number;     // Taxa de transferência para WhatsApp
}
```

### Analytics Events

```typescript
// Evento: Chat aberto
trackEvent('artemis_chat_opened', { source: 'floating_button' });

// Evento: Mensagem enviada
trackEvent('artemis_message_sent', { 
  messageLength: text.length,
  hasQuickAction: true 
});

// Evento: Vídeo visualizado
trackEvent('artemis_video_played', { 
  videoId: 'teletrabalho_001',
  duration: 45 
});

// Evento: Transferência para WhatsApp
trackEvent('artemis_whatsapp_transfer', { 
  conversationLength: messages.length 
});
```

---

## 🚀 Roadmap

### Fase 1: MVP ✅ CONCLUÍDA
- [x] Componente visual completo
- [x] Sistema de mensagens funcional
- [x] Respostas mockadas contextualizadas
- [x] Ações dinâmicas
- [x] Design responsivo
- [x] Integração no sistema

### Fase 2: IA Real (Próximo)
- [ ] Integração OpenAI GPT-4
- [ ] Fine-tuning com dados TJMA
- [ ] RAG (Retrieval-Augmented Generation) com base de conhecimento
- [ ] Context memory entre sessões
- [ ] Multilíngua (LIBRAS via vídeo)

### Fase 3: Vídeo (Médio Prazo)
- [ ] Integração HeyGen
- [ ] Avatar institucional personalizado
- [ ] Voz em português BR
- [ ] Gestos e expressões
- [ ] Background TJMA
- [ ] Cache de vídeos frequentes

### Fase 4: Multicanal (Longo Prazo)
- [ ] WhatsApp Business API
- [ ] Telegram Bot
- [ ] Widget para site institucional
- [ ] App móvel nativo
- [ ] Integração com telefonia (IVR)

### Fase 5: Analytics e IA Avançada
- [ ] Dashboard de métricas
- [ ] A/B Testing de respostas
- [ ] Machine Learning para melhorias
- [ ] Sentiment analysis
- [ ] Predição de necessidades

---

## 🔐 Segurança e Privacidade

### Dados Processados

```typescript
interface ProcessedData {
  userMessage: string;        // Entrada do usuário
  conversationHistory: Message[]; // Histórico (max 20 mensagens)
  userId?: string;            // ID anônimo (sem PII)
  timestamp: Date;            // Data/hora da interação
}
```

### Não São Coletados

❌ Nome completo do usuário  
❌ CPF, matrícula ou dados sensíveis  
❌ Informações de saúde  
❌ Dados bancários  
❌ Endereço residencial  
❌ Telefone pessoal  

### LGPD Compliance

✅ Dados anonimizados  
✅ Consentimento implícito ao usar  
✅ Direito ao esquecimento (clearMessages)  
✅ Transparência no uso de IA  
✅ Sem compartilhamento com terceiros  

---

## 📞 Suporte e Manutenção

### Contatos Técnicos

- **Desenvolvedor:** [Nome do desenvolvedor]
- **Email:** drh.sistemas@tjma.jus.br
- **Repositório:** [GitHub URL]
- **Documentação:** /ARTEMIS_DOCUMENTATION.md

### Troubleshooting

**Problema:** Chat não abre ao clicar no botão
```
Solução: Verificar console do navegador para erros
Verificar se FloatingAssistantButton está no Root.tsx
```

**Problema:** Mensagens não são enviadas
```
Solução: Verificar se useArtemis está sendo chamado corretamente
Verificar se há erros na função sendMessage
```

**Problema:** Botão flutuante sobrepõe conteúdo
```
Solução: Ajustar z-index e posição (bottom-20 em mobile)
```

---

## 📝 Changelog

### v1.0.0 (Abril 2026)
- ✅ Implementação inicial completa
- ✅ Interface de chat responsiva
- ✅ Sistema de mensagens funcional
- ✅ Respostas mockadas contextualizadas
- ✅ Ações dinâmicas
- ✅ Preparação para APIs futuras
- ✅ Documentação completa

---

## 🎓 Referências

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [HeyGen API Documentation](https://docs.heygen.com)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)
- [React TypeScript Best Practices](https://react-typescript-cheatsheet.netlify.app)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)

---

**Desenvolvido com ❤️ para o TJMA | DRH Flow © 2026**
