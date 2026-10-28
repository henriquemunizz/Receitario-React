# Receitário — Catálogo de receitas

Projeto acadêmico do Checkpoint 5 de Frontend da FIAP.

**Aplicação na Vercel:** https://receitario-react1.vercel.app/
**Repositório no GitHub:** https://github.com/henriquemunizz/Receitario-React

![Tela do catálogo do Receitário](catalogo.png)

## Descrição do projeto

O Receitário é uma aplicação SPA (Single Page Application) desenvolvida com React, Vite e TypeScript. O projeto permite consultar receitas da API pública DummyJSON, buscar pelo nome, filtrar por culinária e visualizar ingredientes e modo de preparo.

A implementação segue a estrutura e os padrões apresentados no NexStore do professor, adaptados ao domínio de receitas. Os favoritos ficam apenas no estado da página do catálogo e não são armazenados após sair dessa página.

## Funcionalidades

- Catálogo com imagem, nome, culinária e tempo total de cada receita.
- Busca por nome combinada com filtro por culinária.
- Opções de culinária obtidas a partir das receitas da API.
- Botão para favoritar e desfavoritar, com contador no catálogo.
- Página dinâmica com imagem, ingredientes, modo de preparo e tempos.
- Mensagem para receitas inexistentes.
- Página para endereços não encontrados, com retorno ao catálogo.
- Header e footer compartilhados e layout responsivo.

## Imagem do projeto

O print do catálogo exibido acima está no arquivo `catalogo.png`, na raiz do projeto.

## Tecnologias utilizadas

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- React Router DOM.
- Lucide React.
- ESLint.
- Git e GitHub para versionamento e entrega.

## Como usar

### Pré-requisitos

- Node.js compatível com a versão do Vite utilizada. Projeto validado com Node.js 24.
- npm instalado.

### Instalação

```sh
npm install
```

### Execução em desenvolvimento

Na pasta do projeto:

```sh
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:5173`. Mantenha o terminal em execução enquanto utiliza o site.

Para acessar explicitamente pelo endereço local IPv4:

```sh
npm run dev -- --host 127.0.0.1
```

### Verificação do projeto

```sh
npm run lint
npm run build
```

### Visualização do build

```sh
npm run preview
```

Abra o endereço informado pelo comando de preview.

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Catálogo, busca, filtro e favoritos |
| `/receitas/:id` | Detalhe de uma receita |
| `*` | Página não encontrada |

## Estrutura de pastas

```text
src/
├── components/          # Header e componentes do catálogo
├── hooks/               # Carregamento das receitas e culinárias
├── layouts/             # Layout compartilhado com header e footer
├── pages/               # Catálogo, detalhe e página 404
├── services/            # Requisições para a DummyJSON
├── types/               # Interfaces da receita e da resposta da API
├── App.tsx              # Rotas da aplicação
├── index.css            # Tailwind CSS e estilos compartilhados
└── main.tsx             # Entrada do React

catalogo.png             # Print real do catálogo
vercel.json              # Rewrites para as rotas da SPA
```

## Integração com a API

A aplicação consome a [API pública de receitas da DummyJSON](https://dummyjson.com/docs/recipes), sem necessidade de chave de acesso.

| Endpoint | Uso |
| --- | --- |
| `GET https://dummyjson.com/recipes?limit=0` | Lista completa de receitas |
| `GET https://dummyjson.com/recipes/{id}` | Detalhe de uma receita |

A resposta da listagem é tipada como `{ recipes, total, skip, limit }`. O tempo total é calculado no front pela soma de `prepTimeMinutes` e `cookTimeMinutes`. Respostas HTTP 404 no detalhe exibem a mensagem de receita não encontrada.

## Integrantes e créditos

| Nome | RM | Turma | GitHub |
| --- | --- | --- | --- |
| Henrique da Silva Muniz | 573874 | 1TDSPv-2026 | [henriquemunizz](https://github.com/henriquemunizz) |
| Erick Keiji Miyashiro | 568966 | 1TDSPv-2026 | [erickmiyashiro](https://github.com/erickmiyashiro) |

## Links da entrega

- **Repositório público no GitHub:** https://github.com/henriquemunizz/Receitario-React
- **Aplicação publicada na Vercel:** https://receitario-react1.vercel.app/

## Contato

- Henrique: henriquedasilvamuniz03@gmail.com
- Erick: erickmiyashiro@gmail.com
