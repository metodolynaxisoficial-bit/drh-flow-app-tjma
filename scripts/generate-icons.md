# 🎨 Guia para Gerar Ícones PWA do DRH Flow

## Ícones Necessários para PWA Completo

---

## 📋 LISTA DE ÍCONES NECESSÁRIOS

### Ícones PWA (Obrigatórios)

```
public/
├── pwa-192x192.png          ← 192x192px (any purpose)
├── pwa-512x512.png          ← 512x512px (any purpose)
├── pwa-maskable-192x192.png ← 192x192px (maskable)
├── pwa-maskable-512x512.png ← 512x512px (maskable)
├── apple-touch-icon.png     ← 180x180px (iOS)
├── favicon.ico              ← 32x32px (navegador)
└── masked-icon.svg          ← SVG (Safari)
```

---

## 🎨 DESIGN RECOMENDADO

### Conceito Visual

**Fundo:** Azul TJMA (#152E5A)  
**Elementos:**
- Brasão do TJMA (central)
- Ou letras "DRH" estilizadas
- Ou ícone de documento + pessoa

**Estilo:**
- Institucional
- Moderno
- Elegante
- Minimalista
- Premium

### Paleta de Cores

```
Primária:   #152E5A (Azul TJMA)
Secundária: #C9A961 (Dourado)
Destaque:   #FFFFFF (Branco)
Gradiente:  #152E5A → #1a3a6b
```

---

## 🚀 OPÇÃO 1: FERRAMENTA ONLINE (MAIS FÁCIL)

### PWA Builder (Recomendado)

**Link:** https://www.pwabuilder.com/imageGenerator

**Passos:**

1. **Criar imagem base** (512x512px):
   - Fundo azul #152E5A
   - Brasão/logo centralizado
   - Salvar como `base-icon.png`

2. **Acessar PWA Builder**
   - Upload `base-icon.png`
   - Escolher "Generate"

3. **Configurar**:
   - Padding: 10%
   - Background: #152E5A
   - Generate iOS icons: ✅
   - Generate Android icons: ✅
   - Generate maskable icons: ✅

4. **Download**
   - Baixar todos os ícones
   - Extrair na pasta `/public/`

5. **Renomear** (se necessário):
   ```
   android-chrome-192x192.png → pwa-192x192.png
   android-chrome-512x512.png → pwa-512x512.png
   android-chrome-maskable-192x192.png → pwa-maskable-192x192.png
   android-chrome-maskable-512x512.png → pwa-maskable-512x512.png
   ```

### Favicon.io

**Link:** https://favicon.io/

**Passos:**

1. Upload logo (PNG)
2. Generate
3. Download
4. Copiar `favicon.ico` para `/public/`

---

## 🖥️ OPÇÃO 2: FERRAMENTA CLI

### PWA Asset Generator

```bash
# 1. Instalar globalmente
npm install -g pwa-asset-generator

# 2. Criar imagem base (512x512px)
# Salvar como: logo-drh-flow.png

# 3. Gerar todos os ícones
pwa-asset-generator logo-drh-flow.png ./public \
  --background "#152E5A" \
  --padding "10%" \
  --icon-only \
  --favicon \
  --type png \
  --log false

# 4. Resultado: Todos os ícones gerados em /public/
```

### ImageMagick (Avançado)

```bash
# Instalar ImageMagick
# Windows: https://imagemagick.org/script/download.php
# Mac: brew install imagemagick
# Linux: sudo apt install imagemagick

# Gerar ícones de diferentes tamanhos
convert logo-drh-flow.png -resize 192x192 public/pwa-192x192.png
convert logo-drh-flow.png -resize 512x512 public/pwa-512x512.png
convert logo-drh-flow.png -resize 180x180 public/apple-touch-icon.png
convert logo-drh-flow.png -resize 32x32 public/favicon.ico

# Maskable (com padding)
convert logo-drh-flow.png \
  -gravity center \
  -background "#152E5A" \
  -extent 192x192 \
  public/pwa-maskable-192x192.png

convert logo-drh-flow.png \
  -gravity center \
  -background "#152E5A" \
  -extent 512x512 \
  public/pwa-maskable-512x512.png
```

---

## 🎨 OPÇÃO 3: CRIAR MANUALMENTE

### No Photoshop

**Passo 1: Criar arquivo base**
```
Arquivo > Novo
Largura: 512px
Altura: 512px
Resolução: 72 dpi
Modo de cor: RGB
```

**Passo 2: Design**
```
1. Fundo: #152E5A
2. Adicionar brasão/logo centralizado
3. Garantir área segura de 80% (safe area)
4. Exportar como PNG
```

**Passo 3: Criar variações**
```
Imagem > Tamanho da imagem
192x192: Salvar como pwa-192x192.png
512x512: Salvar como pwa-512x512.png
180x180: Salvar como apple-touch-icon.png
32x32: Salvar como favicon (converter para .ico)
```

**Passo 4: Maskable**
```
1. Abrir imagem 512x512
2. Camada > Estilo de camada > Traçado
3. Adicionar padding de 10%
4. Salvar como pwa-maskable-512x512.png
5. Redimensionar para 192x192
6. Salvar como pwa-maskable-192x192.png
```

### No Figma

**Passo 1: Criar frame**
```
Frame: 512x512px
Background: #152E5A
```

**Passo 2: Design**
```
1. Importar brasão TJMA
2. Centralizar
3. Adicionar texto "DRH" (opcional)
4. Garantir safe area de 80%
```

**Passo 3: Exportar**
```
Selecionar frame > Export
Formato: PNG
Escala: 1x (512x512)
        0.375x (192x192)
        0.35x (180x180)
        0.0625x (32x32)
```

---

## 📐 ESPECIFICAÇÕES TÉCNICAS

### Tamanhos e Propósitos

| Arquivo | Tamanho | Propósito | Obrigatório |
|---------|---------|-----------|-------------|
| pwa-192x192.png | 192x192 | Android/Chrome | ✅ |
| pwa-512x512.png | 512x512 | Android/Chrome | ✅ |
| pwa-maskable-192x192.png | 192x192 | Android (adaptive) | ✅ |
| pwa-maskable-512x512.png | 512x512 | Android (adaptive) | ✅ |
| apple-touch-icon.png | 180x180 | iOS/Safari | ✅ |
| favicon.ico | 32x32 | Navegador | ✅ |
| masked-icon.svg | Vetorial | Safari pinned tab | ⭕ |

### Safe Area (Maskable Icons)

```
┌────────────────────────────────────┐
│  Padding (10%)                     │
│  ┌──────────────────────────────┐ │
│  │                              │ │
│  │   Safe Area (80%)            │ │
│  │   Logo/conteúdo aqui         │ │
│  │                              │ │
│  └──────────────────────────────┘ │
│  Padding (10%)                     │
└────────────────────────────────────┘
```

**Importante:** Ícones maskable podem ser cortados em forma de círculo, quadrado, squircle, etc. Mantenha elementos importantes no centro (80% da área).

---

## 🧪 TESTAR ÍCONES

### Maskable.app

**Link:** https://maskable.app/editor

**Uso:**
1. Upload `pwa-maskable-512x512.png`
2. Testar em diferentes formatos:
   - Círculo
   - Quadrado
   - Squircle
   - Drop
3. Verificar se logo fica visível em todos

### Lighthouse (Chrome DevTools)

```
1. Abrir site em Chrome
2. F12 > Lighthouse
3. Categorias: PWA
4. Generate report
5. Verificar: "Provides a valid apple-touch-icon"
              "Maskable icon is provided"
```

---

## 📦 EXEMPLO DE ÍCONE BASE

### SVG Template

```svg
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <!-- Fundo -->
  <rect width="512" height="512" fill="#152E5A"/>
  
  <!-- Gradiente (opcional) -->
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#152E5A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a3a6b;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#grad)"/>
  
  <!-- Texto DRH -->
  <text x="256" y="280" 
        font-family="Arial, sans-serif" 
        font-size="160" 
        font-weight="bold" 
        fill="#C9A961" 
        text-anchor="middle">
    DRH
  </text>
  
  <!-- Subtítulo -->
  <text x="256" y="340" 
        font-family="Arial, sans-serif" 
        font-size="40" 
        fill="#FFFFFF" 
        text-anchor="middle" 
        opacity="0.8">
    TJMA
  </text>
</svg>
```

Salvar como `icon-base.svg` e converter para PNG nos tamanhos necessários.

---

## ✅ CHECKLIST DE ÍCONES

### Arquivos Criados

- [ ] pwa-192x192.png (192x192px)
- [ ] pwa-512x512.png (512x512px)
- [ ] pwa-maskable-192x192.png (192x192px com safe area)
- [ ] pwa-maskable-512x512.png (512x512px com safe area)
- [ ] apple-touch-icon.png (180x180px)
- [ ] favicon.ico (32x32px)
- [ ] masked-icon.svg (opcional)

### Todos em `/public/`

- [ ] Arquivos copiados para pasta public
- [ ] Nomes corretos
- [ ] Tamanhos corretos
- [ ] Formato PNG (exceto favicon.ico)

### Qualidade

- [ ] Fundo institucional (#152E5A)
- [ ] Logo centralizada e visível
- [ ] Safe area respeitada (maskable)
- [ ] Sem pixelização
- [ ] Cores corretas
- [ ] Tamanho de arquivo otimizado (< 50KB cada)

### Testado

- [ ] Maskable.app
- [ ] Lighthouse (PWA audit)
- [ ] Instalado em Android
- [ ] Instalado em iOS
- [ ] Ícone aparece corretamente

---

## 🎯 RESULTADO FINAL

Após seguir este guia, você terá:

```
public/
├── pwa-192x192.png          ✅ Gerado
├── pwa-512x512.png          ✅ Gerado
├── pwa-maskable-192x192.png ✅ Gerado
├── pwa-maskable-512x512.png ✅ Gerado
├── apple-touch-icon.png     ✅ Gerado
├── favicon.ico              ✅ Gerado
└── masked-icon.svg          ✅ Gerado
```

**Ícones prontos para:**
- ✅ Instalação PWA
- ✅ Android
- ✅ iOS
- ✅ Desktop
- ✅ Todos os navegadores

---

## 📞 AJUDA

**Problemas com ícones?**

1. Verificar tamanhos exatos (192x192, 512x512, etc)
2. Formato PNG (não JPG)
3. Arquivos em `/public/`
4. Nomes corretos (pwa-192x192.png, não pwa-192.png)
5. Testar com Lighthouse

**Ferramenta não funciona?**

Use a opção online (PWA Builder) - mais fácil e confiável!

---

**DRH Flow - TJMA**

© 2026 Tribunal de Justiça do Estado do Maranhão

🎨 **Ícones profissionais para um app profissional!**
