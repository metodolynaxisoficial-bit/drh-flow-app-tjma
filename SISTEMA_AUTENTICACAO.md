# Sistema de Autenticação - DRH FLOW TJMA

## Visão Geral

O sistema DRH FLOW - TJMA agora possui um fluxo completo de autenticação e cadastro, projetado para ambiente demonstrativo com possibilidade de integração futura com sistemas institucionais do Tribunal de Justiça do Maranhão.

## Funcionalidades Implementadas

### 1. Tela de Login (`/login`)
- **Localização**: `/src/app/pages/Login.tsx`
- **Funcionalidades**:
  - Autenticação por matrícula e senha
  - Validação de campos obrigatórios
  - Mensagens de erro claras
  - Links para cadastro e recuperação de senha
  - Avisos institucionais sobre LGPD e uso do sistema
- **Regras de Acesso**:
  - Aceita qualquer matrícula com 4+ caracteres
  - Matrícula especial "admin" sempre aceita
  - Dados de usuário armazenados em localStorage

### 2. Tela de Cadastro (`/cadastro`)
- **Localização**: `/src/app/pages/Cadastro.tsx`
- **Fluxo em 2 Etapas**:

#### Etapa 1 - Dados Pessoais:
- Nome completo
- Matrícula (mínimo 4 caracteres)
- CPF (com formatação automática e validação)
- Data de nascimento

#### Etapa 2 - Dados Funcionais e Senha:
- E-mail institucional (validação de formato)
- Lotação (seleção via dropdown)
- Cargo (seleção via dropdown)
- Senha (requisitos: mínimo 8 caracteres, maiúscula, minúscula e número)
- Confirmação de senha

- **Validações Implementadas**:
  - Formato de CPF
  - Formato de e-mail
  - Força da senha
  - Correspondência de senhas
  - Campos obrigatórios

- **Experiência do Usuário**:
  - Indicador visual de progresso (2 etapas)
  - Validação em tempo real
  - Mensagens de erro específicas
  - Tela de sucesso com redirecionamento automático
  - Aviso claro sobre ambiente demonstrativo

### 3. Tela de Recuperação de Senha (`/recuperar-senha`)
- **Localização**: `/src/app/pages/RecuperarSenha.tsx`
- **Fluxo em 4 Etapas**:

#### Etapa 1 - Identificação:
- Solicitação de matrícula ou e-mail
- Simulação de envio de código

#### Etapa 2 - Validação de Código:
- Entrada de código de 6 dígitos
- Interface com 6 campos individuais
- Auto-foco entre campos
- Aceita qualquer código de 6 dígitos (ambiente demo)
- Opção de reenviar código

#### Etapa 3 - Nova Senha:
- Definição de nova senha
- Confirmação de senha
- Mesmas validações do cadastro

#### Etapa 4 - Sucesso:
- Confirmação visual
- Redirecionamento para login

## Dados Armazenados em localStorage

O sistema armazena os seguintes dados após cadastro/login:

```javascript
{
  authenticated: 'true',
  userName: 'Nome Completo',
  userMatricula: '123456',
  userEmail: 'email@tjma.jus.br',
  userLotacao: 'Diretoria de Recursos Humanos',
  userCargo: 'Analista Judiciário'
}
```

## Integração com o Sistema

### Rotas de Autenticação
```typescript
// /src/app/routes.ts
{
  path: "/login",
  Component: Login,
},
{
  path: "/cadastro",
  Component: Cadastro,
},
{
  path: "/recuperar-senha",
  Component: RecuperarSenha,
},
```

### Proteção de Rotas
O componente `Root.tsx` verifica automaticamente se o usuário está autenticado:

```typescript
useEffect(() => {
  const authenticated = localStorage.getItem('authenticated');
  if (!authenticated) {
    navigate('/login');
  }
}, [navigate]);
```

### Logout
O sistema limpa todos os dados do localStorage ao fazer logout:

```typescript
localStorage.removeItem('authenticated');
localStorage.removeItem('userName');
localStorage.removeItem('userMatricula');
localStorage.removeItem('userEmail');
localStorage.removeItem('userLotacao');
localStorage.removeItem('userCargo');
```

## Dados Mockados

### Lotações Disponíveis (15 opções):
- 1ª Vara Cível da Capital
- 2ª Vara Cível da Capital
- 1ª Vara Criminal da Capital
- 2ª Vara Criminal da Capital
- Vara de Família
- Vara de Sucessões
- Juizado Especial Cível
- Juizado Especial Criminal
- Gabinete da Presidência
- Diretoria de Recursos Humanos
- Diretoria Administrativa
- Diretoria de Tecnologia da Informação
- Coordenadoria de Comunicação Social
- Coordenadoria de Gestão de Pessoas
- Assessoria Jurídica

### Cargos Disponíveis (14 opções):
- Analista Judiciário
- Técnico Judiciário
- Auxiliar Judiciário
- Oficial de Justiça
- Escrivão Judicial
- Assistente Administrativo
- Analista de TI
- Contador
- Advogado
- Psicólogo
- Assistente Social
- Diretor
- Coordenador
- Assessor

## Design Institucional

Todas as telas mantêm o padrão visual institucional:

- **Cores**:
  - Azul institucional: `#152E5A` (--tjma-navy-dark)
  - Dourado: `#C9A961` (--tjma-gold)
  - Tons complementares definidos em `theme.css`

- **Elementos Visuais**:
  - Logo TJMA em destaque
  - Cards com sombras elevadas
  - Gradientes institucionais
  - Ícones da biblioteca Lucide
  - Bordas e espaçamentos consistentes

- **Componentes Reutilizados**:
  - `Button` (variantes primary, outline)
  - `Input` (com validação visual)
  - `Alert` (variantes info, error, success)
  - `Card` (variant elevated)

## Avisos e Disclaimers

Todas as telas de autenticação incluem avisos apropriados:

1. **Ambiente Demonstrativo**: Deixa claro que os dados são para fins de demonstração
2. **Integração Futura**: Menciona possibilidade de integração com sistemas institucionais
3. **LGPD**: Informações sobre proteção de dados pessoais
4. **Uso Institucional**: Avisos sobre uso exclusivo para servidores do TJMA

## Exemplo de Uso Completo

### 1. Primeiro Acesso - Novo Usuário
```
1. Usuário acessa o sistema (redirecionado para /login)
2. Clica em "Cadastre-se aqui"
3. Preenche dados pessoais (Etapa 1)
4. Preenche dados funcionais e senha (Etapa 2)
5. Sistema salva dados em localStorage
6. Redirecionamento automático para dashboard
7. Usuário navega pelo sistema normalmente
```

### 2. Usuário Esqueceu a Senha
```
1. Usuário acessa /login
2. Clica em "Esqueci minha senha"
3. Informa matrícula ou e-mail
4. Recebe código de verificação (simulado)
5. Insere código de 6 dígitos
6. Define nova senha
7. Redirecionado para login
8. Acessa com nova senha
```

### 3. Usuário Retornando
```
1. Acessa /login
2. Informa matrícula e senha
3. Sistema valida e carrega dados do localStorage
4. Redirecionado para dashboard
5. Informações personalizadas são exibidas (nome, cargo, lotação)
```

## Pontos de Atenção

### Segurança (Ambiente Demonstrativo)
⚠️ **IMPORTANTE**: Este sistema está configurado para ambiente demonstrativo:
- Senhas não são criptografadas
- Dados armazenados em localStorage (não persistentes entre navegadores)
- Validações são básicas e mockadas
- Aceita credenciais simuladas

### Para Produção (Integração Futura)
Quando integrar com sistemas reais do TJMA, considerar:
- Autenticação via API REST
- Tokens JWT para sessões
- Criptografia de senhas (bcrypt ou similar)
- Validação de CPF real via API
- Validação de matrícula contra base de dados
- Two-factor authentication (2FA)
- Auditoria completa de acessos
- Rate limiting para prevenir ataques
- HTTPS obrigatório
- Sessões com timeout automático

## Benefícios da Implementação

✅ **Fluxo completo e funcional** para demonstrações
✅ **UX profissional** com validações e feedback visual
✅ **Design institucional consistente** com o resto do sistema
✅ **Fácil demonstração** sem necessidade de backend
✅ **Base sólida** para integração futura com APIs reais
✅ **Código limpo e documentado** para manutenção
✅ **Experiência realista** para stakeholders

## Próximos Passos (Opcional)

Para evolução do sistema:
1. Implementar backend com API REST
2. Integrar com Active Directory ou LDAP do TJMA
3. Adicionar autenticação de dois fatores (2FA)
4. Implementar recuperação de senha via e-mail real
5. Adicionar captcha para segurança
6. Implementar logs de auditoria
7. Adicionar gerenciamento de sessões
8. Implementar política de expiração de senhas

---

**Versão**: 1.0.0  
**Última Atualização**: Março de 2026  
**Sistema**: DRH FLOW - TJMA  
**Diretoria**: Recursos Humanos - Tribunal de Justiça do Maranhão
