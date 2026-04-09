import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { Calendar, Award, TrendingUp, BookOpen, CheckCircle, Circle } from 'lucide-react';

export function VidaFuncional() {
  const userData = {
    nome: localStorage.getItem('userName') || 'Ana Paula Silva',
    matricula: localStorage.getItem('userMatricula') || '123456',
    cargo: 'Analista Judiciário - Área Administrativa',
    lotacao: 'Diretoria de Recursos Humanos',
    dataPosse: '15/04/2022',
    padraoAtual: 'Padrão III',
    situacao: 'Ativo Permanente',
    estagioPercentual: 67,
    proximaProgressao: '15/04/2027',
    mesesRestantes: 8,
  };

  const timeline = [
    { date: '15/04/2022', title: 'Posse no Cargo', status: 'completed', description: 'Analista Judiciário - Padrão I' },
    { date: '15/04/2023', title: 'Primeira Progressão', status: 'completed', description: 'Padrão I → Padrão II' },
    { date: '15/04/2024', title: 'Segunda Progressão', status: 'completed', description: 'Padrão II → Padrão III' },
    { date: '15/04/2025', title: 'Conclusão Estágio Probatório', status: 'in-progress', description: '67% concluído' },
    { date: '15/04/2027', title: 'Próxima Progressão', status: 'pending', description: 'Padrão III → Padrão IV' },
  ];

  const capacitacoes = [
    { titulo: 'Gestão Pública', cargaHoraria: '40h', status: 'completed', data: '10/2023' },
    { titulo: 'Processo Administrativo', cargaHoraria: '30h', status: 'completed', data: '03/2024' },
    { titulo: 'LGPD no Serviço Público', cargaHoraria: '20h', status: 'in-progress', data: 'Em andamento' },
    { titulo: 'Gestão de Pessoas', cargaHoraria: '40h', status: 'pending', data: 'Pendente' },
  ];

  const requisitosProgressao = [
    { item: 'Tempo mínimo de 3 anos no padrão', status: 'completed' },
    { item: 'Capacitação de 80h (mínimo)', status: 'completed' },
    { item: 'Avaliação de desempenho satisfatória', status: 'completed' },
    { item: 'Ausência de penalidades', status: 'completed' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Minha Vida Funcional</h1>
        <p className="text-[var(--tjma-gray-600)]">Acompanhe sua trajetória e evolução no TJMA</p>
      </div>

      {/* Dados Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="elevated">
          <CardHeader>
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Dados Funcionais</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[var(--tjma-gray-600)]">Nome</label>
                <p className="font-medium text-[var(--tjma-navy-dark)]">{userData.nome}</p>
              </div>
              <div>
                <label className="text-xs text-[var(--tjma-gray-600)]">Matrícula</label>
                <p className="font-medium text-[var(--tjma-navy-dark)]">{userData.matricula}</p>
              </div>
            </div>
            <div>
              <label className="text-xs text-[var(--tjma-gray-600)]">Cargo</label>
              <p className="font-medium text-[var(--tjma-navy-dark)]">{userData.cargo}</p>
            </div>
            <div>
              <label className="text-xs text-[var(--tjma-gray-600)]">Lotação</label>
              <p className="font-medium text-[var(--tjma-navy-dark)]">{userData.lotacao}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[var(--tjma-gray-600)]">Data de Posse</label>
                <p className="font-medium text-[var(--tjma-navy-dark)]">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  {userData.dataPosse}
                </p>
              </div>
              <div>
                <label className="text-xs text-[var(--tjma-gray-600)]">Situação</label>
                <p><Badge variant="success">{userData.situacao}</Badge></p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="elevated" className="bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] text-white">
          <CardHeader>
            <h3 className="font-semibold text-white">Padrão Atual</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-6">
              <Award className="h-16 w-16 mx-auto mb-4 text-[var(--tjma-gold)]" />
              <p className="text-4xl font-bold text-[var(--tjma-gold)]">{userData.padraoAtual}</p>
              <p className="text-sm text-[var(--tjma-gray-200)] mt-2">Desde 15/04/2024</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Próxima Progressão</span>
                <span className="text-sm font-semibold text-[var(--tjma-gold)]">{userData.mesesRestantes} meses</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-[var(--tjma-gold)]" />
                <span>{userData.proximaProgressao}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estágio Probatório */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Estágio Probatório</h3>
            <Badge variant="info">{userData.estagioPercentual}% Concluído</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-[var(--tjma-gray-600)]">Progresso</span>
                <span className="font-semibold text-[var(--tjma-navy-dark)]">
                  {userData.estagioPercentual}% de 100%
                </span>
              </div>
              <div className="h-3 bg-[var(--tjma-gray-200)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--tjma-navy)] to-[var(--tjma-gold)] rounded-full transition-all"
                  style={{ width: `${userData.estagioPercentual}%` }}
                />
              </div>
            </div>
            <Alert variant="info">
              <p className="text-sm">
                Conclusão prevista para <strong>15/04/2025</strong>. 
                São realizadas avaliações semestrais de desempenho durante o período probatório.
              </p>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Evolutiva */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Linha do Tempo Funcional</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {timeline.map((item, index) => {
              const isCompleted = item.status === 'completed';
              const isInProgress = item.status === 'in-progress';
              
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      isCompleted ? 'bg-green-100 border-green-500' :
                      isInProgress ? 'bg-blue-100 border-blue-500' :
                      'bg-[var(--tjma-gray-100)] border-[var(--tjma-gray-300)]'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Circle className="h-5 w-5 text-[var(--tjma-gray-500)]" />
                      )}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className={`w-0.5 h-16 ${
                        isCompleted ? 'bg-green-200' : 'bg-[var(--tjma-gray-200)]'
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-[var(--tjma-navy-dark)]">{item.title}</h4>
                      {isInProgress && <Badge variant="info">Em andamento</Badge>}
                      {isCompleted && <Badge variant="success">Concluído</Badge>}
                    </div>
                    <p className="text-sm text-[var(--tjma-gray-600)] mb-1">{item.description}</p>
                    <p className="text-xs text-[var(--tjma-gray-500)]">
                      <Calendar className="inline h-3 w-3 mr-1" />
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Requisitos para Progressão */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Requisitos para Próxima Progressão</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {requisitosProgressao.map((req, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-[var(--tjma-gray-50)] rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--tjma-navy-dark)]">{req.item}</span>
                </div>
              ))}
            </div>
            <Alert variant="success" className="mt-4">
              Todos os requisitos foram atendidos! Você está apto(a) para a progressão em {userData.proximaProgressao}.
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">
              <BookOpen className="inline h-5 w-5 mr-2" />
              Trilha de Capacitações
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {capacitacoes.map((cap, index) => {
                const statusColors = {
                  completed: 'bg-green-50 border-green-200',
                  'in-progress': 'bg-blue-50 border-blue-200',
                  pending: 'bg-[var(--tjma-gray-100)] border-[var(--tjma-gray-200)]',
                };
                
                const statusBadges = {
                  completed: <Badge variant="success">Concluída</Badge>,
                  'in-progress': <Badge variant="info">Em andamento</Badge>,
                  pending: <Badge variant="default">Pendente</Badge>,
                };
                
                return (
                  <div key={index} className={`p-3 rounded-lg border ${statusColors[cap.status as keyof typeof statusColors]}`}>
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-medium text-[var(--tjma-navy-dark)] text-sm">{cap.titulo}</h4>
                      {statusBadges[cap.status as keyof typeof statusBadges]}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[var(--tjma-gray-600)]">
                      <span>{cap.cargaHoraria}</span>
                      <span>•</span>
                      <span>{cap.data}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Institutional Notice */}
      <Alert variant="info">
        <strong>Informação Importante:</strong> Os dados exibidos são de caráter informativo. 
        Para efeitos oficiais, consulte sempre seu registro funcional junto à DRH.
      </Alert>
    </div>
  );
}