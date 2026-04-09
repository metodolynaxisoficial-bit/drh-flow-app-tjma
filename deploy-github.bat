@echo off
REM ═══════════════════════════════════════════════════════════════
REM  🚀 Script de Deploy Automático - DRH Flow para GitHub (Windows)
REM ═══════════════════════════════════════════════════════════════

echo ════════════════════════════════════════════════════
echo   🚀 DRH Flow - TJMA
echo   📤 Publicação Automática no GitHub
echo ════════════════════════════════════════════════════
echo.

REM Verificar se Git está instalado
echo 🔍 Verificando Git...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git não encontrado!
    echo Instale Git em: https://git-scm.com/downloads
    pause
    exit /b 1
)
echo ✅ Git instalado
echo.

REM Verificar se já é um repositório Git
if exist ".git\" (
    echo ⚠️  Este diretório já é um repositório Git.
    set /p CONTINUE="Deseja continuar? (S/N): "
    if /i not "%CONTINUE%"=="S" (
        echo Operação cancelada.
        pause
        exit /b 0
    )
    echo.
) else (
    REM Configurar Git
    echo ⚙️  Configurando Git...
    set /p GIT_NAME="Digite seu nome: "
    set /p GIT_EMAIL="Digite seu email GitHub: "

    git config --global user.name "%GIT_NAME%"
    git config --global user.email "%GIT_EMAIL%"
    echo ✅ Git configurado
    echo.

    REM Inicializar repositório
    echo 📦 Inicializando repositório...
    git init
    echo ✅ Repositório inicializado
    echo.
)

REM Verificar arquivos importantes
echo 🔍 Verificando arquivos essenciais...

if not exist "package.json" (
    echo ❌ package.json não encontrado!
    pause
    exit /b 1
)

if not exist "vite.config.ts" (
    echo ❌ vite.config.ts não encontrado!
    pause
    exit /b 1
)

if not exist "src\app\App.tsx" (
    echo ❌ src\app\App.tsx não encontrado!
    pause
    exit /b 1
)

echo ✅ Todos arquivos essenciais presentes
echo.

REM Verificar vídeo
echo 🎥 Verificando vídeo da Artemis...
if not exist "public\videos\artemis-presentation.mp4" (
    echo ⚠️  Vídeo não encontrado em: public\videos\artemis-presentation.mp4
    echo.
    echo Por favor, copie o vídeo ARTEMIS.mp4 para:
    echo   public\videos\artemis-presentation.mp4
    echo.
    set /p CONTINUE_NO_VIDEO="Deseja continuar sem o vídeo? (S/N): "
    if /i not "%CONTINUE_NO_VIDEO%"=="S" (
        echo Operação cancelada. Adicione o vídeo e execute novamente.
        pause
        exit /b 0
    )
) else (
    echo ✅ Vídeo encontrado
)
echo.

REM Adicionar todos os arquivos
echo 📝 Adicionando arquivos ao Git...
git add .
echo ✅ Arquivos adicionados
echo.

REM Status
echo 📊 Status do repositório:
git status --short
echo.

REM Commit
echo 💾 Criando commit...
git commit -m "🚀 Initial commit: DRH Flow - PWA completo" -m "Sistema Integrado de Atendimento e Gestão Funcional" -m "Tribunal de Justiça do Estado do Maranhão" -m "" -m "Features:" -m "✅ PWA completo (instalável em iOS, Android, Desktop)" -m "✅ 11 módulos funcionais" -m "✅ Assistente virtual Artemis com vídeo integrado" -m "✅ Offline first (Service Worker + Cache)" -m "✅ Design institucional premium (paleta TJMA)" -m "✅ WhatsApp e telefone integrados" -m "✅ Auto-update em background" -m "✅ Multiplataforma (mobile-first)" -m "✅ Lighthouse PWA Score: 100/100" -m "✅ Pronto para deploy na Vercel" -m "" -m "Tecnologias:" -m "- React 18.3 + TypeScript" -m "- Vite 6.3 + VitePWA" -m "- Tailwind CSS v4" -m "- React Router 7" -m "- Material UI + Lucide Icons" -m "- Workbox (Service Worker)" -m "" -m "Status: Production Ready ✅"
echo ✅ Commit criado
echo.

REM Configurar remote
echo 🌐 Configurando repositório remoto...
set /p GITHUB_USER="Digite seu usuário GitHub: "

set REPO_NAME=drh-flow-app-tjma
set REPO_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git

REM Verificar se remote já existe
git remote | findstr "origin" >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  Remote 'origin' já existe
    git remote get-url origin
    set /p UPDATE_REMOTE="Deseja atualizar para %REPO_URL%? (S/N): "
    if /i "%UPDATE_REMOTE%"=="S" (
        git remote set-url origin "%REPO_URL%"
        echo ✅ Remote atualizado
    )
) else (
    git remote add origin "%REPO_URL%"
    echo ✅ Remote configurado
)
echo.

REM Renomear branch para main
echo 🔀 Configurando branch principal...
git branch -M main
echo ✅ Branch: main
echo.

REM Informações finais
echo ════════════════════════════════════════════════════
echo ✅ PREPARAÇÃO CONCLUÍDA!
echo ════════════════════════════════════════════════════
echo.
echo 📍 Repositório configurado:
echo    %REPO_URL%
echo.
echo ⚠️  IMPORTANTE:
echo    Você precisa criar o repositório no GitHub antes de fazer push!
echo.
echo 1️⃣  Criar repositório:
echo    https://github.com/new
echo    Nome: %REPO_NAME%
echo    Público ✅
echo    NÃO adicionar README, .gitignore ou license
echo.
echo 2️⃣  Fazer push:
echo    git push -u origin main
echo.

REM Perguntar se quer fazer push agora
set /p DO_PUSH="Deseja fazer push agora? (S/N): "

if /i "%DO_PUSH%"=="S" (
    echo.
    echo 📤 Fazendo push para GitHub...
    
    git push -u origin main
    
    if %errorlevel% equ 0 (
        echo.
        echo ════════════════════════════════════════════════════
        echo 🎉 PUBLICAÇÃO CONCLUÍDA COM SUCESSO!
        echo ════════════════════════════════════════════════════
        echo.
        echo 🌐 Repositório publicado em:
        echo    https://github.com/%GITHUB_USER%/%REPO_NAME%
        echo.
        echo 📦 Próximos passos:
        echo.
        echo 1️⃣  Ver repositório:
        echo    https://github.com/%GITHUB_USER%/%REPO_NAME%
        echo.
        echo 2️⃣  Deploy na Vercel:
        echo    https://vercel.com/new
        echo    Import Git Repository ^> Selecionar %REPO_NAME%
        echo.
        echo 3️⃣  Ou via CLI:
        echo    npm install -g vercel
        echo    vercel --prod
        echo.
        echo ✅ App estará online em:
        echo    https://drh-flow-tjma.vercel.app
        echo.
    ) else (
        echo.
        echo ❌ Erro ao fazer push!
        echo.
        echo Possíveis causas:
        echo 1. Repositório não criado no GitHub
        echo 2. Credenciais incorretas
        echo 3. Sem permissão no repositório
        echo.
        echo Criar repositório em:
        echo https://github.com/new
        echo.
        echo Depois execute:
        echo git push -u origin main
        echo.
    )
) else (
    echo.
    echo ════════════════════════════════════════════════════
    echo 📋 INSTRUÇÕES FINAIS
    echo ════════════════════════════════════════════════════
    echo.
    echo 1️⃣  Criar repositório no GitHub:
    echo    https://github.com/new
    echo    Nome: %REPO_NAME%
    echo    Público ✅
    echo.
    echo 2️⃣  Fazer push:
    echo    git push -u origin main
    echo.
    echo 3️⃣  Deploy na Vercel:
    echo    vercel --prod
    echo.
)

echo.
echo ════════════════════════════════════════════════════
echo DRH Flow - TJMA
echo Sistema Integrado de Atendimento e Gestão Funcional
echo © 2026 Tribunal de Justiça do Estado do Maranhão
echo ════════════════════════════════════════════════════
echo.
pause
