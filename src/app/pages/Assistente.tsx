import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Alert } from '../components/ui/alert';
import { 
  MessageCircle, 
  Sparkles, 
  Clock, 
  Users, 
  CheckCircle, 
  Zap,
  Brain,
  Video,
  MessageSquare,
  Globe,
  Shield,
  Star,
  Bot,
  Smartphone,
  Monitor,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { ArtemisChat } from '../components/artemis/ArtemisChat';

export function Assistente() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Processamento de linguagem natural para compreender suas dúvidas e fornecer respostas precisas'
    },
    {
      icon: Clock,
      title: 'Disponível 24/7',
      description: 'Atendimento ininterrupto, todos os dias, a qualquer hora que você precisar'
    },
    {
      icon: MessageSquare,
      title: 'Respostas em Texto',
      description: 'Orientações claras e objetivas diretamente no chat, com tempo de resposta imediato'
    },
    {
      icon: Video,
      title: 'Respostas em Vídeo',
      description: 'Opção de visualizar explicações em vídeo com apresentadora virtual institucional (em breve)'
    },
    {
      icon: Globe,
      title: 'Multicanal',
      description: 'Integração com WhatsApp institucional para atendimento fora da plataforma'
    },
    {
      icon: Shield,
      title: 'Segura e Confiável',
      description: 'Respostas baseadas em normativas oficiais do CNJ e TJMA, sempre atualizadas'
    }
  ];

  const capabilities = [
    {
      category: 'Vida Funcional',
      items: [
        'Consulta de histórico funcional',
        'Solicitação de certidões',
        'Atualização de dados cadastrais',
        'Informações sobre progressão'
      ]
    },
    {
      category: 'Teletrabalho',
      items: [
        'Requisitos para solicitação',
        'Normativas e resoluções',
        'Passo a passo do processo',
        'Acompanhamento de status'
      ]
    },
    {
      category: 'Benefícios',
      items: [
        'Benefícios disponíveis',
        'Valores atualizados',
        'Documentação necessária',
        'Como solicitar'
      ]
    },
    {
      category: 'Licenças',
      items: [
        'Tipos de licença',
        'Prazos e requisitos',
        'Documentos obrigatórios',
        'Fluxo de aprovação'
      ]
    }
  ];

  const stats = [
    { icon: MessageCircle, value: '98%', label: 'Taxa de satisfação' },
    { icon: Clock, value: '<5s', label: 'Tempo médio de resposta' },
    { icon: Users, value: '1.5k+', label: 'Atendimentos mensais' },
    { icon: Star, value: '4.9/5', label: 'Avaliação dos usuários' }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Acesse a Artemis',
      description: 'Clique no botão flutuante roxo ou acesse diretamente esta página',
      icon: MessageCircle
    },
    {
      step: '2',
      title: 'Faça sua Pergunta',
      description: 'Digite sua dúvida em linguagem natural, como se estivesse conversando',
      icon: MessageSquare
    },
    {
      step: '3',
      title: 'Receba a Resposta',
      description: 'A IA processa sua pergunta e responde instantaneamente com orientações precisas',
      icon: Zap
    },
    {
      step: '4',
      title: 'Navegue ou Solicite',
      description: 'Use os botões de ação rápida para ir direto ao módulo ou fazer a solicitação',
      icon: ArrowRight
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Assistente Virtual Inteligente
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Conheça a<br />
              <span className="text-yellow-300">Artemis</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Sua assistente virtual oficial do DRH Flow, sempre disponível para orientar você sobre 
              serviços de Recursos Humanos do TJMA com inteligência artificial e linguagem natural.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setIsChatOpen(true)}
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 font-semibold shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Video className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Avatar mockup */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl border-2 border-white/30 flex items-center justify-center shadow-2xl">
                <Bot className="h-32 w-32 text-white/90" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white text-purple-700 px-4 py-2 rounded-xl shadow-lg font-semibold text-sm">
                <Clock className="inline h-4 w-4 mr-1" />
                24/7 Online
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg font-semibold text-sm">
                <Zap className="inline h-4 w-4 mr-1" />
                IA Avançada
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} variant="bordered" className="text-center">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-3">
                <stat.icon className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-[var(--tjma-navy-dark)] mb-1">{stat.value}</p>
              <p className="text-sm text-[var(--tjma-gray-600)]">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How It Works */}
      <Card variant="bordered">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)] flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-600" />
            Como Funciona
          </h2>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--tjma-gold)] rounded-full flex items-center justify-center text-[var(--tjma-navy-dark)] font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-semibold text-[var(--tjma-navy-dark)]">{item.title}</h3>
                <p className="text-sm text-[var(--tjma-gray-600)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card variant="bordered">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)] flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-600" />
            Recursos e Capacidades
          </h2>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-1">{feature.title}</h3>
                  <p className="text-sm text-[var(--tjma-gray-600)] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Capabilities */}
      <Card variant="bordered">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)] flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            O Que a Artemis Pode Fazer Por Você
          </h2>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                <h3 className="font-semibold text-lg text-[var(--tjma-navy-dark)] mb-4">
                  {capability.category}
                </h3>
                <ul className="space-y-2">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--tjma-gray-700)]">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Architecture */}
      <Card variant="bordered" className="bg-gradient-to-br from-purple-50 to-white">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)] flex items-center gap-2">
            <Monitor className="h-6 w-6 text-purple-600" />
            Arquitetura Tecnológica
          </h2>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Camada de Interação</h3>
              <p className="text-sm text-[var(--tjma-gray-600)] leading-relaxed mb-3">
                Interface de chat moderna e responsiva, acessível via web, mobile e WhatsApp
              </p>
              <ul className="text-xs text-[var(--tjma-gray-600)] space-y-1">
                <li>• React + TypeScript</li>
                <li>• Tailwind CSS v4</li>
                <li>• WebSocket para real-time</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Camada de Inteligência</h3>
              <p className="text-sm text-[var(--tjma-gray-600)] leading-relaxed mb-3">
                Processamento de linguagem natural via API de IA de última geração
              </p>
              <ul className="text-xs text-[var(--tjma-gray-600)] space-y-1">
                <li>• OpenAI GPT-4 (planejado)</li>
                <li>• Context-aware responses</li>
                <li>• Conhecimento normativo CNJ/TJMA</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-purple-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Camada de Vídeo</h3>
              <p className="text-sm text-[var(--tjma-gray-600)] leading-relaxed mb-3">
                Geração de respostas em vídeo com avatar humano institucional
              </p>
              <ul className="text-xs text-[var(--tjma-gray-600)] space-y-1">
                <li>• HeyGen API (planejado)</li>
                <li>• Avatar personalizado TJMA</li>
                <li>• Voz em português BR</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0">
        <CardContent className="p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Pronta para Ajudar Você!</h2>
            <p className="text-xl text-white/90">
              A Artemis está online 24/7 para responder suas dúvidas sobre RH. 
              Clique no botão flutuante roxo no canto da tela ou experimente agora.
            </p>
            <Button
              onClick={() => setIsChatOpen(true)}
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 font-semibold shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Iniciar Conversa com Artemis
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Aviso */}
      <Alert variant="info">
        <Shield className="inline h-4 w-4 mr-1" />
        <strong>Informação Importante:</strong> A Artemis é uma assistente de orientação. Para decisões 
        formais, análises técnicas e processos oficiais, a autoridade competente é sempre a Diretoria de 
        Recursos Humanos do TJMA. Respostas baseadas em normativas vigentes em {new Date().toLocaleDateString('pt-BR')}.
      </Alert>

      {/* Chat Modal */}
      {isChatOpen && <ArtemisChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
