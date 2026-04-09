Crie um sistema institucional completo, já codado e funcional, em formato web app responsivo e também preparado para visualização mobile, para o Tribunal de Justiça do Estado do Maranhão, com o nome:

DRH FLOW
Sistema Integrado de Atendimento e Gestão Funcional
Diretoria de Recursos Humanos – TJMA

OBJETIVO CENTRAL:
Construir um sistema institucional completo, navegável, com frontend e lógica funcional prontos, para apresentação e aprovação interna no Tribunal, ficando pendente apenas a futura interligação via APIs pelos setores de Informática e Tecnologia da Informação do TJMA.

IMPORTANTE:
O resultado deve ser um produto com aparência e estrutura de sistema real, não apenas mockup visual.
Quero telas codadas, fluxos funcionais, validações, estados, navegação entre módulos, formulários completos, mensagens de erro, dashboards, timeline de processos e arquitetura preparada para futura integração com APIs institucionais.
Todas as integrações externas devem ficar simuladas com dados mockados, mas com estrutura claramente pronta para substituição posterior por APIs reais do Tribunal.

NATUREZA JURÍDICA OBRIGATÓRIA:
Este sistema é exclusivamente de apoio, orientação, pré-validação documental e organização processual.
O sistema não pode decidir, deferir, indeferir, conceder direito, substituir parecer técnico, substituir análise administrativa, substituir manifestação jurídica nem substituir decisão da autoridade competente.

INSERIR AVISO INSTITUCIONAL FIXO NAS ÁREAS SENSÍVEIS:
“Este sistema atua exclusivamente como ferramenta de apoio e orientação, não substituindo a análise técnica nem a decisão administrativa das unidades competentes.”

BASE NORMATIVA OBRIGATÓRIA A SER RESPEITADA:
- Constituição Federal, art. 37, princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência
- Resolução CNJ nº 370/2021
- Resolução CNJ nº 335/2020
- Resolução CNJ nº 401/2021
- LGPD, Lei nº 13.709/2018
- Normas internas do TJMA
- Resolução GP nº 41/2018, frequência e jornada
- Regras internas de carreira, licenças, benefícios, adicionais, banco de horas, teletrabalho e protocolo administrativo

DIRETRIZ DE CONSTRUÇÃO:
O sistema deve parecer um produto institucional já pronto para homologação interna, análise da Presidência, validação da DRH e posterior integração técnica pelo setor de TI.
Não criar algo conceitual.
Criar produto realista, completo, sofisticado, claro, institucional, premium e pronto para demonstração.

PADRÃO VISUAL TJMA PREMIUM:
- Estética institucional elegante
- Fundo claro, branco ou marfim muito suave
- Azul institucional profundo
- Dourado sutil para destaques estratégicos
- Tipografia sóbria, limpa e altamente legível
- Aparência moderna de sistema governamental premium
- Alto contraste
- Acessibilidade visual
- Layout extremamente organizado
- Nada com aparência genérica, infantil ou startup informal

EXPERIÊNCIA DO USUÁRIO:
O usuário deve sentir:
- segurança jurídica
- clareza operacional
- autoridade institucional
- facilidade de uso
- lógica administrativa
- padronização
- confiança

EVITAR:
- visual simplista
- excesso de cor
- excesso de texto na mesma tela
- aparência de protótipo escolar
- linguagem informal
- interface poluída
- qualquer função que pareça decisão automática do sistema

ARQUITETURA FUNCIONAL DO PRODUTO:
Criar o sistema inteiro com:
- login
- dashboard
- módulos independentes
- menu lateral institucional
- breadcrumbs
- notificações
- sistema de alertas
- filtros
- linha do tempo processual
- formulários inteligentes
- checklists automáticos
- estados de validação
- status processuais
- central de ajuda
- assistente virtual
- módulo LGPD
- perfil do servidor
- tela administrativa institucional de gestão de conteúdo normativo

CRIAR AS TELAS E FUNCIONALIDADES ABAIXO:

1. TELA DE LOGIN
Elementos:
- brasão ou referência institucional do TJMA em estilo sóbrio
- campo matrícula
- campo senha
- botão entrar
- link “esqueci minha senha”
- aviso de uso institucional
- aviso LGPD
- layout premium institucional

Estados:
- login normal
- erro de credenciais
- primeiro acesso
- redefinição de senha

2. DASHBOARD PRINCIPAL DO SERVIDOR
Elementos:
- saudação personalizada
- resumo funcional
- alertas de prazo
- indicadores rápidos
- atalhos dos módulos
- notificações recentes
- status dos protocolos em andamento

Cards principais:
- Minha Vida Funcional
- Frequência e Banco de Horas
- Licenças e Afastamentos
- Benefícios e Indenizações
- Adicionais e Gratificações
- Teletrabalho
- Protocolo Administrativo
- Assistente Virtual
- Meus Documentos
- Privacidade e LGPD

Indicadores:
- saldo de banco de horas
- próxima progressão
- estágio probatório
- pendências documentais
- processos em análise
- alertas de prazo crítico

3. MÓDULO MINHA VIDA FUNCIONAL
Funcionalidades:
- exibir data de posse
- cargo
- lotação
- padrão atual
- situação funcional
- data prevista para progressão
- acompanhamento de estágio probatório
- trilha de capacitações exigidas
- status de requisitos para promoção

Criar visual de linha evolutiva funcional.

4. MÓDULO DE FREQUÊNCIA E JORNADA
Baseado em regras institucionais e Resolução GP nº 41/2018.

Funcionalidades:
- dashboard de banco de horas
- saldo positivo e negativo
- alertas de expiração de créditos
- registro de pendências
- solicitação de ajuste
- visualização de justificativas
- fluxo de solicitação de abono
- upload de documentos comprobatórios
- campo obrigatório para manifestação da chefia quando cabível
- alerta quando a justificativa não atende à hipótese normativa aceita

Estados:
- solicitação apta
- documentação incompleta
- prazo vencido
- aguardando análise

5. MÓDULO DE LICENÇAS E AFASTAMENTOS
Criar fluxo guiado por tipo de licença.

Tipos:
- licença para tratamento de saúde
- licença paternidade
- licença prêmio
- outras licenças institucionais

Funcionalidades:
- seleção do tipo de licença
- explicação normativa clara
- checklist automático de documentos
- validação de prazo
- validação de campos obrigatórios
- geração de dossiê
- botão final para encaminhamento ao protocolo

Mensagens obrigatórias:
- “Documentação incompleta para prosseguimento.”
- “Prazo normativo não atendido.”
- “Solicitação apta para protocolo administrativo.”
- “A análise final caberá à unidade competente.”

6. MÓDULO DE BENEFÍCIOS E INDENIZAÇÕES
Itens:
- auxílio natalidade
- auxílio funeral
- auxílio saúde
- outros benefícios parametrizáveis

Funcionalidades:
- lista de requisitos
- checklist de documentos
- alertas de renovação
- status da elegibilidade orientativa
- aviso de necessidade de análise técnica posterior
- upload de comprovantes
- histórico de solicitações

7. MÓDULO DE ADICIONAIS E GRATIFICAÇÕES
Itens:
- adicional de qualificação
- gratificações dependentes de requisitos
- consulta orientativa de elegibilidade

Funcionalidades:
- simulador de AQ
- upload obrigatório de diploma e histórico
- bloqueio se a documentação estiver incompleta
- explicação dos percentuais
- mensagem expressa de que a simulação é apenas orientativa
- histórico de requerimentos

Mensagem obrigatória:
“Resultado meramente indicativo, sujeito à conferência administrativa.”

8. MÓDULO DE TELETRABALHO
Funcionalidades:
- consulta orientativa de elegibilidade
- checagem de vedações objetivas
- estágio probatório
- exercício de chefia
- penalidade recente
- metas de produtividade configuráveis
- explicação do regime e das restrições
- resultado visual:
  - Elegível
  - Não elegível
  - Elegibilidade condicionada à análise administrativa

Mensagem obrigatória:
“A elegibilidade definitiva depende de análise formal da Administração.”

9. MÓDULO DE PROTOCOLO ADMINISTRATIVO
Funcionalidades:
- consolidar a documentação produzida nos módulos
- montar dossiê
- exibir checklist final
- exibir status “pronto para protocolar”
- botão de redirecionamento futuro para Digidoc
- por enquanto usar integração simulada
- timeline processual mockada com status institucionais

Status:
- rascunho
- documentação pendente
- pronto para protocolo
- protocolado
- em análise técnica
- aguardando assinatura
- concluído

10. MÓDULO DE ASSISTENTE VIRTUAL
Função:
- responder dúvidas com base em base normativa institucional simulada
- sugerir fluxos corretos
- indicar documentos normalmente exigidos
- apontar módulo correto
- nunca dar resposta como decisão final

Mensagens obrigatórias:
- “Resposta baseada em orientação normativa.”
- “Sujeito à validação administrativa.”
- “Para efeitos formais, prevalece a análise da unidade competente.”

Interface:
- chat sofisticado
- respostas em cards
- sugestões rápidas
- botão de iniciar fluxo correspondente

11. MÓDULO DE ACOMPANHAMENTO PROCESSUAL
Funcionalidades:
- timeline visual institucional
- filtro por tipo de solicitação
- filtro por status
- histórico detalhado
- visual premium semelhante a sistemas de tramitação interna

12. MÓDULO LGPD E PRIVACIDADE
Funcionalidades:
- política de privacidade
- termo de uso
- finalidade do tratamento
- base legal
- retenção de dados
- segurança da informação
- histórico de consentimentos, se aplicável
- explicação de que o acesso é restrito ao perfil autorizado

13. PERFIL DO SERVIDOR
Funcionalidades:
- dados cadastrais básicos
- lotação
- cargo
- preferências de acessibilidade
- notificações
- documentos recentes
- atalhos personalizados

14. PAINEL ADMINISTRATIVO INSTITUCIONAL
Criar também uma área administrativa restrita para gestão interna do conteúdo do sistema.

Perfis:
- administrador DRH
- gestor de conteúdo normativo
- visualizador técnico
- administrador de integração, apenas conceitual

Funcionalidades:
- cadastrar e atualizar orientações
- ativar ou desativar checklists
- editar textos normativos explicativos
- parametrizar prazos
- parametrizar documentos exigidos
- acompanhar métricas
- visualizar dúvidas mais frequentes
- visualizar gargalos processuais
- registrar histórico de alterações
- controlar versões de conteúdo

IMPORTANTE:
Não criar poderes de decisão.
A área administrativa apenas gerencia conteúdo, parâmetros orientativos e regras de pré-validação.

COMPORTAMENTO TÉCNICO EXIGIDO:
Quero o projeto com aparência de sistema realmente codado.
Criar:
- componentes reutilizáveis
- design system institucional
- botões
- campos
- tabelas
- badges de status
- alerts
- modais
- dropdowns
- stepper de fluxos
- timeline
- cards
- sidebar
- header
- rodapé institucional
- empty states
- loading states
- validation states
- success states
- error states

EXIGÊNCIA DE IMPLEMENTAÇÃO:
Montar o sistema com dados mockados consistentes e arquitetura visual pronta para futura integração via APIs.
Deixar explícito que:
- autenticação poderá ser ligada posteriormente ao sistema institucional
- protocolos poderão ser integrados ao Digidoc
- dados funcionais poderão ser integrados ao Mentorh ou sistemas correlatos
- saldos e jornadas poderão ser integrados aos sistemas oficiais do Tribunal
- tudo deve estar visualmente preparado para isso

CRIAR DEMONSTRAÇÃO FUNCIONAL DOS PRINCIPAIS FLUXOS:
- solicitar licença
- consultar banco de horas
- simular AQ
- verificar teletrabalho
- montar protocolo
- perguntar ao assistente virtual
- acompanhar status processual

QUALIDADE DE ENTREGA:
O resultado deve ser de nível apresentação à Presidência do Tribunal.
Deve parecer um produto institucional oficial, sofisticado, confiável, juridicamente cuidadoso e tecnicamente maduro.
Não criar apenas wireframe.
Criar interface final, polida, premium, completa, com lógica funcional e estrutura de sistema real.

NOME FINAL DO PROJETO:
DRH FLOW – TJMA
Sistema Integrado de Atendimento e Gestão Funcional

ENTREGA ESPERADA:
- sistema completo
- telas conectadas
- fluxos navegáveis
- comportamento consistente
- estrutura preparada para APIs futuras
- pronto para demonstração institucional
- pronto para aprovação interna