# ⚡ Comandos Git Rápidos - DRH Flow

## Publicar no GitHub em 2 Minutos

---

## 🚀 SUPER RÁPIDO (Copy/Paste)

### Método 1: Com GitHub CLI

```bash
# Login (primeira vez)
gh auth login

# Criar repo e publicar
gh repo create drh-flow-app-tjma --public --source=. --remote=origin --push
```

✅ **PRONTO!** Repositório criado e código publicado.

URL: `https://github.com/SEU_USUARIO/drh-flow-app-tjma`

---

### Método 2: Git Tradicional

```bash
# Configurar Git (primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Inicializar e publicar
git init
git add .
git commit -m "🚀 Initial commit: DRH Flow - PWA completo"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/drh-flow-app-tjma.git
git push -u origin main
```

⚠️ **Antes:** Criar repositório em https://github.com/new

---

## 📝 SEQUÊNCIA COMPLETA DETALHADA

### 1. Criar Repositório no GitHub

**Via browser:**
1. https://github.com/new
2. Nome: `drh-flow-app-tjma`
3. Público ✅
4. Create repository

**Via CLI:**
```bash
gh repo create drh-flow-app-tjma --public
```

### 2. Inicializar Git Local

```bash
# Se ainda não é um repo Git
git init
```

### 3. Configurar Identidade

```bash
git config user.name "Seu Nome"
git config user.email "seu@email.com"
```

### 4. Adicionar Arquivos

```bash
# Todos os arquivos
git add .

# Ou específicos
git add package.json vite.config.ts src/ public/
```

### 5. Verificar Status

```bash
git status
```

### 6. Criar Commit

```bash
git commit -m "🚀 Initial commit: DRH Flow - PWA completo"
```

### 7. Conectar ao GitHub

```bash
git remote add origin https://github.com/SEU_USUARIO/drh-flow-app-tjma.git
```

### 8. Push

```bash
git branch -M main
git push -u origin main
```

---

## 🔄 ATUALIZAR DEPOIS

```bash
# Fazer alterações no código

# Ver o que mudou
git status

# Adicionar mudanças
git add .

# Commit
git commit -m "✨ feat: descrição da mudança"

# Push
git push
```

---

## 🔧 COMANDOS ÚTEIS

### Ver Histórico

```bash
git log --oneline
```

### Ver Diferenças

```bash
git diff
```

### Desfazer Mudanças

```bash
# Antes do add
git checkout -- arquivo.txt

# Depois do add, antes do commit
git reset HEAD arquivo.txt

# Desfazer último commit (manter alterações)
git reset --soft HEAD~1

# Desfazer último commit (descartar alterações)
git reset --hard HEAD~1
```

### Branches

```bash
# Ver branches
git branch

# Criar branch
git checkout -b feature-nova

# Trocar de branch
git checkout main

# Merge
git merge feature-nova

# Deletar branch
git branch -d feature-nova
```

### Remote

```bash
# Ver remotes
git remote -v

# Adicionar remote
git remote add origin URL

# Trocar URL
git remote set-url origin NOVA_URL

# Remover remote
git remote remove origin
```

---

## 🐛 RESOLVER PROBLEMAS

### "Permission denied"

```bash
# Configurar SSH
ssh-keygen -t ed25519 -C "seu@email.com"
cat ~/.ssh/id_ed25519.pub
# Copiar e adicionar em GitHub > Settings > SSH Keys

# Trocar para SSH
git remote set-url origin git@github.com:SEU_USUARIO/drh-flow-app-tjma.git
```

### "Repository not found"

```bash
# Verificar URL
git remote -v

# Corrigir se necessário
git remote set-url origin https://github.com/SEU_USUARIO/drh-flow-app-tjma.git
```

### "Authentication failed"

Usar Personal Access Token:
1. GitHub > Settings > Developer settings > Tokens
2. Generate new token (classic)
3. Permissões: `repo`
4. Usar token como senha no `git push`

### Conflitos de Merge

```bash
# Ver arquivos com conflito
git status

# Editar arquivos manualmente
# Remover marcadores: <<<<<<<, =======, >>>>>>>

# Marcar como resolvido
git add arquivo-resolvido.txt

# Commit
git commit -m "fix: resolver conflitos"
```

### Push Rejeitado

```bash
# Pull primeiro
git pull origin main

# Resolver conflitos se houver

# Push novamente
git push origin main
```

### Arquivo Muito Grande

```bash
# Git LFS
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git add arquivo-grande.mp4
git commit -m "add: vídeo via LFS"
git push
```

---

## 📦 SCRIPTS PRONTOS

### Script Windows (deploy-github.bat)

```bash
deploy-github.bat
```

### Script Linux/Mac (deploy-github.sh)

```bash
chmod +x deploy-github.sh
./deploy-github.sh
```

---

## ✅ VERIFICAR PUBLICAÇÃO

```bash
# Ver no browser
https://github.com/SEU_USUARIO/drh-flow-app-tjma

# Clonar para testar
git clone https://github.com/SEU_USUARIO/drh-flow-app-tjma.git teste
cd teste
npm install
npm run build
```

---

## 🚀 DEPLOY NA VERCEL APÓS PUBLICAR

### Via CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Via Web

1. https://vercel.com/new
2. Import Git Repository
3. Selecionar: drh-flow-app-tjma
4. Deploy

---

## 📋 CHECKLIST

- [ ] Git instalado
- [ ] Conta GitHub criada
- [ ] Repositório criado no GitHub
- [ ] Git configurado (name, email)
- [ ] Arquivos adicionados (git add)
- [ ] Commit criado
- [ ] Remote configurado
- [ ] Push realizado
- [ ] Repositório visível no GitHub

---

## 🎯 COMANDOS ESSENCIAIS

```bash
# Básicos
git init                    # Inicializar repo
git add .                   # Adicionar tudo
git commit -m "msg"         # Commit
git push                    # Enviar
git pull                    # Baixar
git status                  # Ver status
git log                     # Ver histórico

# Remote
git remote add origin URL   # Adicionar remote
git remote -v               # Ver remotes
git push -u origin main     # Push inicial

# Desfazer
git checkout -- arquivo     # Descartar mudanças
git reset HEAD arquivo      # Desfazer add
git reset --soft HEAD~1     # Desfazer commit

# Info
git branch                  # Ver branches
git diff                    # Ver diferenças
git show                    # Ver último commit
```

---

## 💡 DICAS

### Commit Messages

```bash
# Emojis úteis
🚀 :rocket: - Deploy
✨ :sparkles: - Nova feature
🐛 :bug: - Bug fix
📝 :memo: - Docs
💄 :lipstick: - UI/Style
⚡ :zap: - Performance
♻️ :recycle: - Refactor
🔒 :lock: - Segurança
```

### .gitignore

Já criado! Ignora:
- node_modules
- dist
- .env
- arquivos de editor

### Git Aliases

```bash
# Criar atalhos
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Usar
git co main
git ci -m "msg"
```

---

## 🆘 AJUDA RÁPIDA

```bash
# Ajuda geral
git --help

# Ajuda de comando específico
git commit --help

# Versão
git --version
```

---

## 🎉 RESULTADO

Após seguir os comandos:

✅ Código no GitHub: `https://github.com/SEU_USUARIO/drh-flow-app-tjma`  
✅ Pronto para clone  
✅ Pronto para deploy  
✅ Versionamento ativo  

---

**DRH Flow - TJMA**

**Sistema Integrado de Atendimento e Gestão Funcional**

© 2026 Tribunal de Justiça do Estado do Maranhão

---

**Git: Simple, Fast, Powerful** 🚀
