import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert } from '../components/ui/alert';
import { Heart, CheckCircle, Circle, Upload, FileText, Calendar, Info } from 'lucide-react';

export function Licencas() {
  const [selectedTipo, setSelectedTipo] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    dataInicio: '',
    dataFim: '',
    observacoes: '',
  });

  const tiposLicenca = [
    {
      id: 'saude',
      titulo: 'Licença para Tratamento de Saúde',
      descricao: 'Para tratamento da própria saúde',
      prazo: 'Até 15 dias: atestado médico. Acima: perícia médica oficial',
      documentos: ['Atestado médico', 'Exames (se houver)', 'Relatório médico detalhado'],
    },
    {
      id: 'paternidade',
      titulo: 'Licença Paternidade',
      descricao: 'Licença de 20 dias corridos (5 dias + 15 dias prorrogação)',
      prazo: 'Deve ser solicitada até 2 dias após o nascimento',
      documentos: ['Certidão de nascimento', 'Declaração de nascido vivo'],
    },
    {
      id: 'premio',
      titulo: 'Licença Prêmio',
      descricao: '3 meses a cada quinquênio de efetivo exercício',
      prazo: 'Programação prévia com a chefia',
      documentos: ['Formulário de solicitação', 'Declaração de não ter penalidades'],
    },
    {
      id: 'capacitacao',
      titulo: 'Licença para Capacitação',
      descricao: 'Até 3 meses a cada quinquênio',
      prazo: 'Solicitação com antecedência mínima de 30 dias',
      documentos: ['Comprovante de matrícula', 'Grade curricular', 'Justificativa'],
    },
  ];

  const checklist = {
    saude: [
      { item: 'Atestado médico anexado', completed: false },
      { item: 'Período da licença informado', completed: false },
      { item: 'CID preenchido no atestado', completed: false },
      { item: 'Assinatura e carimbo do médico', completed: false },
    ],
    paternidade: [
      { item: 'Certidão de nascimento anexada', completed: false },
      { item: 'Solicitação dentro do prazo (até 2 dias)', completed: false },
      { item: 'Formulário preenchido', completed: false },
    ],
    premio: [
      { item: 'Tempo de serviço verificado (5 anos)', completed: false },
      { item: 'Ausência de penalidades confirmada', completed: false },
      { item: 'Programação aprovada pela chefia', completed: false },
      { item: 'Período solicitado disponível', completed: false },
    ],
  };

  const historicoLicencas = [
    {
      tipo: 'Licença para Tratamento de Saúde',
      periodo: '10/02/2026 a 12/02/2026',
      dias: 3,
      status: 'approved',
      dataProtocolo: '09/02/2026',
    },
    {
      tipo: 'Licença para Capacitação',
      periodo: '01/09/2025 a 30/11/2025',
      dias: 90,
      status: 'approved',
      dataProtocolo: '15/07/2025',
    },
  ];

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    alert('Solicitação enviada com sucesso! Você pode acompanhar o andamento no módulo de Acompanhamento Processual.');
    setSelectedTipo('');
    setCurrentStep(1);
    setFormData({ dataInicio: '', dataFim: '', observacoes: '' });
  };

  const licencaSelecionada = tiposLicenca.find(l => l.id === selectedTipo);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2 text-[var(--tjma-navy-dark)]">Licenças e Afastamentos</h1>
        <p className="text-[var(--tjma-gray-600)]">
          Solicite licenças e acompanhe o histórico
        </p>
      </div>

      {!selectedTipo ? (
        <>
          {/* Seleção de Tipo de Licença */}
          <div>
            <h2 className="text-xl mb-6 text-[var(--tjma-navy-dark)]">Selecione o Tipo de Licença</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tiposLicenca.map((tipo) => (
                <Card
                  key={tipo.id}
                  className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border-l-4 border-l-[var(--tjma-navy)]"
                  onClick={() => setSelectedTipo(tipo.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Heart className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[var(--tjma-navy-dark)] mb-2">{tipo.titulo}</h3>
                        <p className="text-sm text-[var(--tjma-gray-600)] mb-3">{tipo.descricao}</p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                          <p className="text-xs text-blue-800">
                            <Info className="inline h-3 w-3 mr-1" />
                            <strong>Prazo:</strong> {tipo.prazo}
                          </p>
                        </div>
                        <div className="text-sm text-[var(--tjma-navy)] font-medium">
                          Selecionar →
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Histórico de Licenças */}
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-[var(--tjma-navy-dark)]">Histórico de Licenças</h3>
            </CardHeader>
            <CardContent>
              {historicoLicencas.length > 0 ? (
                <div className="space-y-3">
                  {historicoLicencas.map((lic, index) => (
                    <div key={index} className="flex items-start justify-between p-4 bg-[var(--tjma-gray-50)] rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <h4 className="font-semibold text-[var(--tjma-navy-dark)]">{lic.tipo}</h4>
                        </div>
                        <div className="flex gap-6 text-sm text-[var(--tjma-gray-600)]">
                          <span>
                            <Calendar className="inline h-4 w-4 mr-1" />
                            {lic.periodo}
                          </span>
                          <span>{lic.dias} dias</span>
                          <span>Protocolo: {lic.dataProtocolo}</span>
                        </div>
                      </div>
                      <Badge variant="success">Concedida</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[var(--tjma-gray-500)] py-8">
                  Nenhuma licença registrada no sistema
                </p>
              )}
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          {/* Fluxo de Solicitação */}
          <Card variant="bordered">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--tjma-navy-dark)]">{licencaSelecionada?.titulo}</h3>
                <Button variant="ghost" size="sm" onClick={() => setSelectedTipo('')}>
                  Voltar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Stepper */}
              <div className="flex items-center justify-between mb-8">
                {['Informações', 'Documentos', 'Revisão'].map((step, index) => {
                  const stepNumber = index + 1;
                  const isActive = currentStep === stepNumber;
                  const isCompleted = currentStep > stepNumber;
                  
                  return (
                    <div key={stepNumber} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                          isCompleted ? 'bg-green-500 border-green-500' :
                          isActive ? 'bg-[var(--tjma-navy)] border-[var(--tjma-navy)]' :
                          'bg-white border-[var(--tjma-gray-300)]'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-white" />
                          ) : (
                            <span className={`text-sm font-semibold ${
                              isActive ? 'text-white' : 'text-[var(--tjma-gray-600)]'
                            }`}>
                              {stepNumber}
                            </span>
                          )}
                        </div>
                        <span className={`text-xs mt-2 ${
                          isActive ? 'text-[var(--tjma-navy)] font-semibold' : 'text-[var(--tjma-gray-600)]'
                        }`}>
                          {step}
                        </span>
                      </div>
                      {index < 2 && (
                        <div className={`h-0.5 flex-1 ${
                          currentStep > stepNumber ? 'bg-green-500' : 'bg-[var(--tjma-gray-200)]'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step Content */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <Alert variant="info">
                    <strong>Orientação:</strong> {licencaSelecionada?.descricao}
                    <br />
                    <strong>Prazo:</strong> {licencaSelecionada?.prazo}
                  </Alert>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">Data de Início</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2.5 bg-white border border-[var(--tjma-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-gold)]"
                        value={formData.dataInicio}
                        onChange={(e) => setFormData({ ...formData, dataInicio: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block mb-2">Data de Término</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2.5 bg-white border border-[var(--tjma-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-gold)]"
                        value={formData.dataFim}
                        onChange={(e) => setFormData({ ...formData, dataFim: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Observações (opcional)</label>
                    <textarea
                      className="w-full px-4 py-2.5 bg-white border border-[var(--tjma-gray-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--tjma-gold)] min-h-[100px]"
                      value={formData.observacoes}
                      onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                      placeholder="Informações adicionais..."
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <Alert variant="info" title="Documentos Necessários">
                    Anexe todos os documentos exigidos para este tipo de licença.
                  </Alert>

                  <div className="space-y-4">
                    {licencaSelecionada?.documentos.map((doc, index) => (
                      <div key={index} className="border border-[var(--tjma-gray-300)] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-[var(--tjma-navy)]" />
                            <span className="font-medium text-[var(--tjma-navy-dark)]">{doc}</span>
                          </div>
                          <Badge variant="default">Obrigatório</Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Anexar Documento
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Alert variant="warning">
                    <strong>Atenção:</strong> Documentos incompletos ou ilegíveis podem resultar 
                    na não análise da solicitação.
                  </Alert>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="bg-[var(--tjma-gray-50)] rounded-lg p-6">
                    <h4 className="font-semibold text-[var(--tjma-navy-dark)] mb-4">Resumo da Solicitação</h4>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-[var(--tjma-gray-600)]">Tipo de Licença</label>
                          <p className="font-medium">{licencaSelecionada?.titulo}</p>
                        </div>
                        <div>
                          <label className="text-sm text-[var(--tjma-gray-600)]">Período</label>
                          <p className="font-medium">
                            {formData.dataInicio || '--'} a {formData.dataFim || '--'}
                          </p>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-[var(--tjma-gray-600)]">Documentos Anexados</label>
                        <p className="font-medium">{licencaSelecionada?.documentos.length} documento(s)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Checklist de Validação</h4>
                    <div className="space-y-2">
                      {checklist[selectedTipo as keyof typeof checklist]?.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Circle className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-blue-800">{item.item}</span>
                        </div>
                      )) || null}
                    </div>
                  </div>

                  <Alert variant="info">
                    <strong>Próximos Passos:</strong> Após o envio, sua solicitação será protocolada 
                    e encaminhada para análise técnica da DRH. Você receberá notificações sobre o andamento.
                  </Alert>

                  <Alert variant="warning">
                    <strong>Aviso Institucional:</strong> Este sistema atua exclusivamente como ferramenta 
                    de apoio e orientação, não substituindo a análise técnica nem a decisão administrativa 
                    das unidades competentes.
                  </Alert>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-[var(--tjma-gray-200)]">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  Voltar
                </Button>
                <div className="flex gap-3">
                  {currentStep < 3 ? (
                    <Button variant="primary" onClick={handleNext}>
                      Próximo
                    </Button>
                  ) : (
                    <Button variant="secondary" onClick={handleSubmit}>
                      Enviar para Protocolo
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}