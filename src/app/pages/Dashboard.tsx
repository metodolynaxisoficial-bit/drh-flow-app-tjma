import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { Link } from 'react-router';
import {
  FileText, Clock, Heart, DollarSign, Briefcase, Wifi,
  FolderOpen, MessageCircle, Search, ShieldCheck, TrendingUp,
  Calendar, AlertCircle, CheckCircle, ArrowRight, Award,
  BookOpen, Users, Info, Scroll
} from 'lucide-react';
import { ArtemisVideoPanel } from '../components/artemis/ArtemisVideoPanel';
import { useState } from 'react';

export function Dashboard() {
  const userName = localStorage.getItem('userName') || 'Servidor';
  const [showArtemisChat, setShowArtemisChat] = useState(false);

  const quickStats = [
    { label: 'Banco de Horas', value: '+12h30', trend: 'positive', icon: Clock, color: 'text-green-600' },
    { label: 'Próxima Progressão', value: '8 meses', trend: 'neutral', icon: TrendingUp, color: 'text-blue-600' },
    { label: 'Estágio Probatório', value: '67%', trend: 'positive', icon: Award, color: 'text-purple-600' },
    { label: 'Processos Ativos', value: '2', trend: 'warning', icon: FolderOpen, color: 'text-amber-600' },
  ];

  const modules = [
    {
      title: 'Minha Vida Funcional',
      description: 'Acompanhe sua trajetória e progressão',
      icon: FileText,
      path: '/vida-funcional',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      title: 'Frequência e Banco de Horas',
      description: 'Gerencie sua jornada e saldos',
      icon: Clock,
      path: '/frequencia',
      color: 'bg-green-50 text-green-600 border-green-200',
      badge: '2 pendências',
    },
    {
      title: 'Licenças e Afastamentos',
      description: 'Solicite licenças e acompanhe',
      icon: Heart,
      path: '/licencas',
      color: 'bg-pink-50 text-pink-600 border-pink-200',
    },
    {
      title: 'Benefícios e Indenizações',
      description: 'Auxílios e benefícios disponíveis',
      icon: DollarSign,
      path: '/beneficios',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      title: 'Adicionais e Gratificações',
      description: 'Simule e solicite adicionais',
      icon: Briefcase,
      path: '/adicionais',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      title: 'Teletrabalho',
      description: 'Verifique elegibilidade e solicite',
      icon: Wifi,
      path: '/teletrabalho',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      title: 'Protocolo Administrativo',
      description: 'Protocolos e documentos',
      icon: FolderOpen,
      path: '/protocolo',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      badge: '1 novo',
    },
    {
      title: 'Assistente Virtual',
      description: 'Tire dúvidas e orientações',
      icon: MessageCircle,
      path: '/assistente',
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    },
    {
      title: 'Acompanhamento Processual',
      description: 'Timeline de suas solicitações',
      icon: Search,
      path: '/acompanhamento',
      color: 'bg-slate-50 text-slate-600 border-slate-200',
    },
  ];

  const recentActivities = [
    {
      type: 'success',
      title: 'Solicitação de Abono Aprovada',
      description: 'Abono de falta do dia 18/03/2026',
      date: '2 horas atrás',
    },
    {
      type: 'pending',
      title: 'Ajuste de Banco de Horas em Análise',
      description: 'Aguardando manifestação da chefia',
      date: '1 dia atrás',
    },
    {
      type: 'info',
      title: 'Novo Documento Disponível',
      description: 'Contracheque referência 03/2026',
      date: '3 dias atrás',
    },
  ];

  const alerts = [
    {
      type: 'warning',
      message: 'Você possui 2 justificativas de frequência pendentes de envio.',
      action: 'Ver Detalhes',
      link: '/frequencia',
    },
    {
      type: 'info',
      message: 'Capacitação obrigatória para progressão disponível na Escola Judicial.',
      action: 'Acessar',
      link: '/vida-funcional',
    },
  ];

  const handleStartArtemisChat = () => {
    setShowArtemisChat(true);
    // Ou navegue para a página da assistente
    // window.location.href = '/assistente';
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl mb-2 text-white">Bem-vindo(a), {userName}</h1>
            <p className="text-[var(--tjma-gray-200)] text-lg">
              Sistema Integrado de Atendimento e Gestão Funcional
            </p>
            <p className="text-[var(--tjma-gold)] text-sm mt-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <Users className="h-10 w-10 text-[var(--tjma-gold)]" />
          </div>
        </div>
      </div>

      {/* ARTEMIS VIDEO PANEL - DESTAQUE PRINCIPAL */}
      <ArtemisVideoPanel 
        onStartChat={handleStartArtemisChat}
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[var(--tjma-gray-600)] mb-1">{stat.label}</p>
                    <p className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color.replace('text', 'bg').replace('600', '100')}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <Alert key={index} variant={alert.type as any}>
              <div className="flex items-center justify-between">
                <span>{alert.message}</span>
                <Link to={alert.link}>
                  <Button variant="ghost" size="sm" className="ml-4">
                    {alert.action}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </Alert>
          ))}
        </div>
      )}

      {/* Modules Grid */}
      <div>
        <h2 className="text-2xl mb-6 text-[var(--tjma-navy-dark)]">Módulos do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Link key={index} to={module.path}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-l-4" style={{ borderLeftColor: module.color.match(/text-(\w+)/)?.[1] }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg border ${module.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-[var(--tjma-navy-dark)]">{module.title}</h3>
                          {module.badge && (
                            <Badge variant="warning" className="ml-2">{module.badge}</Badge>
                          )}
                        </div>
                        <p className="text-sm text-[var(--tjma-gray-600)]">{module.description}</p>
                        <div className="mt-4 flex items-center text-sm text-[var(--tjma-navy)] font-medium">
                          Acessar
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activities */}
      <div>
        <h2 className="text-2xl mb-6 text-[var(--tjma-navy-dark)]">Atividades Recentes</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const icons = {
                  success: <CheckCircle className="h-5 w-5 text-green-600" />,
                  pending: <AlertCircle className="h-5 w-5 text-yellow-600" />,
                  info: <BookOpen className="h-5 w-5 text-blue-600" />,
                };
                
                return (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-[var(--tjma-gray-200)] last:border-0 last:pb-0">
                    <div className="flex-shrink-0 mt-1">
                      {icons[activity.type as keyof typeof icons]}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--tjma-navy-dark)]">{activity.title}</h4>
                      <p className="text-sm text-[var(--tjma-gray-600)] mt-1">{activity.description}</p>
                      <p className="text-xs text-[var(--tjma-gray-500)] mt-2">{activity.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Help and Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <MessageCircle className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-[var(--tjma-navy-dark)] mb-2">
              Precisa de Ajuda?
            </h3>
            <p className="text-sm text-[var(--tjma-gray-700)] mb-4">
              O Assistente Virtual pode responder suas dúvidas e orientar sobre processos administrativos.
            </p>
            <Link to="/assistente">
              <Button variant="primary" size="sm">
                Iniciar Conversa
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <ShieldCheck className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-[var(--tjma-navy-dark)] mb-2">
              Privacidade e Segurança
            </h3>
            <p className="text-sm text-[var(--tjma-gray-700)] mb-4">
              Seus dados são protegidos conforme a LGPD. Conheça nossa política de privacidade.
            </p>
            <Link to="/lgpd">
              <Button variant="outline" size="sm">
                Saiba Mais
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* About System - Destaque Institucional */}
      <Card className="bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] text-white border-2 border-[var(--tjma-gold)]">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-[var(--tjma-gold)]">
                <Info className="h-10 w-10 text-[var(--tjma-gold)]" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Conheça o DRH Flow
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Sistema Integrado de Atendimento e Gestão Funcional desenvolvido para o Tribunal de Justiça do Maranhão. 
                Saiba mais sobre funcionalidades, integração com WhatsApp, assistente virtual e fundamentação normativa completa.
              </p>
              <Link to="/sobre-sistema">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white text-[var(--tjma-navy)] hover:bg-[var(--tjma-cream)]"
                >
                  <Info className="mr-2 h-5 w-5" />
                  Sobre o Sistema
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manifesto Institucional - Destaque Especial */}
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
                Documento técnico e analítico que apresenta <strong>o que é o DRH Flow</strong>, como funciona, 
                para que foi criado e <strong>por que é indispensável ao TJMA</strong>. Uma análise estratégica 
                completa com justificativas, benefícios mensuráveis e alinhamento normativo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                <Link to="/sobre-sistema">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white/10"
                  >
                    <Info className="mr-2 h-5 w-5" />
                    Sobre o Sistema
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Institutional Notice */}
      <Alert variant="info">
        <strong>Aviso Institucional:</strong> Este sistema atua exclusivamente como ferramenta de apoio e orientação, 
        não substituindo a análise técnica nem a decisão administrativa das unidades competentes do TJMA.
      </Alert>
    </div>
  );
}