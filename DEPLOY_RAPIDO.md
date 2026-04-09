# ⚡ DRH Flow - Deploy Rápido em 5 Minutos

## Publicar Aplicativo Público Agora!

---

## 🚀 DEPLOY MAIS RÁPIDO: VERCEL (GRATUITO)

### Passo a Passo Completo

---

## ✅ PRÉ-REQUISITOS

```bash
# Verificar Node.js instalado
node --version
# Deve mostrar v18+ ou v20+

# Verificar npm
npm --version
```

---

## 📦 PASSO 1: PREPARAR PROJETO

### Adicionar Vídeo da Artemis

```bash
# Windows
copy "C:\Users\ODONTOMED\Downloads\ARTEMIS.mp4" "public\videos\artemis-presentation.mp4"

# Mac/Linux
cp ~/Downloads/ARTEMIS.mp4 public/videos/artemis-presentation.mp4
```

### Testar Local

```bash
# Instalar dependências
npm install

# Build
npm run build

# Testar build
npm run preview
```

Abra: `http://localhost:4173`

Se tudo funcionar → Próximo passo!

---

## 🌐 PASSO 2: CRIAR CONTA VERCEL

### Via Browser

1. Acesse: https://vercel.com/signup
2. Clique em "Continue with GitHub"
3. Autorize Vercel
4. ✅ Conta criada!

---

## 📤 PASSO 3: DEPLOY

### Opção A: Via CLI (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login
# Confirme no e-mail

# 3. Deploy
vercel --prod

# Perguntas:
# ? Set up and deploy "~/drh-flow"? [Y/n] Y
# ? Which scope? [Sua conta]
# ? Link to existing project? [N]
# ? What's your project's name? drh-flow-tjma
# ? In which directory is your code located? ./
# ? Want to override the settings? [N]

# ⏳ Aguarde...
# ✅ Deploy completo!
```

**Resultado:**
```
🎉 Deploy completo!
URL: https://drh-flow-tjma.vercel.app
```

### Opção B: Via Interface Web

1. Acesse: https://vercel.com/new

2. **Importar Projeto:**
   - Se projeto está no GitHub: Clique em "Import"
   - Se não: Clique em "Deploy" > Upload pasta

3. **Configurar:**
   ```
   Project Name: drh-flow-tjma
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   ```

4. **Deploy:**
   - Clique "Deploy"
   - ⏳ Aguarde 2-3 minutos
   - ✅ Pronto!

---

## 🔗 PASSO 4: TESTAR APP PUBLICADO

### Abrir URL

```
https://drh-flow-tjma.vercel.app
```

### Testar Instalação PWA

**Android/Desktop:**
1. Abrir URL
2. Banner aparece: "Instalar DRH Flow"
3. Clicar "Instalar Agora"
4. ✅ App instalado!

**iOS:**
1. Abrir no Safari
2. Compartilhar > Adicionar à Tela de Início
3. ✅ App instalado!

---

## 🌐 PASSO 5: DOMÍNIO PERSONALIZADO (OPCIONAL)

### Adicionar Domínio do TJMA

**Via CLI:**
```bash
vercel domains add drh.tjma.jus.br
```

**Via Web:**
1. Dashboard Vercel > Projeto > Settings > Domains
2. Adicionar: `drh.tjma.jus.br`
3. Configurar DNS no provedor do TJMA:

```
Tipo: CNAME
Nome: drh
Valor: cname.vercel-dns.com
```

4. Aguardar propagação (5-30 minutos)
5. ✅ Acesse: `https://drh.tjma.jus.br`

---

## 📊 EXEMPLO COMPLETO DE DEPLOY

```bash
# ═══════════════════════════════════════════════════
#  DEPLOY COMPLETO EM 5 MINUTOS
# ═══════════════════════════════════════════════════

# 1. Preparar (30 segundos)
cd drh-flow
npm install

# 2. Testar local (1 minuto)
npm run build
npm run preview
# Abrir http://localhost:4173
# Verificar se funciona
# Ctrl+C para parar

# 3. Instalar Vercel (20 segundos)
npm install -g vercel

# 4. Login (30 segundos)
vercel login
# Confirmar no e-mail

# 5. Deploy (2 minutos)
vercel --prod
# Y para todas as perguntas

# ✅ PRONTO! URL: https://drh-flow-tjma.vercel.app
```

---

## ✅ CHECKLIST PÓS-DEPLOY

### Funcionamento

- [ ] URL abre corretamente
- [ ] Tela de login aparece
- [ ] Login funciona
- [ ] Dashboard carrega
- [ ] Vídeo da Artemis reproduz
- [ ] Botão WhatsApp funciona
- [ ] Botão Telefone funciona
- [ ] Módulos abrem
- [ ] Navegação funciona

### PWA

- [ ] Banner de instalação aparece
- [ ] Instalação funciona (Android/Desktop)
- [ ] Instalação funciona (iOS)
- [ ] Ícone correto na tela inicial
- [ ] Abre em modo standalone
- [ ] Funciona offline após 1ª carga

### Mobile

- [ ] Responsivo (celular)
- [ ] Responsivo (tablet)
- [ ] Touch funciona
- [ ] Botões clicáveis
- [ ] Vídeo reproduz

---

## 🐛 TROUBLESHOOTING

### Erro: "Build failed"

**Solução:**
```bash
# Limpar e rebuild
rm -rf node_modules dist .cache
npm install
npm run build
```

### Vídeo não carrega

**Verificar:**
```bash
# Arquivo existe?
ls public/videos/artemis-presentation.mp4

# Se não existir:
cp ~/Downloads/ARTEMIS.mp4 public/videos/artemis-presentation.mp4

# Rebuild
npm run build
vercel --prod
```

### PWA não instala

**Verificar:**
1. HTTPS ativo? ✅ (Vercel sempre usa HTTPS)
2. Manifest.json válido?
3. Service Worker registrado?
4. Ícones existem em /public/?

**Teste:**
```
Chrome DevTools (F12)
> Application
> Manifest: Verificar erros
> Service Workers: Deve aparecer "activated"
```

### Domínio personalizado não funciona

**Aguardar:** Propagação DNS leva 5-30 minutos

**Verificar:**
```bash
# Testar DNS
nslookup drh.tjma.jus.br

# Deve retornar IP da Vercel
```

---

## 📱 DIVULGAÇÃO APÓS DEPLOY

### E-mail para Servidores

```
Assunto: ✨ DRH Flow - Acesse nosso novo sistema!

Prezado(a) Servidor(a),

O DRH Flow está no ar! 🎉

🌐 Acesse agora: https://drh-flow-tjma.vercel.app

📱 Instale no celular:
1. Acesse o link
2. Clique em "Instalar aplicativo"
3. Use como app!

Atenciosamente,
DRH - TJMA
```

### QR Code

Gerar QR code:
```
https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://drh-flow-tjma.vercel.app
```

Imprimir e fixar:
- Murais
- Elevadores
- Refeitório
- Recepção

### WhatsApp Status

```
📱 DRH Flow no ar!

Nosso novo sistema integrado de gestão funcional está disponível.

Acesse: drh-flow-tjma.vercel.app

Instale como app no celular!

#DRHFLOW #TJMA
```

---

## 🔄 ATUALIZAÇÕES FUTURAS

### Deploy Automático (GitHub)

```bash
# 1. Conectar repositório GitHub ao Vercel
vercel --prod

# 2. Agora, todo push na main faz deploy automático!
git add .
git commit -m "Atualização"
git push

# Vercel detecta automaticamente e faz deploy
```

### Manual (CLI)

```bash
# Fazer alterações no código

# Deploy nova versão
vercel --prod

# ✅ Atualizado!
```

---

## 📊 ANALYTICS (OPCIONAL)

### Google Analytics

1. Criar conta: https://analytics.google.com
2. Criar propriedade: DRH Flow - TJMA
3. Copiar ID: `G-XXXXXXXXXX`
4. Adicionar ao código
5. Rebuild e deploy

### Vercel Analytics (Integrado)

```bash
# Ativar no Dashboard Vercel
Settings > Analytics > Enable

# Ver estatísticas:
- Pageviews
- Visitors
- Top pages
- Devices
- Locations
```

---

## 🎯 MÉTRICAS DE SUCESSO

### Acompanhar

```
Dashboard Vercel > Analytics

📊 Visualizações: Quantas pessoas acessam
👥 Visitantes únicos: Quantas pessoas diferentes
⏱️ Tempo de carregamento: Velocidade
🌍 Localização: De onde acessam
📱 Dispositivos: Mobile vs Desktop
```

**Metas:**
- 1.000+ acessos/mês
- < 3s tempo de carregamento
- 60%+ mobile
- 5.000+ instalações PWA

---

## ✅ RESUMO

### Deploy Completo em 5 Passos

```
1. Preparar projeto (30s)
   npm install

2. Testar local (1min)
   npm run build && npm run preview

3. Instalar Vercel (20s)
   npm install -g vercel

4. Login (30s)
   vercel login

5. Deploy (2min)
   vercel --prod

✅ URL: https://drh-flow-tjma.vercel.app
```

### Resultado

✅ **Aplicação pública**  
✅ **Acessível por URL direta**  
✅ **Instalável como PWA**  
✅ **Funciona em todos dispositivos**  
✅ **HTTPS automático**  
✅ **CDN global (rápido)**  
✅ **Deploy contínuo**  
✅ **Gratuito!**  

---

## 🎉 PRONTO!

**O DRH Flow está no ar e acessível publicamente!**

```
URL pública: https://drh-flow-tjma.vercel.app
```

**Qualquer pessoa pode:**
- ✅ Acessar pelo navegador
- ✅ Fazer login
- ✅ Usar o sistema
- ✅ Instalar como app
- ✅ Funcionar offline

**Sem necessidade de:**
- ❌ Convite por e-mail
- ❌ Conta no Figma
- ❌ Permissão especial
- ❌ Download de loja

---

**DRH Flow - TJMA**

**Sistema Integrado de Atendimento e Gestão Funcional**

🤖✨ **Artemis - Assistente Virtual Inteligente**

© 2026 Tribunal de Justiça do Estado do Maranhão

---

**Status:** ✅ PUBLICADO E ACESSÍVEL

**Próxima ação:** Divulgar para servidores!

🌐 **O mundo pode acessar o DRH Flow agora!** 🚀
