import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Alert } from '../components/ui/alert';
import { ShieldCheck, Lock, Eye, FileText, Database, Users, AlertTriangle } from 'lucide-react';

export function LGPD() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Privacidade e LGPD</h1>
        <p className="text-[var(--tjma-gray-600)]">
          Política de Privacidade e Proteção de Dados Pessoais
        </p>
      </div>

      <Alert variant="info">
        <strong>Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018:</strong> O TJMA está comprometido 
        com a proteção de seus dados pessoais e o cumprimento integral da legislação de proteção de dados.
      </Alert>

      {/* Princípios e Direitos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
              <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Seus Direitos</h3>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-[var(--tjma-gray-700)]">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Confirmação:</strong> Saber se tratamos seus dados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Acesso:</strong> Solicitar cópia dos seus dados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Correção:</strong> Corrigir dados incompletos ou desatualizados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Portabilidade:</strong> Transferir dados para outro prestador</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Informação:</strong> Conhecer agentes de tratamento</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-purple-600" />
              <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Segurança dos Dados</h3>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-[var(--tjma-gray-700)]">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>Criptografia de dados sensíveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>Controle de acesso por perfil</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>Logs de auditoria e rastreabilidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>Backups regulares e seguros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>Treinamento contínuo de equipes</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Dados Tratados */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Database className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Dados Tratados pelo Sistema</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[var(--tjma-navy)] mb-3">Dados Funcionais</h4>
              <ul className="space-y-2 text-sm text-[var(--tjma-gray-700)]">
                <li>• Nome completo</li>
                <li>• Matrícula</li>
                <li>• Cargo e lotação</li>
                <li>• Data de posse</li>
                <li>• Situação funcional</li>
                <li>• Histórico de progressões</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--tjma-navy)] mb-3">Dados de Gestão</h4>
              <ul className="space-y-2 text-sm text-[var(--tjma-gray-700)]">
                <li>• Frequência e jornada</li>
                <li>• Banco de horas</li>
                <li>• Licenças e afastamentos</li>
                <li>• Benefícios concedidos</li>
                <li>• Adicional de qualificação</li>
                <li>• Solicitações administrativas</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Finalidade e Base Legal */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Finalidade e Base Legal</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-[var(--tjma-navy)] mb-2">Finalidade do Tratamento</h4>
            <p className="text-sm text-[var(--tjma-gray-700)]">
              Os dados pessoais são tratados exclusivamente para gestão funcional, cumprimento de obrigações 
              legais e regulatórias do TJMA, execução de políticas públicas, e exercício regular de direitos 
              da Administração Pública.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--tjma-navy)] mb-2">Base Legal</h4>
            <p className="text-sm text-[var(--tjma-gray-700)]">
              O tratamento de dados é realizado com base no Art. 7º, inciso III da LGPD (execução de 
              política pública) e Art. 11, inciso II, alínea 'a' (cumprimento de obrigação legal ou 
              regulatória pela administração pública).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--tjma-navy)] mb-2">Período de Retenção</h4>
            <p className="text-sm text-[var(--tjma-gray-700)]">
              Os dados são mantidos pelo período necessário ao cumprimento das finalidades legais e 
              administrativas, respeitando prazos prescricionais e normas de gestão documental do TJMA.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Compartilhamento */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Compartilhamento de Dados</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[var(--tjma-gray-700)] mb-4">
            Os dados pessoais podem ser compartilhados com:
          </p>
          <ul className="space-y-2 text-sm text-[var(--tjma-gray-700)]">
            <li className="flex items-start gap-2">
              <Eye className="h-4 w-4 text-[var(--tjma-navy)] flex-shrink-0 mt-0.5" />
              <span><strong>Órgãos de controle:</strong> TCE-MA, CNJ, quando exigido por lei</span>
            </li>
            <li className="flex items-start gap-2">
              <Eye className="h-4 w-4 text-[var(--tjma-navy)] flex-shrink-0 mt-0.5" />
              <span><strong>Unidades internas:</strong> DRH, TI, setores administrativos competentes</span>
            </li>
            <li className="flex items-start gap-2">
              <Eye className="h-4 w-4 text-[var(--tjma-navy)] flex-shrink-0 mt-0.5" />
              <span><strong>Prestadores de serviço:</strong> Apenas quando necessário e mediante contrato</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Encarregado de Dados */}
      <Card className="bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] text-white">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-12 w-12 text-[var(--tjma-gold)] flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Encarregado de Proteção de Dados (DPO)</h3>
              <p className="text-sm text-[var(--tjma-gray-200)] mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados pessoais, 
                entre em contato com o Encarregado de Dados do TJMA:
              </p>
              <div className="space-y-1 text-sm">
                <p><strong>E-mail:</strong> dpo@tjma.jus.br</p>
                <p><strong>Telefone:</strong> (98) 3198-1234</p>
                <p><strong>Endereço:</strong> Av. Dom Pedro II, s/n - Centro, São Luís - MA</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alterações na Política */}
      <Alert variant="info">
        <strong>Atualizações:</strong> Esta política de privacidade pode ser atualizada periodicamente. 
        A versão mais recente estará sempre disponível neste módulo. 
        Última atualização: Março de 2026.
      </Alert>
    </div>
  );
}
