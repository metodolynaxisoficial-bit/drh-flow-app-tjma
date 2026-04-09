import { Link } from 'react-router';
import { Home, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--tjma-cream)] flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-[var(--tjma-gold)]/10 rounded-full mb-6">
          <AlertCircle className="h-12 w-12 text-[var(--tjma-gold)]" />
        </div>
        
        <h1 className="text-6xl font-bold text-[var(--tjma-navy-dark)] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[var(--tjma-navy)] mb-3">Página Não Encontrada</h2>
        <p className="text-[var(--tjma-gray-600)] mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        
        <Link to="/">
          <Button variant="primary" size="lg">
            <Home className="h-5 w-5 mr-2" />
            Voltar ao Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}