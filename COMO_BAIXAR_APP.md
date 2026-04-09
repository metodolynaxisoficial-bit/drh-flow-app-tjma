# 💻 Como Baixar e Instalar o DRH Flow no Computador

## 🎯 3 Formas de Instalar (Escolha a Mais Fácil!)

---

## ✅ OPÇÃO 1: INSTALAR COMO APP DO NAVEGADOR (MAIS FÁCIL!)

### 🪟 Windows

```
┌─────────────────────────────────────────────┐
│  1. Inicie o servidor: npm run dev         │
│  2. Abra Chrome/Edge                        │
│  3. Acesse: http://localhost:3000          │
│  4. Clique no ícone de instalação 📥        │
│     (barra de endereço)                     │
│  5. Clique em "Instalar"                   │
│  ✅ PRONTO! App instalado!                  │
└─────────────────────────────────────────────┘
```

**Resultado:**
- ✅ Ícone no Menu Iniciar
- ✅ Ícone na Área de Trabalho
- ✅ Abre como app standalone
- ✅ Funciona offline

### 🍎 macOS

**Chrome:**
```
1. Abra Chrome
2. Acesse: http://localhost:3000
3. Menu > Mais ferramentas > Instalar DRH Flow
4. Confirme
✅ App no Launchpad e Dock!
```

**Safari:**
```
1. Abra Safari
2. Acesse: http://localhost:3000
3. Compartilhar > Adicionar à Dock
✅ Ícone no Dock!
```

### 🐧 Linux

```
1. Abra Chrome/Firefox
2. Acesse: http://localhost:3000
3. Menu > Criar atalho
4. Marque "Abrir como janela"
✅ App criado!
```

---

## 🖥️ OPÇÃO 2: APP DESKTOP COMPLETO (INSTALADOR .EXE)

### Criar Instalador Windows

**Método Automático:**

```batch
# Execute no PowerShell/CMD
scripts\install-desktop.bat
```

O script irá:
1. ✅ Verificar Node.js
2. ✅ Instalar dependências
3. ✅ Verificar vídeo da Artemis
4. ✅ Instalar Electron
5. ✅ Compilar projeto
6. ✅ Criar instalador .exe

**Resultado:**
```
release\DRH Flow - TJMA Setup 1.0.0.exe
```

### Instalar o App

```
1. Execute: DRH Flow - TJMA Setup 1.0.0.exe
2. Siga o assistente de instalação
3. Escolha a pasta de instalação
4. Clique em "Instalar"
✅ App instalado em C:\Program Files\
```

### macOS / Linux

```bash
# Execute no Terminal
chmod +x scripts/install-desktop.sh
./scripts/install-desktop.sh
```

**Resultado:**
- macOS: `release/DRH Flow - TJMA-1.0.0.dmg`
- Linux: `release/drh-flow-tjma-1.0.0.AppImage`

---

## 🚀 OPÇÃO 3: EXECUTAR LOCALMENTE (SEM INSTALAR)

### Passo a Passo

```bash
# 1. Instalar dependências (primeira vez)
npm install

# 2. Copiar vídeo da Artemis
# Windows
copy "C:\Users\ODONTOMED\Downloads\ARTEMIS.mp4" "public\videos\artemis-presentation.mp4"

# Mac/Linux
cp ~/Downloads/ARTEMIS.mp4 public/videos/artemis-presentation.mp4

# 3. Iniciar servidor
npm run dev

# 4. Abrir navegador
# Acesse: http://localhost:3000
```

**Para parar:** `Ctrl+C`

---

## 📊 COMPARAÇÃO DOS MÉTODOS

| Característica | PWA (Opção 1) | Electron (Opção 2) | Local (Opção 3) |
|----------------|---------------|-------------------|-----------------|
| **Facilidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Velocidade** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| **Offline** | ✅ Sim | ✅ Sim | ❌ Não |
| **Auto-update** | ✅ Sim | ❌ Não | ✅ Sim |
| **Tamanho** | ~50 MB | ~200 MB | ~50 MB |
| **Instalação** | 1 clique | Instalador | Nenhuma |
| **Ícone Desktop** | ✅ | ✅ | ❌ |

**Recomendação:** Use **Opção 1 (PWA)** para facilidade!

---

## 🎨 CRIAR ÍCONE NA ÁREA DE TRABALHO

### Windows - Atalho Manual

```
1. Clique direito na área de trabalho
2. Novo > Atalho
3. Cole:
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:3000
4. Nome: DRH Flow - TJMA
5. Concluir
```

### macOS - App Script

Crie arquivo `DRH-Flow.command`:

```bash
#!/bin/bash
open -a "Google Chrome" --args --app=http://localhost:3000
```

Permissão:
```bash
chmod +x DRH-Flow.command
```

Arraste para o Dock!

### Linux - Desktop Entry

Crie `/usr/share/applications/drh-flow.desktop`:

```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=DRH Flow - TJMA
Exec=google-chrome --app=http://localhost:3000
Icon=/caminho/para/icon.png
Terminal=false
Categories=Office;
```

---

## 📦 VERSÃO PORTÁTIL (PEN DRIVE)

### Criar Pacote Portátil

```bash
# 1. Build
npm run build

# 2. Criar pasta portátil
mkdir DRH-Flow-Portable
cp -r dist/* DRH-Flow-Portable/
cp -r public/videos DRH-Flow-Portable/

# 3. Criar script de inicialização
# Windows: iniciar.bat
@echo off
start chrome.exe --app=index.html

# Linux/Mac: iniciar.sh
#!/bin/bash
python3 -m http.server 8080 &
open http://localhost:8080

# 4. Compactar
zip -r DRH-Flow-Portable.zip DRH-Flow-Portable/
```

**Distribuir:** Copie o ZIP para pen drive e use em qualquer PC!

---

## 🔍 VERIFICAR INSTALAÇÃO

### Checklist

- [ ] App abre sem erros
- [ ] Tela de login aparece
- [ ] Login funciona
- [ ] Dashboard carrega
- [ ] Vídeo da Artemis reproduz
- [ ] Botão WhatsApp funciona
- [ ] Botão Telefone funciona
- [ ] Módulos abrem corretamente
- [ ] Navegação funciona
- [ ] Ícone está na área de trabalho/menu

✅ Se tudo OK = INSTALAÇÃO COMPLETA!

---

## ❓ PROBLEMAS COMUNS

### "npm não é reconhecido"

**Solução:**
```
Instale Node.js de: https://nodejs.org/
Escolha versão LTS
```

### "Porta 3000 em uso"

**Solução:**
```bash
# Descobrir processo
netstat -ano | findstr :3000

# Matar processo (Windows)
taskkill /PID [número] /F

# Ou use outra porta
npm run dev -- --port 3001
```

### "Vídeo não carrega"

**Solução:**
```
Verificar:
1. Arquivo em: public/videos/artemis-presentation.mp4
2. Tamanho > 0 bytes
3. Formato MP4 (H.264)
4. Permissões de leitura
```

### "Tela branca"

**Solução:**
```
1. Abrir DevTools (F12)
2. Ver erros no Console
3. Limpar cache:
   rm -rf node_modules .cache dist
   npm install
   npm run build
```

---

## 📋 REQUISITOS DO SISTEMA

### Mínimo

```
SO: Windows 10 / macOS 10.13 / Ubuntu 18.04
RAM: 4 GB
Espaço: 500 MB
Navegador: Chrome 90+, Edge 90+, Safari 14+
```

### Recomendado

```
SO: Windows 11 / macOS 12+ / Ubuntu 22.04
RAM: 8 GB
Espaço: 1 GB
Navegador: Última versão Chrome/Edge
Resolução: 1920x1080
```

---

## 🎯 GUIA RÁPIDO VISUAL

```
┌─────────────────────────────────────────────────────┐
│                                                      │
│   QUER INSTALAR O DRH FLOW?                         │
│                                                      │
│   Método Mais Fácil:                                │
│   ┌──────────────────────────────────────────┐     │
│   │ 1. npm run dev                           │     │
│   │ 2. Abra Chrome em localhost:3000         │     │
│   │ 3. Clique em "Instalar" (ícone 📥)       │     │
│   │ ✅ PRONTO!                                │     │
│   └──────────────────────────────────────────┘     │
│                                                      │
│   Resultado:                                        │
│   • App no Menu Iniciar                            │
│   • Funciona offline                               │
│   • Auto-updates                                   │
│   • Sem instalador .exe                            │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 📞 SUPORTE

**Documentação Completa:**
- `GUIA_INSTALACAO_DESKTOP.md` - Guia detalhado
- `INSTALAR_APP.txt` - Instruções passo a passo
- `ARTEMIS_DOCUMENTATION.md` - Docs técnicas

**Scripts Automatizados:**
- `scripts/install-desktop.bat` - Windows
- `scripts/install-desktop.sh` - Linux/Mac

**Problemas?**
1. Verificar console (F12)
2. Ler troubleshooting acima
3. Consultar documentação

---

## ✅ RESUMO

### Para Instalar AGORA (Mais Rápido):

```bash
# Terminal
npm run dev
```

```
# Navegador
1. Abra Chrome
2. Vá para http://localhost:3000
3. Clique em "Instalar" no navegador
✅ Instalado!
```

### Para Criar Instalador .EXE:

```bash
# Terminal
scripts\install-desktop.bat

# Aguarde...
# Instalador criado em:
# release\DRH Flow - TJMA Setup 1.0.0.exe
```

---

## 🎉 PRONTO!

Após qualquer um dos métodos acima, você terá o **DRH Flow** instalado no seu computador funcionando como um aplicativo nativo!

**Características:**
- ✅ Ícone próprio
- ✅ Janela standalone
- ✅ Funciona offline (PWA)
- ✅ Notificações desktop
- ✅ Menu Iniciar / Dock
- ✅ Área de trabalho
- ✅ Experiência de app nativo

---

**DRH Flow - TJMA**  
**Sistema Integrado de Atendimento e Gestão Funcional**

🤖✨ **Artemis - Assistente Virtual Inteligente**

**Desenvolvido para o Tribunal de Justiça do Estado do Maranhão**

© 2026 TJMA - Todos os direitos reservados

---

**Próximo Passo:** Escolha um método e instale agora! 🚀
