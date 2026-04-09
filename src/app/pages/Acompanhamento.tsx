import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Clock, FileText, AlertCircle } from 'lucide-react';

export function Acompanhamento() {
  const processos = [
    {
      id: 1,
      tipo: 'Licença para Tratamento de Saúde',
      protocolo: '2026/001234',
      dataInicio: '20/03/2026',
      status: 'in-analysis',
      etapas: [
        { nome: 'Protocolo Criado', data: '20/03/2026 10:30', concluida: true },
        { nome: 'Análise Documental', data: '20/03/2026 14:15', concluida: true },
        { nome: 'Análise Técnica DRH', data: 'Em andamento', concluida: false },
        { nome: 'Parecer Técnico', data: 'Pendente', concluida: false },
        { nome: 'Homologação', data: 'Pendente', concluida: false },
      ],
    },
    {
      id: 2,
      tipo: 'Abono de Falta',
      protocolo: '2026/000987',
      dataInicio: '15/03/2026',
      status: 'approved',
      etapas: [
        { nome: 'Protocolo Criado', data: '15/03/2026 09:20', concluida: true },
        { nome: 'Análise Documental', data: '15/03/2026 11:45', concluida: true },
        { nome: 'Análise da Chefia', data: '16/03/2026 08:30', concluida: true },
        { nome: 'Homologação DRH', data: '16/03/2026 15:00', concluida: true },
        { nome: 'Concluído', data: '16/03/2026 15:30', concluida: true },
      ],
    },
  ];

  const statusConfig = {
    'in-analysis': { label: 'Em Análise', color: 'text-blue-600', bg: 'bg-blue-50' },
    'approved': { label: 'Aprovado', color: 'text-green-600', bg: 'bg-green-50' },
    'pending': { label: 'Pendente', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Acompanhamento Processual</h1>
        <p className="text-[var(--tjma-gray-600)]">Acompanhe o andamento de suas solicitações</p>
      </div>

      <div className="space-y-6">
        {processos.map((processo) => {
          const status = statusConfig[processo.status as keyof typeof statusConfig];
          
          return (
            <Card key={processo.id} variant="elevated">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-1">{processo.tipo}</h3>
                    <p className="text-sm text-[var(--tjma-gray-600)]">Protocolo: {processo.protocolo}</p>
                  </div>
                  <Badge variant={processo.status === 'approved' ? 'success' : 'info'}>
                    {status.label}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Timeline */}
                  <div className="space-y-4">
                    {processo.etapas.map((etapa, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                            etapa.concluida 
                              ? 'bg-green-100 border-green-500' 
                              : 'bg-[var(--tjma-gray-100)] border-[var(--tjma-gray-300)]'
                          }`}>
                            {etapa.concluida ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : etapa.data === 'Em andamento' ? (
                              <Clock className="h-5 w-5 text-blue-600" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-[var(--tjma-gray-500)]" />
                            )}
                          </div>
                          {index < processo.etapas.length - 1 && (
                            <div className={`w-0.5 h-12 ${
                              etapa.concluida ? 'bg-green-200' : 'bg-[var(--tjma-gray-200)]'
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <h4 className="font-semibold text-[var(--tjma-navy-dark)]">{etapa.nome}</h4>
                          <p className={`text-sm mt-1 ${
                            etapa.data === 'Em andamento' ? 'text-blue-600 font-medium' :
                            etapa.data === 'Pendente' ? 'text-[var(--tjma-gray-500)]' :
                            'text-[var(--tjma-gray-600)]'
                          }`}>
                            {etapa.data}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State para quando não houver processos */}
      {processos.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-16 w-16 text-[var(--tjma-gray-400)] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[var(--tjma-navy-dark)] mb-2">
              Nenhum Processo em Andamento
            </h3>
            <p className="text-sm text-[var(--tjma-gray-600)]">
              Quando você iniciar uma solicitação, ela aparecerá aqui para acompanhamento.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
