import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert } from '../components/ui/alert';
import { Shield, Lock, User, ArrowLeft } from 'lucide-react';
// TODO: arquivo não encontrado — verificar manualmente
const logoImage = '';

export function Login() {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!matricula || !senha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    // Simulação de autenticação
    if (matricula === 'admin' || matricula.length >= 4) {
      localStorage.setItem('authenticated', 'true');
      
      // Verificar se há dados de cadastro salvos
      const userName = localStorage.getItem('userName') || 'Ana Paula Silva';
      const userMatricula = localStorage.getItem('userMatricula') || matricula;
      
      localStorage.setItem('userName', userName);
      localStorage.setItem('userMatricula', userMatricula);
      navigate('/');
    } else {
      setError('Matrícula ou senha incorretos.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--tjma-cream)] via-white to-[var(--tjma-gray-50)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-6">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-sm text-[var(--tjma-navy)] hover:text-[var(--tjma-gold)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </div>

        {/* Logo e Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
            <img src={logoImage} alt="DRH FLOW - TJMA" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
          <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">DRH FLOW</h1>
          <p className="text-[var(--tjma-navy-medium)] mb-1">Sistema Integrado de Atendimento e Gestão Funcional</p>
          <p className="text-sm text-[var(--tjma-gray-600)]">Diretoria de Recursos Humanos – TJMA</p>
        </div>

        {/* Card de Login */}
        <div className="bg-white rounded-2xl shadow-2xl border border-[var(--tjma-gray-200)] overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--tjma-navy-dark)] to-[var(--tjma-navy)] p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3">
              <Shield className="h-8 w-8 text-[var(--tjma-gold)]" />
            </div>
            <h2 className="text-white text-xl">Acesso Institucional</h2>
          </div>

          <div className="p-8">
            {error && (
              <Alert variant="error" className="mb-6">
                {error}
              </Alert>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                  <User className="inline h-4 w-4 mr-1" />
                  Matrícula
                </label>
                <Input
                  type="text"
                  placeholder="Digite sua matrícula"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                  <Lock className="inline h-4 w-4 mr-1" />
                  Senha
                </label>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Entrar no Sistema
              </Button>

              <div className="flex flex-col gap-2 text-center pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/recuperar-senha')}
                  className="text-sm text-[var(--tjma-navy)] hover:text-[var(--tjma-gold)] transition-colors"
                >
                  Esqueci minha senha
                </button>
                <div className="text-sm text-[var(--tjma-gray-600)]">
                  Primeiro acesso?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/cadastro')}
                    className="text-[var(--tjma-navy)] hover:text-[var(--tjma-gold)] transition-colors font-medium"
                  >
                    Cadastre-se aqui
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Avisos Institucionais */}
        <div className="mt-6 space-y-3">
          <Alert variant="info">
            <p className="text-xs">
              <strong>Uso Institucional:</strong> Este sistema é de uso exclusivo de servidores e magistrados do TJMA. 
              O acesso não autorizado é vedado e sujeito às sanções legais.
            </p>
          </Alert>

          <Alert variant="info">
            <p className="text-xs">
              <strong>LGPD:</strong> Seus dados pessoais são tratados em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). 
              O sistema registra logs de acesso para fins de auditoria e segurança.
            </p>
          </Alert>
        </div>

        {/* Rodapé */}
        <div className="mt-8 text-center text-xs text-[var(--tjma-gray-500)]">
          <p>Tribunal de Justiça do Estado do Maranhão</p>
          <p className="mt-1">© 2026 TJMA - Todos os direitos reservados</p>
          <p className="mt-2">Versão 1.0.0</p>
        </div>
      </div>
    </div>
  );
}