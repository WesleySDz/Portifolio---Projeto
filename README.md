# Portfólio - Wesley Domingos

Portfólio profissional desenvolvido para apresentar minha trajetória, experiências, projetos acadêmicos e pessoais, habilidades técnicas e formas de contato.

## Acesso online

**URL de produção:** [https://portifolio-projeto-wesley.vercel.app/](https://portifolio-projeto-wesley.vercel.app/)

## Funcionalidades

- Navegação entre Início, Sobre Mim, Experiência, Projetos e Contato.
- Seleção de perfil para adaptar o conteúdo a visitantes, recrutadores e desenvolvedores.
- Interface em português e inglês.
- Reprodutor de música com playlist, aleatoriedade e repetição.
- Galeria de projetos com prévias, tecnologias e lightbox.
- Formulário de contato integrado ao cliente de e-mail por `mailto`.
- Layout responsivo para desktop e dispositivos móveis.

## Tecnologias utilizadas

- [React](https://react.dev/) - Biblioteca para construção da interface.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática.
- [Vite](https://vite.dev/) - Servidor de desenvolvimento e ferramenta de build.
- [Tailwind CSS](https://tailwindcss.com/) - Framework utilitário de CSS.
- [React Router](https://reactrouter.com/) - Roteamento das páginas.
- [Lucide React](https://lucide.dev/) - Biblioteca de ícones.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Tema, responsividade e estilos personalizados.

## Dependências e bibliotecas

### Produção

| Pacote | Finalidade |
| --- | --- |
| `react` e `react-dom` | Núcleo da aplicação e renderização no navegador. |
| `react-router-dom` | Definição e navegação entre rotas. |
| `lucide-react` | Ícones da interface. |
| `@tailwindcss/vite` | Integração do Tailwind CSS com o Vite. |

### Desenvolvimento

| Pacote | Finalidade |
| --- | --- |
| `typescript` | Compilação e verificação de tipos. |
| `vite` | Desenvolvimento e geração do build. |
| `@vitejs/plugin-react` | Suporte ao React no Vite. |
| `tailwindcss` | Utilitários de estilização. |
| `postcss` e `autoprefixer` | Processamento e compatibilidade do CSS. |
| `oxlint` | Linting e análise estática. |
| `@types/react`, `@types/react-dom` e `@types/node` | Tipos TypeScript das bibliotecas utilizadas. |

As versões exatas estão em [Codigo/frontend/package.json](Codigo/frontend/package.json) e [Codigo/frontend/package-lock.json](Codigo/frontend/package-lock.json).

## Estrutura de diretórios

```text
Portifolio---Projeto/
├── Artefatos/
│   ├── Diagramas/       # Diagramas do projeto
│   └── Wireframes/      # Protótipos das telas
├── Codigo/
│   └── frontend/
│       ├── public/      # Imagens, músicas, capas e ícones públicos
│       │   ├── covers/
│       │   ├── music/
│       │   ├── projects-images/
│       │   └── tech-icons/
│       ├── src/
│       │   ├── assets/          # Assets importados pela aplicação
│       │   ├── components/      # Componentes reutilizáveis
│       │   │   ├── experience/  # Elementos da experiência
│       │   │   └── projects/    # Componentes de projetos
│       │   ├── config/          # Contatos e links sociais
│       │   ├── contexts/        # Idioma e modo de visualização
│       │   ├── data/            # Tecnologias e faixas musicais
│       │   ├── libs/            # Funções utilitárias
│       │   ├── pages/           # Páginas da aplicação
│       │   ├── translations/    # Português e inglês
│       │   ├── App.tsx          # Rotas e provedores principais
│       │   ├── App.css          # Estilos da aplicação
│       │   └── index.css        # Tema global e estilos base
│       ├── index.html           # Documento HTML de entrada
│       ├── package.json         # Scripts e dependências
│       ├── vite.config.ts       # Configuração do Vite
│       └── vercel.json          # Rewrite das rotas na Vercel
├── LICENSE
└── README.md
```

### Rotas disponíveis

| Rota | Página |
| --- | --- |
| `/` | Início |
| `/about` | Sobre Mim |
| `/experience` | Experiência |
| `/projects` | Projetos |
| `/contact` | Contato |

## Instalação local

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado para clonar o repositório.

Na raiz do projeto, execute:

```bash
git clone https://github.com/WesleySDz/Portifolio---Projeto.git
cd Portifolio---Projeto/Codigo/frontend
npm install
```

## Execução em desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local, normalmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

O comando verifica os tipos e gera os arquivos otimizados em `dist`. Para servir o build localmente:

```bash
npm run preview
```

## Verificação de qualidade

```bash
npm run lint
```

## Publicação

O frontend pode ser publicado em serviços compatíveis com Vite, como a Vercel. Use `Codigo/frontend` como diretório do projeto e configure:

- **Comando de instalação:** `npm install`
- **Comando de build:** `npm run build`
- **Diretório de saída:** `dist`

O arquivo `Codigo/frontend/vercel.json` mantém as rotas do React Router funcionando após a publicação.

## Wireframes

Os protótipos visuais estão em [Artefatos/Wireframes](Artefatos/Wireframes):

- [Página inicial](Artefatos/Wireframes/Home.png)
- [Sobre Mim](Artefatos/Wireframes/Sobre.png)
- [Experiência](Artefatos/Wireframes/Experiencia.png)
- [Projetos](Artefatos/Wireframes/Projetos.png)
- [Contato](Artefatos/Wireframes/Contato.png)
- [Menu de navegação](Artefatos/Wireframes/Menu.png)
- [Modal de envio de mensagem](Artefatos/Wireframes/MandarMensagemModal.png)
