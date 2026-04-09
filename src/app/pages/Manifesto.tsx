import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  FileText, 
  Target, 
  Workflow, 
  Shield, 
  TrendingUp, 
  Users, 
  Zap,
  CheckCircle,
  Award,
  BarChart3,
  Clock,
  Globe,
  BookOpen,
  Lightbulb,
  Scale,
  Sparkles,
  AlertCircle,
  MessageCircle
} from 'lucide-react';

export function Manifesto() {
  const objetivosEstrategicos = [
    {
      icon: Zap,
      title: 'Eficiência Operacional',
      description: 'Reduzir tempo de resposta em até 70% através da automação de processos administrativos repetitivos'
    },
    {
      icon: Users,
      title: 'Experiência do Usuário',
      description: 'Centralizar 100% dos serviços de RH em plataforma única, acessível 24/7 em múltiplos dispositivos'
    },
    {
      icon: Shield,
      title: 'Conformidade Normativa',
      description: 'Garantir alinhamento automático com resoluções do CNJ e normativas internas do TJMA'
    },
    {
      icon: BarChart3,
      title: 'Transparência e Rastreabilidade',
      description: 'Prover visibilidade total do ciclo de vida de solicitações e processos funcionais'
    },
    {
      icon: TrendingUp,
      title: 'Gestão Baseada em Dados',
      description: 'Habilitar análises estratégicas através de indicadores de desempenho e métricas em tempo real'
    },
    {
      icon: Globe,
      title: 'Modernização Digital',
      description: 'Posicionar o TJMA como referência em transformação digital no Poder Judiciário brasileiro'
    }
  ];

  const pilaresFuncionais = [
    {
      icon: Workflow,
      title: 'Automação Inteligente',
      items: [
        'Processamento automatizado de elegibilidade (teletrabalho, benefícios, adicionais)',
        'Validação de requisitos normativos em tempo real',
        'Geração automática de documentos e notificações',
        'Fluxos de aprovação configuráveis e auditáveis'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Atendimento Multicanal',
      items: [
        'Assistente virtual com IA (Artemis) disponível 24/7',
        'Integração nativa com WhatsApp institucional',
        'Interface web responsiva para desktop, tablet e smartphone',
        'Aplicativo nativo iOS e Android (roadmap)'
      ]
    },
    {
      icon: Shield,
      title: 'Segurança e Conformidade',
      items: [
        'Proteção de dados conforme LGPD (Lei 13.709/2018)',
        'Autenticação segura com múltiplos fatores',
        'Auditoria completa de todas as operações',
        'Gestão granular de permissões e perfis de acesso'
      ]
    },
    {
      icon: BarChart3,
      title: 'Inteligência de Gestão',
      items: [
        'Dashboard executivo com indicadores-chave (KPIs)',
        'Relatórios personalizáveis e exportáveis',
        'Análise preditiva de demandas e tendências',
        'Mapeamento de gargalos e oportunidades de otimização'
      ]
    }
  ];

  const justificativasIndispensabilidade = [
    {
      icon: AlertCircle,
      categoria: 'Diagnóstico Crítico',
      problemas: [
        'Fragmentação de serviços de RH em múltiplos sistemas e processos manuais',
        'Tempo médio de resposta elevado para solicitações administrativas',
        'Dificuldade de acompanhamento por parte dos servidores',
        'Informações desatualizadas ou inconsistentes sobre direitos e deveres',
        'Sobrecarga de atendimento presencial e telefônico na DRH',
        'Falta de visibilidade gerencial sobre volume e status de demandas'
      ]
    },
    {
      icon: Target,
      categoria: 'Impactos Operacionais',
      problemas: [
        'Retrabalho administrativo por falta de padronização',
        'Dificuldade de cumprimento de prazos normativos',
        'Recursos humanos alocados em tarefas repetitivas de baixo valor agregado',
        'Limitação de escalabilidade do atendimento',
        'Perda de produtividade por busca de informações dispersas',
        'Risco de não conformidade com resoluções do CNJ'
      ]
    },
    {
      icon: TrendingUp,
      categoria: 'Oportunidades Estratégicas',
      problemas: [
        'Modernização alinhada à Estratégia Nacional do Poder Judiciário',
        'Melhoria do clima organizacional através de atendimento ágil',
        'Redução de custos operacionais com automação',
        'Liberação de recursos humanos para atividades estratégicas',
        'Fortalecimento da imagem institucional do TJMA',
        'Geração de base de dados para gestão estratégica de pessoas'
      ]
    }
  ];

  const beneficiosMensuaveis = [
    {
      categoria: 'Eficiência Operacional',
      metricas: [
        { indicador: 'Redução do tempo médio de atendimento', meta: '70%' },
        { indicador: 'Automação de processos repetitivos', meta: '85%' },
        { indicador: 'Diminuição de retrabalho administrativo', meta: '60%' },
        { indicador: 'Aumento da capacidade de atendimento', meta: '200%' }
      ]
    },
    {
      categoria: 'Experiência do Usuário',
      metricas: [
        { indicador: 'Satisfação dos servidores com serviços de RH', meta: '+45%' },
        { indicador: 'Disponibilidade do sistema (uptime)', meta: '99,5%' },
        { indicador: 'Tempo de resolução de dúvidas frequentes', meta: '-80%' },
        { indicador: 'Acesso via dispositivos móveis', meta: '100%' }
      ]
    },
    {
      categoria: 'Gestão Estratégica',
      metricas: [
        { indicador: 'Visibilidade de indicadores em tempo real', meta: '100%' },
        { indicador: 'Conformidade com normativas CNJ/TJMA', meta: '100%' },
        { indicador: 'Rastreabilidade de processos', meta: '100%' },
        { indicador: 'Redução de custos operacionais', meta: '35%' }
      ]
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      {/* Header Institucional */}
      <div className="bg-gradient-to-r from-[var(--tjma-navy-dark)] to-[var(--tjma-navy)] rounded-2xl p-8 lg:p-12 text-white shadow-2xl border-4 border-[var(--tjma-gold)]">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-[var(--tjma-gold)] rounded-2xl flex items-center justify-center">
              <FileText className="h-12 w-12 text-[var(--tjma-navy-dark)]" />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="warning" className="mb-4 bg-[var(--tjma-gold)] text-[var(--tjma-navy-dark)]">
              Documento Institucional Oficial
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Manifesto Institucional
            </h1>
            <p className="text-xl text-white/90 mb-2">
              DRH Flow: Sistema Integrado de Atendimento e Gestão Funcional
            </p>
            <p className="text-sm text-white/70">
              Tribunal de Justiça do Estado do Maranhão • Diretoria de Recursos Humanos
            </p>
          </div>
        </div>
      </div>

      {/* Sumário Executivo */}
      <Card variant="bordered" className="border-2 border-[var(--tjma-navy)]">
        <CardHeader className="bg-gradient-to-r from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] text-white">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">Sumário Executivo</h2>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
              O <strong>DRH Flow</strong> representa uma iniciativa estratégica de modernizaço e transformação digital 
              da gestão de recursos humanos do Tribunal de Justiça do Estado do Maranhão. Trata-se de um sistema 
              integrado, multiplataforma e inteligente, concebido para centralizar, automatizar e otimizar todos os 
              serviços prestados pela Diretoria de Recursos Humanos aos servidores, estagiários, residentes e aposentados 
              vinculados à instituição.
            </p>
            <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
              Mais do que uma ferramenta tecnológica, o DRH Flow constitui um <strong>instrumento de governança</strong>, 
              alinhado aos princípios constitucionais de eficiência administrativa (CF/88, art. 37), às diretrizes do 
              Conselho Nacional de Justiça para modernização do Poder Judiciário, e às melhores práticas de gestão de 
              pessoas no setor público.
            </p>
            <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
              Este manifesto apresenta, de forma detalhada e analítica, os fundamentos conceituais, operacionais e 
              estratégicos que demonstram a <strong>indispensabilidade</strong> do sistema para o TJMA, evidenciando 
              seus diferenciais competitivos, benefícios mensuráveis e alinhamento com os objetivos institucionais.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* O Que É o DRH Flow */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
              I. Definição Conceitual: O Que É o DRH Flow
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
            O <strong>DRH Flow</strong> é definido como um <em>ecossistema digital integrado</em> que unifica, em 
            uma única plataforma multiplataforma (web, iOS e Android), o conjunto completo de serviços, processos e 
            interações relacionados à gestão funcional dos colaboradores do TJMA.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Características Essenciais:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900">Sistema Integrado</p>
                  <p className="text-sm text-blue-800">Consolidação de múltiplas funcionalidades em ambiente único</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900">Multiplataforma</p>
                  <p className="text-sm text-blue-800">Acesso via web responsiva, aplicativos móveis e WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900">Inteligência Artificial</p>
                  <p className="text-sm text-blue-800">Assistente virtual com processamento de linguagem natural</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900">Automação Normativa</p>
                  <p className="text-sm text-blue-800">Validação automatizada conforme CNJ e TJMA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900">Autoatendimento</p>
                  <p className="text-sm text-blue-800">Autonomia do usuário com suporte inteligente contínuo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900">Gestão em Tempo Real</p>
                  <p className="text-sm text-blue-800">Dashboards e indicadores atualizados instantaneamente</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">Escopo Funcional:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Vida Funcional e Progressão',
                'Frequência e Banco de Horas',
                'Licenças e Afastamentos',
                'Benefícios e Indenizações',
                'Adicionais e Gratificações',
                'Teletrabalho e Jornada Especial',
                'Protocolo Administrativo',
                'Assistente Virtual Inteligente',
                'Acompanhamento Processual',
                'Gestão de Privacidade (LGPD)',
                'Notificações Automatizadas',
                'Painel Administrativo Gerencial'
              ].map((modulo, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-[var(--tjma-gray-50)] rounded-lg border border-[var(--tjma-gray-200)]">
                  <Workflow className="h-4 w-4 text-[var(--tjma-navy)] flex-shrink-0" />
                  <span className="text-sm font-medium text-[var(--tjma-navy-dark)]">{modulo}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Como Funciona */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Workflow className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
              II. Arquitetura Funcional: Como o DRH Flow Funciona
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
            O funcionamento do DRH Flow baseia-se em uma <strong>arquitetura modular, orientada a serviços e 
            centrada no usuário</strong>, que integra camadas de interface, lógica de negócios, automação inteligente 
            e persistência de dados.
          </p>

          <div className="space-y-6">
            {pilaresFuncionais.map((pilar, index) => (
              <div key={index} className="bg-white border-2 border-[var(--tjma-gray-200)] rounded-xl p-6 hover:border-[var(--tjma-navy)] transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <pilar.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--tjma-navy-dark)] mb-2">
                      {pilar.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {pilar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--tjma-gray-700)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Fluxo de Interação do Usuário
            </h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <p className="font-semibold text-purple-900">Acesso Multiplataforma</p>
                  <p className="text-sm text-purple-800">Usuário acessa via web, app móvel ou WhatsApp com autenticação segura</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <p className="font-semibold text-purple-900">Navegação Assistida</p>
                  <p className="text-sm text-purple-800">Assistente virtual Artemis orienta e responde dúvidas em linguagem natural</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <p className="font-semibold text-purple-900">Solicitação ou Consulta</p>
                  <p className="text-sm text-purple-800">Sistema valida elegibilidade, requisitos e documentação automaticamente</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <p className="font-semibold text-purple-900">Processamento Automatizado</p>
                  <p className="text-sm text-purple-800">Fluxo de aprovação é iniciado, com notificações em tempo real</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                <div>
                  <p className="font-semibold text-purple-900">Acompanhamento Transparente</p>
                  <p className="text-sm text-purple-800">Usuário visualiza status, timeline e pode interagir via sistema ou WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</span>
                <div>
                  <p className="font-semibold text-purple-900">Finalização e Histórico</p>
                  <p className="text-sm text-purple-800">Resolução é comunicada e registrada permanentemente no histórico funcional</p>
                </div>
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Para Que Foi Criado */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
              III. Objetivos Estratégicos: Para Que Foi Criado
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
            O DRH Flow foi concebido para atender a <strong>seis objetivos estratégicos fundamentais</strong>, 
            alinhados à missão institucional do TJMA e às diretrizes nacionais de modernização do Poder Judiciário:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objetivosEstrategicos.map((objetivo, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[var(--tjma-cream)] border-2 border-[var(--tjma-gray-200)] rounded-xl p-6 hover:border-[var(--tjma-gold)] hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--tjma-gold)] to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <objetivo.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--tjma-navy-dark)] mb-2">
                      {objetivo.title}
                    </h3>
                    <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                      {objetivo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <Award className="h-5 w-5" />
              Alinhamento Institucional
            </h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              O DRH Flow está alinhado às seguintes diretrizes institucionais e normativas:
            </p>
            <ul className="space-y-2 text-sm text-amber-800">
              <li className="flex items-start gap-2">
                <Scale className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span><strong>Resolução CNJ nº 325/2020</strong> – Estratégia Nacional de Tecnologia da Informação e Comunicação do Poder Judiciário (ENTIC-JUD)</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span><strong>Resolução CNJ nº 395/2021</strong> – Estratégia Nacional do Poder Judiciário 2021-2026</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span><strong>Lei nº 13.709/2018</strong> – Lei Geral de Proteção de Dados Pessoais (LGPD)</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span><strong>Decreto nº 9.203/2017</strong> – Política de Governança da Administração Pública Federal</span>
              </li>
              <li className="flex items-start gap-2">
                <Scale className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span><strong>Planejamento Estratégico TJMA</strong> – Modernização, eficiência e excelência no atendimento</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Por Que É Indispensável */}
      <Card variant="bordered" className="border-2 border-[var(--tjma-error)]">
        <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6" />
            <h2 className="text-2xl font-semibold">
              IV. Justificativa de Indispensabilidade: Por Que o TJMA Necessita do DRH Flow
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
            A <strong>indispensabilidade</strong> do DRH Flow para o TJMA é evidenciada através de análise 
            multidimensional que contempla diagnóstico crítico da situação atual, impactos operacionais da 
            não modernização e oportunidades estratégicas de transformação digital.
          </p>

          {justificativasIndispensabilidade.map((justificativa, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[var(--tjma-gray-200)]">
                <justificativa.icon className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  {justificativa.categoria}
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {justificativa.problemas.map((problema, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-red-900 font-medium">{problema}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Solução Sistêmica Proposta pelo DRH Flow
            </h3>
            <p className="text-green-800 leading-relaxed mb-4">
              O DRH Flow resolve <strong>todas</strong> as lacunas identificadas através de:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Unificação e Centralização</p>
                <p className="text-sm text-green-800">Eliminação da fragmentação com plataforma única integrada</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Automação Inteligente</p>
                <p className="text-sm text-green-800">Redução de processos manuais e retrabalho administrativo</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Transparência Total</p>
                <p className="text-sm text-green-800">Visibilidade completa do ciclo de vida de solicitações</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Escalabilidade Ilimitada</p>
                <p className="text-sm text-green-800">Capacidade de atender demanda crescente sem aumento proporcional de recursos</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Conformidade Garantida</p>
                <p className="text-sm text-green-800">Validação automática de normativas CNJ e TJMA</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Gestão Baseada em Dados</p>
                <p className="text-sm text-green-800">Indicadores em tempo real para tomada de decisão estratégica</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios Mensuráveis */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
              V. Benefícios Mensuráveis e Indicadores de Sucesso
            </h2>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
            A implementação do DRH Flow gerará <strong>impactos quantificáveis</strong> em múltiplas dimensões 
            organizacionais, com metas estabelecidas para mensuração de sucesso:
          </p>

          {beneficiosMensuaveis.map((categoria, index) => (
            <div key={index} className="bg-white border-2 border-[var(--tjma-gray-200)] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[var(--tjma-navy-dark)] mb-4">
                {categoria.categoria}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoria.metricas.map((metrica, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-[var(--tjma-gray-50)] rounded-lg border border-[var(--tjma-gray-200)]">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[var(--tjma-navy-dark)]">{metrica.indicador}</p>
                    </div>
                    <div className="ml-4">
                      <Badge variant="success" className="text-lg font-bold">
                        {metrica.meta}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Retorno Sobre Investimento (ROI) Estimado
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-sm text-white/80 mb-1">Redução de Custos Operacionais</p>
                <p className="text-3xl font-bold">35%</p>
                <p className="text-xs text-white/70 mt-1">Primeiro ano após implementação</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-sm text-white/80 mb-1">Aumento de Produtividade</p>
                <p className="text-3xl font-bold">200%</p>
                <p className="text-xs text-white/70 mt-1">Capacidade de atendimento</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-sm text-white/80 mb-1">Satisfação dos Usuários</p>
                <p className="text-3xl font-bold">+45%</p>
                <p className="text-xs text-white/70 mt-1">Índice de satisfação geral</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusão */}
      <Card variant="bordered" className="bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] text-white border-4 border-[var(--tjma-gold)]">
        <CardContent className="p-8 lg:p-12 space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[var(--tjma-gold)] rounded-2xl flex items-center justify-center">
              <Award className="h-8 w-8 text-[var(--tjma-navy-dark)]" />
            </div>
            <h2 className="text-3xl font-bold text-white">Conclusão Institucional</h2>
          </div>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              O <strong>DRH Flow</strong> representa mais do que uma solução tecnológica: constitui um 
              <strong> imperativo estratégico</strong> para a modernização do Tribunal de Justiça do Maranhão, 
              alinhado aos mais elevados padrões de governança, eficiência e excelência no atendimento ao 
              público interno.
            </p>
            <p>
              Sua <strong>indispensabilidade</strong> é evidenciada pela convergência de múltiplos fatores: 
              <strong> (i)</strong> necessidade de superação de lacunas operacionais críticas identificadas no 
              diagnóstico atual; <strong>(ii)</strong> exigência de conformidade com diretrizes nacionais do CNJ 
              e legislação vigente; <strong>(iii)</strong> oportunidade de posicionamento do TJMA como referência 
              em inovação e transformação digital no Poder Judiciário; e <strong>(iv)</strong> compromisso 
              institucional com a melhoria contínua da experiência dos colaboradores e da eficiência administrativa.
            </p>
            <p>
              A implementação do DRH Flow não é apenas <em>desejável</em>, mas <strong>essencial</strong> para que 
              o TJMA cumpra sua missão constitucional com excelência, modernidade e respeito aos princípios da 
              Administração Pública, especialmente os da eficiência, transparência e celeridade.
            </p>
            <p className="text-[var(--tjma-gold)] font-semibold text-xl pt-4">
              O futuro da gestão de recursos humanos no Poder Judiciário é digital, integrado e centrado no usuário. 
              O DRH Flow materializa essa visão.
            </p>
          </div>

          <div className="pt-6 border-t border-white/20 text-center">
            <p className="text-sm text-white/80">
              Documento elaborado pela Diretoria de Recursos Humanos do TJMA
            </p>
            <p className="text-sm text-white/80 mt-1">
              {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Rodapé Documental */}
      <div className="text-center text-sm text-[var(--tjma-gray-600)] space-y-2 py-8">
        <p className="font-semibold text-[var(--tjma-navy-dark)]">
          DRH Flow – Sistema Integrado de Atendimento e Gestão Funcional
        </p>
        <p>Tribunal de Justiça do Estado do Maranhão</p>
        <p className="text-xs">
          Manifesto Institucional • Versão 1.0 • Classificação: Público
        </p>
      </div>
    </div>
  );
}