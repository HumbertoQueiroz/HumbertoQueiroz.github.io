# Portfólio — Humberto Queiroz

Portfólio de **Humberto Queiroz**, desenvolvedor Full-Stack (React, TypeScript, Node.js e PostgreSQL), de Campo Verde, MT.

Site: https://devhumbertoqueiroz.com.br/ · Currículo online: https://dev-humberto-queiroz.vercel.app/

O layout foi desenhado no Figma e implementado com foco em fidelidade visual e em responsividade (celular, tablet e desktop).

## Stack

- React 19 e TypeScript, com Vite
- Tailwind CSS v4 e shadcn/ui (Embla para o carrossel)
- Fontes self-hosted: Red Rose, Poppins e Kode Mono
- Publicação no GitHub Pages por GitHub Actions

## Seções

Início, Perfil pessoal, Destaque (Meu Vestir), Meus Projetos (carrossel em leque com App193 e Meu Vestir) e Contato.

## Como rodar

Requer Node 22 ou superior.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera a pasta dist
```

## Organização

```
src/
  data/            conteúdo do site (perfil, contatos e projetos): é o único lugar a editar para atualizar textos e links
  components/
    layout/        menu lateral e barra superior
    sections/      Hero, Perfil, Destaque, Projetos e Contato
    shared/        peças reutilizadas (Section, botões, logo, indicadores)
    ui/            componentes do shadcn/ui
  hooks/           seção ativa no menu e animação de entrada
  assets/          fotos e telas dos projetos
```

Para adicionar um projeto, inclua um item em `src/data/projects.ts` (telas, links e destaque): o carrossel e os botões se ajustam sozinhos.

## Publicação

A cada push na `main`, o workflow em `.github/workflows/deploy.yml` instala as dependências, gera o build e publica no GitHub Pages.

> O site anterior (páginas de estudo em HTML) está guardado na tag `site-antigo-2026-10-14` deste repositório.
