# CLAUDE.md

## O que é este projeto

`cursodev-ia` é um projeto de aprendizado: um site simples de uma única
página, construído passo a passo durante um curso de desenvolvimento
com IA. Ele serve como base para praticar o fluxo completo de um
projeto real: código, Git, GitHub e um framework moderno.

## Estado atual

- Site de página única (rota `/`) exibindo apenas uma lista de nomes:
  - Jonil de Morais
  - Maria de Jesus
  - Shrek Rex
- A lista é exibida centralizada (horizontal e verticalmente), com
  fonte grande (`clamp(2rem, 8vw, 4.5rem)`), em negrito e em
  maiúsculas (`text-transform: uppercase`).
- O conteúdo mínimo é proposital: o projeto evolui aos poucos,
  um passo de cada vez.

## Stack

- **Next.js 16.2.12** (App Router, convenções modernas)
- **React 19.2.9** / **React DOM 19.2.9**
- JavaScript puro (sem TypeScript), sem Tailwind, sem bibliotecas extras
- Server Components por padrão (sem `"use client"`)

## Estrutura

```
cursodev-ia/
├── app/
│   ├── layout.js    # Layout raiz: <html lang="pt-BR">, título via metadata
│   ├── page.js      # Página inicial: apenas a lista de nomes
│   └── globals.css  # Estilos globais da lista
├── package.json
├── package-lock.json
└── README.md
```

## Como rodar

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de produção
npm start      # serve o build de produção
```

## Histórico (como o projeto chegou até aqui)

1. Começou como um site em HTML puro (`index.html`), com a mesma lista
   de nomes centralizada, em fonte grande e maiúsculas.
2. Foi publicado no GitHub via commit → push → Pull Request → merge
   na branch `main`.
3. Foi migrado para Next.js 16.2.12, mantendo o visual idêntico e
   removendo o `index.html` antigo.

## Convenções e preferências de trabalho

- **Simplicidade acima de tudo**: mínimo de código e de arquivos
  necessário para cumprir o pedido. Não adicionar dependências,
  pastas ou abstrações sem necessidade.
- **Trabalho feito neste ambiente (com a IA), não no GitHub Codespaces** —
  o Codespace consome cota paga do GitHub e não deve ser usado neste
  projeto. O GitHub é apenas para guardar e visualizar o código
  (repositório remoto gratuito).
- **Publicação das alterações**: commit na branch de trabalho, push
  para o GitHub e merge na `main` via Pull Request.
- Preservar sempre o conteúdo e o visual da página inicial (lista de
  nomes centralizada, fonte grande, maiúsculas), salvo pedido explícito
  de mudança.
- Idioma do projeto e da comunicação: **português (pt-BR)**.

## Próximos passos possíveis

- Publicar o site no ar gratuitamente (a Vercel é a plataforma natural
  para projetos Next.js e já está conectada a esta conversa).
