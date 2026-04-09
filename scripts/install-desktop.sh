#!/bin/bash

echo "========================================"
echo "  DRH FLOW - TJMA"
echo "  Instalador Desktop Linux/Mac"
echo "========================================"
echo ""

# Verificar Node.js
echo "[1/6] Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "ERRO: Node.js não encontrado!"
    echo "Por favor, instale Node.js de https://nodejs.org/"
    exit 1
fi
echo "✓ OK: Node.js instalado ($(node --version))"
echo ""

# Instalar dependências
echo "[2/6] Instalando dependências..."
npm install
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar dependências"
    exit 1
fi
echo "✓ OK: Dependências instaladas"
echo ""

# Verificar vídeo
echo "[3/6] Verificando vídeo da Artemis..."
if [ ! -f "public/videos/artemis-presentation.mp4" ]; then
    echo "⚠ AVISO: Vídeo não encontrado em public/videos/"
    echo ""
    echo "Por favor, copie ARTEMIS.mp4 para:"
    echo "public/videos/artemis-presentation.mp4"
    echo ""
    read -p "Deseja continuar mesmo assim? (s/N): " continue
    if [ "$continue" != "s" ] && [ "$continue" != "S" ]; then
        exit 1
    fi
fi
echo ""

# Instalar Electron
echo "[4/6] Instalando Electron..."
npm install electron electron-builder concurrently wait-on --save-dev
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao instalar Electron"
    exit 1
fi
echo "✓ OK: Electron instalado"
echo ""

# Build do projeto
echo "[5/6] Compilando projeto..."
npm run build
if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao compilar projeto"
    exit 1
fi
echo "✓ OK: Projeto compilado"
echo ""

# Build Electron
echo "[6/6] Criando instalador..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    npm run electron:build:mac
    INSTALLER="release/DRH Flow - TJMA-1.0.0.dmg"
else
    # Linux
    npm run electron:build:linux
    INSTALLER="release/drh-flow-tjma-1.0.0.AppImage"
fi

if [ $? -ne 0 ]; then
    echo "ERRO: Falha ao criar instalador"
    exit 1
fi
echo ""

echo "========================================"
echo "  INSTALAÇÃO CONCLUÍDA!"
echo "========================================"
echo ""
echo "O instalador foi criado em:"
echo "$INSTALLER"
echo ""

if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Para instalar:"
    echo "1. Abra o arquivo .dmg"
    echo "2. Arraste o app para a pasta Aplicativos"
else
    echo "Para instalar:"
    echo "chmod +x $INSTALLER"
    echo "./$INSTALLER"
fi
echo ""
