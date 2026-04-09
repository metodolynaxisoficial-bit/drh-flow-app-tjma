# 💻 Guia de Instalação do DRH Flow no Computador

## Download e Instalação do Aplicativo Desktop

---

## 📥 OPÇÕES DE INSTALAÇÃO

O DRH Flow pode ser instalado de 3 formas:

1. **PWA (Progressive Web App)** - Recomendado ✅
2. **Electron Desktop App** - App nativo completo
3. **Executar localmente** - Desenvolvimento

---

## 🚀 OPÇÃO 1: PWA (MAIS RÁPIDO E FÁCIL)

### Instalar como App do Windows/Mac/Linux

O DRH Flow funciona como um aplicativo web progressivo (PWA), permitindo instalação direta do navegador.

### Windows (Chrome/Edge)

**Passo 1:** Acesse o sistema
```
http://localhost:3000
```
(ou URL de produção quando disponível)

**Passo 2:** No navegador Chrome/Edge:
1. Clique no ícone de **instalação** na barra de endereço
2. Ou clique nos **3 pontinhos** > **Instalar DRH Flow**
3. Clique em **"Instalar"**

**Passo 3:** O app será instalado e aparecerá:
- No Menu Iniciar
- Na área de trabalho (opcional)
- Como aplicativo standalone

✅ **Pronto!** Agora você pode abrir o DRH Flow como um app normal do Windows.

### macOS (Safari/Chrome)

**Chrome:**
1. Acesse `http://localhost:3000`
2. Chrome > Mais ferramentas > Instalar DRH Flow
3. Confirme a instalação

**Safari:**
1. Acesse `http://localhost:3000`
2. Compartilhar > Adicionar à Dock
3. O ícone aparecerá no Dock

### Linux (Chrome/Firefox)

**Chrome/Chromium:**
1. Acesse `http://localhost:3000`
2. Menu > Mais ferramentas > Criar atalho
3. Marque "Abrir como janela"
4. Confirme

---

## 🖥️ OPÇÃO 2: APP DESKTOP NATIVO (ELECTRON)

### Criar Aplicativo Instalável (.exe, .dmg, .deb)

Vamos transformar o DRH Flow em um aplicativo desktop completo usando Electron.

### Passo 1: Instalar Dependências

```bash
# Na pasta raiz do projeto
npm install electron electron-builder --save-dev
```

### Passo 2: Criar Estrutura Electron

Crie o arquivo `/electron/main.js`:

```javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, '../public/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    backgroundColor: '#152E5A',
    title: 'DRH Flow - TJMA',
    show: false
  });

  // Carregar aplicação
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Mostrar quando estiver pronto
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Limpar referência quando fechar
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
```

### Passo 3: Criar Preload Script

Crie o arquivo `/electron/preload.js`:

```javascript
// Preload script para segurança
window.addEventListener('DOMContentLoaded', () => {
  console.log('DRH Flow Desktop carregado');
});
```

### Passo 4: Atualizar package.json

Adicione ao `package.json`:

```json
{
  "main": "electron/main.js",
  "scripts": {
    "electron:dev": "concurrently \"npm run dev\" \"wait-on http://localhost:3000 && electron .\"",
    "electron:build": "npm run build && electron-builder",
    "electron:build:win": "npm run build && electron-builder --win",
    "electron:build:mac": "npm run build && electron-builder --mac",
    "electron:build:linux": "npm run build && electron-builder --linux"
  },
  "build": {
    "appId": "br.jus.tjma.drhflow",
    "productName": "DRH Flow - TJMA",
    "directories": {
      "output": "release"
    },
    "files": [
      "dist/**/*",
      "electron/**/*",
      "public/**/*"
    ],
    "win": {
      "target": ["nsis"],
      "icon": "public/icon.png"
    },
    "mac": {
      "target": ["dmg"],
      "icon": "public/icon.png",
      "category": "public.app-category.business"
    },
    "linux": {
      "target": ["AppImage", "deb"],
      "icon": "public/icon.png",
      "category": "Office"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true
    }
  }
}
```

### Passo 5: Instalar Dependências Adicionais

```bash
npm install concurrently wait-on --save-dev
```

### Passo 6: Criar Ícone do App

Coloque um ícone PNG (512x512px) em:
```
public/icon.png
```

### Passo 7: Build do Aplicativo

**Windows (.exe):**
```bash
npm run electron:build:win
```

**macOS (.dmg):**
```bash
npm run electron:build:mac
```

**Linux (.AppImage, .deb):**
```bash
npm run electron:build:linux
```

**Todos:**
```bash
npm run electron:build
```

### Passo 8: Encontrar o Instalador

O instalador estará em:
```
release/
├── DRH Flow - TJMA Setup 1.0.0.exe  (Windows)
├── DRH Flow - TJMA-1.0.0.dmg        (macOS)
└── drh-flow-tjma-1.0.0.AppImage     (Linux)
```

### Passo 9: Instalar no Computador

**Windows:**
1. Execute `DRH Flow - TJMA Setup 1.0.0.exe`
2. Siga o assistente de instalação
3. O app será instalado em `C:\Program Files\DRH Flow - TJMA`
4. Atalho criado no Menu Iniciar e Desktop

**macOS:**
1. Abra `DRH Flow - TJMA-1.0.0.dmg`
2. Arraste o app para a pasta Aplicativos
3. Abra da pasta Aplicativos

**Linux:**
1. Dê permissão de execução: `chmod +x drh-flow-tjma-1.0.0.AppImage`
2. Execute: `./drh-flow-tjma-1.0.0.AppImage`
3. Ou instale o .deb: `sudo dpkg -i drh-flow-tjma-1.0.0.deb`

---

## 🔧 OPÇÃO 3: EXECUTAR LOCALMENTE

### Modo Desenvolvimento (para testes)

**Passo 1: Clonar/Baixar o Projeto**

Se o projeto está em repositório Git:
```bash
git clone https://github.com/tjma/drh-flow.git
cd drh-flow
```

**Passo 2: Instalar Dependências**

```bash
npm install
```

**Passo 3: Adicionar o Vídeo da Artemis**

Copie `ARTEMIS.mp4` para:
```
public/videos/artemis-presentation.mp4
```

**Passo 4: Iniciar Servidor**

```bash
npm run dev
```

**Passo 5: Acessar no Navegador**

```
http://localhost:3000
```

### Build para Produção (servidor web)

**Passo 1: Build**
```bash
npm run build
```

**Passo 2: Preview**
```bash
npm run preview
```

**Passo 3: Deploy**

O build estará em `/dist`. Você pode:
- Hospedar em servidor web (Apache, Nginx)
- Deploy no Vercel/Netlify
- Servir via Node.js

---

## 📦 CRIAR PACOTE PORTÁTIL (ZIP)

### Versão Portátil (sem instalação)

**Passo 1: Build do Projeto**
```bash
npm run build
```

**Passo 2: Criar Estrutura Portátil**

Crie a pasta `DRH-Flow-Portable/`:
```
DRH-Flow-Portable/
├── index.html
├── assets/
├── videos/
└── LEIA-ME.txt
```

**Passo 3: Copiar Build**
```bash
# Windows
xcopy dist DRH-Flow-Portable\ /E /I
copy public\videos\* DRH-Flow-Portable\videos\

# Linux/Mac
cp -r dist/* DRH-Flow-Portable/
cp -r public/videos DRH-Flow-Portable/
```

**Passo 4: Criar Script de Inicialização**

**Windows** - `iniciar.bat`:
```batch
@echo off
echo Iniciando DRH Flow...
start http://localhost:8080
python -m http.server 8080
pause
```

**Linux/Mac** - `iniciar.sh`:
```bash
#!/bin/bash
echo "Iniciando DRH Flow..."
python3 -m http.server 8080 &
sleep 2
xdg-open http://localhost:8080
```

**Passo 5: Compactar**
```bash
# Windows
Compress-Archive -Path DRH-Flow-Portable -DestinationPath DRH-Flow-Portable.zip

# Linux/Mac
zip -r DRH-Flow-Portable.zip DRH-Flow-Portable/
```

**Passo 6: Distribuir**

Agora você tem um ZIP portátil que pode ser:
- Copiado para qualquer computador
- Executado sem instalação
- Distribuído para outros usuários

---

## 🌐 CRIAR ATALHO NA ÁREA DE TRABALHO

### Windows

**Passo 1:** Clique direito na área de trabalho > Novo > Atalho

**Passo 2:** Cole o caminho:
```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:3000
```

**Passo 3:** Nome: `DRH Flow - TJMA`

**Passo 4:** Clique direito no atalho > Propriedades > Alterar ícone

### macOS

**Passo 1:** Crie arquivo `DRH-Flow.command`:
```bash
#!/bin/bash
open -a "Google Chrome" --args --app=http://localhost:3000
```

**Passo 2:** Permissão de execução:
```bash
chmod +x DRH-Flow.command
```

**Passo 3:** Arraste para o Dock

### Linux

**Passo 1:** Crie `/usr/share/applications/drh-flow.desktop`:
```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=DRH Flow - TJMA
Comment=Sistema de Gestão Funcional
Exec=google-chrome --app=http://localhost:3000
Icon=/path/to/icon.png
Terminal=false
Categories=Office;
```

**Passo 2:** Atualize:
```bash
sudo update-desktop-database
```

---

## 🔒 EXECUTAR OFFLINE

### Configurar para Funcionar sem Internet

**Passo 1: Service Worker**

O sistema já está configurado como PWA, então funcionará offline após primeira carga.

**Passo 2: Cache de Assets**

Todos os assets (CSS, JS, imagens) são cacheados automaticamente.

**Passo 3: Dados Locais**

O sistema usa localStorage para:
- Dados de login
- Preferências do usuário
- Cache de dados

---

## 🎯 REQUISITOS DO SISTEMA

### Mínimo

- **SO:** Windows 10, macOS 10.13, Ubuntu 18.04
- **RAM:** 4 GB
- **Espaço:** 500 MB
- **Navegador:** Chrome 90+, Edge 90+, Safari 14+

### Recomendado

- **SO:** Windows 11, macOS 12+, Ubuntu 22.04
- **RAM:** 8 GB
- **Espaço:** 1 GB
- **Navegador:** Chrome/Edge última versão
- **Resolução:** 1920x1080

---

## 📋 CHECKLIST DE INSTALAÇÃO

- [ ] Node.js instalado
- [ ] Projeto baixado/clonado
- [ ] Dependências instaladas (`npm install`)
- [ ] Vídeo ARTEMIS.mp4 copiado
- [ ] Build criado (`npm run build`)
- [ ] Electron configurado (se desktop)
- [ ] Instalador gerado
- [ ] App instalado no computador
- [ ] Testado e funcionando

---

## 🐛 PROBLEMAS COMUNS

### App não inicia

**Solução:**
```bash
# Limpar cache
rm -rf node_modules
npm cache clean --force
npm install
```

### Vídeo não carrega

**Verificar:**
- Arquivo em `public/videos/artemis-presentation.mp4`
- Permissões de leitura
- Formato MP4 (H.264)

### Tela branca

**Solução:**
- Abrir DevTools (F12)
- Verificar console para erros
- Rebuild: `npm run build`

---

## 💡 DICAS

1. **PWA é mais fácil** - Use primeiro a instalação PWA
2. **Electron para offline** - Use se precisa 100% offline
3. **Atualizações** - PWA atualiza automaticamente
4. **Backups** - Faça backup dos dados do localStorage

---

## 📞 SUPORTE

**Documentação completa:**
- `/ARTEMIS_DOCUMENTATION.md`
- `/ARTEMIS_FINAL_IMPLEMENTATION.md`

**Problemas técnicos:**
- Verificar console do navegador (F12)
- Logs do Electron (se desktop)

---

## 🎉 PRONTO!

Após seguir qualquer uma das opções acima, o DRH Flow estará instalado e funcionando no seu computador como um aplicativo nativo! 🚀

✅ Ícone na área de trabalho  
✅ Menu Iniciar / Dock  
✅ Funciona offline (PWA/Electron)  
✅ Notificações desktop  
✅ Experiência de app nativo  

---

**DRH Flow - TJMA**  
**Sistema Integrado de Atendimento e Gestão Funcional**

🤖✨ **Artemis - Assistente Virtual Inteligente**
