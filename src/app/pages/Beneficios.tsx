import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { DollarSign, Baby, Heart, Stethoscope, CheckCircle, Info } from 'lucide-react';

export function Beneficios() {
  const beneficios = [
    {
      id: 'natalidade',
      titulo: 'Auxílio Natalidade',
      descricao: 'Valor único por nascimento de filho',
      valor: 'R$ 1.200,00',
      icon: Baby,
      elegivel: false,
      requisitos: ['Servidor ativo', 'Certidão de nascimento', 'Solicitação em até 90 dias'],
      color: 'bg-pink-50 text-pink-600 border-pink-200',
    },
    {
      id: 'funeral',
      titulo: 'Auxílio Funeral',
      descricao: 'Reembolso de despesas com funeral',
      valor: 'Até R$ 3.500,00',
      icon: Heart,
      elegivel: false,
      requisitos: ['Certidão de óbito', 'Notas fiscais', 'Comprovação de parentesco'],
      color: 'bg-gray-50 text-gray-600 border-gray-200',
    },
    {
      id: 'saude',
      titulo: 'Auxílio Saúde',
      descricao: 'Plano de assistência à saúde',
      valor: 'Conforme plano',
      icon: Stethoscope,
      elegivel: true,
      requisitos: ['Servidor ativo', 'Adesão ao plano', 'Coparticipação mensal'],
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
  ];

  const historicoSolicitacoes = [
    {
      beneficio: 'Auxílio Saúde',
      data: '15/01/2024',
      status: 'approved',
      valor: 'Plano Bronze',
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Benefícios e Indenizações</h1>
        <p className="text-[var(--tjma-gray-600)]">Consulte e solicite benefícios disponíveis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beneficios.map((beneficio) => {
          const Icon = beneficio.icon;
          return (
            <Card key={beneficio.id} className={`border-l-4 ${beneficio.color.replace('bg-', 'border-l-').replace('-50', '-500')}`}>
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${beneficio.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--tjma-navy-dark)] mb-2">
                  {beneficio.titulo}
                </h3>
                <p className="text-sm text-[var(--tjma-gray-600)] mb-3">{beneficio.descricao}</p>
                <div className="bg-[var(--tjma-gray-50)] rounded-lg p-3 mb-4">
                  <p className="text-lg font-bold text-[var(--tjma-navy)]">{beneficio.valor}</p>
                </div>

                {beneficio.elegivel ? (
                  <Badge variant="success" className="mb-3">
                    <CheckCircle className="h-3 w-3 mr-1 inline" />
                    Elegível
                  </Badge>
                ) : (
                  <Badge variant="default" className="mb-3">
                    <Info className="h-3 w-3 mr-1 inline" />
                    Consultar requisitos
                  </Badge>
                )}

                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-[var(--tjma-gray-700)]">Requisitos:</p>
                  <ul className="text-xs text-[var(--tjma-gray-600)] space-y-1">
                    {beneficio.requisitos.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[var(--tjma-navy)]">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant={beneficio.elegivel ? 'primary' : 'outline'} size="sm" className="w-full">
                  {beneficio.elegivel ? 'Solicitar' : 'Ver Detalhes'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Histórico de Solicitações</h3>
        </CardHeader>
        <CardContent>
          {historicoSolicitacoes.length > 0 ? (
            <div className="space-y-3">
              {historicoSolicitacoes.map((sol, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-[var(--tjma-gray-50)] rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[var(--tjma-navy-dark)]">{sol.beneficio}</h4>
                    <p className="text-sm text-[var(--tjma-gray-600)]">Solicitado em {sol.data}</p>
                    <p className="text-sm text-[var(--tjma-navy)] mt-1">{sol.valor}</p>
                  </div>
                  <Badge variant="success">Ativo</Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[var(--tjma-gray-500)] py-8">
              Nenhuma solicitação registrada
            </p>
          )}
        </CardContent>
      </Card>

      <Alert variant="info">
        <strong>Aviso:</strong> A concessão de benefícios está sujeita à análise técnica da DRH 
        e comprovação documental dos requisitos exigidos.
      </Alert>
    </div>
  );
}