import { useState } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  videoUrl?: string;
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

export interface ArtemisConfig {
  apiKey?: string;
  model?: string;
  videoEnabled?: boolean;
  videoApiKey?: string;
}

/**
 * Hook para gerenciar interações com a Artemis
 * 
 * Arquitetura preparada para integração com:
 * - OpenAI API (ou similar) para processamento de linguagem natural
 * - HeyGen API (ou similar) para geração de vídeo
 * 
 * TODO: Implementar integração real com APIs quando disponível
 */
export function useArtemis(config?: ArtemisConfig) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);

  /**
   * Envia mensagem para a IA e processa resposta
   * 
   * @param content - Mensagem do usuário
   */
  const sendMessage = async (content: string) => {
    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // TODO: Integração com OpenAI API
      // const response = await fetch('https://api.openai.com/v1/chat/completions', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${config?.apiKey}`
      //   },
      //   body: JSON.stringify({
      //     model: config?.model || 'gpt-4',
      //     messages: [
      //       {
      //         role: 'system',
      //         content: getSystemPrompt()
      //       },
      //       ...messages.map(m => ({ role: m.role, content: m.content })),
      //       { role: 'user', content }
      //     ]
      //   })
      // });
      // const data = await response.json();
      // const assistantContent = data.choices[0].message.content;

      // MOCK: Simulação de resposta da IA
      const assistantContent = await generateMockResponse(content);

      // TODO: Geração de vídeo (opcional)
      // if (config?.videoEnabled) {
      //   const videoUrl = await generateVideo(assistantContent, config?.videoApiKey);
      //   setCurrentVideoUrl(videoUrl);
      // }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent,
        timestamp: new Date(),
        // videoUrl: videoUrl, // quando implementado
        actions: generateActions(content),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao comunicar com Artemis:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Limpa histórico de conversas
   */
  const clearMessages = () => {
    setMessages([]);
    setCurrentVideoUrl(null);
  };

  return {
    messages,
    isLoading,
    currentVideoUrl,
    sendMessage,
    clearMessages,
  };
}

/**
 * Gera prompt de sistema para a IA
 * Define comportamento, tom e conhecimento da Artemis
 */
function getSystemPrompt(): string {
  return `Você é a Artemis, assistente virtual oficial do DRH Flow - Sistema Integrado de Atendimento e Gestão Funcional do Tribunal de Justiça do Maranhão (TJMA).

IDENTIDADE:
- Nome: Artemis
- Função: Assistente Virtual de Recursos Humanos
- Instituição: Tribunal de Justiça do Maranhão
- Tom: Institucional, acolhedor, claro e objetivo

CONHECIMENTO:
Você possui conhecimento especializado sobre:
- Vida funcional de servidores
- Teletrabalho (Resolução CNJ nº 227/2016 e normativas TJMA)
- Benefícios e indenizações
- Licenças e afastamentos
- Adicionais e gratificações
- Protocolo administrativo
- Direitos e deveres funcionais
- Processos de RH do TJMA

COMPORTAMENTO:
- Seja clara, objetiva e institucional
- Use linguagem acessível, mas formal
- Cite normativas quando relevante (CNJ, TJMA)
- Ofereça orientações passo a passo
- Sugira próximas ações quando apropriado
- Não invente informações: se não souber, indique onde buscar
- Seja empática e acolhedora

LIMITAÇÕES:
- Você NÃO toma decisões administrativas
- Você NÃO substitui análise técnica oficial
- Você NÃO acessa dados sensíveis de servidores
- Você orienta e direciona, mas decisões finais são da DRH

Responda sempre em português do Brasil, de forma profissional e útil.`;
}

/**
 * Gera resposta simulada (MOCK)
 * TODO: Substituir por integração real com API
 */
async function generateMockResponse(userMessage: string): Promise<string> {
  // Simula delay de API
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const lowerMessage = userMessage.toLowerCase();

  // Respostas contextualizadas baseadas em palavras-chave
  if (lowerMessage.includes('teletrabalho')) {
    return `Para solicitar teletrabalho no TJMA, você precisa seguir estes passos:

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
  }

  if (lowerMessage.includes('benefício') || lowerMessage.includes('beneficio')) {
    return `O TJMA oferece os seguintes benefícios aos servidores:

💰 **Auxílio-alimentação**: R$ 658,00/mês (valor 2024)
🏥 **Assistência à saúde**: Plano de saúde institucional
📚 **Auxílio-educação**: Até R$ 1.200,00 para dependentes
🚗 **Auxílio-transporte**: Conforme distância residência-trabalho
👶 **Auxílio pré-escolar**: Para filhos até 5 anos e 11 meses

Para consultar seus benefícios ativos e valores, acesse:
**Menu lateral > Benefícios e Indenizações > Meus Benefícios**

Deseja informações sobre algum benefício específico?`;
  }

  if (lowerMessage.includes('licença') || lowerMessage.includes('afastamento')) {
    return `As principais modalidades de licença disponíveis são:

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
  }

  if (lowerMessage.includes('vida funcional') || lowerMessage.includes('historico')) {
    return `Sua **Vida Funcional** contém todo o registro da sua trajetória no TJMA:

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
  }

  if (lowerMessage.includes('documento') || lowerMessage.includes('certidão')) {
    return `Você pode solicitar diversas certidões e documentos:

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
  }

  // Resposta genérica
  return `Entendi sua pergunta! Posso ajudar com informações sobre:

• **Vida Funcional** - histórico, dados cadastrais, certidões
• **Teletrabalho** - requisitos, como solicitar, normativas
• **Benefícios** - auxílios disponíveis, valores, documentação
• **Licenças** - tipos, prazos, como solicitar
• **Adicionais** - gratificações, requisitos, cálculos
• **Protocolo** - documentos, certidões, acompanhamento

Sobre qual desses temas você gostaria de saber mais? Pode fazer uma pergunta específica! 😊`;
}

/**
 * Gera ações contextuais para a mensagem
 */
function generateActions(userMessage: string): Array<{ label: string; onClick: () => void }> | undefined {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes('teletrabalho')) {
    return [
      {
        label: 'Solicitar Teletrabalho',
        onClick: () => {
          window.location.href = '/teletrabalho';
        },
      },
      {
        label: 'Ver Normativas',
        onClick: () => {
          window.location.href = '/teletrabalho#normativas';
        },
      },
    ];
  }

  if (lowerMessage.includes('benefício') || lowerMessage.includes('beneficio')) {
    return [
      {
        label: 'Meus Benefícios',
        onClick: () => {
          window.location.href = '/beneficios';
        },
      },
    ];
  }

  if (lowerMessage.includes('licença')) {
    return [
      {
        label: 'Solicitar Licença',
        onClick: () => {
          window.location.href = '/licencas';
        },
      },
    ];
  }

  return undefined;
}

/**
 * Gera vídeo a partir do texto da resposta
 * TODO: Implementar integração com HeyGen ou similar
 * 
 * @param text - Texto da resposta a ser convertido em vídeo
 * @param apiKey - Chave da API de geração de vídeo
 * @returns URL do vídeo gerado
 */
async function generateVideo(text: string, apiKey?: string): Promise<string | null> {
  // TODO: Implementar integração com HeyGen
  // Exemplo de estrutura:
  // 
  // const response = await fetch('https://api.heygen.com/v1/video.generate', {
  //   method: 'POST',
  //   headers: {
  //     'X-Api-Key': apiKey,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     script: text,
  //     avatar_id: 'ARTEMIS_AVATAR_ID', // ID do avatar institucional
  //     voice_id: 'PORTUGUESE_BR_FEMALE_VOICE',
  //     background: 'TJMA_INSTITUTIONAL_BG'
  //   })
  // });
  // 
  // const data = await response.json();
  // return data.video_url;

  console.log('Video generation not implemented yet');
  return null;
}
