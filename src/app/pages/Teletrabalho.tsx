import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { 
  Wifi, 
  CheckCircle, 
  XCircle, 
  Info, 
  FileText, 
  Scale, 
  Shield, 
  Users, 
  TrendingUp,
  AlertTriangle,
  BookOpen,
  Gavel
} from 'lucide-react';

export function Teletrabalho() {
  const [checkResult, setCheckResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'elegibilidade' | 'normativo' | 'solicitar'>('elegibilidade');

  const criterios = [
    { id: 'probatorio', label: 'Não estar em estágio probatório', status: false, peso: 'eliminatório' },
    { id: 'chefia', label: 'Atividade compatível com mensuração objetiva', status: true, peso: 'eliminatório' },
    { id: 'penalidade', label: 'Ausência de penalidade nos últimos 24 meses', status: true, peso: 'eliminatório' },
    { id: 'desempenho', label: 'Avaliação de desempenho satisfatória', status: true, peso: 'classificatório' },
    { id: 'infraestrutura', label: 'Possuir infraestrutura adequada', status: true, peso: 'classificatório' },
  ];

  const handleVerificar = () => {
    const eliminatorios = criterios.filter(c => c.peso === 'eliminatório');
    const todosEliminatoriosOk = eliminatorios.every(c => c.status);
    
    setCheckResult({
      elegivel: todosEliminatoriosOk,
      criteriosAtendidos: criterios.filter(c => c.status).length,
      totalCriterios: criterios.length,
    });
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Principal */}
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Regime de Teletrabalho</h1>
        <p className="text-[var(--tjma-gray-600)]">
          Modalidade de trabalho à distância no Poder Judiciário do Estado do Maranhão
        </p>
      </div>

      {/* Tabs de Navegação */}
      <div className="border-b border-[var(--tjma-gray-200)]">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('elegibilidade')}
            className={`pb-3 px-2 font-medium text-sm transition-colors border-b-2 ${
              activeTab === 'elegibilidade'
                ? 'border-[var(--tjma-navy)] text-[var(--tjma-navy)]'
                : 'border-transparent text-[var(--tjma-gray-600)] hover:text-[var(--tjma-navy)]'
            }`}
          >
            <Wifi className="inline h-4 w-4 mr-2" />
            Elegibilidade
          </button>
          <button
            onClick={() => setActiveTab('normativo')}
            className={`pb-3 px-2 font-medium text-sm transition-colors border-b-2 ${
              activeTab === 'normativo'
                ? 'border-[var(--tjma-navy)] text-[var(--tjma-navy)]'
                : 'border-transparent text-[var(--tjma-gray-600)] hover:text-[var(--tjma-navy)]'
            }`}
          >
            <FileText className="inline h-4 w-4 mr-2" />
            Fundamentação Normativa
          </button>
          <button
            onClick={() => setActiveTab('solicitar')}
            className={`pb-3 px-2 font-medium text-sm transition-colors border-b-2 ${
              activeTab === 'solicitar'
                ? 'border-[var(--tjma-navy)] text-[var(--tjma-navy)]'
                : 'border-transparent text-[var(--tjma-gray-600)] hover:text-[var(--tjma-navy)]'
            }`}
          >
            <BookOpen className="inline h-4 w-4 mr-2" />
            Como Solicitar
          </button>
        </div>
      </div>

      {/* Conteúdo por Aba */}
      {activeTab === 'elegibilidade' && (
        <div className="space-y-8">
          {/* Conceito Institucional */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Conceito de Teletrabalho no Poder Judiciário
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                O teletrabalho é a modalidade de trabalho executada de forma remota, preponderantemente fora das 
                dependências físicas do Tribunal, com a utilização de tecnologias da informação e comunicação, 
                nos termos da <strong>Resolução CNJ nº 227/2016</strong>, com as alterações introduzidas pelas 
                Resoluções nº 298/2019, nº 371/2021, nº 375/2021 e nº 481/2022, e atualmente regulamentada pela 
                <strong> Instrução Normativa CNJ nº 98/2024</strong>.
              </p>
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                No âmbito do Tribunal de Justiça do Maranhão, o regime de teletrabalho é disciplinado pela 
                <strong> Resolução GP nº 99/2020</strong>, com as disposições complementares estabelecidas pela 
                <strong> Resolução GP nº 88/2022</strong> (que trata da produtividade superior) e pela 
                <strong> Resolução GP nº 91/2020</strong> (que regulamenta as condições especiais de trabalho).
              </p>
              
              <Alert variant="warning">
                <AlertTriangle className="inline h-4 w-4 mr-1" />
                <strong>Importante:</strong> O teletrabalho é <strong>facultativo</strong> e não constitui direito subjetivo 
                do servidor, dependendo de prévia autorização da Administração e da chefia imediata, considerando o interesse 
                público, a natureza das atividades e a capacidade de mensuração objetiva de desempenho.
              </Alert>
            </CardContent>
          </Card>

          {/* Critérios de Elegibilidade */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Critérios de Elegibilidade
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-[var(--tjma-cream)] border border-[var(--tjma-gold)]/30 rounded-lg p-5">
                <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-3 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Atualização Normativa Recente
                </h3>
                <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed mb-3">
                  A <strong>Instrução Normativa CNJ nº 98/2024</strong> trouxe importantes atualizações sobre elegibilidade, 
                  estabelecendo que a análise não é automática e deve ser individualizada pela Administração, considerando:
                </p>
                <ul className="space-y-2 text-sm text-[var(--tjma-gray-700)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--tjma-navy)] font-bold">•</span>
                    <span><strong>Natureza da atividade:</strong> compatibilidade com trabalho remoto e mensuração de resultados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--tjma-navy)] font-bold">•</span>
                    <span><strong>Desempenho anterior:</strong> histórico funcional satisfatório</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--tjma-navy)] font-bold">•</span>
                    <span><strong>Capacidade de autogestão:</strong> demonstração de autonomia e responsabilidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--tjma-navy)] font-bold">•</span>
                    <span><strong>Interesse da Administração:</strong> necessidade e conveniência do serviço público</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-semibold text-[var(--tjma-navy-dark)] mt-6">Requisitos Gerais</h3>
              
              <div className="space-y-4">
                {criterios.map((criterio) => (
                  <div key={criterio.id} className="flex items-start gap-4 p-4 bg-[var(--tjma-gray-50)] rounded-lg border border-[var(--tjma-gray-200)]">
                    <div className="flex-shrink-0 mt-1">
                      {criterio.status ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium text-[var(--tjma-navy-dark)]">{criterio.label}</h4>
                        <Badge variant={criterio.peso === 'eliminatório' ? 'error' : 'info'}>
                          {criterio.peso === 'eliminatório' ? 'Eliminatório' : 'Classificatório'}
                        </Badge>
                      </div>
                      <p className="text-sm text-[var(--tjma-gray-600)]">
                        {criterio.status ? 'Critério atendido' : 'Critério não atendido'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button onClick={handleVerificar} variant="secondary" className="w-full" size="lg">
                <CheckCircle className="mr-2 h-5 w-5" />
                Verificar Pré-Elegibilidade
              </Button>

              {checkResult && (
                <div className={`rounded-lg p-6 border-2 ${
                  checkResult.elegivel 
                    ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-300' 
                    : 'bg-gradient-to-br from-red-50 to-red-100 border-red-300'
                }`}>
                  <div className="flex items-start gap-4">
                    {checkResult.elegivel ? (
                      <CheckCircle className="h-12 w-12 text-green-600 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-12 w-12 text-red-600 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h4 className={`text-xl font-semibold mb-2 ${
                        checkResult.elegivel ? 'text-green-900' : 'text-red-900'
                      }`}>
                        {checkResult.elegivel ? 'Pré-Elegibilidade Atendida' : 'Pré-Elegibilidade Não Atendida'}
                      </h4>
                      <p className={`text-sm mb-3 leading-relaxed ${
                        checkResult.elegivel ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {checkResult.elegivel 
                          ? 'Você atende aos critérios eliminatórios preliminares. A análise definitiva será realizada pela chefia imediata e pela Administração, considerando a natureza das atividades e o interesse institucional.'
                          : 'Você não atende a todos os critérios eliminatórios. A elegibilidade definitiva depende de análise individual pela Administração.'}
                      </p>
                      <p className="text-sm font-medium">
                        Critérios atendidos: <strong>{checkResult.criteriosAtendidos}</strong> de <strong>{checkResult.totalCriterios}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <Alert variant="info">
                <Shield className="inline h-4 w-4 mr-1" />
                <strong>Decisão da Chefia Imediata:</strong> A chefia imediata possui competência exclusiva para 
                definir, autorizar, monitorar e revogar o regime de teletrabalho a qualquer momento, conforme 
                previsto na Resolução CNJ nº 227/2016, art. 3º, §2º.
              </Alert>
            </CardContent>
          </Card>

          {/* Hipóteses de Impedimento */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-red-600" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Hipóteses de Impedimento
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--tjma-gray-700)] leading-relaxed mb-4">
                Nos termos da legislação aplicável, não podem ser autorizados ao regime de teletrabalho:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900 mb-1">Servidores em estágio probatório</h4>
                    <p className="text-sm text-red-800">
                      A consolidação funcional requer presença física para avaliação adequada de desempenho.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900 mb-1">Atividades incompatíveis com mensuração objetiva</h4>
                    <p className="text-sm text-red-800">
                      Funções que não permitem avaliação clara de produtividade e resultados mensuráveis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900 mb-1">Servidores com penalidade administrativa vigente</h4>
                    <p className="text-sm text-red-800">
                      Penalidades aplicadas nos últimos 24 meses impedem a adesão ao regime remoto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900 mb-1">Atividades que exigem presença física obrigatória</h4>
                    <p className="text-sm text-red-800">
                      Atendimento ao público, gestão de documentos físicos sigilosos, entre outras.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regras de Produtividade */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Regras de Produtividade
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                A <strong>Resolução GP nº 88/2022 do TJMA</strong> estabelece que servidores em regime de teletrabalho 
                devem apresentar <strong>produtividade superior</strong> em relação ao regime presencial, mediante 
                estabelecimento de metas pactuadas e monitoradas periodicamente.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h3 className="font-semibold text-blue-900 mb-3">Parâmetros de Acompanhamento</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Metas individuais:</strong> definidas pela chefia imediata conforme natureza da atividade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Avaliação periódica:</strong> mensuração quantitativa e qualitativa do desempenho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Relatórios de atividades:</strong> documentação regular dos resultados alcançados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Comparativo de desempenho:</strong> análise em relação ao período presencial</span>
                  </li>
                </ul>
              </div>

              <Alert variant="warning">
                <AlertTriangle className="inline h-4 w-4 mr-1" />
                <strong>Atenção:</strong> O não cumprimento das metas estabelecidas pode resultar em revogação imediata 
                do regime de teletrabalho, com retorno obrigatório ao trabalho presencial.
              </Alert>
            </CardContent>
          </Card>

          {/* Condições Especiais de Trabalho */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Condições Especiais de Trabalho
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                A <strong>Resolução CNJ nº 343/2020</strong> e a <strong>Resolução CNJ nº 503/2023</strong> asseguram 
                tratamento prioritário e diferenciado a servidores e magistrados que se encontrem em condições especiais, 
                em consonância com a <strong>Lei nº 13.146/2015 (Lei Brasileira de Inclusão)</strong>.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Grupos Prioritários
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-purple-900">Servidores com deficiência</h4>
                      <p className="text-sm text-purple-800">
                        Possuem prioridade na concessão de teletrabalho, com garantia de adaptações razoáveis e 
                        tecnologias assistivas, conforme art. 27 da Lei nº 13.146/2015.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-purple-900">Servidores com dependentes com deficiência</h4>
                      <p className="text-sm text-purple-800">
                        Servidores responsáveis por dependente com deficiência (filho, cônjuge, companheiro ou dependente 
                        sob sua guarda) possuem direito a condições especiais de trabalho, nos termos da Resolução GP nº 91/2020 do TJMA.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-purple-900">Gestantes e lactantes</h4>
                      <p className="text-sm text-purple-800">
                        Proteção especial conforme legislação trabalhista e previdenciária aplicável ao serviço público.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-purple-900">Servidores com doenças crônicas graves</h4>
                      <p className="text-sm text-purple-800">
                        Mediante comprovação médica oficial, podem ser enquadrados em regime especial de trabalho.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert variant="info">
                <Info className="inline h-4 w-4 mr-1" />
                <strong>Fundamentação Constitucional:</strong> O tratamento prioritário está amparado nos princípios 
                da dignidade da pessoa humana (CF, art. 1º, III), igualdade material (CF, art. 5º, caput) e proteção 
                da pessoa com deficiência (CF, art. 227, §1º, II, e art. 244).
              </Alert>
            </CardContent>
          </Card>

          {/* Compatibilidade entre Direitos */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Compatibilidade entre Teletrabalho e Carga Horária Reduzida
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                A legislação aplicável não estabelece vedação expressa à cumulação do regime de teletrabalho com 
                outros direitos funcionais, como a carga horária reduzida prevista para responsáveis por dependentes 
                com deficiência.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h3 className="font-semibold text-amber-900 mb-3">Análise Administrativa Individualizada</h3>
                <p className="text-sm text-amber-800 mb-3">
                  A Administração do TJMA deve realizar análise caso a caso, considerando:
                </p>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Natureza da atividade:</strong> compatibilidade técnica com ambos os regimes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Interesse público:</strong> não prejuízo ao serviço institucional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Ajuste de metas:</strong> adequação da produtividade esperada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Enquadramento jurídico:</strong> possibilidade de tratamento como condição especial de trabalho</span>
                  </li>
                </ul>
              </div>

              <Alert variant="success">
                <CheckCircle className="inline h-4 w-4 mr-1" />
                <strong>Possibilidade de Cumulação:</strong> Não existe regra absoluta que impeça a cumulação. 
                A decisão depende de análise técnica pela chefia imediata e pela Administração, respeitados os 
                princípios da razoabilidade, proporcionalidade e eficiência administrativa (CF, art. 37, caput).
              </Alert>
            </CardContent>
          </Card>

          {/* Modalidades de Teletrabalho */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
                  <Wifi className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Teletrabalho Parcial</h3>
                <p className="text-sm text-[var(--tjma-gray-600)] mb-3">
                  Até 3 dias por semana em regime remoto, com comparecimento presencial nos demais dias úteis.
                </p>
                <Badge variant="info">Mais comum</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardContent className="p-6">
                <div className="inline-flex p-3 bg-purple-100 rounded-lg mb-4">
                  <Wifi className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Teletrabalho Integral</h3>
                <p className="text-sm text-[var(--tjma-gray-600)] mb-3">
                  Execução remota em todos os dias úteis, conforme autorização excepcional da Administração.
                </p>
                <Badge variant="warning">Excepcional</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardContent className="p-6">
                <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
                  <Wifi className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">Regime Híbrido</h3>
                <p className="text-sm text-[var(--tjma-gray-600)] mb-3">
                  Alternância flexível entre presencial e remoto, conforme demanda institucional.
                </p>
                <Badge variant="success">Recomendado</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'normativo' && (
        <div className="space-y-8">
          {/* Fundamentação Normativa do CNJ */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Gavel className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Fundamentação Normativa do Conselho Nacional de Justiça
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-[var(--tjma-gray-50)] border border-[var(--tjma-gray-200)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução CNJ nº 227/2016
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Regulamenta o teletrabalho no âmbito do Poder Judiciário, estabelecendo os conceitos fundamentais, 
                    critérios de elegibilidade, modalidades de execução e regras de controle e avaliação de desempenho.
                  </p>
                </div>

                <div className="bg-[var(--tjma-gray-50)] border border-[var(--tjma-gray-200)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução CNJ nº 298/2019
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Primeira alteração da Resolução nº 227/2016, ajustando critérios de produtividade e ampliando 
                    possibilidades de execução remota.
                  </p>
                </div>

                <div className="bg-[var(--tjma-gray-50)] border border-[var(--tjma-gray-200)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução CNJ nº 343/2020
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Estabelece condições especiais de trabalho para magistrados e servidores com deficiência ou 
                    responsáveis por dependentes nessa condição, assegurando tratamento prioritário.
                  </p>
                </div>

                <div className="bg-[var(--tjma-gray-50)] border border-[var(--tjma-gray-200)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução CNJ nº 371/2021
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Altera a Resolução nº 227/2016 para incluir disposições sobre trabalho remoto durante situações 
                    emergenciais e sanitárias.
                  </p>
                </div>

                <div className="bg-[var(--tjma-gray-50)] border border-[var(--tjma-gray-200)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução CNJ nº 375/2021
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Estabelece novas diretrizes sobre controle de jornada e avaliação de produtividade no regime de teletrabalho.
                  </p>
                </div>

                <div className="bg-[var(--tjma-gray-50)] border border-[var(--tjma-gray-200)] rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução CNJ nº 481/2022
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Atualiza critérios de elegibilidade e introduz flexibilizações responsáveis, priorizando gestão 
                    por desempenho e resultados.
                  </p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Instrução Normativa CNJ nº 98/2024
                  </h4>
                  <p className="text-sm text-blue-800">
                    <strong>Norma atual vigente.</strong> Regulamenta de forma consolidada as modalidades de trabalho 
                    no Poder Judiciário (presencial, teletrabalho, híbrido), estabelecendo diretrizes nacionais uniformes 
                    sobre elegibilidade, controle de desempenho e condições especiais de trabalho.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Resolução CNJ nº 503/2023
                  </h4>
                  <p className="text-sm text-green-800">
                    Dispõe sobre prioridade e inclusão de pessoas com deficiência no Poder Judiciário, reforçando 
                    o dever de adaptações razoáveis e garantia de acessibilidade no trabalho remoto.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fundamentação Normativa do TJMA */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Fundamentação Normativa do Tribunal de Justiça do Maranhão
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-[var(--tjma-cream)] border border-[var(--tjma-gold)]/30 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução GP nº 99/2020
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Disciplina o regime de teletrabalho no âmbito do TJMA, estabelecendo regras específicas de adesão, 
                    acompanhamento e revogação, em conformidade com as diretrizes nacionais do CNJ.
                  </p>
                </div>

                <div className="bg-[var(--tjma-cream)] border border-[var(--tjma-gold)]/30 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução GP nº 88/2022
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Estabelece a exigência de <strong>produtividade superior</strong> para servidores em teletrabalho, 
                    com parâmetros de mensuração e acompanhamento periódico pela chefia imediata.
                  </p>
                </div>

                <div className="bg-[var(--tjma-cream)] border border-[var(--tjma-gold)]/30 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Resolução GP nº 91/2020
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Regulamenta as condições especiais de trabalho para servidores com deficiência ou responsáveis 
                    por dependentes com deficiência, assegurando tratamento diferenciado e prioritário.
                  </p>
                </div>

                <div className="bg-[var(--tjma-cream)] border border-[var(--tjma-gold)]/30 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                    Atos e Portarias Internas
                  </h4>
                  <p className="text-sm text-[var(--tjma-gray-700)]">
                    Portarias específicas da Presidência e da Diretoria de Recursos Humanos podem estabelecer 
                    regulamentações complementares, sempre em conformidade com as normas superiores do CNJ.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fundamentação Constitucional e Legal */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Fundamentação Constitucional e Legal
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">
                    Constituição Federal de 1988
                  </h4>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Art. 1º, III:</strong> Princípio da dignidade da pessoa humana</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Art. 5º, caput:</strong> Princípio da igualdade material</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Art. 37, caput:</strong> Princípio da eficiência administrativa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>Art. 227, §1º, II, e art. 244:</strong> Proteção da pessoa com deficiência</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-900 mb-2">
                    Lei nº 13.146/2015 – Lei Brasileira de Inclusão (LBI)
                  </h4>
                  <p className="text-sm text-indigo-800 mb-2">
                    Estabelece o Estatuto da Pessoa com Deficiência, assegurando direitos fundamentais e vedando 
                    qualquer forma de discriminação. Destaque para:
                  </p>
                  <ul className="space-y-2 text-sm text-indigo-800">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span><strong>Art. 27:</strong> Direito ao trabalho em igualdade de condições</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span><strong>Art. 34:</strong> Dever de adaptações razoáveis no ambiente de trabalho</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Jurisprudência e Interpretação */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Gavel className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Orientação Jurisprudencial
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                O Supremo Tribunal Federal (STF) e o Superior Tribunal de Justiça (STJ) consolidaram entendimento 
                no sentido de que:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Direitos Fundamentais Prioritários</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Os direitos fundamentais de pessoas com deficiência possuem <strong>prioridade absoluta</strong> e 
                  não podem ser flexibilizados por questões meramente administrativas ou de conveniência.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4">
                <h4 className="font-semibold text-green-900 mb-2">Adaptações Razoáveis</h4>
                <p className="text-sm text-green-800 leading-relaxed">
                  A Administração Pública possui <strong>dever constitucional</strong> de promover adaptações razoáveis 
                  no ambiente de trabalho, inclusive mediante concessão de teletrabalho e ajustes de jornada.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4">
                <h4 className="font-semibold text-amber-900 mb-2">Vedação à Discriminação</h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  Não é legítima a imposição de exigências desproporcionais que inviabilizem o exercício de direitos 
                  por pessoas com deficiência ou seus responsáveis, configurando <strong>discriminação indireta</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'solicitar' && (
        <div className="space-y-8">
          {/* Fluxo de Solicitação */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Como Solicitar o Regime de Teletrabalho
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                A solicitação de adesão ao regime de teletrabalho deve seguir os procedimentos institucionais do TJMA, 
                conforme detalhado abaixo:
              </p>

              {/* Etapas */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--tjma-navy)] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                      Verificação de Pré-Requisitos
                    </h4>
                    <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                      Certifique-se de atender aos critérios de elegibilidade e de que suas atividades são compatíveis 
                      com mensuração objetiva de desempenho.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--tjma-navy)] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                      Manifestação de Interesse
                    </h4>
                    <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                      Formalize sua manifestação de interesse junto à chefia imediata, por meio de ofício ou requerimento 
                      interno, informando a modalidade pretendida (parcial, integral ou híbrida).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--tjma-navy)] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                      Análise da Chefia Imediata
                    </h4>
                    <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                      A chefia imediata irá avaliar a compatibilidade da atividade, o histórico funcional e o interesse 
                      do serviço, podendo aprovar, solicitar ajustes ou negar mediante justificativa técnica.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--tjma-navy)] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                      Definição de Metas e Plano de Trabalho
                    </h4>
                    <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                      Em caso de aprovação, será estabelecido um plano de trabalho com metas de produtividade claras 
                      e mensuráveis, com base na Resolução GP nº 88/2022 do TJMA.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--tjma-navy)] text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">
                      Formalização e Início
                    </h4>
                    <p className="text-sm text-[var(--tjma-gray-700)] leading-relaxed">
                      Após aprovação da Administração e assinatura do termo de adesão, o servidor inicia o regime de 
                      teletrabalho na data estabelecida, com acompanhamento periódico de desempenho.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documentação Necessária */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Documentação Necessária
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-[var(--tjma-gray-50)] rounded-lg border border-[var(--tjma-gray-200)]">
                  <CheckCircle className="h-5 w-5 text-[var(--tjma-navy)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[var(--tjma-navy-dark)] mb-1">
                      Requerimento de Adesão
                    </h4>
                    <p className="text-sm text-[var(--tjma-gray-700)]">
                      Documento formal dirigido à chefia imediata solicitando adesão ao regime de teletrabalho.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[var(--tjma-gray-50)] rounded-lg border border-[var(--tjma-gray-200)]">
                  <CheckCircle className="h-5 w-5 text-[var(--tjma-navy)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[var(--tjma-navy-dark)] mb-1">
                      Declaração de Infraestrutura
                    </h4>
                    <p className="text-sm text-[var(--tjma-gray-700)]">
                      Atestado de que o servidor possui infraestrutura adequada (internet de qualidade, equipamentos, 
                      ambiente apropriado).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[var(--tjma-gray-50)] rounded-lg border border-[var(--tjma-gray-200)]">
                  <CheckCircle className="h-5 w-5 text-[var(--tjma-navy)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-[var(--tjma-navy-dark)] mb-1">
                      Plano de Trabalho Proposto (opcional)
                    </h4>
                    <p className="text-sm text-[var(--tjma-gray-700)]">
                      Proposta de metas e atividades a serem desenvolvidas, demonstrando viabilidade do teletrabalho.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <Shield className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-purple-900 mb-1">
                      Documentação Adicional para Condições Especiais
                    </h4>
                    <p className="text-sm text-purple-800">
                      Servidores que solicitam teletrabalho com base em condições especiais (deficiência, dependente 
                      com deficiência) devem apresentar laudo médico oficial e documentação comprobatória.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acompanhamento e Avaliação */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-[var(--tjma-navy)]" />
                <h2 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                  Acompanhamento e Avaliação de Desempenho
                </h2>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                Durante o regime de teletrabalho, o servidor estará sujeito a acompanhamento contínuo pela chefia 
                imediata, com avaliação periódica de desempenho e produtividade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Relatórios Periódicos</h4>
                  <p className="text-sm text-blue-800">
                    Apresentação regular de relatórios de atividades e resultados alcançados.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Reuniões de Acompanhamento</h4>
                  <p className="text-sm text-green-800">
                    Encontros periódicos com a chefia para alinhamento de expectativas e revisão de metas.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Disponibilidade</h4>
                  <p className="text-sm text-purple-800">
                    Manutenção de disponibilidade durante o horário de expediente para demandas urgentes.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Comparecimento Presencial</h4>
                  <p className="text-sm text-amber-800">
                    Atendimento a convocações para comparecimento presencial quando necessário.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botão de Solicitação (Simulação) */}
          <Card className="bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Iniciar Solicitação de Teletrabalho</h3>
                  <p className="text-[var(--tjma-gray-200)] mb-4">
                    Formalize sua manifestação de interesse por meio do sistema DRH Flow.
                  </p>
                  <p className="text-sm text-[var(--tjma-gray-300)]">
                    A solicitação será encaminhada automaticamente à sua chefia imediata para análise.
                  </p>
                </div>
                <Button variant="secondary" size="lg" className="ml-6">
                  <FileText className="mr-2 h-5 w-5" />
                  Nova Solicitação
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Conclusão Institucional */}
      <Card variant="bordered" className="bg-gradient-to-br from-[var(--tjma-cream)] to-white">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <Info className="h-8 w-8 text-[var(--tjma-navy)] flex-shrink-0 mt-1" />
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[var(--tjma-navy-dark)]">
                Conclusão Institucional
              </h3>
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                O regime de teletrabalho no Tribunal de Justiça do Maranhão representa um avanço institucional alinhado 
                aos princípios da modernização administrativa, eficiência e qualidade de vida dos servidores. O modelo 
                atual, fundamentado na <strong>Instrução Normativa CNJ nº 98/2024</strong> e nas resoluções internas 
                do TJMA, evoluiu de um regime rígido para um sistema de <strong>gestão por desempenho e resultados</strong>, 
                priorizando a flexibilização responsável sem perda de controle institucional.
              </p>
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                A análise de elegibilidade é <strong>individualizada</strong> e considera tanto critérios objetivos quanto 
                a situação específica de cada servidor, respeitando os direitos fundamentais, as condições especiais de 
                trabalho e os princípios constitucionais da dignidade da pessoa humana, igualdade material e eficiência 
                administrativa.
              </p>
              <p className="text-[var(--tjma-gray-700)] leading-relaxed">
                Para maiores esclarecimentos, os servidores devem consultar a Diretoria de Recursos Humanos ou acessar 
                a íntegra das normas citadas nos portais oficiais do CNJ e do TJMA.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rodapé com Links para Normas */}
      <Alert variant="info">
        <div className="space-y-2">
          <p className="font-semibold text-[var(--tjma-navy-dark)]">
            <Scale className="inline h-4 w-4 mr-1" />
            Acesso às Normas Mencionadas
          </p>
          <p className="text-sm text-[var(--tjma-gray-700)]">
            <strong>Conselho Nacional de Justiça:</strong>{' '}
            <a 
              href="https://atos.cnj.jus.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--tjma-navy)] hover:text-[var(--tjma-gold)] underline"
            >
              atos.cnj.jus.br
            </a>
          </p>
          <p className="text-sm text-[var(--tjma-gray-700)]">
            <strong>TJMA – Resoluções e Atos Normativos:</strong> Disponíveis no portal institucional e no sistema 
            de gestão documental do Tribunal.
          </p>
        </div>
      </Alert>
    </div>
  );
}
