import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Users, FileText, Settings, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { label: 'Usuários Ativos', value: '1.247', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Protocolos do Mês', value: '348', icon: FileText, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Pendências', value: '23', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Taxa de Resolução', value: '94%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const duuvidasFrequentes = [
    { pergunta: 'Como solicitar licença médica?', quantidade: 45 },
    { pergunta: 'Qual o prazo para progressão?', quantidade: 38 },
    { pergunta: 'Como funciona o banco de horas?', quantidade: 32 },
    { pergunta: 'Requisitos para teletrabalho?', quantidade: 28 },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Painel Administrativo</h1>
          <p className="text-[var(--tjma-gray-600)]">Gestão de conteúdo e métricas do sistema</p>
        </div>
        <Badge variant="info">Acesso Restrito - DRH</Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[var(--tjma-gray-600)] mb-1">{stat.label}</p>
                    <p className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bg}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Módulos de Gestão */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Gestão de Conteúdo</h3>
            <p className="text-sm text-[var(--tjma-gray-600)]">
              Editar orientações, checklists e textos normativos
            </p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="inline-flex p-3 bg-purple-100 rounded-lg mb-4">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Parâmetros do Sistema</h3>
            <p className="text-sm text-[var(--tjma-gray-600)]">
              Configurar prazos, documentos exigidos e regras
            </p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Relatórios e Métricas</h3>
            <p className="text-sm text-[var(--tjma-gray-600)]">
              Visualizar estatísticas e gargalos processuais
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Dúvidas Frequentes */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Dúvidas Mais Frequentes (Este Mês)</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {duuvidasFrequentes.map((duvida, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[var(--tjma-gray-50)] rounded-lg">
                <span className="text-sm text-[var(--tjma-navy-dark)]">{duvida.pergunta}</span>
                <div className="flex items-center gap-3">
                  <Badge variant="info">{duvida.quantidade} consultas</Badge>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Avisos Administrativos */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-3">
            <Settings className="inline h-5 w-5 mr-2" />
            Importante
          </h3>
          <p className="text-sm text-[var(--tjma-gray-700)]">
            A área administrativa permite apenas gerenciar conteúdo, parâmetros orientativos e regras de 
            pré-validação. <strong>Não há poderes de decisão</strong>. Decisões administrativas são 
            competência exclusiva das autoridades designadas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}