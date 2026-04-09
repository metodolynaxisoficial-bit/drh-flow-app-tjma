import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { Link } from 'react-router';
import { 
  Sparkles,
  Workflow,
  MessageCircle,
  CheckCircle,
  Shield,
  Zap,
  Users,
  FileText,
  TrendingUp,
  Globe,
  Bot,
  Smartphone,
  Clock,
  Target,
  BarChart3,
  Info,
  Scroll,
  ArrowRight
} from 'lucide-react';

export function SobreSistema() {
  const funcionalidades = [
    {
      icon: FileText,
      title: 'Centralização de Serviços',
      description: 'Todos os serviços de Recursos Humanos unificados em uma única plataforma digital.'
    },
    {
      icon: Clock,
      title: 'Acompanhamento em Tempo Real',
      description: 'Monitore o status de suas solicitações e demandas a qualquer momento.'
    },
    {
      icon: Target,
      title: 'Elegibilidade Automatizada',
      description: 'Verificação inteligente de requisitos para teletrabalho, benefícios e licenças.'
    },
    {
      icon: Bot,
      title: 'Assistente Virtual Integrada',
      description: 'Suporte automatizado com inteligência artificial disponível 24 horas por dia.'
    },
    {
      icon: BarChart3,
      title: 'Simulação de Direitos',
      description: 'Calcule e simule benefícios, adicionais e direitos funcionais com precisão.'
    },
    {
      icon: Smartphone,
      title: 'Integração Multicanal',
      description: 'Acesso via web e WhatsApp para atendimento contínuo e acessível.'
    }
  ];

  const beneficios = [
    {
      icon: Zap,
      title: 'Agilidade no Atendimento',
      description: 'Redução do tempo de resposta e resolução de demandas.'
    },
    {
      icon: Shield,
      title: 'Maior Transparência',
      description: 'Visibilidade completa do andamento de processos e solicitações.'
    },
    {
      icon: CheckCircle,
      title: 'Redução de Burocracia',
      description: 'Digitalização e automatização de processos administrativos.'
    },
    {
      icon: Users,
      title: 'Padronização de Informações',
      description: 'Orientações uniformes e atualizadas conforme normativas vigentes.'
    },
    {
      icon: TrendingUp,
      title: 'Melhoria da Experiência',
      description: 'Interface intuitiva e suporte inteligente para o usuário.'
    },
    {
      icon: Globe,
      title: 'Eficiência Administrativa',
      description: 'Otimização de recursos e processos da Diretoria de Recursos Humanos.'
    }
  ];

  const publicos = [
    { nome: 'Servidores Efetivos', icone: Users },
    { nome: 'Estagiários', icone: Users },
    { nome: 'Residentes', icone: Users },
    { nome: 'Aposentados', icone: Users }
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      {/* Header Principal */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-2xl mb-4">
          <Workflow className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-[var(--tjma-navy-dark)]">DRH FLOW</h1>
        <p className="text-xl text-[var(--tjma-navy-medium)] max-w-3xl mx-auto">
          Sistema Integrado de Atendimento e Gestão Funcional
        </p>
        <p className="text-[var(--tjma-gray-600)]">
          Tribunal de Justiça do Estado do Maranhão
        </p>
      </div>

      {/* Apresentação do Sistema */}
      <Card variant="bordered" className="bg-gradient-to-br from-white to-[var(--tjma-cream)]">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <Sparkles className="h-8 w-8 text-[var(--tjma-gold)] flex-shrink-0 mt-1" />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
                Sobre o Sistema
              </h2>
              <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
                O <strong>DRH Flow</strong> é um sistema integrado de atendimento e gestão funcional desenvolvido 
                especificamente para o Tribunal de Justiça do Maranhão. Sua concepção visa centralizar, organizar 
                e automatizar os serviços prestados pela Diretoria de Recursos Humanos, proporcionando aos usuários 
                uma experiência moderna, eficiente e transparente.
              </p>
              <p className="text-[var(--tjma-gray-700)] leading-relaxed text-lg">
                O sistema oferece acesso simplificado a informações funcionais, acompanhamento em tempo real de 
                solicitações, orientação automatizada sobre direitos e deveres, além de suporte inteligente baseado 
                em inteligência artificial, garantindo conformidade com a legislação vigente e as normativas 
                institucionais do TJMA.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Público-Alvo */}
      <Card variant="bordered">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">Público Atendido</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {publicos.map((publico, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 bg-[var(--tjma-gray-50)] rounded-lg border border-[var(--tjma-gray-200)] hover:border-[var(--tjma-navy)] transition-colors"
              >
                <div className="w-14 h-14 bg-[var(--tjma-navy)] rounded-full flex items-center justify-center mb-3">
                  <publico.icone className="h-7 w-7 text-white" />
                </div>
                <p className="font-medium text-center text-[var(--tjma-navy-dark)]">{publico.nome}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Funcionalidades Principais */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
              Funcionalidades Principais
            </h2>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funcionalidades.map((func, index) => (
              <div 
                key={index}
                className="flex flex-col p-6 bg-white border-2 border-[var(--tjma-gray-200)] rounded-xl hover:border-[var(--tjma-navy)] hover:shadow-lg transition-all"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-lg mb-4 self-start">
                  <func.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2 text-lg">
                  {func.title}
                </h3>
                <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                  {func.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Teletrabalho - Destaque Especial */}
      <Card variant="bordered" className="border-2 border-[var(--tjma-navy)]">
        <CardHeader className="bg-gradient-to-r from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] text-white">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6" />
            <div>
              <h2 className="text-2xl font-semibold">Módulo de Teletrabalho</h2>
              <p className="text-sm text-white/90 mt-1">Atualizado conforme Instrução Normativa CNJ nº 98/2024</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <p className="text-[var(--tjma-gray-700)] leading-relaxed">
              O <strong>DRH Flow</strong> incorpora módulo específico para análise de elegibilidade ao regime de 
              teletrabalho, fundamentado nas normativas mais recentes do Conselho Nacional de Justiça e do Tribunal 
              de Justiça do Maranhão.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5">
              <h3 className="font-semibold text-blue-900 mb-3">Fundamentação Normativa</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Resolução CNJ nº 227/2016</strong> e alterações posteriores (nº 298/2019, 371/2021, 375/2021, 481/2022)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Instrução Normativa CNJ nº 98/2024</strong> – Norma vigente atual sobre modalidades de trabalho</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Resolução CNJ nº 343/2020</strong> – Condições especiais de trabalho</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Resolução CNJ nº 503/2023</strong> – Prioridade e inclusão</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Resolução GP nº 99/2020 (TJMA)</strong> – Disciplina o teletrabalho no âmbito estadual</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Resolução GP nº 88/2022 (TJMA)</strong> – Produtividade superior</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span><strong>Resolução GP nº 91/2020 (TJMA)</strong> – Condições especiais de trabalho</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[var(--tjma-cream)] border border-[var(--tjma-gold)]/30 rounded-lg p-5">
                <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Critérios de Elegibilidade
                </h4>
                <p className="text-sm text-[var(--tjma-gray-700)] mb-3">
                  O sistema realiza análise automatizada com base em:
                </p>
                <ul className="space-y-2 text-sm text-[var(--tjma-gray-700)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--tjma-navy)] font-bold">•</span>
                    <span>Natureza da atividade e compatibilidade com mensuração objetiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--tjma-navy)] font-bold">•</span>
                    <span>Histórico funcional e desempenho anterior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--tjma-navy)] font-bold">•</span>
                    <span>Capacidade de autogestão e autonomia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--tjma-navy)] font-bold">•</span>
                    <span>Interesse da Administração e necessidade do serviço</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Condições Especiais
                </h4>
                <p className="text-sm text-purple-800 mb-3">
                  O sistema contempla tratamento prioritário para:
                </p>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Servidores com deficiência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Responsáveis por dependentes com deficiência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Gestantes e lactantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Servidores com doenças crônicas graves</span>
                  </li>
                </ul>
              </div>
            </div>

            <Alert variant="info">
              <Shield className="inline h-4 w-4 mr-1" />
              <strong>Modelo Atualizado:</strong> O sistema adota o modelo de gestão por desempenho e resultados, 
              com flexibilização responsável e análise individualizada. Não há obrigatoriedade de escolha entre 
              teletrabalho e carga horária reduzida, sendo possível o ajuste de metas conforme o caso concreto, 
              mediante aprovação da chefia imediata e da Administração.
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Integração com WhatsApp */}
      <Card variant="bordered" className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
              Integração com WhatsApp Institucional
            </h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-[var(--tjma-gray-700)] leading-relaxed">
            O <strong>DRH Flow</strong> está integrado ao WhatsApp institucional, permitindo que o usuário receba 
            orientações e acompanhe suas demandas diretamente pelo aplicativo, com respostas automatizadas e 
            suporte inteligente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Bot className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                Atendimento Automatizado
              </h4>
              <p className="text-sm text-[var(--tjma-gray-700)]">
                Respostas instantâneas baseadas nas informações do DRH Flow
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                Acompanhamento em Tempo Real
              </h4>
              <p className="text-sm text-[var(--tjma-gray-700)]">
                Notificações sobre status de solicitações e atualizações
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                Orientações e FAQ
              </h4>
              <p className="text-sm text-[var(--tjma-gray-700)]">
                Dúvidas frequentes respondidas automaticamente
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-green-300 rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-[var(--tjma-navy-dark)] text-lg mb-2">
                Fale com o DRH Flow via WhatsApp
              </h3>
              <p className="text-sm text-[var(--tjma-gray-700)]">
                Continuidade do atendimento iniciado no sistema, com suporte inteligente 24/7
              </p>
            </div>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Iniciar Conversa
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Assistente Virtual Artemis */}
      <Card variant="bordered" className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
              Assistente Virtual Integrada
            </h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[var(--tjma-navy-dark)] mb-2">
                  Artemis – Agente Inteligente do DRH Flow
                </h3>
                <Badge variant="info" className="mb-3">Avatar Demonstrativo</Badge>
                <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                  O DRH Flow conta com uma assistente virtual integrada ao sistema, responsável por orientar os 
                  usuários, responder dúvidas e auxiliar na navegação e utilização dos serviços, com base nas 
                  normas e fluxos internos do Tribunal.
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Sobre a Identidade Visual
                </h4>
                <p className="text-sm text-indigo-800 leading-relaxed mb-3">
                  Para fins de apresentação do projeto, a assistente virtual é representada pelo avatar denominado 
                  <strong> "Artemis"</strong>, inspirado na missão espacial Artemis, associada à inovação, tecnologia e avanço.
                </p>
                <div className="space-y-2 text-sm text-indigo-800">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>O avatar utilizado é <strong>ilustrativo e demonstrativo</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>A identidade visual e nome podem ser <strong>adaptados institucionalmente</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>A assistente oficial do Tribunal, como <strong>"ANA"</strong>, pode ser integrada sem prejuízo funcional</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>O sistema é <strong>independente</strong> da identidade visual da assistente</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-indigo-200 rounded-lg p-5">
              <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-3">Capacidades da Assistente</h4>
              <ul className="space-y-2 text-sm text-[var(--tjma-gray-700)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Respostas automatizadas com base nas normas do CNJ e TJMA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Orientação sobre fluxos e procedimentos internos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Navegação assistida no sistema</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Disponível no sistema web e via WhatsApp</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-indigo-200 rounded-lg p-5">
              <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-3">Características</h4>
              <ul className="space-y-2 text-sm text-[var(--tjma-gray-700)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Linguagem clara, objetiva e institucional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Atendimento padronizado e uniforme</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Disponibilidade 24 horas por dia, 7 dias por semana</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Integração completa com todos os módulos do DRH Flow</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefícios do Sistema */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">
              Benefícios do Sistema
            </h2>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-[var(--tjma-gray-50)] rounded-lg border border-[var(--tjma-gray-200)] hover:border-[var(--tjma-gold)] hover:bg-[var(--tjma-cream)] transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[var(--tjma-gold)] to-amber-600 rounded-full flex items-center justify-center">
                  <beneficio.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    {beneficio.title}
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    {beneficio.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Widget / Call to Action Principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Widget Sistema */}
        <Card className="bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] text-white border-2 border-[var(--tjma-gold)]">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-2">
                <Workflow className="h-8 w-8 text-[var(--tjma-gold)]" />
              </div>
              <h3 className="text-2xl font-bold">DRH Flow</h3>
              <p className="text-sm text-white/90">Sistema Inteligente de Gestão Funcional</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Acesse todos os serviços de Recursos Humanos de forma centralizada, ágil e segura.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full bg-white text-[var(--tjma-navy)] hover:bg-[var(--tjma-cream)]"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Acessar Sistema
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Widget WhatsApp */}
        <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white border-2 border-green-800">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-2">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Atendimento WhatsApp</h3>
              <p className="text-sm text-white/90">Suporte Inteligente 24/7</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Fale com a assistente virtual do DRH Flow pelo WhatsApp institucional.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full bg-white text-green-700 hover:bg-green-50"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Manifesto Institucional - Call to Action */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white border-4 border-[var(--tjma-gold)] shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        <CardContent className="relative p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <Scroll className="h-14 w-14 text-amber-700" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="warning" className="mb-4 bg-white text-amber-800 font-bold">
                📜 DOCUMENTO OFICIAL
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Manifesto Institucional
              </h3>
              <p className="text-xl text-white/95 leading-relaxed mb-6">
                Documento técnico e analítico detalhado que apresenta <strong>o que é o DRH Flow</strong>, 
                como funciona, para que foi criado e <strong>por que é indispensável ao TJMA</strong>. 
                Análise estratégica completa com justificativas, benefícios mensuráveis e alinhamento normativo.
              </p>
              <Link to="/manifesto">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-amber-800 hover:bg-amber-50 font-bold shadow-lg"
                >
                  <Scroll className="mr-2 h-6 w-6" />
                  Ler Manifesto Completo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rodapé Institucional */}
      <Card variant="bordered" className="bg-[var(--tjma-cream)]">
        <CardContent className="p-6">
          <div className="text-center text-sm text-[var(--tjma-gray-700)] space-y-2">
            <p className="font-semibold text-[var(--tjma-navy-dark)]">
              DRH Flow – Diretoria de Recursos Humanos
            </p>
            <p>Tribunal de Justiça do Estado do Maranhão</p>
            <p className="text-xs text-[var(--tjma-gray-600)]">
              Sistema desenvolvido em conformidade com as normativas do CNJ e legislação vigente
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}