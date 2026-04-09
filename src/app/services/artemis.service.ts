/**
 * Serviço de comunicação com APIs da Artemis
 * DRH Flow - TJMA
 * 
 * Este serviço abstrai a comunicação com APIs externas:
 * - OpenAI (ou similar) para processamento de linguagem
 * - HeyGen (ou similar) para geração de vídeo
 * - WhatsApp Business API para integração multicanal
 */

import type {
  ArtemisConfig,
  Message,
  AIResponse,
  VideoResponse,
  ConversationContext,
  ArtemisError,
  ArtemisErrorCode,
} from '../types/artemis.types';

/**
 * Classe de serviço principal da Artemis
 */
export class ArtemisService {
  private config: ArtemisConfig;
  private baseURL: string;

  constructor(config: ArtemisConfig) {
    this.config = config;
    this.baseURL = import.meta.env.VITE_API_BASE_URL || 'https://api.drhflow.tjma.jus.br';
  }

  /**
   * Processa mensagem do usuário e gera resposta via IA
   * 
   * @param message - Mensagem do usuário
   * @param context - Contexto da conversa
   * @param history - Histórico de mensagens
   * @returns Resposta da IA
   */
  async processMessage(
    message: string,
    context?: ConversationContext,
    history: Message[] = []
  ): Promise<AIResponse> {
    try {
      // TODO: Implementar integração real com OpenAI
      // Código abaixo é preparatório
      
      /*
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify({
          model: this.config.model || 'gpt-4',
          messages: [
            {
              role: 'system',
              content: this.buildSystemPrompt(context)
            },
            ...history.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content: message
            }
          ],
          temperature: this.config.temperature || 0.7,
          max_tokens: this.config.maxTokens || 500
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        content: data.choices[0].message.content,
        model: data.model,
        usage: {
          promptTokens: data.usage.prompt_tokens,
          completionTokens: data.usage.completion_tokens,
          totalTokens: data.usage.total_tokens
        },
        finishReason: data.choices[0].finish_reason
      };
      */

      // MOCK: Retorna resposta simulada por enquanto
      return this.generateMockResponse(message);

    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Gera vídeo com avatar a partir do texto
   * 
   * @param text - Texto da resposta
   * @returns URL e metadados do vídeo
   */
  async generateVideo(text: string): Promise<VideoResponse> {
    if (!this.config.videoEnabled) {
      throw new Error('Geração de vídeo não está habilitada');
    }

    try {
      // TODO: Implementar integração com HeyGen
      /*
      const response = await fetch('https://api.heygen.com/v1/video.generate', {
        method: 'POST',
        headers: {
          'X-Api-Key': this.config.videoApiKey!,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          script: text,
          avatar_id: this.config.avatarId || 'ARTEMIS_DEFAULT',
          voice_id: this.config.voiceId || 'pt-BR-FranciscaNeural',
          background: 'tjma_institutional',
          resolution: '1080p',
          format: 'mp4'
        })
      });

      if (!response.ok) {
        throw new Error(`Video API Error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        videoUrl: data.video_url,
        videoId: data.video_id,
        duration: data.duration,
        status: 'completed',
        thumbnailUrl: data.thumbnail_url
      };
      */

      // MOCK: Simula geração de vídeo
      return {
        videoUrl: 'https://example.com/artemis-video.mp4',
        videoId: `video_${Date.now()}`,
        duration: 45,
        status: 'completed',
        thumbnailUrl: 'https://example.com/thumbnail.jpg'
      };

    } catch (error) {
      console.error('Erro ao gerar vídeo:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Envia mensagem via WhatsApp
   * 
   * @param phoneNumber - Número do WhatsApp (formato: 5598912345678)
   * @param message - Mensagem a ser enviada
   * @returns Status do envio
   */
  async sendWhatsAppMessage(phoneNumber: string, message: string): Promise<{ success: boolean; messageId: string }> {
    try {
      // TODO: Implementar integração com WhatsApp Business API
      /*
      const response = await fetch(`${this.config.whatsappWebhook}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: phoneNumber,
          type: 'text',
          text: {
            body: message
          }
        })
      });

      if (!response.ok) {
        throw new Error(`WhatsApp API Error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        success: true,
        messageId: data.messages[0].id
      };
      */

      // MOCK: Simula envio
      console.log(`[MOCK] Enviando WhatsApp para ${phoneNumber}: ${message}`);
      return {
        success: true,
        messageId: `wamid_${Date.now()}`
      };

    } catch (error) {
      console.error('Erro ao enviar WhatsApp:', error);
      throw this.handleError(error);
    }
  }

  /**
   * Constrói o prompt de sistema com contexto
   */
  private buildSystemPrompt(context?: ConversationContext): string {
    let prompt = `Você é a Artemis, assistente virtual oficial do DRH Flow - Sistema Integrado de Atendimento e Gestão Funcional do Tribunal de Justiça do Maranhão (TJMA).

IDENTIDADE:
- Nome: Artemis
- Função: Assistente Virtual de Recursos Humanos
- Instituição: Tribunal de Justiça do Maranhão
- Tom: Institucional, acolhedor, claro e objetivo

CONHECIMENTO ESPECIALIZADO:
- Vida funcional de servidores (consultas, certidões, progressão)
- Teletrabalho (Resolução CNJ nº 227/2016 e normativas TJMA)
- Benefícios e indenizações (auxílios, valores, documentação)
- Licenças e afastamentos (tipos, prazos, requisitos)
- Adicionais e gratificações (cálculos, elegibilidade)
- Protocolo administrativo (documentos, certidões)
- Direitos e deveres funcionais
- Processos de RH do TJMA
- LGPD e privacidade de dados

COMPORTAMENTO:
- Seja clara, objetiva e institucional
- Use linguagem acessível, mas mantenha formalidade adequada
- Cite normativas quando relevante (CNJ, TJMA, legislação)
- Ofereça orientações passo a passo quando apropriado
- Sugira próximas ações e navegação no sistema
- Não invente informações: se não souber, indique onde buscar
- Seja empática e acolhedora, especialmente em situações sensíveis

LIMITAÇÕES IMPORTANTES:
- Você NÃO toma decisões administrativas
- Você NÃO substitui análise técnica oficial da DRH
- Você NÃO acessa dados pessoais ou sensíveis de servidores
- Você NÃO aprova ou reprova solicitações
- Você orienta e direciona, mas decisões finais são da autoridade competente

FORMATO DE RESPOSTA:
- Use emojis moderadamente para melhor visualização (📋 🏥 💰 etc)
- Estruture respostas com bullets ou números quando houver lista
- Destaque termos importantes com **negrito**
- Cite base normativa quando relevante: ⚖️ **Base normativa**: [normativa]
- Sugira botões de ação quando apropriado

Responda sempre em português do Brasil, de forma profissional, útil e acolhedora.`;

    // Adiciona contexto do usuário se disponível
    if (context) {
      prompt += `\n\nCONTEXTO DO USUÁRIO:`;
      
      if (context.userRole) {
        prompt += `\n- Perfil: ${context.userRole}`;
      }
      
      if (context.cargo) {
        prompt += `\n- Cargo: ${context.cargo}`;
      }
      
      if (context.lotacao) {
        prompt += `\n- Lotação: ${context.lotacao}`;
      }
      
      if (context.recentModules && context.recentModules.length > 0) {
        prompt += `\n- Módulos acessados recentemente: ${context.recentModules.join(', ')}`;
      }
    }

    return prompt;
  }

  /**
   * Gera resposta mockada contextualizada
   * TODO: Remover quando integração real estiver ativa
   */
  private async generateMockResponse(message: string): Promise<AIResponse> {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 1500));

    const lowerMessage = message.toLowerCase();
    let content = '';

    // Respostas contextualizadas baseadas em palavras-chave
    if (lowerMessage.includes('teletrabalho')) {
      content = `Para solicitar teletrabalho no TJMA, você precisa seguir estes passos:

1️⃣ **Verificar elegibilidade**: Estar no exercício efetivo de suas funções há pelo menos 3 meses

2️⃣ **Acessar o módulo**: Menu lateral > Teletrabalho

3️⃣ **Preencher formulário**: Complete todos os campos obrigatórios, incluindo:
   • Justificativa detalhada
   • Regime desejado (integral ou parcial)
   • Estrutura de trabalho remoto

4️⃣ **Anexar documentos**:
   • Declaração de infraestrutura adequada
   • Plano de trabalho
   • Concordância da chefia imediata

5️⃣ **Acompanhar solicitação**: Utilize o módulo "Acompanhamento Processual"

⚖️ **Base normativa**: Resolução CNJ nº 227/2016 e Portaria TJMA nº 123/2024

Posso ajudar com mais algum detalhe sobre teletrabalho?`;

    } else if (lowerMessage.includes('benefício') || lowerMessage.includes('beneficio')) {
      content = `O TJMA oferece os seguintes benefícios aos servidores:

💰 **Auxílio-alimentação**: R$ 658,00/mês (valor 2024)
🏥 **Assistência à saúde**: Plano de saúde institucional
📚 **Auxílio-educação**: Até R$ 1.200,00 para dependentes
🚗 **Auxílio-transporte**: Conforme distância residência-trabalho
👶 **Auxílio pré-escolar**: Para filhos até 5 anos e 11 meses

Para consultar seus benefícios ativos e valores, acesse:
**Menu lateral > Benefícios e Indenizações > Meus Benefícios**

Deseja informações sobre algum benefício específico?`;

    } else if (lowerMessage.includes('licença') || lowerMessage.includes('afastamento')) {
      content = `As principais modalidades de licença disponíveis são:

🏥 **Licença para tratamento de saúde**
- Apresentar atestado médico oficial
- Até 15 dias: chefia imediata
- Acima de 15 dias: perícia médica

👨‍👩‍👧 **Licença maternidade/paternidade**
- Maternidade: 180 dias (servidoras TJMA)
- Paternidade: 20 dias
- Documentação: certidão de nascimento

📚 **Licença capacitação**
- Após cada quinquênio de efetivo exercício
- Até 3 meses com remuneração
- Plano de capacitação aprovado

⚠️ **Licença sem vencimentos**
- Interesse particular
- Até 3 anos
- Preserva vínculo funcional

Para solicitar, acesse: **Menu > Licenças e Afastamentos**

Qual tipo de licença você precisa solicitar?`;

    } else if (lowerMessage.includes('vida funcional') || lowerMessage.includes('historico')) {
      content = `Sua **Vida Funcional** contém todo o registro da sua trajetória no TJMA:

📄 **O que você encontra:**
- Dados cadastrais completos
- Histórico de lotações e movimentações
- Progressões e promoções
- Elogios e penalidades
- Cursos e capacitações
- Certidões e declarações

🔍 **Como acessar:**
Menu lateral > Minha Vida Funcional

📥 **Você pode:**
- Consultar todos os dados
- Solicitar certidões (tempo de serviço, nada consta)
- Atualizar dados cadastrais
- Exportar documentos em PDF

Todos os dados estão protegidos conforme LGPD (Lei 13.709/2018).

Precisa de alguma certidão específica?`;

    } else if (lowerMessage.includes('documento') || lowerMessage.includes('certidão')) {
      content = `Você pode solicitar diversas certidões e documentos:

📋 **Certidões disponíveis:**
- Tempo de serviço
- Nada consta
- Efetivo exercício
- Frequência
- Remuneração

✅ **Como solicitar:**
1. Menu > Protocolo Administrativo
2. Selecionar tipo de documento
3. Preencher dados necessários
4. Acompanhar via sistema

⏱️ **Prazo de emissão:** até 5 dias úteis

💾 **Formato:** PDF assinado digitalmente

Qual certidão você precisa?`;

    } else if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('bom dia') || lowerMessage.includes('boa tarde') || lowerMessage.includes('boa noite')) {
      content = `Olá! 👋 Sou a Artemis, sua assistente virtual do DRH Flow.

Estou aqui para ajudar você com informações sobre:

• **Vida Funcional** - histórico, dados cadastrais, certidões
• **Teletrabalho** - requisitos, como solicitar, normativas
• **Benefícios** - auxílios disponíveis, valores, documentação
• **Licenças** - tipos, prazos, como solicitar
• **Adicionais** - gratificações, requisitos, cálculos
• **Protocolo** - documentos, certidões, acompanhamento

Como posso ajudar você hoje? 😊`;

    } else {
      // Resposta genérica
      content = `Entendi sua pergunta! Posso ajudar com informações sobre:

• **Vida Funcional** - histórico, dados cadastrais, certidões
• **Teletrabalho** - requisitos, como solicitar, normativas
• **Benefícios** - auxílios disponíveis, valores, documentação
• **Licenças** - tipos, prazos, como solicitar
• **Adicionais** - gratificações, requisitos, cálculos
• **Protocolo** - documentos, certidões, acompanhamento

Sobre qual desses temas você gostaria de saber mais? Pode fazer uma pergunta específica! 😊`;
    }

    return {
      content,
      model: 'mock-gpt-4',
      usage: {
        promptTokens: Math.floor(message.length / 4),
        completionTokens: Math.floor(content.length / 4),
        totalTokens: Math.floor((message.length + content.length) / 4)
      },
      finishReason: 'stop'
    };
  }

  /**
   * Trata erros e retorna erro customizado
   */
  private handleError(error: any): never {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('Erro desconhecido ao processar solicitação');
  }
}

/**
 * Instância singleton do serviço
 */
let artemisServiceInstance: ArtemisService | null = null;

/**
 * Obtém instância do serviço Artemis
 */
export function getArtemisService(config?: ArtemisConfig): ArtemisService {
  if (!artemisServiceInstance) {
    artemisServiceInstance = new ArtemisService(config || {});
  }
  return artemisServiceInstance;
}

/**
 * Reseta instância do serviço (útil para testes)
 */
export function resetArtemisService(): void {
  artemisServiceInstance = null;
}
