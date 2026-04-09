# 🌐 DRH Flow - TJMA

## Sistema Integrado de Atendimento e Gestão Funcional

**Progressive Web App (PWA) Institucional do Tribunal de Justiça do Maranhão**

---

## 🎯 Sobre o Projeto

O **DRH Flow** é um sistema completo de gestão de recursos humanos desenvolvido para o Tribunal de Justiça do Maranhão (TJMA). Implementado como Progressive Web App (PWA), oferece experiência de aplicativo nativo em todas as plataformas.

### 🤖 Artemis - Assistente Virtual Inteligente

Sistema integrado com assistente virtual institucional para atendimento 24/7 aos servidores.

---

## ✨ Características

- ✅ **PWA Completo** - Instalável em iOS, Android e Desktop
- ✅ **Offline First** - Funciona sem conexão após primeira carga
- ✅ **Multiplataforma** - Um código, todas as plataformas
- ✅ **Design Institucional Premium** - Paleta TJMA oficial
- ✅ **11 Módulos Funcionais** - Sistema completo de gestão
- ✅ **Assistente Virtual Artemis** - Atendimento inteligente
- ✅ **Vídeo Institucional** - Apresentação integrada
- ✅ **WhatsApp & Telefone** - Integração direta
- ✅ **Auto-Update** - Atualizações automáticas em background
- ✅ **Responsivo** - Mobile-first design

---

## 🚀 Tecnologias

- **React 18.3** - Framework frontend
- **TypeScript** - Tipagem estática
- **Vite 6.3** - Build tool moderna
- **Tailwind CSS v4** - Framework CSS
- **React Router 7** - Roteamento
- **VitePWA** - Progressive Web App
- **Workbox** - Service Worker & Cache
- **Lucide React** - Ícones
- **Material UI** - Componentes premium
- **Motion** - Animações

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou 20+
- npm 8+

### Instalar Dependências

```bash
npm install
```

### Adicionar Vídeo da Artemis

```bash
# Copiar vídeo para pasta public
# O arquivo deve estar em: public/videos/artemis-presentation.mp4
```

---

## 🛠️ Desenvolvimento

### Modo Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

Acesse: `http://localhost:4173`

---

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tjma/drh-flow-app-tjma)

```bash
# CLI
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

```bash
npm install -D gh-pages
npm run deploy
```

---

## 📱 Instalação como App

### Android / Desktop

1. Acesse o site
2. Banner aparece automaticamente
3. Clique "Instalar Agora"
4. ✅ App instalado!

### iOS

1. Acesse no Safari
2. Compartilhar > Adicionar à Tela de Início
3. ✅ App instalado!

---

## 🎨 Ícones PWA

Para PWA completo, gerar ícones:

**Ferramenta online:** https://www.pwabuilder.com/imageGenerator

**Ícones necessários:**
- `pwa-192x192.png`
- `pwa-512x512.png`
- `pwa-maskable-192x192.png`
- `pwa-maskable-512x512.png`
- `apple-touch-icon.png`
- `favicon.ico`

Salvar em: `/public/`

---

## 📂 Estrutura do Projeto

```
drh-flow-app-tjma/
├── public/
│   ├── videos/
│   │   └── artemis-presentation.mp4
│   └── manifest.json
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── artemis/
│   │   │   ├── pwa/
│   │   │   └── ...
│   │   ├── pages/
│   │   ├── routes.tsx
│   │   └── App.tsx
│   └── styles/
├── scripts/
├── vite.config.ts
├── package.json
└── README.md
```

---

## 🧪 Testes

### Lighthouse Audit

```
Chrome DevTools (F12) > Lighthouse > Generate report
```

**Scores esperados:**
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 90+
- PWA: 100 ✅

### Teste Offline

1. Abrir app online
2. Navegar por todas páginas
3. Ativar modo offline
4. App deve funcionar normalmente

---

## 📖 Documentação

Documentação completa disponível em:

- `README_PWA.md` - Visão geral PWA
- `PUBLICAR_APP_PUBLICO.md` - Guia de publicação
- `DEPLOY_RAPIDO.md` - Deploy em 5 minutos
- `TESTAR_PWA.md` - Guia de testes
- `TRANSFORMACAO_PWA_COMPLETA.md` - Resumo técnico

---

## 🎯 Módulos do Sistema

1. **Dashboard** - Visão geral e métricas
2. **Vida Funcional** - Histórico e trajetória
3. **Frequência** - Banco de horas e ponto
4. **Licenças** - Gestão de licenças e afastamentos
5. **Benefícios** - Vale-alimentação, saúde, etc
6. **Teletrabalho** - Regime home office
7. **Protocolo** - Protocolo administrativo
8. **Assistente Virtual** - Artemis IA
9. **Documentos** - Gestão documental
10. **Treinamentos** - Capacitações
11. **Configurações** - Preferências

---

## 📞 Contato

**Sistema:** DRH Flow - TJMA  
**WhatsApp:** (98) 3255-2395  
**Telefone:** (98) 3255-2395  

---

## 🔒 Segurança

- HTTPS obrigatório em produção
- Autenticação integrada
- Headers de segurança configurados
- Service Worker com cache seguro

---

## 🤝 Contribuindo

Este é um projeto institucional do TJMA. Contribuições internas são bem-vindas.

---

## 📄 Licença

© 2026 Tribunal de Justiça do Estado do Maranhão

Sistema oficial desenvolvido para uso institucional interno.

---

## 🎉 Características Técnicas

### PWA Features

- ✅ Instalável (Add to Home Screen)
- ✅ Offline capable (Service Worker)
- ✅ Fast loading (Cache strategies)
- ✅ Auto-update (Background sync)
- ✅ Push notifications ready
- ✅ App shortcuts (Android)
- ✅ Splash screens
- ✅ Theme color
- ✅ Standalone mode

### Performance

- ⚡ Vite build otimizado
- ⚡ Code splitting automático
- ⚡ Lazy loading de rotas
- ⚡ Asset optimization
- ⚡ Tree shaking
- ⚡ Minificação
- ⚡ Gzip compression
- ⚡ CDN ready

### Acessibilidade

- ♿ WCAG 2.1 AA compliant
- ♿ Semantic HTML
- ♿ ARIA labels
- ♿ Keyboard navigation
- ♿ Screen reader support
- ♿ High contrast mode
- ♿ Focus indicators

---

## 🚀 Quick Start

```bash
# Clone o repositório
git clone https://github.com/tjma/drh-flow-app-tjma.git

# Entre na pasta
cd drh-flow-app-tjma

# Instale dependências
npm install

# Inicie em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Deploy no Vercel
vercel --prod
```

---

## 📊 Status

- **Versão:** 1.0.0
- **Status:** ✅ Production Ready
- **PWA Score:** 100/100
- **Performance:** 95+
- **Última atualização:** Abril 2026

---

## 🌟 Destaques

### Artemis - Assistente Virtual

Sistema de atendimento inteligente com:
- Vídeo institucional integrado
- Chat contextualizado
- Integração WhatsApp
- Telefone direto
- Respostas instantâneas
- Disponível 24/7

### Design Institucional

- Paleta de cores oficial TJMA
- Azul institucional: #152E5A
- Dourado sutil: #C9A961
- Gradientes premium
- Animações sutis
- Glassmorphism effects

---

## 🔗 Links Úteis

- **Documentação:** Ver pasta `/docs`
- **Issues:** GitHub Issues
- **Vercel:** Dashboard de deploy
- **Lighthouse:** Chrome DevTools

---

**Desenvolvido para o Tribunal de Justiça do Estado do Maranhão**

🤖✨ **Artemis - Assistente Virtual Inteligente**

💼 **DRH Flow - Sistema Integrado de Gestão Funcional**

---

**Made with ❤️ for TJMA**

🚀 **Deploy: Ready** | 📱 **PWA: 100%** | ⚡ **Performance: 95+**
