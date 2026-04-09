# 🎥 Artemis - Configuração de Vídeo Institucional

## 📋 Visão Geral

O módulo **ArtemisVideoPanel** está implementado e pronto para exibir o vídeo institucional da assistente virtual Artemis. Este documento explica como adicionar o vídeo ao sistema.

---

## 🎬 Onde o Vídeo É Exibido

O vídeo da Artemis aparece em **destaque** no:

✅ **Dashboard Principal** (`/`) - Logo após a seção de boas-vindas  
✅ **Página da Assistente** (`/assistente`) - Pode ser adicionado também

---

## 📁 Como Adicionar o Vídeo

### Opção 1: Vídeo Local (Recomendado)

**Passo 1:** Coloque o arquivo de vídeo na pasta `/public`:

```
/public/
  └── videos/
      └── artemis-presentation.mp4
```

**Passo 2:** No código, adicione o caminho ao componente:

```tsx
// /src/app/pages/Dashboard.tsx

<ArtemisVideoPanel 
  videoUrl="/videos/artemis-presentation.mp4"
  onStartChat={handleStartArtemisChat}
/>
```

### Opção 2: Vídeo Hospedado Externamente

Se o vídeo estiver em servidor externo (YouTube, Vimeo, CDN):

```tsx
<ArtemisVideoPanel 
  videoUrl="https://cdn.tjma.jus.br/videos/artemis-presentation.mp4"
  onStartChat={handleStartArtemisChat}
/>
```

### Opção 3: Vídeo do YouTube/Vimeo (Embed)

Para vídeos do YouTube ou Vimeo, use o componente modificado:

```tsx
// Alternativa com iframe (para YouTube/Vimeo)
<div className="aspect-video">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="rounded-2xl"
  ></iframe>
</div>
```

---

## 🎥 Especificações Técnicas do Vídeo

### Formato Recomendado

| Propriedade | Valor Recomendado |
|------------|-------------------|
| **Formato** | MP4 (H.264) |
| **Resolução** | 1920x1080 (Full HD) |
| **Aspect Ratio** | 16:9 |
| **Taxa de Bits** | 5-8 Mbps |
| **Taxa de Quadros** | 30 fps |
| **Codec de Áudio** | AAC |
| **Taxa de Áudio** | 128-192 kbps |
| **Tamanho Máximo** | 50 MB (para web) |
| **Duração** | 30s - 2min |

### Formatos Suportados

O componente suporta:
- ✅ `.mp4` (H.264)
- ✅ `.webm` (VP9)
- ✅ `.mov` (QuickTime)
- ⚠️ Evite: `.avi`, `.wmv` (compatibilidade limitada)

---

## 🔧 Configurações do Player

### Funcionalidades Implementadas

O player de vídeo inclui:

✅ **Play/Pause** - Controle de reprodução  
✅ **Mute/Unmute** - Controle de áudio  
✅ **Fullscreen** - Tela cheia  
✅ **Loop** - Reprodução contínua  
✅ **PlaysInline** - Reprodução inline em mobile  
✅ **Loading State** - Indicador de carregamento  
✅ **Fallback Visual** - Exibição quando sem vídeo  

### Personalizar Comportamento

```tsx
// Desabilitar loop
<video
  ref={videoRef}
  className="w-full h-full object-cover"
  loop={false}  // Altere aqui
  playsInline
/>

// Auto-play (cuidado com políticas de navegadores)
<video
  ref={videoRef}
  autoPlay
  muted  // Necessário para auto-play funcionar
  loop
  playsInline
/>
```

---

## 📱 Responsividade

O player se adapta automaticamente:

- **Desktop**: 100% da largura do container, aspect ratio 16:9
- **Tablet**: 100% da largura, controles ajustados
- **Mobile**: 100% da largura, controles otimizados para touch

---

## 🎨 Personalização Visual

### Alterar Cores do Overlay

```tsx
// ArtemisVideoPanel.tsx (linha ~120)

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
  {/* Altere: from-black/80 para sua cor preferida */}
  {/* Exemplo: from-purple-900/80 */}
</div>
```

### Alterar Background de Fallback

```tsx
// ArtemisVideoPanel.tsx (linha ~110)

<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900">
  {/* Altere as cores do gradiente */}
</div>
```

---

## 🔌 Integração com Backend

### Carregar Vídeo Dinamicamente

```tsx
import { useState, useEffect } from 'react';

function Dashboard() {
  const [artemisVideoUrl, setArtemisVideoUrl] = useState<string>('');

  useEffect(() => {
    // Buscar URL do vídeo do backend
    fetch('/api/config/artemis-video')
      .then(res => res.json())
      .then(data => setArtemisVideoUrl(data.videoUrl));
  }, []);

  return (
    <ArtemisVideoPanel 
      videoUrl={artemisVideoUrl}
      onStartChat={handleStartArtemisChat}
    />
  );
}
```

---

## 🌐 CDN e Performance

### Usar CDN para Vídeos

Recomendado para melhor performance:

```tsx
// Exemplo com Cloudflare Stream
videoUrl="https://customer-xxx.cloudflarestream.com/VIDEO_ID/manifest/video.m3u8"

// Exemplo com AWS CloudFront
videoUrl="https://d1234.cloudfront.net/videos/artemis-presentation.mp4"

// Exemplo com Bunny CDN
videoUrl="https://cdn.bunny.net/tjma/artemis-presentation.mp4"
```

### Otimização de Carregamento

```tsx
// Adicionar preload
<video
  ref={videoRef}
  preload="metadata"  // ou "auto" para carregar completamente
  // ...
/>

// Adicionar poster (imagem de prévia)
<video
  ref={videoRef}
  poster="/images/artemis-poster.jpg"
  // ...
/>
```

---

## 📊 Analytics de Vídeo

### Rastrear Visualizações

```tsx
const handleVideoPlay = () => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'video_play', {
      video_title: 'Artemis Presentation',
      video_url: videoUrl
    });
  }
};

const handleVideoComplete = () => {
  // Analytics de conclusão
  if (window.gtag) {
    window.gtag('event', 'video_complete', {
      video_title: 'Artemis Presentation'
    });
  }
};

<video
  ref={videoRef}
  onPlay={handleVideoPlay}
  onEnded={handleVideoComplete}
  // ...
/>
```

---

## 🐛 Troubleshooting

### Vídeo não carrega

**Problema:** Vídeo não aparece ou fica em loading infinito

**Soluções:**
1. Verifique se o caminho do arquivo está correto
2. Certifique-se que o formato é suportado (MP4, WebM)
3. Verifique o console do navegador para erros
4. Teste o URL do vídeo diretamente no navegador

```bash
# Teste se o arquivo existe
curl -I https://seu-dominio.com/videos/artemis.mp4

# Deve retornar HTTP 200 OK
```

### Vídeo não reproduz em mobile

**Problema:** Vídeo funciona no desktop mas não no mobile

**Solução:** Adicione `playsInline` e considere `muted` para auto-play

```tsx
<video
  ref={videoRef}
  playsInline  // ← IMPORTANTE para iOS
  muted  // Necessário para auto-play em mobile
  loop
/>
```

### Vídeo muito lento

**Problema:** Carregamento demorado

**Soluções:**
1. Comprima o vídeo (use HandBrake ou FFmpeg)
2. Reduza a resolução para 720p se necessário
3. Use CDN
4. Implemente lazy loading

```tsx
// Lazy loading com Intersection Observer
const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setShouldLoadVideo(true);
    }
  });

  observer.observe(videoContainerRef.current);
}, []);

{shouldLoadVideo && (
  <video src={videoUrl} />
)}
```

---

## 📝 Exemplo Completo de Uso

```tsx
import { ArtemisVideoPanel } from '../components/artemis/ArtemisVideoPanel';
import { useState } from 'react';

export function Dashboard() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Artemis Video Panel */}
      <ArtemisVideoPanel 
        videoUrl="/videos/artemis-presentation.mp4"
        onStartChat={() => setShowChat(true)}
      />

      {/* Resto do conteúdo */}
      {/* ... */}
    </div>
  );
}
```

---

## 🎯 Checklist de Implementação

- [ ] Vídeo institucional gravado e editado
- [ ] Vídeo convertido para MP4 (H.264)
- [ ] Vídeo comprimido (< 50 MB)
- [ ] Vídeo hospedado (local ou CDN)
- [ ] URL do vídeo adicionada ao componente
- [ ] Testado em desktop
- [ ] Testado em mobile (iOS e Android)
- [ ] Testado em diferentes navegadores
- [ ] Analytics configurado (opcional)
- [ ] Fallback visual funcionando

---

## 📞 Suporte Técnico

**Dúvidas sobre o componente?**
- Documentação técnica: `/ARTEMIS_DOCUMENTATION.md`
- Email: drh.sistemas@tjma.jus.br

**Problemas com o vídeo?**
- Verifique especificações técnicas acima
- Teste em: https://www.html5test.com/
- Converta com: https://handbrake.fr/

---

## 🔄 Alternativa: Modo Compacto

Se preferir exibir a Artemis em formato menor:

```tsx
<ArtemisVideoPanel 
  compact={true}
  videoUrl="/videos/artemis-presentation.mp4"
  onStartChat={handleStartArtemisChat}
/>
```

**Modo Compacto:**
- Menor espaço ocupado
- Ícone/avatar em vez de vídeo
- Botão "Conversar Agora" destacado
- Ideal para sidebars ou cards secundários

---

**Desenvolvido com ❤️ para o TJMA | DRH Flow © 2026**

🎥 **O vídeo da Artemis está pronto para ser adicionado ao sistema!**
