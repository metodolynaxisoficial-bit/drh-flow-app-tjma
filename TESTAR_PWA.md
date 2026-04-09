# 🧪 DRH Flow - Guia de Teste PWA

## Como Testar a Aplicação PWA Localmente

---

## ✅ PRÉ-REQUISITOS

```bash
# Verificar instalações
node --version   # v18+ ou v20+
npm --version    # 8+
```

---

## 🚀 PASSO 1: PREPARAR AMBIENTE

### Instalar Dependências

```bash
# Na pasta raiz do projeto
npm install
```

### Adicionar Vídeo da Artemis

```bash
# Windows
copy "C:\Users\ODONTOMED\Downloads\ARTEMIS.mp4" "public\videos\artemis-presentation.mp4"

# Mac/Linux
cp ~/Downloads/ARTEMIS.mp4 public/videos/artemis-presentation.mp4
```

---

## 🧪 PASSO 2: TESTAR EM DESENVOLVIMENTO

### Iniciar Servidor Dev

```bash
npm run dev
```

**Resultado esperado:**
```
VITE v6.3.5  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

### Abrir no Navegador

```
http://localhost:5173
```

### Verificar Funcionalidades

**Checklist básico:**
- [ ] Página carrega sem erros
- [ ] Tela de login aparece
- [ ] Login funciona (qualquer usuário/senha)
- [ ] Dashboard carrega
- [ ] Vídeo da Artemis aparece e reproduz
- [ ] Botões funcionam (WhatsApp, Telefone)
- [ ] Navegação entre páginas funciona
- [ ] Design responsivo (redimensionar janela)

---

## 🔨 PASSO 3: TESTAR BUILD DE PRODUÇÃO

### Criar Build

```bash
npm run build
```

**Resultado esperado:**
```
vite v6.3.5 building for production...
✓ XXX modules transformed.
dist/index.html                  X.XX kB │ gzip: X.XX kB
dist/assets/index-XXXXX.js      XXX.XX kB │ gzip: XX.XX kB
✓ built in XXXms

PWA: Service Worker generated!
```

### Preview do Build

```bash
npm run preview
```

**Resultado esperado:**
```
➜  Local:   http://localhost:4173/
➜  Network: use --host to expose
```

### Abrir Preview

```
http://localhost:4173
```

---

## 📱 PASSO 4: TESTAR PWA

### Chrome DevTools (F12)

**1. Application Tab**

```
Application > Manifest
✓ Verificar:
  - Name: DRH Flow - TJMA
  - Short name: DRH Flow
  - Theme color: #152E5A
  - Display: standalone
  - Icons: 192x192, 512x512
  - Sem erros
```

**2. Service Workers**

```
Application > Service Workers
✓ Verificar:
  - Status: activated and is running
  - Source: /sw.js
  - Scope: /
```

**3. Storage**

```
Application > Storage
✓ Verificar:
  - Cache Storage: workbox-precache-vX.X.X
  - Arquivos cacheados listados
```

### Lighthouse Audit

```
1. Chrome DevTools (F12)
2. Tab "Lighthouse"
3. Categorias: 
   - Performance ✓
   - Accessibility ✓
   - Best Practices ✓
   - SEO ✓
   - PWA ✓
4. Device: Mobile
5. Clicar "Generate report"
```

**Scores esperados:**
```
Performance:     90-100
Accessibility:   85-100
Best Practices:  90-100
SEO:            85-100
PWA:            100 ✅
```

**PWA Checks:**
- ✅ Installs as Progressive Web App
- ✅ Configured for a custom splash screen
- ✅ Sets a theme color for the address bar
- ✅ Provides a valid apple-touch-icon
- ✅ Has a <meta name="viewport"> tag with width or initial-scale
- ✅ Content is sized correctly for the viewport
- ✅ Displays images with correct aspect ratio
- ✅ Provides a valid manifest.json
- ✅ Registers a service worker that controls page and start_url

---

## 🎯 PASSO 5: TESTAR INSTALAÇÃO

### Desktop (Chrome/Edge)

**Método 1: Ícone na barra de endereço**
```
1. Abrir http://localhost:4173
2. Procurar ícone de computador/+ na barra de endereço
3. Clicar no ícone
4. Clicar "Instalar"
5. ✅ App instalado!
```

**Método 2: Menu do navegador**
```
1. Chrome/Edge > Menu (⋮)
2. "Instalar DRH Flow..."
3. Clicar "Instalar"
4. ✅ App instalado!
```

**Método 3: Banner automático**
```
1. Abrir http://localhost:4173
2. Aguardar 3 segundos
3. Banner aparece na parte inferior
4. Clicar "Instalar Agora"
5. ✅ App instalado!
```

**Verificar:**
- [ ] Ícone aparece na área de trabalho
- [ ] Atalho no Menu Iniciar (Windows) ou Dock (Mac)
- [ ] Abre em janela standalone (sem barra de navegação)
- [ ] Ícone correto na barra de tarefas

### Mobile (Android)

**Via USB Debugging:**

```
1. Conectar Android via USB
2. Ativar "USB debugging" no celular
3. Chrome desktop > More tools > Remote devices
4. Selecionar dispositivo
5. Abrir localhost:4173 no celular
6. Banner aparece
7. Clicar "Instalar"
8. ✅ App na tela inicial
```

**Via Ngrok (sem cabo):**

```bash
# 1. Instalar ngrok
npm install -g ngrok

# 2. Em um terminal, iniciar app
npm run preview

# 3. Em outro terminal, expor
ngrok http 4173

# 4. Copiar URL pública (https://xxxx.ngrok.io)
# 5. Abrir no celular
# 6. Instalar
```

**Verificar:**
- [ ] Banner aparece automaticamente
- [ ] Instalação funciona
- [ ] Ícone correto na home screen
- [ ] Abre como app (sem barra do Chrome)
- [ ] Splash screen aparece

### Mobile (iOS - Requer HTTPS)

**Para testar iOS, precisa de HTTPS:**

```bash
# Opção 1: Deploy temporário no Vercel
vercel --prod

# Opção 2: Usar ngrok (tem HTTPS)
ngrok http 4173
```

**No iPhone/iPad:**
```
1. Abrir Safari
2. Acessar URL (https)
3. Banner com instruções aparece
4. Seguir instruções:
   - Toque em Compartilhar
   - "Adicionar à Tela de Início"
   - Confirmar
5. ✅ App na home screen
```

---

## 🔌 PASSO 6: TESTAR OFFLINE

### Preparar Cache

```
1. Abrir app (localhost:4173 ou instalado)
2. Fazer login
3. Navegar por TODAS as páginas:
   - Dashboard
   - Vida Funcional
   - Frequência
   - Licenças
   - Benefícios
   - Teletrabalho
   - Protocolo
   - Assistente (Artemis)
4. Aguardar vídeo carregar completamente
5. Fechar app
```

### Testar Offline

**Desktop:**
```
1. Chrome DevTools (F12)
2. Network tab
3. Selecionar "Offline"
4. Recarregar página (F5)
5. ✅ App deve funcionar!
```

**Ou desconectar internet:**
```
1. Desligar Wi-Fi
2. Abrir app instalado
3. ✅ App deve funcionar!
```

**Mobile:**
```
1. Ativar modo avião
2. Abrir app instalado
3. ✅ App deve funcionar!
```

**Verificar:**
- [ ] Páginas carregam
- [ ] Navegação funciona
- [ ] Vídeo reproduz (se já foi visto)
- [ ] Imagens aparecem
- [ ] Estilos aplicados
- [ ] JavaScript funciona

---

## 📊 PASSO 7: PERFORMANCE

### Lighthouse Performance

**Métricas importantes:**

```
First Contentful Paint (FCP):    < 1.8s ✅
Largest Contentful Paint (LCP):  < 2.5s ✅
Total Blocking Time (TBT):       < 200ms ✅
Cumulative Layout Shift (CLS):   < 0.1 ✅
Speed Index:                     < 3.4s ✅
```

### Network Tab

```
1. DevTools > Network
2. Recarregar página
3. Verificar:
   - Total size: < 3 MB (primeira carga)
   - Number of requests: < 50
   - Finish time: < 3s
   - Largest resource: video (~15 MB ok)
```

### Lighthouse Treemap

```bash
# Gerar análise de bundle
npm run build -- --mode production --report

# Ver dist/stats.html
```

---

## 🐛 TROUBLESHOOTING

### Service Worker não registra

**Verificar:**
```javascript
// Console do navegador
navigator.serviceWorker.getRegistrations().then(regs => {
  console.log('Service Workers:', regs);
});
```

**Solução:**
```bash
# Limpar cache e rebuild
rm -rf dist .cache node_modules/.vite
npm run build
npm run preview
```

### Manifest erros

**Verificar:**
```
DevTools > Application > Manifest
Ver lista de erros
```

**Erros comuns:**
- Ícones não encontrados → Gerar ícones
- start_url inválido → Verificar vite.config.ts
- display inválido → Verificar manifest

### PWA não instala

**Checklist:**
- [ ] HTTPS ativo (ou localhost)
- [ ] Manifest válido
- [ ] Service Worker registrado
- [ ] Ícones 192x192 e 512x512 existem
- [ ] start_url válido

**Forçar limpeza:**
```
1. DevTools > Application
2. Clear storage > Clear site data
3. Recarregar
4. Aguardar 3s
5. Banner deve aparecer
```

### Offline não funciona

**Verificar cache:**
```
DevTools > Application > Cache Storage
Deve ter: workbox-precache-vX.X.X
```

**Rebuild:**
```bash
npm run build
npm run preview
```

**Recachear:**
1. Navegar por todas páginas
2. Aguardar vídeos carregarem
3. Testar novamente

---

## ✅ CHECKLIST COMPLETO DE TESTES

### Funcionalidades Básicas

- [ ] npm install funciona
- [ ] npm run dev funciona
- [ ] npm run build funciona
- [ ] npm run preview funciona
- [ ] Vídeo carrega
- [ ] Login funciona
- [ ] Navegação funciona

### PWA

- [ ] Manifest válido (DevTools)
- [ ] Service Worker registrado
- [ ] Cache funciona
- [ ] Offline funciona
- [ ] Auto-update funciona

### Instalação

- [ ] Banner aparece (Desktop)
- [ ] Banner aparece (Android)
- [ ] Instruções iOS aparecem
- [ ] Instalação funciona (Desktop)
- [ ] Instalação funciona (Android)
- [ ] Instalação funciona (iOS)
- [ ] Ícone correto
- [ ] Nome correto
- [ ] Abre standalone

### Performance

- [ ] Lighthouse PWA: 100
- [ ] Lighthouse Performance: 90+
- [ ] FCP < 2s
- [ ] LCP < 3s
- [ ] Offline instantâneo

### Dispositivos

- [ ] Chrome Desktop
- [ ] Edge Desktop
- [ ] Firefox Desktop
- [ ] Safari Desktop (Mac)
- [ ] Chrome Mobile (Android)
- [ ] Samsung Internet (Android)
- [ ] Safari Mobile (iOS)

---

## 📱 TESTE EM DISPOSITIVOS REAIS

### Android

```
Dispositivos testados:
- [ ] Samsung Galaxy (Android 12+)
- [ ] Xiaomi (Android 11+)
- [ ] Motorola (Android 10+)
```

### iOS

```
Dispositivos testados:
- [ ] iPhone (iOS 14+)
- [ ] iPad (iPadOS 14+)
```

### Desktop

```
SOs testados:
- [ ] Windows 11
- [ ] Windows 10
- [ ] macOS
- [ ] Linux (Ubuntu)
```

---

## 🎯 RESULTADOS ESPERADOS

### Build Otimizado

```
✓ dist/index.html                  ~5 KB
✓ dist/assets/index-[hash].js     ~500 KB (gzipped: ~150 KB)
✓ dist/assets/index-[hash].css     ~50 KB (gzipped: ~10 KB)
✓ Service Worker generated
✓ Manifest generated
```

### Lighthouse Scores

```
✓ Performance:     95+
✓ Accessibility:   90+
✓ Best Practices:  95+
✓ SEO:            90+
✓ PWA:            100
```

### Instalação

```
✓ Desktop: 1 clique
✓ Android: 1 clique (banner)
✓ iOS: 3 toques (instruções)
```

### Offline

```
✓ Funciona após primeira carga
✓ Todas páginas disponíveis
✓ Vídeo reproduz
✓ Navegação fluida
```

---

## 📞 PROBLEMAS?

**Console do navegador (F12) mostra erros?**
- Copiar mensagens de erro
- Verificar se arquivos existem
- Rebuild se necessário

**PWA não funciona em produção?**
- Verificar HTTPS ativo
- Verificar caminhos corretos
- Verificar service worker registrado

**Perfor mance ruim?**
- Verificar tamanho de imagens
- Otimizar vídeo (comprimir)
- Habilitar gzip no servidor

---

## ✨ PRONTO PARA DEPLOY

Se todos os testes passaram:

```
✅ Funcionalidades funcionam
✅ PWA configurado corretamente
✅ Instalação funciona
✅ Offline funciona
✅ Performance adequada
✅ Testado em múltiplos dispositivos
```

**Próximo passo:** Deploy! Ver `DEPLOY_RAPIDO.md`

---

**DRH Flow - TJMA**

**Sistema Integrado de Atendimento e Gestão Funcional**

🤖✨ **Artemis - Assistente Virtual Inteligente**

© 2026 Tribunal de Justiça do Estado do Maranhão

🧪 **Teste completo = Deploy confiante!**
