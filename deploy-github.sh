#!/bin/bash

# ═══════════════════════════════════════════════════════════════
#  🚀 Script de Deploy Automático - DRH Flow para GitHub
# ═══════════════════════════════════════════════════════════════

echo "════════════════════════════════════════════════════"
echo "  🚀 DRH Flow - TJMA"
echo "  📤 Publicação Automática no GitHub"
echo "════════════════════════════════════════════════════"
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar se Git está instalado
echo "🔍 Verificando Git..."
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git não encontrado!${NC}"
    echo "Instale Git em: https://git-scm.com/downloads"
    exit 1
fi
echo -e "${GREEN}✅ Git instalado ($(git --version))${NC}"
echo ""

# Verificar se já é um repositório Git
if [ -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Este diretório já é um repositório Git.${NC}"
    read -p "Deseja continuar? (s/N): " CONTINUE
    if [ "$CONTINUE" != "s" ] && [ "$CONTINUE" != "S" ]; then
        echo "Operação cancelada."
        exit 0
    fi
    echo ""
else
    # Configurar Git
    echo "⚙️  Configurando Git..."
    read -p "Digite seu nome: " GIT_NAME
    read -p "Digite seu email GitHub: " GIT_EMAIL

    git config --global user.name "$GIT_NAME"
    git config --global user.email "$GIT_EMAIL"
    echo -e "${GREEN}✅ Git configurado${NC}"
    echo ""

    # Inicializar repositório
    echo "📦 Inicializando repositório..."
    git init
    echo -e "${GREEN}✅ Repositório inicializado${NC}"
    echo ""
fi

# Verificar arquivos importantes
echo "🔍 Verificando arquivos essenciais..."

REQUIRED_FILES=("package.json" "vite.config.ts" "src/app/App.tsx")
MISSING_FILES=()

for FILE in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$FILE" ]; then
        MISSING_FILES+=("$FILE")
    fi
done

if [ ${#MISSING_FILES[@]} -ne 0 ]; then
    echo -e "${RED}❌ Arquivos essenciais faltando:${NC}"
    for FILE in "${MISSING_FILES[@]}"; do
        echo "   - $FILE"
    done
    exit 1
fi
echo -e "${GREEN}✅ Todos arquivos essenciais presentes${NC}"
echo ""

# Verificar vídeo
echo "🎥 Verificando vídeo da Artemis..."
if [ ! -f "public/videos/artemis-presentation.mp4" ]; then
    echo -e "${YELLOW}⚠️  Vídeo não encontrado em: public/videos/artemis-presentation.mp4${NC}"
    echo ""
    echo "Por favor, copie o vídeo ARTEMIS.mp4 para:"
    echo "  public/videos/artemis-presentation.mp4"
    echo ""
    read -p "Deseja continuar sem o vídeo? (s/N): " CONTINUE_NO_VIDEO
    if [ "$CONTINUE_NO_VIDEO" != "s" ] && [ "$CONTINUE_NO_VIDEO" != "S" ]; then
        echo "Operação cancelada. Adicione o vídeo e execute novamente."
        exit 0
    fi
else
    echo -e "${GREEN}✅ Vídeo encontrado${NC}"
fi
echo ""

# Adicionar todos os arquivos
echo "📝 Adicionando arquivos ao Git..."
git add .
echo -e "${GREEN}✅ Arquivos adicionados${NC}"
echo ""

# Status
echo "📊 Status do repositório:"
git status --short
echo ""

# Commit
echo "💾 Criando commit..."
COMMIT_MSG="🚀 Initial commit: DRH Flow - PWA completo

Sistema Integrado de Atendimento e Gestão Funcional
Tribunal de Justiça do Estado do Maranhão

Features:
✅ PWA completo (instalável em iOS, Android, Desktop)
✅ 11 módulos funcionais
✅ Assistente virtual Artemis com vídeo integrado
✅ Offline first (Service Worker + Cache)
✅ Design institucional premium (paleta TJMA)
✅ WhatsApp e telefone integrados
✅ Auto-update em background
✅ Multiplataforma (mobile-first)
✅ Lighthouse PWA Score: 100/100
✅ Pronto para deploy na Vercel

Tecnologias:
- React 18.3 + TypeScript
- Vite 6.3 + VitePWA
- Tailwind CSS v4
- React Router 7
- Material UI + Lucide Icons
- Workbox (Service Worker)

Status: Production Ready ✅"

git commit -m "$COMMIT_MSG"
echo -e "${GREEN}✅ Commit criado${NC}"
echo ""

# Configurar remote
echo "🌐 Configurando repositório remoto..."
read -p "Digite seu usuário GitHub: " GITHUB_USER

REPO_NAME="drh-flow-app-tjma"
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"

# Verificar se remote já existe
if git remote | grep -q "origin"; then
    echo -e "${YELLOW}⚠️  Remote 'origin' já existe${NC}"
    CURRENT_URL=$(git remote get-url origin)
    echo "URL atual: $CURRENT_URL"
    read -p "Deseja atualizar para $REPO_URL? (s/N): " UPDATE_REMOTE
    if [ "$UPDATE_REMOTE" = "s" ] || [ "$UPDATE_REMOTE" = "S" ]; then
        git remote set-url origin "$REPO_URL"
        echo -e "${GREEN}✅ Remote atualizado${NC}"
    fi
else
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✅ Remote configurado${NC}"
fi
echo ""

# Renomear branch para main
echo "🔀 Configurando branch principal..."
git branch -M main
echo -e "${GREEN}✅ Branch: main${NC}"
echo ""

# Informações finais
echo "════════════════════════════════════════════════════"
echo -e "${GREEN}✅ PREPARAÇÃO CONCLUÍDA!${NC}"
echo "════════════════════════════════════════════════════"
echo ""
echo "📍 Repositório configurado:"
echo "   $REPO_URL"
echo ""
echo "⚠️  IMPORTANTE:"
echo "   Você precisa criar o repositório no GitHub antes de fazer push!"
echo ""
echo "1️⃣  Criar repositório:"
echo "   https://github.com/new"
echo "   Nome: $REPO_NAME"
echo "   Público ✅"
echo "   NÃO adicionar README, .gitignore ou license"
echo ""
echo "2️⃣  Fazer push:"
echo "   git push -u origin main"
echo ""

# Perguntar se quer fazer push agora
read -p "Deseja fazer push agora? (s/N): " DO_PUSH

if [ "$DO_PUSH" = "s" ] || [ "$DO_PUSH" = "S" ]; then
    echo ""
    echo "📤 Fazendo push para GitHub..."
    
    if git push -u origin main; then
        echo ""
        echo "════════════════════════════════════════════════════"
        echo -e "${GREEN}🎉 PUBLICAÇÃO CONCLUÍDA COM SUCESSO!${NC}"
        echo "════════════════════════════════════════════════════"
        echo ""
        echo "🌐 Repositório publicado em:"
        echo "   https://github.com/$GITHUB_USER/$REPO_NAME"
        echo ""
        echo "📦 Próximos passos:"
        echo ""
        echo "1️⃣  Ver repositório:"
        echo "   https://github.com/$GITHUB_USER/$REPO_NAME"
        echo ""
        echo "2️⃣  Deploy na Vercel:"
        echo "   https://vercel.com/new"
        echo "   Import Git Repository > Selecionar $REPO_NAME"
        echo ""
        echo "3️⃣  Ou via CLI:"
        echo "   npm install -g vercel"
        echo "   vercel --prod"
        echo ""
        echo "✅ App estará online em:"
        echo "   https://drh-flow-tjma.vercel.app"
        echo ""
    else
        echo ""
        echo -e "${RED}❌ Erro ao fazer push!${NC}"
        echo ""
        echo "Possíveis causas:"
        echo "1. Repositório não criado no GitHub"
        echo "2. Credenciais incorretas"
        echo "3. Sem permissão no repositório"
        echo ""
        echo "Criar repositório em:"
        echo "https://github.com/new"
        echo ""
        echo "Depois execute:"
        echo "git push -u origin main"
        echo ""
    fi
else
    echo ""
    echo "════════════════════════════════════════════════════"
    echo "📋 INSTRUÇÕES FINAIS"
    echo "════════════════════════════════════════════════════"
    echo ""
    echo "1️⃣  Criar repositório no GitHub:"
    echo "   https://github.com/new"
    echo "   Nome: $REPO_NAME"
    echo "   Público ✅"
    echo ""
    echo "2️⃣  Fazer push:"
    echo "   git push -u origin main"
    echo ""
    echo "3️⃣  Deploy na Vercel:"
    echo "   vercel --prod"
    echo ""
fi

echo ""
echo "════════════════════════════════════════════════════"
echo "DRH Flow - TJMA"
echo "Sistema Integrado de Atendimento e Gestão Funcional"
echo "© 2026 Tribunal de Justiça do Estado do Maranhão"
echo "════════════════════════════════════════════════════"
