import { useState, useEffect } from 'react';
import { Smartphone, Download, X, Sparkles } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Verificar se já está instalado
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://');

    setIsStandalone(isInStandaloneMode);

    // Detectar iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Verificar se usuário já dispensou
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);

    // Mostrar novamente após 7 dias
    if (daysSinceDismissed > 7) {
      localStorage.removeItem('pwa-install-dismissed');
    }

    // Event listener para beforeinstallprompt (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Mostrar prompt apenas se não foi dispensado recentemente
      if (!dismissed || daysSinceDismissed > 7) {
        setTimeout(() => setShowPrompt(true), 3000); // Esperar 3s após carregamento
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Para iOS, mostrar prompt se não estiver instalado
    if (iOS && !isInStandaloneMode && (!dismissed || daysSinceDismissed > 7)) {
      setTimeout(() => setShowPrompt(true), 3000);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('PWA instalado com sucesso');
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  // Não mostrar se já está instalado
  if (isStandalone) return null;

  // Não mostrar se foi dispensado
  if (!showPrompt) return null;

  return (
    <>
      {/* Desktop/Android Prompt */}
      {!isIOS && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#152E5A] via-[#1a3a6b] to-[#152E5A] rounded-2xl shadow-2xl border border-[#C9A961]/20 overflow-hidden">
              {/* Barra superior decorativa */}
              <div className="h-1 bg-gradient-to-r from-[#C9A961] via-yellow-500 to-[#C9A961]" />
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Ícone */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Instalar DRH Flow
                      </h3>
                      <Sparkles className="w-5 h-5 text-[#C9A961] animate-pulse" />
                    </div>
                    
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                      Instale o aplicativo oficial do <strong>Tribunal de Justiça do Maranhão</strong> para 
                      acesso rápido, notificações e funcionamento offline. 
                      <span className="hidden md:inline"> Experiência completa de app nativo no seu dispositivo.</span>
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-medium border border-purple-400/30">
                        ⚡ Acesso instantâneo
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-xs font-medium border border-green-400/30">
                        📱 Funciona offline
                      </span>
                      <span className="px-3 py-1 bg-amber-500/20 text-amber-200 rounded-full text-xs font-medium border border-amber-400/30">
                        🔔 Notificações
                      </span>
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="flex flex-col gap-3 w-full md:w-auto">
                    <button
                      onClick={handleInstallClick}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                      <Download className="w-5 h-5" />
                      <span>Instalar Agora</span>
                    </button>
                    
                    <button
                      onClick={handleDismiss}
                      className="flex items-center justify-center gap-2 px-6 py-2 text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      Agora não
                    </button>
                  </div>

                  {/* Botão fechar (mobile) */}
                  <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 md:hidden text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* iOS Prompt (instruções) */}
      {isIOS && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#152E5A] via-[#1a3a6b] to-[#152E5A] rounded-2xl shadow-2xl border border-[#C9A961]/20 overflow-hidden">
              {/* Barra superior decorativa */}
              <div className="h-1 bg-gradient-to-r from-[#C9A961] via-yellow-500 to-[#C9A961]" />
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col items-start gap-4">
                  <button
                    onClick={handleDismiss}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Ícone */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Instalar no iPhone/iPad
                      </h3>
                      <Sparkles className="w-5 h-5 text-[#C9A961] animate-pulse" />
                    </div>
                    
                    <p className="text-gray-200 text-sm md:text-base">
                      Adicione o <strong>DRH Flow - TJMA</strong> à sua tela inicial para acesso rápido:
                    </p>

                    <ol className="space-y-3 text-gray-200 text-sm md:text-base">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        <span>Toque no botão <strong>Compartilhar</strong> (ícone de quadrado com seta) no Safari</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                        <span>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                        <span>Toque em <strong>"Adicionar"</strong> no canto superior direito</span>
                      </li>
                    </ol>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-medium border border-purple-400/30">
                        ⚡ Acesso rápido
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-xs font-medium border border-green-400/30">
                        📱 Como app nativo
                      </span>
                    </div>
                  </div>

                  {/* Botão */}
                  <button
                    onClick={handleDismiss}
                    className="w-full mt-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
                  >
                    Entendi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
