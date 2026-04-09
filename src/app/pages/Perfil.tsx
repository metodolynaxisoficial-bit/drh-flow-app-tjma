import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Alert } from '../components/ui/alert';
import { User, Mail, Phone, MapPin, Bell, Shield } from 'lucide-react';

export function Perfil() {
  const userData = {
    nome: localStorage.getItem('userName') || 'Ana Paula Silva',
    matricula: localStorage.getItem('userMatricula') || '123456',
    email: localStorage.getItem('userEmail') || 'ana.silva@tjma.jus.br',
    telefone: '(98) 98765-4321',
    cargo: localStorage.getItem('userCargo') || 'Analista Judiciário - Área Administrativa',
    lotacao: localStorage.getItem('userLotacao') || 'Diretoria de Recursos Humanos',
    endereco: 'São Luís - MA',
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Meu Perfil</h1>
        <p className="text-[var(--tjma-gray-600)]">Gerencie suas informações pessoais e preferências</p>
      </div>

      {/* Dados Pessoais */}
      <Card variant="elevated">
        <CardHeader>
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Dados Pessoais</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6 pb-6 border-b border-[var(--tjma-gray-200)]">
            <div className="w-24 h-24 rounded-full bg-[var(--tjma-gold)] flex items-center justify-center text-white text-3xl font-semibold">
              {userData.nome.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[var(--tjma-navy-dark)]">{userData.nome}</h2>
              <p className="text-[var(--tjma-gray-600)]">Matrícula: {userData.matricula}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2">Nome Completo</label>
              <Input value={userData.nome} disabled />
            </div>

            <div>
              <label className="block mb-2">Matrícula</label>
              <Input value={userData.matricula} disabled />
            </div>

            <div>
              <label className="block mb-2">
                <Mail className="inline h-4 w-4 mr-1" />
                E-mail Institucional
              </label>
              <Input value={userData.email} disabled />
            </div>

            <div>
              <label className="block mb-2">
                <Phone className="inline h-4 w-4 mr-1" />
                Telefone
              </label>
              <Input value={userData.telefone} type="tel" />
            </div>

            <div>
              <label className="block mb-2">Cargo</label>
              <Input value={userData.cargo} disabled />
            </div>

            <div>
              <label className="block mb-2">Lotação</label>
              <Input value={userData.lotacao} disabled />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Endereço
              </label>
              <Input value={userData.endereco} />
            </div>
          </div>

          <Alert variant="info">
            <strong>Dados Funcionais:</strong> Alterações em dados funcionais (cargo, lotação) devem 
            ser solicitadas através de processo administrativo na DRH.
          </Alert>

          <div className="flex gap-3 pt-4">
            <Button variant="primary">Salvar Alterações</Button>
            <Button variant="outline">Cancelar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Preferências de Notificação */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Preferências de Notificação</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[var(--tjma-gray-50)] rounded-lg">
            <div>
              <h4 className="font-medium text-[var(--tjma-navy-dark)]">Notificações de Protocolo</h4>
              <p className="text-sm text-[var(--tjma-gray-600)]">
                Receber atualizações sobre protocolos administrativos
              </p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between p-4 bg-[var(--tjma-gray-50)] rounded-lg">
            <div>
              <h4 className="font-medium text-[var(--tjma-navy-dark)]">Alertas de Prazo</h4>
              <p className="text-sm text-[var(--tjma-gray-600)]">
                Receber lembretes sobre prazos e pendências
              </p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between p-4 bg-[var(--tjma-gray-50)] rounded-lg">
            <div>
              <h4 className="font-medium text-[var(--tjma-navy-dark)]">Comunicados Institucionais</h4>
              <p className="text-sm text-[var(--tjma-gray-600)]">
                Receber comunicados gerais da DRH
              </p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between p-4 bg-[var(--tjma-gray-50)] rounded-lg">
            <div>
              <h4 className="font-medium text-[var(--tjma-navy-dark)]">Capacitações e Treinamentos</h4>
              <p className="text-sm text-[var(--tjma-gray-600)]">
                Receber informações sobre cursos disponíveis
              </p>
            </div>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        </CardContent>
      </Card>

      {/* Segurança */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Segurança da Conta</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Button variant="outline" className="w-full md:w-auto">
              Alterar Senha
            </Button>
            <p className="text-xs text-[var(--tjma-gray-600)] mt-2">
              Última alteração: 15/01/2026
            </p>
          </div>

          <div className="pt-4 border-t border-[var(--tjma-gray-200)]">
            <h4 className="font-medium text-[var(--tjma-navy-dark)] mb-3">Histórico de Acessos Recentes</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-[var(--tjma-gray-50)] rounded-lg text-sm">
                <span className="text-[var(--tjma-gray-700)]">Hoje, 09:30</span>
                <span className="text-[var(--tjma-gray-600)]">192.168.1.100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[var(--tjma-gray-50)] rounded-lg text-sm">
                <span className="text-[var(--tjma-gray-700)]">Ontem, 14:15</span>
                <span className="text-[var(--tjma-gray-600)]">192.168.1.100</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}