import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { Input } from '../components/ui/input';
import { Clock, Plus, Upload, CheckCircle, AlertCircle, Calendar, TrendingUp, FileText } from 'lucide-react';

export function Frequencia() {
  const [showSolicitacao, setShowSolicitacao] = useState(false);
  const [formData, setFormData] = useState({
    data: '',
    tipo: '',
    justificativa: '',
  });

  const bancoHoras = {
    saldoAtual: '+12:30',
    creditosMes: '+16:00',
    debitosMes: '-03:30',
    dataExpiracao: '15/12/2026',
    creditosProximosVencer: '+08:00',
  };

  const historicoMensal = [
    { mes: 'Março/2026', creditos: '+16:00', debitos: '-03:30', saldo: '+12:30' },
    { mes: 'Fevereiro/2026', creditos: '+12:00', debitos: '-05:00', saldo: '+07:00' },
    { mes: 'Janeiro/2026', creditos: '+10:00', debitos: '-02:00', saldo: '+08:00' },
  ];

  const pendencias = [
    {
      id: 1,
      data: '18/03/2026',
      tipo: 'Atraso',
      duracao: '00:30',
      status: 'pending',
      prazo: '25/03/2026',
    },
    {
      id: 2,
      data: '20/03/2026',
      tipo: 'Falta não justificada',
      duracao: '08:00',
      status: 'pending',
      prazo: '27/03/2026',
    },
  ];

  const solicitacoes = [
    {
      id: 1,
      data: '15/03/2026',
      tipo: 'Abono de falta',
      justificativa: 'Consulta médica emergencial',
      status: 'approved',
      dataAnalise: '16/03/2026',
    },
    {
      id: 2,
      data: '10/03/2026',
      tipo: 'Ajuste de horário',
      justificativa: 'Problema técnico no ponto eletrônico',
      status: 'in-analysis',
      dataAnalise: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitação enviada com sucesso! Aguarde a análise da chefia.');
    setShowSolicitacao(false);
    setFormData({ data: '', tipo: '', justificativa: '' });
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Frequência e Banco de Horas</h1>
          <p className="text-[var(--tjma-gray-600)]">
            Gerencie sua jornada de trabalho e acompanhe saldos
          </p>
        </div>
        <Button onClick={() => setShowSolicitacao(!showSolicitacao)} variant="primary">
          <Plus className="h-5 w-5 mr-2" />
          Nova Solicitação
        </Button>
      </div>

      {/* Alertas de Prazo */}
      {pendencias.length > 0 && (
        <Alert variant="warning" title="Atenção: Pendências de Justificativa">
          Você possui {pendencias.length} ocorrências pendentes de justificativa. 
          Envie os documentos antes do prazo para evitar desconto em folha.
        </Alert>
      )}

      {/* Saldo de Banco de Horas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card variant="elevated" className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-green-700 mb-1">Saldo Atual</p>
                <p className="text-3xl font-bold text-green-600">{bancoHoras.saldoAtual}</p>
              </div>
              <div className="p-3 bg-green-200 rounded-lg">
                <Clock className="h-6 w-6 text-green-700" />
              </div>
            </div>
            <p className="text-xs text-green-700">Atualizado em tempo real</p>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-[var(--tjma-gray-600)] mb-1">Créditos do Mês</p>
                <p className="text-2xl font-semibold text-green-600">{bancoHoras.creditosMes}</p>
              </div>
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-[var(--tjma-gray-600)] mb-1">Débitos do Mês</p>
                <p className="text-2xl font-semibold text-red-600">{bancoHoras.debitosMes}</p>
              </div>
              <TrendingUp className="h-6 w-6 text-red-600 rotate-180" />
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated" className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardContent className="p-6">
            <div className="mb-2">
              <p className="text-sm text-amber-700 mb-1">Créditos a Vencer</p>
              <p className="text-2xl font-semibold text-amber-600">{bancoHoras.creditosProximosVencer}</p>
            </div>
            <p className="text-xs text-amber-700">Expira em {bancoHoras.dataExpiracao}</p>
          </CardContent>
        </Card>
      </div>

      {/* Formulário de Nova Solicitação */}
      {showSolicitacao && (
        <Card variant="bordered">
          <CardHeader>
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Nova Solicitação de Ajuste</h3>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2">Data da Ocorrência</label>
                  <Input
                    type="date"
                    value={formData.data}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2">Tipo de Solicitação</label>
                  <select
                    className="w-full px-4 py-2.5 bg-white border border-[var(--tjma-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-gold)] focus:border-transparent"
                    value={formData.tipo}
                    onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="abono">Abono de Falta</option>
                    <option value="ajuste">Ajuste de Horário</option>
                    <option value="compensacao">Compensação de Banco de Horas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2">Justificativa</label>
                <textarea
                  className="w-full px-4 py-2.5 bg-white border border-[var(--tjma-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-gold)] focus:border-transparent min-h-[100px]"
                  value={formData.justificativa}
                  onChange={(e) => setFormData({ ...formData, justificativa: e.target.value })}
                  placeholder="Descreva a situação que motivou a solicitação..."
                  required
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Upload className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Documentos Comprobatórios</h4>
                    <p className="text-sm text-blue-700 mb-3">
                      Anexe documentos que comprovem a justificativa (atestado médico, comprovante, etc.)
                    </p>
                    <Button type="button" variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Anexar Documento
                    </Button>
                  </div>
                </div>
              </div>

              <Alert variant="info">
                <strong>Atenção:</strong> A solicitação será encaminhada para análise da chefia imediata. 
                O prazo para resposta é de até 5 dias úteis.
              </Alert>

              <div className="flex gap-3">
                <Button type="submit" variant="primary">
                  Enviar Solicitação
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowSolicitacao(false)}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Pendências */}
      {pendencias.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Pendências de Justificativa</h3>
              <Badge variant="warning">{pendencias.length} pendentes</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendencias.map((pend) => (
                <div key={pend.id} className="flex items-start justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                      <h4 className="font-semibold text-[var(--tjma-navy-dark)]">{pend.tipo}</h4>
                      <Badge variant="warning">Urgente</Badge>
                    </div>
                    <div className="flex gap-6 text-sm text-[var(--tjma-gray-600)]">
                      <span>
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Data: {pend.data}
                      </span>
                      <span>
                        <Clock className="inline h-4 w-4 mr-1" />
                        Duração: {pend.duracao}
                      </span>
                      <span className="text-amber-700 font-medium">
                        Prazo: {pend.prazo}
                      </span>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">
                    Justificar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Histórico de Solicitações */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Histórico de Solicitações</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {solicitacoes.map((sol) => {
              const statusConfig = {
                approved: { badge: <Badge variant="success">Aprovado</Badge>, icon: <CheckCircle className="h-5 w-5 text-green-600" /> },
                'in-analysis': { badge: <Badge variant="info">Em análise</Badge>, icon: <AlertCircle className="h-5 w-5 text-blue-600" /> },
                rejected: { badge: <Badge variant="error">Rejeitado</Badge>, icon: <AlertCircle className="h-5 w-5 text-red-600" /> },
              };
              
              const config = statusConfig[sol.status as keyof typeof statusConfig];
              
              return (
                <div key={sol.id} className="flex items-start gap-4 p-4 bg-[var(--tjma-gray-50)] rounded-lg">
                  <div className="flex-shrink-0 mt-1">{config.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-[var(--tjma-navy-dark)]">{sol.tipo}</h4>
                        <p className="text-sm text-[var(--tjma-gray-600)] mt-1">{sol.justificativa}</p>
                      </div>
                      {config.badge}
                    </div>
                    <div className="flex gap-4 text-xs text-[var(--tjma-gray-500)]">
                      <span>Solicitação: {sol.data}</span>
                      {sol.dataAnalise && <span>Análise: {sol.dataAnalise}</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Histórico Mensal */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Histórico Mensal</h3>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--tjma-gray-200)]">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--tjma-navy-dark)]">Período</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--tjma-navy-dark)]">Créditos</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--tjma-navy-dark)]">Débitos</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--tjma-navy-dark)]">Saldo</th>
                </tr>
              </thead>
              <tbody>
                {historicoMensal.map((hist, index) => (
                  <tr key={index} className="border-b border-[var(--tjma-gray-100)] hover:bg-[var(--tjma-gray-50)]">
                    <td className="py-3 px-4 text-sm">{hist.mes}</td>
                    <td className="py-3 px-4 text-sm text-green-600 font-medium">{hist.creditos}</td>
                    <td className="py-3 px-4 text-sm text-red-600 font-medium">{hist.debitos}</td>
                    <td className="py-3 px-4 text-sm font-semibold">{hist.saldo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Base Legal */}
      <Alert variant="info">
        <FileText className="inline h-4 w-4 mr-1" />
        <strong>Base Normativa:</strong> Resolução GP nº 41/2018 - Normas de frequência e jornada de trabalho. 
        Os créditos de banco de horas expiram após 12 meses da data de acúmulo.
      </Alert>
    </div>
  );
}