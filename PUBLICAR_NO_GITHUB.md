# 📤 Guia Completo: Publicar DRH Flow no GitHub

## Criar Repositório e Deploy Automático

---

## 🎯 OBJETIVO

Publicar o projeto **DRH Flow** completo no repositório GitHub:
**`drh-flow-app-tjma`**

Com todos os arquivos necessários para deploy na Vercel.

---

## ✅ PRÉ-REQUISITOS

1. **Git instalado**
   ```bash
   git --version
   # Deve mostrar versão instalada
   ```
   
   Se não tiver: https://git-scm.com/downloads

2. **Conta no GitHub**
   - Acesse: https://github.com/signup
   - Crie conta (gratuita)

3. **GitHub CLI (opcional, mas recomendado)**
   ```bash
   # Instalar GitHub CLI
   # Windows (via winget)
   winget install --id GitHub.cli
   
   # Mac
   brew install gh
   
   # Linux
   sudo apt install gh
   ```

---

## 🚀 MÉTODO 1: VIA GITHUB CLI (MAIS RÁPIDO)

### Passo 1: Login no GitHub

```bash
gh auth login
```

Escolha:
- GitHub.com
- HTTPS
- Yes (authenticate Git)
- Login via browser

### Passo 2: Criar Repositório

```bash
# Na pasta raiz do projeto DRH Flow
gh repo create drh-flow-app-tjma --public --source=. --remote=origin
```

### Passo 3: Adicionar Arquivos

```bash
git add .
git commit -m "🚀 Initial commit: DRH Flow - PWA completo"
git push -u origin main
```

### ✅ Pronto!

Repositório criado em: `https://github.com/SEU_USUARIO/drh-flow-app-tjma`

---

## 🌐 MÉTODO 2: VIA INTERFACE WEB

### Passo 1: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name:** `drh-flow-app-tjma`
   - **Description:** `Sistema Integrado de Atendimento e Gestão Funcional - TJMA (PWA)`
   - **Public** ✅
   - **❌ NÃO** marcar "Add README"
   - **❌ NÃO** marcar "Add .gitignore"
   - **❌ NÃO** marcar "Choose license"
3. Clicar "Create repository"

### Passo 2: Inicializar Git Local

```bash
# Na pasta raiz do projeto DRH Flow
git init
git add .
git commit -m "🚀 Initial commit: DRH Flow - PWA completo"
```

### Passo 3: Conectar ao GitHub

```bash
# Substituir SEU_USUARIO pelo seu usuário GitHub
git remote add origin https://github.com/SEU_USUARIO/drh-flow-app-tjma.git
git branch -M main
git push -u origin main
```

### ✅ Pronto!

---

## 📦 MÉTODO 3: SCRIPT AUTOMATIZADO

### Criar Script de Deploy

Crie arquivo `deploy-github.sh`:

```bash
#!/bin/bash

echo "🚀 Publicando DRH Flow no GitHub..."

# Configurar Git (se necessário)
read -p "Digite seu nome: " GIT_NAME
read -p "Digite seu email GitHub: " GIT_EMAIL

git config --global user.name "$GIT_NAME"
git config --global user.email "$GIT_EMAIL"

# Inicializar repositório
git init

# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "🚀 Initial commit: DRH Flow - PWA completo

Sistema Integrado de Atendimento e Gestão Funcional
Tribunal de Justiça do Maranhão

Features:
- PWA completo (instalável)
- 11 módulos funcionais
- Assistente virtual Artemis
- Offline first
- Design institucional premium
- Pronto para deploy Vercel"

# Adicionar remote
read -p "Digite seu usuário GitHub: " GITHUB_USER
git remote add origin https://github.com/$GITHUB_USER/drh-flow-app-tjma.git

# Push
git branch -M main
git push -u origin main

echo "✅ Projeto publicado com sucesso!"
echo "📍 URL: https://github.com/$GITHUB_USER/drh-flow-app-tjma"
```

### Executar Script

```bash
chmod +x deploy-github.sh
./deploy-github.sh
```

---

## 📋 ARQUIVOS QUE SERÃO PUBLICADOS

### Estrutura Completa

```
drh-flow-app-tjma/
├── .gitignore                           ✅ Criado
├── README.md                            ✅ Criado
├── package.json                         ✅ Existente
├── vite.config.ts                       ✅ Existente (PWA configurado)
├── tsconfig.json                        ✅ Existente
├── tailwind.config.js                   ✅ Existente
│
├── public/                              ✅ Necessária
│   ├── videos/
│   │   └── artemis-presentation.mp4    ⚠️ Adicionar manualmente
│   ├── manifest.json                    ✅ Existente
│   └── (ícones PWA)                     ⚠️ Gerar antes
│
├── src/                                 ✅ Completa
│   ├── app/
│   │   ├── components/                  ✅ Todos componentes
│   │   │   ├── artemis/                 ✅ ArtemisVideoPanel
│   │   │   ├── pwa/                     ✅ InstallPrompt, InstallButton
│   │   │   └── ...                      ✅ Outros componentes
│   │   ├── pages/                       ✅ Todas páginas
│   │   ├── routes.tsx                   ✅ Rotas
│   │   └── App.tsx                      ✅ App principal
│   ├── styles/                          ✅ Estilos
│   └── ...
│
├── scripts/                             ✅ Scripts
├── PUBLICAR_APP_PUBLICO.md              ✅ Docs
├── DEPLOY_RAPIDO.md                     ✅ Docs
├── README_PWA.md                        ✅ Docs
├── TESTAR_PWA.md                        ✅ Docs
└── ...                                  ✅ Outras docs
```

### Tamanho Estimado

```
Total (sem node_modules): ~5 MB
Com vídeo Artemis: ~20 MB
node_modules (não vai): ~200 MB
```

---

## ⚠️ ANTES DE PUBLICAR

### Checklist Obrigatório

- [ ] Vídeo `artemis-presentation.mp4` em `/public/videos/`
- [ ] Gerar ícones PWA (ou placeholder)
- [ ] Testar build local (`npm run build`)
- [ ] Verificar .gitignore (não enviar node_modules)
- [ ] Remover dados sensíveis (se houver)

### Adicionar Vídeo da Artemis

```bash
# Windows
copy "C:\Users\ODONTOMED\Downloads\ARTEMIS.mp4" "public\videos\artemis-presentation.mp4"

# Mac/Linux
cp ~/Downloads/ARTEMIS.mp4 public/videos/artemis-presentation.mp4
```

### Gerar Ícones PWA (Rápido)

**Opção 1: Placeholder temporário**

Criar ícone simples 512x512 com fundo azul #152E5A e texto "DRH".

**Opção 2: Ferramenta online**

https://www.pwabuilder.com/imageGenerator

---

## 🔐 CONFIGURAR GITHUB SECRETS (Para CI/CD)

Se quiser deploy automático:

### 1. Gerar Token Vercel

1. Acesse: https://vercel.com/account/tokens
2. Criar novo token
3. Copiar token

### 2. Adicionar Secret no GitHub

1. Repositório > Settings > Secrets and variables > Actions
2. New repository secret
3. Nome: `VERCEL_TOKEN`
4. Valor: (colar token)
5. Add secret

---

## 🚀 DEPLOY AUTOMÁTICO APÓS PUSH

### Criar GitHub Action

Criar arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

Agora todo push na `main` faz deploy automático!

---

## 📊 VERIFICAR PUBLICAÇÃO

### Após Push

1. **Ver no GitHub:**
   ```
   https://github.com/SEU_USUARIO/drh-flow-app-tjma
   ```

2. **Verificar arquivos:**
   - README.md ✅
   - package.json ✅
   - vite.config.ts ✅
   - src/ completa ✅
   - public/ presente ✅

3. **Testar clone:**
   ```bash
   git clone https://github.com/SEU_USUARIO/drh-flow-app-tjma.git teste
   cd teste
   npm install
   npm run build
   # Deve funcionar!
   ```

---

## 🌐 DEPLOY NA VERCEL VIA GITHUB

### Método Mais Fácil (Interface Web)

1. **Acesse:** https://vercel.com/new
2. **Import Git Repository**
3. **Conectar GitHub** (autorizar)
4. **Selecionar:** drh-flow-app-tjma
5. **Configure:**
   - Project Name: drh-flow-tjma
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Deploy**
7. ✅ App no ar!

**Resultado:** `https://drh-flow-tjma.vercel.app`

### Deploy Contínuo Ativado

Agora, todo push no GitHub = deploy automático na Vercel! 🎉

---

## 📝 COMMITS RECOMENDADOS

### Commit Inicial

```bash
git commit -m "🚀 Initial commit: DRH Flow - PWA completo"
```

### Commits Futuros

```bash
# Feature
git commit -m "✨ feat: adicionar módulo X"

# Bug fix
git commit -m "🐛 fix: corrigir problema Y"

# Docs
git commit -m "📝 docs: atualizar README"

# Style
git commit -m "💄 style: melhorar design do componente Z"

# Performance
git commit -m "⚡ perf: otimizar carregamento"

# Refactor
git commit -m "♻️ refactor: reorganizar código"
```

---

## 🔄 ATUALIZAR REPOSITÓRIO

```bash
# Fazer alterações no código

# Ver status
git status

# Adicionar alterações
git add .

# Commit
git commit -m "✨ feat: nova funcionalidade"

# Push
git push

# ✅ Deploy automático na Vercel!
```

---

## 🆘 TROUBLESHOOTING

### "Permission denied"

```bash
# Configurar SSH (mais seguro)
ssh-keygen -t ed25519 -C "seu@email.com"
cat ~/.ssh/id_ed25519.pub
# Copiar e adicionar em: GitHub > Settings > SSH Keys

# Trocar remote para SSH
git remote set-url origin git@github.com:SEU_USUARIO/drh-flow-app-tjma.git
```

### "Repository not found"

Verificar:
1. Nome correto: `drh-flow-app-tjma`
2. Repositório criado no GitHub
3. URL correta do remote

### "Authentication failed"

```bash
# Usar Personal Access Token
# GitHub > Settings > Developer settings > Personal access tokens
# Gerar token com permissão "repo"
# Usar como senha no git push
```

### Arquivo muito grande (vídeo)

```bash
# Instalar Git LFS
git lfs install

# Track arquivos grandes
git lfs track "*.mp4"

# Adicionar .gitattributes
git add .gitattributes

# Push normal
git push
```

---

## ✅ CHECKLIST FINAL

### Antes de Publicar

- [ ] Git instalado
- [ ] Conta GitHub criada
- [ ] Vídeo adicionado em public/videos/
- [ ] Build testado localmente
- [ ] .gitignore configurado
- [ ] README.md criado

### Publicação

- [ ] Repositório criado no GitHub
- [ ] Git inicializado localmente
- [ ] Arquivos adicionados (git add)
- [ ] Commit realizado
- [ ] Push para GitHub
- [ ] Repositório visível no GitHub

### Deploy

- [ ] Vercel conectado ao GitHub
- [ ] Deploy realizado
- [ ] App funcionando online
- [ ] PWA instalável
- [ ] URL pública disponível

---

## 🎉 RESULTADO ESPERADO

### Repositório GitHub

```
✅ URL: https://github.com/SEU_USUARIO/drh-flow-app-tjma
✅ Branch: main
✅ Todos arquivos presentes
✅ README.md completo
✅ Pronto para clone
✅ Conectado à Vercel
```

### Deploy Vercel

```
✅ URL: https://drh-flow-tjma.vercel.app
✅ Deploy automático ativo
✅ PWA funcionando
✅ Instalável
✅ Offline funcional
```

---

## 📞 PRÓXIMOS PASSOS

Após publicação:

1. **Testar clone:**
   ```bash
   git clone https://github.com/SEU_USUARIO/drh-flow-app-tjma.git
   cd drh-flow-app-tjma
   npm install
   npm run dev
   ```

2. **Compartilhar:**
   - Link do repositório
   - Link do app online
   - QR Code

3. **Divulgar:**
   - E-mail institucional
   - Intranet TJMA
   - Cartazes

---

**DRH Flow - TJMA**

**Sistema Integrado de Atendimento e Gestão Funcional**

© 2026 Tribunal de Justiça do Estado do Maranhão

---

**Status:** ✅ Pronto para publicação no GitHub

**Próximo passo:** Executar comandos acima!

🚀 **GitHub + Vercel = Deploy automático!**
