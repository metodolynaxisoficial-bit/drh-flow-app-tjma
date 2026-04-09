import { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Video, 
  Loader2, 
  User, 
  Bot,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  FileText,
  HelpCircle
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useArtemis } from '../../hooks/useArtemis';

interface ArtemisChatProps {
  onClose: () => void;
}

export function ArtemisChat({ onClose }: ArtemisChatProps) {
  const [input, setInput] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { messages, isLoading, sendMessage, currentVideoUrl } = useArtemis();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const message = input.trim();
    setInput('');
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    'Como solicitar teletrabalho?',
    'Quais são meus benefícios?',
    'Como consultar meu histórico funcional?',
    'Quais documentos preciso para licença?',
  ];

  return (
    <div 
      className={`fixed bg-white shadow-2xl flex flex-col border-2 border-purple-200 z-50 transition-all duration-300 ${
        isFullscreen 
          ? 'inset-4 rounded-2xl' 
          : 'bottom-20 right-6 w-[380px] h-[600px] rounded-2xl md:bottom-6 md:w-[420px] md:h-[680px]'
      }`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
              <Bot className="h-6 w-6" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              Artemis
              <Sparkles className="h-4 w-4 text-yellow-300" />
            </h3>
            <p className="text-xs text-white/80">Assistente Virtual DRH Flow</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
            aria-label={isFullscreen ? 'Minimizar' : 'Tela cheia'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Status Badge */}
      <div className="px-4 py-2 bg-purple-50 border-b border-purple-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-[var(--tjma-gray-700)] font-medium">Online • Pronta para ajudar</span>
        </div>
        {currentVideoUrl && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="text-xs text-purple-700 hover:text-purple-900 font-medium flex items-center gap-1"
          >
            <Video className="h-3 w-3" />
            {showVideo ? 'Ocultar vídeo' : 'Ver em vídeo'}
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-purple-50/30">
        {/* Welcome Message */}
        {messages.length === 0 && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[var(--tjma-navy-dark)] font-semibold mb-2">
                    Olá! Sou a Artemis, sua assistente virtual 👋
                  </p>
                  <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                    Estou aqui para orientar você sobre serviços de Recursos Humanos do TJMA. 
                    Posso ajudar com dúvidas sobre <strong>vida funcional, teletrabalho, benefícios, 
                    licenças</strong> e muito mais.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Questions */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[var(--tjma-gray-600)] flex items-center gap-1">
                <HelpCircle className="h-3 w-3" />
                Perguntas frequentes:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInput(question);
                    }}
                    className="text-left text-sm bg-white hover:bg-purple-50 border border-purple-200 rounded-lg p-3 transition-colors text-[var(--tjma-navy-dark)] hover:border-purple-400"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.role === 'user' 
                ? 'bg-[var(--tjma-navy)]' 
                : 'bg-gradient-to-br from-purple-600 to-indigo-600'
            }`}>
              {message.role === 'user' ? (
                <User className="h-4 w-4 text-white" />
              ) : (
                <Bot className="h-4 w-4 text-white" />
              )}
            </div>

            {/* Message Content */}
            <div className={`flex-1 max-w-[75%] ${message.role === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
              <div className={`rounded-2xl p-4 ${
                message.role === 'user'
                  ? 'bg-[var(--tjma-navy)] text-white rounded-tr-sm'
                  : 'bg-white border border-purple-200 rounded-tl-sm'
              }`}>
                <p className={`text-sm leading-relaxed ${
                  message.role === 'user' ? 'text-white' : 'text-[var(--tjma-gray-800)]'
                }`}>
                  {message.content}
                </p>

                {/* Video Response */}
                {message.role === 'assistant' && message.videoUrl && showVideo && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-purple-200">
                    <div className="relative aspect-video bg-black">
                      <video
                        src={message.videoUrl}
                        controls
                        className="w-full h-full"
                        muted={isMuted}
                      >
                        Seu navegador não suporta reprodução de vídeo.
                      </video>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-black/70 transition-colors"
                      >
                        {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Actions */}
                {message.role === 'assistant' && message.actions && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.actions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.onClick}
                        className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-800 px-3 py-1.5 rounded-lg transition-colors font-medium"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Timestamp */}
              <span className="text-xs text-[var(--tjma-gray-500)] mt-1 px-1">
                {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-white border border-purple-200 rounded-2xl rounded-tl-sm p-4">
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 text-purple-600 animate-spin" />
                <span className="text-sm text-[var(--tjma-gray-600)]">Artemis está pensando...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-purple-100 rounded-b-2xl">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua pergunta..."
              rows={1}
              disabled={isLoading}
              className="w-full px-4 py-3 pr-10 border border-purple-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500 text-sm"
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
            {input.length > 0 && (
              <span className="absolute bottom-2 right-2 text-xs text-[var(--tjma-gray-500)]">
                {input.length}
              </span>
            )}
          </div>
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 h-12 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-3 flex items-center justify-between text-xs text-[var(--tjma-gray-500)]">
          <div className="flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            <span>Powered by IA</span>
          </div>
          <span>Pressione Enter para enviar</span>
        </div>
      </div>
    </div>
  );
}