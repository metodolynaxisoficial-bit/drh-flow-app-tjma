# 🤖 Artemis - Assistente Virtual Inteligente

## ⚡ Quick Start

A Artemis já está **100% funcional** e integrada ao DRH Flow!

### Como Acessar

1. **Botão Flutuante** - Clique no botão roxo no canto inferior direito (disponível em todas as telas)
2. **Menu Lateral** - Navegue para "Assistente Virtual"
3. **URL Direta** - Acesse `/assistente`

### Primeiro Uso

```typescript
// A Artemis já está no sistema! Basta clicar e conversar:
// Exemplo de pergunta: "Como solicitar teletrabalho?"
```

---

## 📁 Estrutura de Arquivos

```
/src/app/
├── components/artemis/
│   ├── FloatingAssistantButton.tsx    ✅ Botão flutuante
│   └── ArtemisChat.tsx                ✅ Interface de chat
├── hooks/
│   └── useArtemis.ts                  ✅ Lógica e estado
├── services/
│   └── artemis.service.ts             ✅ Integração com APIs
├── types/
│   └── artemis.types.ts               ✅ Tipos TypeScript
└── pages/
    └── Assistente.tsx                 ✅ Página institucional
```

---

## 🎯 Funcionalidades Implementadas

### ✅ Chat Funcional
- Interface moderna e responsiva
- Envio de mensagens em tempo real
- Histórico de conversas
- Auto-scroll para novas mensagens
- Timestamps em cada mensagem

### ✅ Respostas Inteligentes
Sistema de respostas contextualizadas para:
- 🏢 Teletrabalho
- 💰 Benefícios
- 🏥 Licenças
- 📄 Vida Funcional
- 📋 Documentos e Certidões
- 👋 Saudações

### ✅ Ações Contextuais
Botões dinâmicos que aparecem baseados na resposta:
```typescript
// Exemplo: Ao perguntar sobre teletrabalho
[Botão: Solicitar Teletrabalho] → Navega para /teletrabalho
[Botão: Ver Normativas] → Vai para seção de normativas
```

### ✅ Perguntas Rápidas
Quick questions para facilitar interação:
- "Como solicitar teletrabalho?"
- "Quais são meus benefícios?"
- "Como consultar meu histórico funcional?"
- "Quais documentos preciso para licença?"

### ✅ Estados Visuais
- Loading (IA pensando)
- Mensagens do usuário (azul TJMA)
- Mensagens da Artemis (roxo/gradiente)
- Erro tratado
- Vazio (boas-vindas)

### ✅ Controles
- Fechar chat
- Fullscreen/Minimizar
- Mostrar/Ocultar vídeo (preparado)
- Mutar/Desmutar (preparado)

---

## 🔌 Integração com APIs (Preparado)

### OpenAI API

**Status:** Código preparado, aguardando API key

**Localização:** `src/app/hooks/useArtemis.ts` (linha ~70)

**Para Ativar:**

1. Obtenha API key: https://platform.openai.com/api-keys

2. Adicione ao `.env`:
```env
VITE_OPENAI_API_KEY=sk-proj-...
```

3. Descomente o código em `useArtemis.ts`:
```typescript
// Remova o comentário das linhas 70-85
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${config?.apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [...]
  })
});
```

4. Use o hook com config:
```typescript
const { sendMessage } = useArtemis({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: 'gpt-4'
});
```

### HeyGen Video API

**Status:** Estrutura preparada, aguardando API key

**Localização:** `src/app/services/artemis.service.ts` (linha ~86)

**Para Ativar:**

1. Crie conta: https://heygen.com

2. Crie/selecione avatar institucional

3. Adicione ao `.env`:
```env
VITE_HEYGEN_API_KEY=...
VITE_HEYGEN_AVATAR_ID=...
```

4. Descomente código e configure:
```typescript
const service = getArtemisService({
  videoEnabled: true,
  videoApiKey: import.meta.env.VITE_HEYGEN_API_KEY,
  avatarId: import.meta.env.VITE_HEYGEN_AVATAR_ID
});
```

### WhatsApp Integration

**Status:** Botão preparado, aguardando webhook

**Para Integrar:**

1. Configure WhatsApp Business API

2. Crie webhook endpoint

3. Adicione ao `.env`:
```env
VITE_WHATSAPP_WEBHOOK=https://...
```

4. Implemente handler:
```typescript
// Backend
app.post('/webhook/whatsapp', async (req, res) => {
  const { from, body } = req.body;
  const response = await artemisService.processMessage(body);
  await whatsappAPI.sendMessage(from, response.content);
});
```

---

## 💻 Código de Exemplo

### Uso Básico

```typescript
import { useArtemis } from './hooks/useArtemis';

function MyComponent() {
  const { messages, isLoading, sendMessage } = useArtemis();
  
  const handleSend = async () => {
    await sendMessage('Como solicitar teletrabalho?');
  };
  
  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>{msg.content}</div>
      ))}
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
}
```

### Com Configuração

```typescript
const { messages, sendMessage } = useArtemis({
  apiKey: 'sk-...',
  model: 'gpt-4',
  videoEnabled: true,
  temperature: 0.7,
  maxTokens: 500
});
```

### Usando o Serviço Diretamente

```typescript
import { getArtemisService } from './services/artemis.service';

const service = getArtemisService({
  apiKey: 'sk-...'
});

const response = await service.processMessage(
  'Como solicitar teletrabalho?',
  { userRole: 'servidor', cargo: 'Analista' }
);

console.log(response.content);
```

---

## 🎨 Customização

### Alterar Cores

```typescript
// src/app/components/artemis/FloatingAssistantButton.tsx
// Linha 28-30
className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700"
// Altere para suas cores
```

### Adicionar Novas Respostas

```typescript
// src/app/hooks/useArtemis.ts
// Função generateMockResponse (linha ~140)

if (lowerMessage.includes('sua-palavra-chave')) {
  return `Sua resposta personalizada aqui`;
}
```

### Modificar Quick Questions

```typescript
// src/app/components/artemis/ArtemisChat.tsx
// Linha ~25
const quickQuestions = [
  'Sua pergunta 1',
  'Sua pergunta 2',
  // ...
];
```

---

## 📱 Responsividade

### Tamanhos

```typescript
// Mobile
width: 380px
height: 600px
bottom: 20 (acima do bottom nav)

// Desktop
width: 420px
height: 680px
bottom: 6

// Fullscreen
inset: 4
```

### Breakpoints

- `< 768px` - Mobile
- `≥ 768px` - Tablet
- `≥ 1024px` - Desktop

---

## 🔒 Segurança

### O Que É Coletado

✅ Texto das mensagens  
✅ Timestamp das interações  
✅ ID anônimo da sessão  

### O Que NÃO É Coletado

❌ Dados pessoais (CPF, nome completo)  
❌ Informações de saúde  
❌ Dados bancários  
❌ Endereço residencial  

### LGPD Compliance

✅ Dados anonimizados  
✅ Direito ao esquecimento (`clearMessages()`)  
✅ Transparência no uso de IA  
✅ Sem compartilhamento com terceiros  

---

## 🐛 Troubleshooting

### Chat não abre

```bash
# Verifique console do navegador
# Certifique-se que FloatingAssistantButton está no Root.tsx
```

### Mensagens não enviam

```bash
# Verifique se useArtemis está sendo chamado
# Verifique função sendMessage no console
```

### Botão sobrepõe conteúdo

```typescript
// Ajuste z-index em FloatingAssistantButton.tsx
className="... z-40"  // Altere o valor
```

---

## 📊 Métricas (Futuro)

```typescript
// Coletar métricas de uso
interface Metrics {
  totalInteractions: number;
  avgResponseTime: number;
  satisfactionRate: number;
  topQuestions: string[];
}
```

---

## 🚀 Roadmap

### Fase 1: MVP ✅ CONCLUÍDA
- [x] Interface completa
- [x] Sistema de mensagens
- [x] Respostas contextualizadas
- [x] Ações dinâmicas
- [x] Design responsivo

### Fase 2: IA Real
- [ ] Integração OpenAI
- [ ] Fine-tuning TJMA
- [ ] RAG com base de conhecimento

### Fase 3: Vídeo
- [ ] Integração HeyGen
- [ ] Avatar institucional
- [ ] Cache de vídeos

### Fase 4: Multicanal
- [ ] WhatsApp Business
- [ ] Telegram Bot
- [ ] Widget site institucional

---

## 📞 Suporte

- **Documentação Completa:** `/ARTEMIS_DOCUMENTATION.md`
- **Tipos TypeScript:** `/src/app/types/artemis.types.ts`
- **Email:** drh.sistemas@tjma.jus.br

---

## ✨ Recursos Adicionais

### Documentação Oficial
- [OpenAI API](https://platform.openai.com/docs)
- [HeyGen API](https://docs.heygen.com)
- [WhatsApp Business](https://developers.facebook.com/docs/whatsapp)

### Exemplos de Uso
- Teletrabalho: "Como solicitar teletrabalho?"
- Benefícios: "Quais são meus benefícios?"
- Licenças: "Como solicitar licença médica?"
- Certidões: "Preciso de certidão de tempo de serviço"

---

**Desenvolvido com ❤️ para o TJMA | DRH Flow © 2026**

🤖 **Artemis está pronta para ajudar!**
