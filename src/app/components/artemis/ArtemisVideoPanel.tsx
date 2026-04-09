import { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Volume2, 
  VolumeX, 
  Loader2,
  MessageCircle,
  Phone,
  Sparkles,
  Video,
  ExternalLink
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

interface ArtemisVideoPanelProps {
  /** URL do vídeo da Artemis */
  videoUrl?: string;
  /** Mostrar em modo compacto */
  compact?: boolean;
  /** Callback quando iniciar atendimento */
  onStartChat?: () => void;
}

export function ArtemisVideoPanel({ 
  videoUrl, 
  compact = false,
  onStartChat 
}: ArtemisVideoPanelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Informações de contato institucionais
  const CONTACT_PHONE = '98932552395'; // Formato para links: sem espaços, hífens ou parênteses
  const CONTACT_PHONE_DISPLAY = '(98) 3255-2395';
  const CONTACT_WHATSAPP = '5598932552395'; // Código do país + DDD + número

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;

    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Vim através do DRH Flow e gostaria de atendimento da assistente virtual Artemis.'
    );
    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${CONTACT_PHONE}`;
  };

  const handleStartChat = () => {
    if (onStartChat) {
      onStartChat();
    } else {
      // Fallback: navega para página da assistente
      window.location.href = '/assistente';
    }
  };

  if (compact) {
    return (
      <Card className="overflow-hidden border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            {/* Avatar/Thumbnail */}
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Video className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-[var(--tjma-navy-dark)]">Artemis</h3>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-300">
                  IA
                </Badge>
              </div>
              <p className="text-sm text-[var(--tjma-gray-600)] mb-3">
                Assistente Virtual do DRH Flow
              </p>
              <Button
                onClick={handleStartChat}
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Conversar Agora
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-2 border-purple-200 shadow-xl">
      <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold">Artemis</h2>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Sparkles className="h-3 w-3 mr-1" />
                Assistente Virtual
              </Badge>
            </div>
            <p className="text-lg text-white/90">Assistente Virtual do DRH Flow</p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Video className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6 md:p-8">
        {/* Video Player */}
        <div 
          className="relative aspect-video bg-gradient-to-br from-[var(--tjma-navy-dark)] to-[var(--tjma-navy)] rounded-2xl overflow-hidden mb-6 shadow-2xl"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--tjma-navy-dark)]/90 backdrop-blur-sm z-10">
              <div className="text-center">
                <Loader2 className="h-12 w-12 text-white animate-spin mx-auto mb-4" />
                <p className="text-white text-sm">Carregando apresentação...</p>
              </div>
            </div>
          )}

          {/* Fallback Background */}
          {!videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900">
              <div className="text-center text-white p-8">
                <Video className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-2">Artemis - DRH Flow</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Apresentação institucional da assistente virtual inteligente do 
                  Tribunal de Justiça do Maranhão
                </p>
              </div>
            </div>
          )}

          {/* Video Element */}
          {videoUrl && (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onLoadedData={handleVideoLoaded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              loop
              playsInline
            >
              <source src={videoUrl} type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          )}

          {/* Video Controls Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Center Play Button */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110 border-2 border-white/50"
                >
                  <Play className="h-10 w-10 text-white ml-1" />
                </button>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlayPause}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                  title={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-white" />
                  ) : (
                    <Play className="h-5 w-5 text-white ml-0.5" />
                  )}
                </button>
                
                <button
                  onClick={handleMuteToggle}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                  title={isMuted ? 'Ativar som' : 'Silenciar'}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5 text-white" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-white" />
                  )}
                </button>
              </div>

              <button
                onClick={handleFullscreen}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                title="Tela cheia"
              >
                <Maximize2 className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Institutional Text */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 mb-6 border border-purple-200">
          <p className="text-[var(--tjma-gray-700)] leading-relaxed text-justify">
            <strong className="text-[var(--tjma-navy-dark)]">Artemis</strong> é a assistente virtual do DRH Flow. 
            Nesta etapa, sua presença no sistema representa a apresentação institucional do modelo de atendimento 
            inteligente que integrará a experiência do usuário. O aplicativo já está estruturado para futura 
            integração com inteligência artificial e com o WhatsApp institucional, ampliando a eficiência, 
            a acessibilidade e a continuidade do atendimento.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Iniciar Atendimento */}
          <Button
            onClick={handleStartChat}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white h-auto py-4 flex-col items-center gap-2"
          >
            <MessageCircle className="h-6 w-6" />
            <div>
              <div className="font-bold text-base">Iniciar Atendimento</div>
              <div className="text-xs opacity-90">Chat com a Artemis</div>
            </div>
          </Button>

          {/* WhatsApp */}
          <Button
            onClick={handleWhatsApp}
            variant="outline"
            className="border-2 border-green-500 text-green-700 hover:bg-green-50 h-auto py-4 flex-col items-center gap-2"
          >
            <MessageCircle className="h-6 w-6" />
            <div>
              <div className="font-bold text-base">Falar no WhatsApp</div>
              <div className="text-xs opacity-75">{CONTACT_PHONE_DISPLAY}</div>
            </div>
          </Button>

          {/* Ligar */}
          <Button
            onClick={handleCall}
            variant="outline"
            className="border-2 border-blue-500 text-blue-700 hover:bg-blue-50 h-auto py-4 flex-col items-center gap-2"
          >
            <Phone className="h-6 w-6" />
            <div>
              <div className="font-bold text-base">Ligar para o RH</div>
              <div className="text-xs opacity-75">{CONTACT_PHONE_DISPLAY}</div>
            </div>
          </Button>
        </div>

        {/* System Info */}
        <div className="mt-6 pt-6 border-t border-[var(--tjma-gray-200)]">
          <div className="flex items-start gap-3 text-sm text-[var(--tjma-gray-600)]">
            <Sparkles className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              O <strong className="text-[var(--tjma-navy-dark)]">DRH Flow</strong> é um sistema inteligente de 
              gestão funcional, acessível via aplicativo iOS, Android e web responsiva. Alinhado à Constituição 
              Federal (art. 37) e ao Conselho Nacional de Justiça, representa uma ferramenta de governança pública 
              baseada em automação, eficiência e transparência.
            </p>
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="mt-6 pt-6 border-t border-[var(--tjma-gray-200)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2 text-[var(--tjma-gray-600)]">
              <Phone className="h-4 w-4" />
              <span>Atendimento: {CONTACT_PHONE_DISPLAY}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-green-500 text-green-700">
                <MessageCircle className="h-3 w-3 mr-1" />
                WhatsApp Ativo
              </Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-700">
                <Sparkles className="h-3 w-3 mr-1" />
                IA em Desenvolvimento
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}