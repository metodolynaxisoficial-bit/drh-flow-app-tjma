import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert } from '../components/ui/alert';
import { Shield, User, Mail, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import logoImage from 'figma:asset/372d348765917fdbc7e4e3f5a47453100f8a65c2.png';

type Step = 'identification' | 'code' | 'newPassword' | 'success';

export function RecuperarSenha() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('identification');
  const [identificacao, setIdentificacao] = useState('');
  const [codigo, setCodigo] = useState(['', '', '', '', '', '']);
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleIdentificacao = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!identificacao.trim()) {
      setError('Por favor, informe sua matrícula ou e-mail');
      return;
    }

    // Simular envio de código
    const mockEmail = identificacao.includes('@') ? identificacao : 'servidor@tjma.jus.br';
    setEmail(mockEmail);
    setError('');
    setStep('code');
  };

  const handleCodigoChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCodigo = [...codigo];
      newCodigo[index] = value;
      setCodigo(newCodigo);

      // Auto-focus no próximo campo
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleValidarCodigo = (e: React.FormEvent) => {
    e.preventDefault();
    
    const codigoCompleto = codigo.join('');
    
    if (codigoCompleto.length !== 6) {
      setError('Por favor, informe o código completo de 6 dígitos');
      return;
    }

    // Simular validação (aceita qualquer código de 6 dígitos)
    setError('');
    setStep('newPassword');
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRedefinirSenha = (e: React.FormEvent) => {
    e.preventDefault();

    if (!novaSenha) {
      setError('Por favor, informe a nova senha');
      return;
    }

    if (!validatePassword(novaSenha)) {
      setError('A senha deve ter no mínimo 8 caracteres, incluindo maiúscula, minúscula e número');
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }

    // Simular redefinição bem-sucedida
    setError('');
    setStep('success');
  };

  const renderIdentification = () => (
    <>
      <div className="bg-gradient-to-r from-[var(--tjma-navy-dark)] to-[var(--tjma-navy)] p-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3">
          <Shield className="h-8 w-8 text-[var(--tjma-gold)]" />
        </div>
        <h2 className="text-white text-xl">Recuperação de Senha</h2>
        <p className="text-white/80 text-sm mt-2">Informe seus dados para redefinir sua senha</p>
      </div>

      <div className="p-8">
        {error && (
          <Alert variant="error" className="mb-6">
            {error}
          </Alert>
        )}

        <form onSubmit={handleIdentificacao} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
              <User className="inline h-4 w-4 mr-1" />
              Matrícula ou E-mail
            </label>
            <Input
              type="text"
              placeholder="Digite sua matrícula ou e-mail institucional"
              value={identificacao}
              onChange={(e) => setIdentificacao(e.target.value)}
            />
          </div>

          <Alert variant="info">
            <p className="text-xs">
              Um código de verificação será enviado para o e-mail cadastrado em nosso sistema.
            </p>
          </Alert>

          <Button type="submit" className="w-full" size="lg">
            Enviar Código de Verificação
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="text-center">
            <Link
              to="/login"
              className="text-sm text-[var(--tjma-navy)] hover:text-[var(--tjma-gold)] transition-colors"
            >
              Voltar ao Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );

  const renderCodeVerification = () => (
    <>
      <div className="bg-gradient-to-r from-[var(--tjma-navy-dark)] to-[var(--tjma-navy)] p-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3">
          <Mail className="h-8 w-8 text-[var(--tjma-gold)]" />
        </div>
        <h2 className="text-white text-xl">Código de Verificação</h2>
        <p className="text-white/80 text-sm mt-2">
          Enviamos um código para <strong>{email}</strong>
        </p>
      </div>

      <div className="p-8">
        {error && (
          <Alert variant="error" className="mb-6">
            {error}
          </Alert>
        )}

        <form onSubmit={handleValidarCodigo} className="space-y-5">
          <div>
            <label className="block text-sm mb-3 text-center text-[var(--tjma-navy-dark)]">
              Digite o código de 6 dígitos
            </label>
            <div className="flex justify-center gap-2">
              {codigo.map((digit, index) => (
                <Input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodigoChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-lg font-semibold"
                />
              ))}
            </div>
          </div>

          <Alert variant="info">
            <p className="text-xs">
              <strong>Ambiente demonstrativo:</strong> Aceita qualquer código de 6 dígitos para fins de teste.
            </p>
          </Alert>

          <Button type="submit" className="w-full" size="lg">
            Validar Código
          </Button>

          <div className="text-center space-y-2">
            <button
              type="button"
              onClick={() => setStep('identification')}
              className="text-sm text-[var(--tjma-navy)] hover:text-[var(--tjma-gold)] transition-colors block w-full"
            >
              Reenviar código
            </button>
            <Link
              to="/login"
              className="text-sm text-[var(--tjma-gray-600)] hover:text-[var(--tjma-navy)] transition-colors block w-full"
            >
              Voltar ao Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );

  const renderNewPassword = () => (
    <>
      <div className="bg-gradient-to-r from-[var(--tjma-navy-dark)] to-[var(--tjma-navy)] p-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3">
          <Lock className="h-8 w-8 text-[var(--tjma-gold)]" />
        </div>
        <h2 className="text-white text-xl">Nova Senha</h2>
        <p className="text-white/80 text-sm mt-2">Defina sua nova senha de acesso</p>
      </div>

      <div className="p-8">
        {error && (
          <Alert variant="error" className="mb-6">
            {error}
          </Alert>
        )}

        <form onSubmit={handleRedefinirSenha} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
              <Lock className="inline h-4 w-4 mr-1" />
              Nova Senha
            </label>
            <Input
              type="password"
              placeholder="Mínimo 8 caracteres"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
              <Lock className="inline h-4 w-4 mr-1" />
              Confirmar Nova Senha
            </label>
            <Input
              type="password"
              placeholder="Repita a senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <Alert variant="info">
            <p className="text-xs">
              <strong>Requisitos de Senha:</strong> A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma minúscula e um número.
            </p>
          </Alert>

          <Button type="submit" className="w-full" size="lg">
            Redefinir Senha
          </Button>

          <div className="text-center">
            <Link
              to="/login"
              className="text-sm text-[var(--tjma-gray-600)] hover:text-[var(--tjma-navy)] transition-colors"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </>
  );

  const renderSuccess = () => (
    <>
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3">
          <CheckCircle2 className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-white text-xl">Senha Redefinida!</h2>
        <p className="text-white/90 text-sm mt-2">Sua senha foi alterada com sucesso</p>
      </div>

      <div className="p-8 text-center">
        <Alert variant="success" className="mb-6">
          <p className="text-sm">
            Sua senha foi redefinida com sucesso. Você já pode fazer login no sistema com suas novas credenciais.
          </p>
        </Alert>

        <Button onClick={() => navigate('/login')} className="w-full" size="lg">
          Ir para o Login
        </Button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--tjma-cream)] via-white to-[var(--tjma-gray-50)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
            <img src={logoImage} alt="DRH FLOW - TJMA" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
          <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">DRH FLOW</h1>
          <p className="text-[var(--tjma-navy-medium)] mb-1">Sistema Integrado de Atendimento e Gestão Funcional</p>
          <p className="text-sm text-[var(--tjma-gray-600)]">Diretoria de Recursos Humanos – TJMA</p>
        </div>

        {/* Card de Recuperação */}
        <div className="bg-white rounded-2xl shadow-2xl border border-[var(--tjma-gray-200)] overflow-hidden">
          {step === 'identification' && renderIdentification()}
          {step === 'code' && renderCodeVerification()}
          {step === 'newPassword' && renderNewPassword()}
          {step === 'success' && renderSuccess()}
        </div>

        {/* Aviso Institucional */}
        {step !== 'success' && (
          <div className="mt-6">
            <Alert variant="info">
              <p className="text-xs">
                <strong>Integração Futura:</strong> Para acesso definitivo, a autenticação poderá ser integrada aos sistemas institucionais do Tribunal.
              </p>
            </Alert>
          </div>
        )}

        {/* Rodapé */}
        <div className="mt-8 text-center text-xs text-[var(--tjma-gray-500)]">
          <p>Tribunal de Justiça do Estado do Maranhão</p>
          <p className="mt-1">© 2026 TJMA - Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}