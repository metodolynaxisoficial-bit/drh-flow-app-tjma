import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import {
  Workflow,
  MessageCircle,
  Sparkles,
  CheckCircle,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Workflow,
      title: 'Gestão Centralizada',
      description: 'Todos os serviços de RH em um único ambiente digital integrado'
    },
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Assistente virtual disponível a qualquer hora, em qualquer lugar'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Integrado',
      description: 'Continuidade do atendimento pelo aplicativo que você já usa'
    },
    {
      icon: Shield,
      title: 'Segurança e Conformidade',
      description: 'Proteção de dados conforme LGPD e normas do CNJ'
    },
    {
      icon: Zap,
      title: 'Processos Automatizados',
      description: 'Redução de burocracia com fluxos inteligentes e automáticos'
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento em Tempo Real',
      description: 'Monitore suas solicitações e demandas funcionais instantaneamente'
    }
  ];

  const publicos = [
    'Servidores Efetivos',
    'Estagiários',
    'Residentes',
    'Aposentados'
  ];

  const platforms = [
    { name: 'iOS', icon: Smartphone },
    { name: 'Android', icon: Smartphone },
    { name: 'Web', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[var(--tjma-cream)]">
      {/* Header/Navigation */}
      <nav className="bg-white border-b border-[var(--tjma-gray-200)] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-lg flex items-center justify-center">
                <Workflow className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-[var(--tjma-navy-dark)]">DRH Flow</h1>
                <p className="text-xs text-[var(--tjma-gray-600)] hidden sm:block">TJMA</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#recursos" className="text-sm font-medium text-[var(--tjma-gray-700)] hover:text-[var(--tjma-navy)] transition-colors">
                Recursos
              </a>
              <a href="#sobre" className="text-sm font-medium text-[var(--tjma-gray-700)] hover:text-[var(--tjma-navy)] transition-colors">
                Sobre
              </a>
              <a href="#atendimento" className="text-sm font-medium text-[var(--tjma-gray-700)] hover:text-[var(--tjma-navy)] transition-colors">
                Atendimento
              </a>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Entrar
                </Button>
              </Link>
              <Link to="/cadastro">
                <Button variant="primary" size="sm">
                  Primeiro Acesso
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-[var(--tjma-gray-100)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[var(--tjma-navy)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--tjma-navy)]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--tjma-gray-200)]">
              <div className="flex flex-col gap-3">
                <a
                  href="#recursos"
                  className="px-4 py-2 text-sm font-medium text-[var(--tjma-gray-700)] hover:bg-[var(--tjma-gray-100)] rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Recursos
                </a>
                <a
                  href="#sobre"
                  className="px-4 py-2 text-sm font-medium text-[var(--tjma-gray-700)] hover:bg-[var(--tjma-gray-100)] rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre
                </a>
                <a
                  href="#atendimento"
                  className="px-4 py-2 text-sm font-medium text-[var(--tjma-gray-700)] hover:bg-[var(--tjma-gray-100)] rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Atendimento
                </a>
                <div className="flex flex-col gap-2 px-4 pt-2">
                  <Link to="/login">
                    <Button variant="outline" className="w-full">
                      Entrar
                    </Button>
                  </Link>
                  <Link to="/cadastro">
                    <Button variant="primary" className="w-full">
                      Primeiro Acesso
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <Badge variant="info" className="mb-4">
                Sistema Multiplataforma
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--tjma-navy-dark)] mb-6 leading-tight">
                DRH Flow
              </h1>
              <p className="text-xl sm:text-2xl text-[var(--tjma-navy-medium)] mb-6">
                Sistema Inteligente de Gestão Funcional
              </p>
              <p className="text-base sm:text-lg text-[var(--tjma-gray-700)] mb-8 leading-relaxed">
                Centralize, organize e automatize os serviços de Recursos Humanos do Tribunal de Justiça do Maranhão. 
                Acesse informações funcionais, acompanhe solicitações e receba suporte inteligente onde e quando precisar.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/login">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Acessar Sistema
                  </Button>
                </Link>
                <a href="#atendimento">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-green-600 text-white border-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>

              {/* Platforms */}
              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <p className="text-sm text-[var(--tjma-gray-600)]">Disponível em:</p>
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[var(--tjma-gray-200)]">
                    <platform.icon className="h-4 w-4 text-[var(--tjma-navy)]" />
                    <span className="text-sm font-medium text-[var(--tjma-navy-dark)]">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-3xl p-8 shadow-2xl border-4 border-[var(--tjma-gold)]">
                <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[var(--tjma-gold)] rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Bem-vindo ao</p>
                        <p className="font-semibold text-white">DRH Flow</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-xs text-white/70 mb-1">Processos</p>
                        <p className="text-lg font-bold text-white">12</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-xs text-white/70 mb-1">Pendentes</p>
                        <p className="text-lg font-bold text-white">3</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-[var(--tjma-gold)]" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">Assistente Virtual</p>
                        <p className="text-xs text-white/70">Disponível 24/7</p>
                      </div>
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--tjma-gold)]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--tjma-navy)]/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Público Atendido */}
      <section className="bg-white py-12 sm:py-16" id="sobre">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="success" className="mb-4">Para Todos</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--tjma-navy-dark)] mb-4">
              Quem Pode Utilizar
            </h2>
            <p className="text-lg text-[var(--tjma-gray-700)] max-w-2xl mx-auto">
              O DRH Flow atende a todos os públicos vinculados ao Tribunal de Justiça do Maranhão
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {publicos.map((publico, index) => (
              <Card key={index} className="border-2 hover:border-[var(--tjma-navy)] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <p className="font-semibold text-[var(--tjma-navy-dark)]">{publico}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Recursos */}
      <section className="py-12 sm:py-16" id="recursos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">Recursos</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--tjma-navy-dark)] mb-4">
              Tudo que Você Precisa
            </h2>
            <p className="text-lg text-[var(--tjma-gray-700)] max-w-2xl mx-auto">
              Funcionalidades completas para gestão funcional moderna, eficiente e transparente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-[var(--tjma-gold)] hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--tjma-gold)] to-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp & Assistente */}
      <section className="bg-gradient-to-br from-green-50 to-white py-12 sm:py-16" id="atendimento">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white border-2 border-green-800">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Atendimento via WhatsApp</h3>
                  <p className="text-green-100 mb-6 leading-relaxed">
                    Fale com o DRH Flow pelo aplicativo que você já usa. Respostas automatizadas, 
                    acompanhamento de solicitações e orientações instantâneas.
                  </p>
                  <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-green-50 w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Iniciar Conversa
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Assistente Virtual */}
            <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-2 border-indigo-800">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Assistente Virtual Artemis</h3>
                  <p className="text-indigo-100 mb-2 leading-relaxed">
                    Suporte inteligente disponível 24 horas por dia, 7 dias por semana. Tire dúvidas, 
                    navegue pelo sistema e receba orientações personalizadas.
                  </p>
                  <p className="text-xs text-white/70 mb-6 italic">
                    * Avatar demonstrativo. A identidade pode ser adaptada institucionalmente.
                  </p>
                  <Link to="/login">
                    <Button variant="secondary" size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 w-full sm:w-auto">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Conhecer Artemis
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Acesse o DRH Flow agora e transforme sua experiência com os serviços de Recursos Humanos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="secondary" size="lg" className="bg-white text-[var(--tjma-navy)] hover:bg-[var(--tjma-cream)] w-full sm:w-auto">
                <Sparkles className="mr-2 h-5 w-5" />
                Acessar Sistema
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Primeiro Acesso
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[var(--tjma-gray-200)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-[var(--tjma-gray-600)] space-y-2">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-lg flex items-center justify-center">
                <Workflow className="h-5 w-5 text-white" />
              </div>
              <p className="font-semibold text-[var(--tjma-navy-dark)]">DRH Flow</p>
            </div>
            <p className="font-medium text-[var(--tjma-navy-dark)]">
              Diretoria de Recursos Humanos
            </p>
            <p>Tribunal de Justiça do Estado do Maranhão</p>
            <p className="text-xs text-[var(--tjma-gray-500)] mt-4">
              Sistema desenvolvido em conformidade com as normativas do CNJ e legislação vigente
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}