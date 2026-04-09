@echo off
echo ========================================
echo   DRH FLOW - TJMA
echo   Instalador Desktop Windows
echo ========================================
echo.

REM Verificar Node.js
echo [1/6] Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor, instale Node.js de https://nodejs.org/
    pause
    exit /b 1
)
echo OK: Node.js instalado
echo.

REM Instalar dependencias
echo [2/6] Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias
    pause
    exit /b 1
)
echo OK: Dependencias instaladas
echo.

REM Verificar video
echo [3/6] Verificando video da Artemis...
if not exist "public\videos\artemis-presentation.mp4" (
    echo AVISO: Video nao encontrado em public\videos\
    echo.
    echo Por favor, copie ARTEMIS.mp4 para:
    echo public\videos\artemis-presentation.mp4
    echo.
    set /p continue="Deseja continuar mesmo assim? (S/N): "
    if /i not "%continue%"=="S" exit /b 1
)
echo.

REM Instalar Electron
echo [4/6] Instalando Electron...
call npm install electron electron-builder concurrently wait-on --save-dev
if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar Electron
    pause
    exit /b 1
)
echo OK: Electron instalado
echo.

REM Build do projeto
echo [5/6] Compilando projeto...
call npm run build
if %errorlevel% neq 0 (
    echo ERRO: Falha ao compilar projeto
    pause
    exit /b 1
)
echo OK: Projeto compilado
echo.

REM Build Electron
echo [6/6] Criando instalador Windows...
call npm run electron:build:win
if %errorlevel% neq 0 (
    echo ERRO: Falha ao criar instalador
    pause
    exit /b 1
)
echo.

echo ========================================
echo   INSTALACAO CONCLUIDA!
echo ========================================
echo.
echo O instalador foi criado em:
echo release\DRH Flow - TJMA Setup 1.0.0.exe
echo.
echo Execute o instalador para instalar o aplicativo.
echo.
pause
