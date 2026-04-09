import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { Calculator, GraduationCap, Upload, Info } from 'lucide-react';

export function Adicionais() {
  const [nivelEscolaridade, setNivelEscolaridade] = useState('');
  const [simulacaoResultado, setSimulacaoResultado] = useState<any>(null);

  const niveisAQ = [
    { nivel: 'Ensino Médio', percentual: 0, descricao: 'Não gera adicional' },
    { nivel: 'Graduação', percentual: 10, descricao: '10% sobre o vencimento base' },
    { nivel: 'Especialização', percentual: 15, descricao: '15% sobre o vencimento base' },
    { nivel: 'Mestrado', percentual: 20, descricao: '20% sobre o vencimento base' },
    { nivel: 'Doutorado', percentual: 25, descricao: '25% sobre o vencimento base' },
  ];

  const handleSimular = () => {
    const nivel = niveisAQ.find(n => n.nivel === nivelEscolaridade);
    if (nivel) {
      const vencimentoBase = 8500.00; // Exemplo
      const valorAdicional = (vencimentoBase * nivel.percentual) / 100;
      setSimulacaoResultado({
        nivel: nivel.nivel,
        percentual: nivel.percentual,
        vencimentoBase: vencimentoBase,
        valorAdicional: valorAdicional,
        totalComAdicional: vencimentoBase + valorAdicional,
      });
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Adicionais e Gratificações</h1>
        <p className="text-[var(--tjma-gray-600)]">Simule e solicite Adicional de Qualificação (AQ)</p>
      </div>

      {/* Simulador de AQ */}
      <Card variant="bordered">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-[var(--tjma-navy)]" />
            <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Simulador de Adicional de Qualificação</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant="info">
            <strong>Orientação:</strong> O Adicional de Qualificação (AQ) é calculado sobre o vencimento base 
            conforme a titulação acadêmica do servidor. Apenas diplomas reconhecidos pelo MEC são aceitos.
          </Alert>

          <div>
            <label className="block mb-2">Selecione o Nível de Escolaridade</label>
            <select
              className="w-full px-4 py-2.5 bg-white border border-[var(--tjma-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-gold)]"
              value={nivelEscolaridade}
              onChange={(e) => setNivelEscolaridade(e.target.value)}
            >
              <option value="">Selecione...</option>
              {niveisAQ.map((nivel) => (
                <option key={nivel.nivel} value={nivel.nivel}>
                  {nivel.nivel} - {nivel.percentual}%
                </option>
              ))}
            </select>
          </div>

          <Button onClick={handleSimular} disabled={!nivelEscolaridade} variant="secondary">
            <Calculator className="h-4 w-4 mr-2" />
            Simular Adicional
          </Button>

          {simulacaoResultado && (
            <div className="bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-lg p-6 text-white">
              <h4 className="text-lg font-semibold mb-4 text-[var(--tjma-gold)]">Resultado da Simulação</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-[var(--tjma-gray-200)] mb-1">Nível de Qualificação</p>
                  <p className="text-xl font-semibold">{simulacaoResultado.nivel}</p>
                  <p className="text-sm text-[var(--tjma-gold)] mt-1">
                    {simulacaoResultado.percentual}% do vencimento
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-[var(--tjma-gray-200)] mb-1">Vencimento Base</p>
                  <p className="text-xl font-semibold">
                    {simulacaoResultado.vencimentoBase.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-[var(--tjma-gray-200)] mb-1">Valor do Adicional</p>
                  <p className="text-xl font-semibold text-[var(--tjma-gold)]">
                    {simulacaoResultado.valorAdicional.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-[var(--tjma-gray-200)] mb-1">Total com Adicional</p>
                  <p className="text-xl font-semibold text-[var(--tjma-gold)]">
                    {simulacaoResultado.totalComAdicional.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
              </div>
            </div>
          )}

          {simulacaoResultado && (
            <Alert variant="warning">
              <strong>Importante:</strong> Resultado meramente indicativo, sujeito à conferência administrativa 
              e validação documental pela DRH.
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Tabela de Percentuais */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-[var(--tjma-navy-dark)]">
            <GraduationCap className="inline h-5 w-5 mr-2" />
            Tabela de Percentuais
          </h3>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--tjma-gray-200)]">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--tjma-navy-dark)]">
                    Nível de Escolaridade
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--tjma-navy-dark)]">
                    Percentual
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-[var(--tjma-navy-dark)]">
                    Descrição
                  </th>
                </tr>
              </thead>
              <tbody>
                {niveisAQ.map((nivel, index) => (
                  <tr key={index} className="border-b border-[var(--tjma-gray-100)] hover:bg-[var(--tjma-gray-50)]">
                    <td className="py-3 px-4 text-sm font-medium text-[var(--tjma-navy-dark)]">
                      {nivel.nivel}
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={nivel.percentual > 0 ? 'success' : 'default'}>
                        {nivel.percentual}%
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-[var(--tjma-gray-600)]">
                      {nivel.descricao}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Documentação Necessária */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Documentação Necessária</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Diploma</h4>
                <p className="text-sm text-blue-800">
                  Cópia autenticada do diploma reconhecido pelo MEC
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Histórico Escolar</h4>
                <p className="text-sm text-blue-800">
                  Histórico completo do curso, autenticado
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Formulário de Solicitação</h4>
                <p className="text-sm text-blue-800">
                  Formulário próprio da DRH devidamente preenchido
                </p>
              </div>
            </div>
          </div>

          <Button variant="primary" className="w-full md:w-auto">
            <Upload className="h-4 w-4 mr-2" />
            Solicitar Adicional de Qualificação
          </Button>
        </CardContent>
      </Card>

      {/* Base Legal */}
      <Alert variant="info">
        <strong>Base Normativa:</strong> Os percentuais e regras do Adicional de Qualificação estão 
        previstos na legislação de pessoal do TJMA e normas internas da DRH.
      </Alert>
    </div>
  );
}