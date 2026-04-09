import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { FolderOpen, FileText, ExternalLink } from 'lucide-react';

export function Protocolo() {
  const protocolos = [
    {
      numero: '2026/001234',
      tipo: 'Licença para Tratamento de Saúde',
      data: '20/03/2026',
      status: 'in-analysis',
      descricao: 'Solicitação de licença de 5 dias',
    },
    {
      numero: '2026/000987',
      tipo: 'Abono de Falta',
      data: '15/03/2026',
      status: 'approved',
      descricao: 'Abono de falta do dia 18/03/2026',
    },
    {
      numero: '2025/005432',
      tipo: 'Adicional de Qualificação',
      data: '10/12/2025',
      status: 'completed',
      descricao: 'Solicitação de AQ - Mestrado',
    },
  ];

  const statusConfig = {
    'in-analysis': { label: 'Em Análise', variant: 'info' as const },
    'approved': { label: 'Aprovado', variant: 'success' as const },
    'completed': { label: 'Concluído', variant: 'success' as const },
    'pending': { label: 'Pendente', variant: 'warning' as const },
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Protocolo Administrativo</h1>
        <p className="text-[var(--tjma-gray-600)]">Acompanhe seus protocolos e documentos</p>
      </div>

      <Alert variant="info">
        <strong>Integração Futura:</strong> Este módulo será integrado ao sistema Digidoc do TJMA para 
        protocolização e tramitação oficial de documentos.
      </Alert>

      <div className="grid grid-cols-1 gap-6">
        {protocolos.map((protocolo) => {
          const status = statusConfig[protocolo.status as keyof typeof statusConfig];
          return (
            <Card key={protocolo.numero} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <FolderOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--tjma-navy-dark)]">{protocolo.tipo}</h3>
                        <p className="text-sm text-[var(--tjma-gray-600)]">Protocolo: {protocolo.numero}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--tjma-gray-700)] mb-3">{protocolo.descricao}</p>
                    <p className="text-xs text-[var(--tjma-gray-500)]">Protocolado em {protocolo.data}</p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <Badge variant={status.variant}>{status.label}</Badge>
                    <button className="text-sm text-[var(--tjma-navy)] hover:text-[var(--tjma-gold)] flex items-center gap-1">
                      Ver Detalhes
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-[var(--tjma-gray-50)]">
        <CardContent className="p-8 text-center">
          <FileText className="h-16 w-16 text-[var(--tjma-gray-400)] mx-auto mb-4" />
          <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Integração com Digidoc</h3>
          <p className="text-sm text-[var(--tjma-gray-600)] max-w-2xl mx-auto">
            Para protocolização oficial de novos documentos, o sistema será integrado ao Digidoc. 
            A estrutura já está preparada para essa integração futura.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
