# 🎥 Guia de Integração do Vídeo da Artemis

## 📋 Arquivo Recebido

**Arquivo:** `ARTEMIS.mp4`  
**Localização Original:** `C:\Users\ODONTOMED\Downloads\ARTEMIS.mp4`

---

## 🚀 Passo a Passo de Integração

### Passo 1: Criar Estrutura de Pastas

No seu projeto, crie a seguinte estrutura:

```
drh-flow/
├── public/
│   └── videos/
│       └── artemis-presentation.mp4  ← Coloque o vídeo aqui
└── src/
    └── app/
        └── ...
```

**Comandos:**

```bash
# Navegue até a raiz do projeto
cd drh-flow

# Crie a pasta de vídeos
mkdir -p public/videos

# Copie o vídeo para a pasta (Windows PowerShell)
Copy-Item "C:\Users\ODONTOMED\Downloads\ARTEMIS.mp4" -Destination "public\videos\artemis-presentation.mp4"
```

**Ou no Windows (CMD):**

```cmd
mkdir public\videos
copy "C:\Users\ODONTOMED\Downloads\ARTEMIS.mp4" "public\videos\artemis-presentation.mp4"
```

**Ou manualmente:**
1. Abra a pasta `public/` do projeto
2. Crie a pasta `videos/`
3. Copie `ARTEMIS.mp4` para dentro
4. Renomeie para `artemis-presentation.mp4` (ou mantenha o nome original)

---

### Passo 2: Verificar que o Arquivo Está no Lugar Certo

Após copiar, a estrutura deve estar assim:

```
drh-flow/
├── public/
│   ├── videos/
│   │   └── artemis-presentation.mp4  ✅
│   ├── index.html
│   └── ...
└── src/
    └── app/
        └── pages/
            └── Dashboard.tsx
```

**Verificar no terminal:**

```bash
# Linux/Mac
ls -lh public/videos/

# Windows
dir public\videos\
```

Você deve ver o arquivo `artemis-presentation.mp4` listado.

---

### Passo 3: Componente Já Está Configurado

O componente `ArtemisVideoPanel` já está preparado para receber a URL do vídeo.

**Localização:** `/src/app/pages/Dashboard.tsx`

**Código atual:**

```tsx
<ArtemisVideoPanel 
  onStartChat={handleStartArtemisChat}
/>
```

**Atualizar para:**

```tsx
<ArtemisVideoPanel 
  videoUrl="/videos/artemis-presentation.mp4"
  onStartChat={handleStartArtemisChat}
/>
```

---

### Passo 4: Testar a Aplicação

**Inicie o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

**Acesse no navegador:**

```
http://localhost:3000
```

**Faça login** e vá para o **Dashboard**. Você deve ver o vídeo da Artemis logo após a seção de boas-vindas.

---

## 🎬 Funcionalidades do Player

Após integrar o vídeo, você terá:

### ✅ Controles Disponíveis

1. **Play/Pause**
   - Clique no botão central ou no botão inferior
   - Atalho: Barra de espaço (em foco)

2. **Mute/Unmute**
   - Botão de volume no canto inferior esquerdo
   - Clique para alternar som

3. **Fullscreen**
   - Botão no canto inferior direito
   - Expandir vídeo para tela cheia

4. **Hover Controls**
   - Passe o mouse sobre o vídeo para ver controles
   - Controles desaparecem automaticamente

### ✅ Recursos Automáticos

- **Loop**: Vídeo reinicia automaticamente ao terminar
- **PlaysInline**: Funciona em dispositivos iOS sem fullscreen forçado
- **Loading State**: Indicador visual enquanto carrega
- **Fallback**: Se vídeo não carregar, mostra visual institucional

---

## 📱 Teste em Diferentes Dispositivos

### Desktop (Chrome, Firefox, Edge, Safari)

```
✅ Abra http://localhost:3000
✅ Faça login
✅ Veja o vídeo no Dashboard
✅ Teste play/pause
✅ Teste fullscreen
✅ Teste mute/unmute
```

### Mobile (iOS Safari, Chrome Mobile)

```
✅ Conecte-se à mesma rede Wi-Fi
✅ Acesse http://[SEU-IP]:3000
✅ Vídeo deve funcionar inline
✅ Controles devem ser touch-friendly
✅ Teste orientação (portrait/landscape)
```

**Encontrar seu IP:**

```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
```

Procure por algo como `192.168.1.X`

---

## 🔧 Troubleshooting

### Problema 1: Vídeo não aparece

**Sintomas:** Área preta ou loading infinito

**Soluções:**

1. **Verifique o caminho do arquivo:**
   ```bash
   # Deve existir e ter tamanho > 0
   ls -lh public/videos/artemis-presentation.mp4
   ```

2. **Verifique o console do navegador:**
   - Abra DevTools (F12)
   - Vá para aba "Console"
   - Procure erros relacionados ao vídeo

3. **Teste o vídeo diretamente:**
   - Acesse: `http://localhost:3000/videos/artemis-presentation.mp4`
   - Deve reproduzir o vídeo

4. **Limpe o cache:**
   ```bash
   # Parar servidor
   Ctrl+C
   
   # Limpar cache do build
   rm -rf .cache dist build
   
   # Reiniciar
   npm run dev
   ```

### Problema 2: Vídeo não reproduz em mobile

**Sintomas:** Funciona no desktop mas não no celular

**Soluções:**

1. **Verifique se `playsInline` está ativado:**
   ```tsx
   <video playsInline loop />
   ```

2. **Para auto-play em mobile, adicione `muted`:**
   ```tsx
   <video muted autoPlay playsInline loop />
   ```

3. **Teste em modo Safari iOS:**
   - Safari > Develop > User Agent > Safari iOS

### Problema 3: Vídeo está muito grande

**Sintomas:** Carregamento lento

**Soluções:**

1. **Comprimir o vídeo usando HandBrake:**
   - Download: https://handbrake.fr/
   - Preset: "Web" > "Gmail Large 3 Minutes 720p30"
   - Codec: H.264
   - Quality: RF 22-24
   - Output: MP4

2. **Ou usar FFmpeg (linha de comando):**
   ```bash
   ffmpeg -i ARTEMIS.mp4 -vcodec h264 -acodec aac -vf scale=1920:1080 -b:v 5M -b:a 128k artemis-compressed.mp4
   ```

### Problema 4: Formato não suportado

**Sintomas:** "Formato não suportado" ou erro de codec

**Solução:** Converter para MP4 (H.264):

```bash
ffmpeg -i ARTEMIS.mp4 -vcodec h264 -acodec aac artemis-converted.mp4
```

---

## 🎨 Personalizar o Player

### Desabilitar Loop

```tsx
// ArtemisVideoPanel.tsx (linha ~130)
<video
  ref={videoRef}
  loop={false}  // Mude para false
  playsInline
/>
```

### Adicionar Poster (Imagem de Prévia)

```tsx
<video
  ref={videoRef}
  poster="/images/artemis-poster.jpg"
  loop
  playsInline
/>
```

Crie um poster:
- Capture um frame do vídeo
- Salve como JPG em `/public/images/artemis-poster.jpg`

### Auto-Play ao Carregar

```tsx
<video
  ref={videoRef}
  autoPlay
  muted  // Necessário para auto-play funcionar
  loop
  playsInline
/>
```

⚠️ **Atenção:** Navegadores bloqueiam auto-play com som. Sempre use `muted` para auto-play.

---

## 📊 Informações do Vídeo

Para verificar informações técnicas do seu vídeo:

### Usando FFprobe (vem com FFmpeg)

```bash
ffprobe -i "C:\Users\ODONTOMED\Downloads\ARTEMIS.mp4" -show_streams -show_format
```

### Usando VLC Media Player

1. Abra o vídeo no VLC
2. Tools > Codec Information (Ctrl+J)
3. Veja: Codec, Resolution, Bitrate, Duration

### Informações Importantes

- **Codec de Vídeo:** Deve ser H.264
- **Codec de Áudio:** Deve ser AAC
- **Resolução:** Recomendado 1920x1080 ou 1280x720
- **Taxa de Bits:** 5-8 Mbps é ideal
- **Duração:** Entre 30s e 2 minutos é ideal

---

## 🌐 Deploy em Produção

### Opção 1: Incluir Vídeo no Bundle

**Prós:**
- Simples
- Sempre disponível
- Sem dependências externas

**Contras:**
- Aumenta tamanho do build
- Carregamento inicial mais lento

**Implementação:** Já está configurado! Apenas faça o build:

```bash
npm run build
```

O vídeo em `/public/videos/` será incluído automaticamente.

### Opção 2: Hospedar em CDN

**Prós:**
- Build menor e mais rápido
- Melhor performance
- Cache global

**Contras:**
- Depende de serviço externo
- Custo adicional (geralmente baixo)

**CDNs Recomendadas:**

1. **Cloudflare Stream** (Ideal para vídeos)
   - Upload: Dashboard do Cloudflare
   - Preço: $1/1000 minutos visualizados
   - URL: `https://customer-xxx.cloudflarestream.com/VIDEO_ID/manifest/video.m3u8`

2. **Bunny CDN** (Econômico)
   - Upload: Dashboard do Bunny
   - Preço: $0.01/GB
   - URL: `https://cdn.bunny.net/tjma/artemis-presentation.mp4`

3. **AWS CloudFront + S3** (Robusto)
   - Upload: S3 Bucket
   - CloudFront na frente
   - URL: `https://d1234.cloudfront.net/videos/artemis.mp4`

**Atualizar componente para CDN:**

```tsx
<ArtemisVideoPanel 
  videoUrl="https://cdn.tjma.jus.br/videos/artemis-presentation.mp4"
  onStartChat={handleStartArtemisChat}
/>
```

---

## 📱 Testar em Produção

### Build Local

```bash
# Build
npm run build

# Preview (simula produção)
npm run preview
```

Acesse: `http://localhost:4173`

### Deploy

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# Ou seu servidor preferido
```

---

## 🎯 Checklist Final

Antes de considerar completo:

- [ ] Vídeo copiado para `public/videos/artemis-presentation.mp4`
- [ ] Componente atualizado com `videoUrl` prop
- [ ] Testado no Chrome Desktop
- [ ] Testado no Firefox Desktop
- [ ] Testado no Safari Desktop (Mac)
- [ ] Testado no Chrome Mobile (Android)
- [ ] Testado no Safari iOS (iPhone)
- [ ] Play/Pause funciona
- [ ] Mute/Unmute funciona
- [ ] Fullscreen funciona
- [ ] Botão "Iniciar Atendimento" funciona
- [ ] Botão "WhatsApp" funciona
- [ ] Botão "Ligar" funciona
- [ ] Vídeo carrega em menos de 5 segundos
- [ ] Sem erros no console

---

## 📞 Suporte

**Dúvidas técnicas?**
- Documentação: `/ARTEMIS_VIDEO_SETUP.md`
- Documentação completa: `/ARTEMIS_DOCUMENTATION.md`

**Problemas com vídeo?**
- Verificar especificações técnicas
- Testar conversão com HandBrake
- Verificar console do navegador

---

## 🎉 Parabéns!

Após seguir este guia, o vídeo da Artemis estará integrado e funcionando perfeitamente no DRH Flow! 🚀

**O sistema estará pronto para:**
- ✅ Apresentar a Artemis de forma profissional
- ✅ Engajar usuários com vídeo institucional
- ✅ Oferecer múltiplos canais de atendimento
- ✅ Funcionar em todos os dispositivos
- ✅ Ser apresentado à Presidência do TJMA

---

**Desenvolvido com ❤️ para o TJMA | DRH Flow © 2026**

🎥✨ **Artemis está pronta para revolucionar o atendimento!**
