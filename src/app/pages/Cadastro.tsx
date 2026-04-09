import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert } from '../components/ui/alert';
import { Shield, User, Mail, Calendar, Building2, Briefcase, Lock, CheckCircle2 } from 'lucide-react';
import logoImage from 'figma:asset/372d348765917fdbc7e4e3f5a47453100f8a65c2.png';

// Mock data para lotações e cargos
const lotacoes = [
  '1ª Vara Cível da Capital',
  '2ª Vara Cível da Capital',
  '1ª Vara Criminal da Capital',
  '2ª Vara Criminal da Capital',
  'Vara de Família',
  'Vara de Sucessões',
  'Juizado Especial Cível',
  'Juizado Especial Criminal',
  'Gabinete da Presidência',
  'Diretoria de Recursos Humanos',
  'Diretoria Administrativa',
  'Diretoria de Tecnologia da Informação',
  'Coordenadoria de Comunicação Social',
  'Coordenadoria de Gestão de Pessoas',
  'Assessoria Jurídica',
];

const cargos = [
  'Analista Judiciário',
  'Técnico Judiciário',
  'Auxiliar Judiciário',
  'Oficial de Justiça',
  'Escrivão Judicial',
  'Assistente Administrativo',
  'Analista de TI',
  'Contador',
  'Advogado',
  'Psicólogo',
  'Assistente Social',
  'Diretor',
  'Coordenador',
  'Assessor',
];

export function Cadastro() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    matricula: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    lotacao: '',
    cargo: '',
    senha: '',
    confirmarSenha: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const validateCPF = (cpf: string): boolean => {
    const cleanCPF = cpf.replace(/\D/g, '');
    if (cleanCPF.length !== 11) return false;
    // Simulação de validação básica
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // Mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando usuário digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = 'Nome completo é obrigatório';
    }

    if (!formData.matricula.trim()) {
      newErrors.matricula = 'Matrícula é obrigatória';
    } else if (formData.matricula.length < 4) {
      newErrors.matricula = 'Matrícula deve ter no mínimo 4 caracteres';
    }

    if (!formData.cpf.trim()) {
      newErrors.cpf = 'CPF é obrigatório';
    } else if (!validateCPF(formData.cpf)) {
      newErrors.cpf = 'CPF inválido';
    }

    if (!formData.dataNascimento) {
      newErrors.dataNascimento = 'Data de nascimento é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail institucional é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.lotacao) {
      newErrors.lotacao = 'Lotação é obrigatória';
    }

    if (!formData.cargo) {
      newErrors.cargo = 'Cargo é obrigatório';
    }

    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (!validatePassword(formData.senha)) {
      newErrors.senha = 'Senha deve ter no mínimo 8 caracteres, incluindo maiúscula, minúscula e número';
    }

    if (!formData.confirmarSenha) {
      newErrors.confirmarSenha = 'Confirmação de senha é obrigatória';
    } else if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateStep2()) {
      // Simular cadastro bem-sucedido
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('userName', formData.nomeCompleto);
      localStorage.setItem('userMatricula', formData.matricula);
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userLotacao', formData.lotacao);
      localStorage.setItem('userCargo', formData.cargo);
      
      setSuccess(true);
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  const formatCPF = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formatted;
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--tjma-cream)] via-white to-[var(--tjma-gray-50)] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl border border-[var(--tjma-gray-200)] p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl mb-3 text-[var(--tjma-navy-dark)]">Cadastro Realizado!</h2>
            <p className="text-[var(--tjma-gray-600)] mb-6">
              Seu cadastro foi concluído com sucesso. Você será redirecionado para o sistema em instantes...
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-[var(--tjma-navy)]">
              <div className="w-4 h-4 border-2 border-[var(--tjma-navy)] border-t-transparent rounded-full animate-spin"></div>
              Redirecionando...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--tjma-cream)] via-white to-[var(--tjma-gray-50)] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo e Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
            <img src={logoImage} alt="DRH FLOW - TJMA" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
          <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">DRH FLOW</h1>
          <p className="text-[var(--tjma-navy-medium)] mb-1">Primeiro Acesso / Cadastro do Servidor</p>
          <p className="text-sm text-[var(--tjma-gray-600)]">Tribunal de Justiça do Maranhão</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-[var(--tjma-navy)] text-white' : 'bg-[var(--tjma-gray-200)] text-[var(--tjma-gray-500)]'
              }`}>
                1
              </div>
              <span className="text-sm text-[var(--tjma-navy-dark)]">Dados Pessoais</span>
            </div>
            <div className={`h-1 w-20 ${step >= 2 ? 'bg-[var(--tjma-navy)]' : 'bg-[var(--tjma-gray-200)]'}`}></div>
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-[var(--tjma-navy)] text-white' : 'bg-[var(--tjma-gray-200)] text-[var(--tjma-gray-500)]'
              }`}>
                2
              </div>
              <span className="text-sm text-[var(--tjma-navy-dark)]">Dados Funcionais</span>
            </div>
          </div>
        </div>

        {/* Card de Cadastro */}
        <div className="bg-white rounded-2xl shadow-2xl border border-[var(--tjma-gray-200)] overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--tjma-navy-dark)] to-[var(--tjma-navy)] p-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-3">
              <Shield className="h-8 w-8 text-[var(--tjma-gold)]" />
            </div>
            <h2 className="text-white text-xl">Cadastro de Acesso Demonstrativo</h2>
          </div>

          <div className="p-8">
            <Alert variant="info" className="mb-6">
              <p className="text-xs">
                <strong>Ambiente Demonstrativo:</strong> Os dados informados serão utilizados exclusivamente para acesso ao ambiente demonstrativo do sistema, respeitando a legislação vigente.
              </p>
            </Alert>

            <form onSubmit={step === 1 ? (e) => { e.preventDefault(); handleNextStep(); } : handleSubmit} className="space-y-5">
              {step === 1 ? (
                <>
                  {/* Step 1: Dados Pessoais */}
                  <div>
                    <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                      <User className="inline h-4 w-4 mr-1" />
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.nomeCompleto}
                      onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                      className={errors.nomeCompleto ? 'border-red-500' : ''}
                    />
                    {errors.nomeCompleto && (
                      <p className="text-xs text-red-500 mt-1">{errors.nomeCompleto}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                        <Briefcase className="inline h-4 w-4 mr-1" />
                        Matrícula *
                      </label>
                      <Input
                        type="text"
                        placeholder="Digite sua matrícula"
                        value={formData.matricula}
                        onChange={(e) => handleInputChange('matricula', e.target.value)}
                        className={errors.matricula ? 'border-red-500' : ''}
                      />
                      {errors.matricula && (
                        <p className="text-xs text-red-500 mt-1">{errors.matricula}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                        CPF *
                      </label>
                      <Input
                        type="text"
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange('cpf', formatCPF(e.target.value))}
                        maxLength={14}
                        className={errors.cpf ? 'border-red-500' : ''}
                      />
                      {errors.cpf && (
                        <p className="text-xs text-red-500 mt-1">{errors.cpf}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Data de Nascimento *
                    </label>
                    <Input
                      type="date"
                      value={formData.dataNascimento}
                      onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                      className={errors.dataNascimento ? 'border-red-500' : ''}
                    />
                    {errors.dataNascimento && (
                      <p className="text-xs text-red-500 mt-1">{errors.dataNascimento}</p>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate('/login')}
                      className="flex-1"
                    >
                      Voltar ao Login
                    </Button>
                    <Button type="submit" className="flex-1">
                      Próximo
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  {/* Step 2: Dados Funcionais e Senha */}
                  <div>
                    <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                      <Mail className="inline h-4 w-4 mr-1" />
                      E-mail Institucional *
                    </label>
                    <Input
                      type="email"
                      placeholder="seunome@tjma.jus.br"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                        <Building2 className="inline h-4 w-4 mr-1" />
                        Lotação *
                      </label>
                      <select
                        value={formData.lotacao}
                        onChange={(e) => handleInputChange('lotacao', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-navy)] ${
                          errors.lotacao ? 'border-red-500' : 'border-[var(--tjma-gray-300)]'
                        }`}
                      >
                        <option value="">Selecione...</option>
                        {lotacoes.map((lotacao) => (
                          <option key={lotacao} value={lotacao}>
                            {lotacao}
                          </option>
                        ))}
                      </select>
                      {errors.lotacao && (
                        <p className="text-xs text-red-500 mt-1">{errors.lotacao}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                        <Briefcase className="inline h-4 w-4 mr-1" />
                        Cargo *
                      </label>
                      <select
                        value={formData.cargo}
                        onChange={(e) => handleInputChange('cargo', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-navy)] ${
                          errors.cargo ? 'border-red-500' : 'border-[var(--tjma-gray-300)]'
                        }`}
                      >
                        <option value="">Selecione...</option>
                        {cargos.map((cargo) => (
                          <option key={cargo} value={cargo}>
                            {cargo}
                          </option>
                        ))}
                      </select>
                      {errors.cargo && (
                        <p className="text-xs text-red-500 mt-1">{errors.cargo}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                        <Lock className="inline h-4 w-4 mr-1" />
                        Senha *
                      </label>
                      <Input
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        value={formData.senha}
                        onChange={(e) => handleInputChange('senha', e.target.value)}
                        className={errors.senha ? 'border-red-500' : ''}
                      />
                      {errors.senha && (
                        <p className="text-xs text-red-500 mt-1">{errors.senha}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-[var(--tjma-navy-dark)]">
                        <Lock className="inline h-4 w-4 mr-1" />
                        Confirmar Senha *
                      </label>
                      <Input
                        type="password"
                        placeholder="Repita a senha"
                        value={formData.confirmarSenha}
                        onChange={(e) => handleInputChange('confirmarSenha', e.target.value)}
                        className={errors.confirmarSenha ? 'border-red-500' : ''}
                      />
                      {errors.confirmarSenha && (
                        <p className="text-xs text-red-500 mt-1">{errors.confirmarSenha}</p>
                      )}
                    </div>
                  </div>

                  <Alert variant="info">
                    <p className="text-xs">
                      <strong>Requisitos de Senha:</strong> A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma minúscula e um número.
                    </p>
                  </Alert>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Voltar
                    </Button>
                    <Button type="submit" className="flex-1" size="lg">
                      Cadastrar e Acessar
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>

        {/* Avisos Institucionais */}
        <div className="mt-6">
          <Alert variant="info">
            <p className="text-xs">
              <strong>Integração Futura:</strong> Para acesso definitivo, a autenticação poderá ser integrada aos sistemas institucionais do Tribunal.
            </p>
          </Alert>
        </div>

        {/* Rodapé */}
        <div className="mt-8 text-center text-xs text-[var(--tjma-gray-500)]">
          <p>Tribunal de Justiça do Estado do Maranhão</p>
          <p className="mt-1">© 2026 TJMA - Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}