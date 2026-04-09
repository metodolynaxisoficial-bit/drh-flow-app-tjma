import { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { ArtemisChat } from './ArtemisChat';

export function FloatingAssistantButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão Flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-6 md:bottom-6 z-40 group"
          aria-label="Abrir Assistente Virtual Artemis"
        >
          {/* Badge de notificação (opcional) */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg">
            1
          </div>

          {/* Botão principal */}
          <div className="relative">
            {/* Anel pulsante de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full animate-ping opacity-20"></div>
            
            {/* Botão */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-purple-400/50">
              <MessageCircle className="h-8 w-8 text-white" />
              
              {/* Ícone de sparkles no canto */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            <div className="bg-[var(--tjma-navy-dark)] text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium">
              Assistente Virtual Artemis
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[var(--tjma-navy-dark)]"></div>
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Interface de Chat */}
      {isOpen && <ArtemisChat onClose={() => setIsOpen(false)} />}
    </>
  );
}
