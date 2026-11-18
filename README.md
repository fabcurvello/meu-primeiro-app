<h1 align="center">🛒 Minha Loja — Angular Moderno na Prática</h1>

<p align="center">
  <strong>Aplicação prática do material didático, do primeiro componente ao e-commerce completo</strong>
</p>

<p align="center">
  Unidade curricular de <strong>Front-end com Angular</strong> · Curso de <strong>Desenvolvedor Fullstack</strong><br/><strong>SENAI Digitech — Centro de Referência em TIC RJ</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular 21" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Signals-reatividade-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Signals" />
  <img src="https://img.shields.io/badge/Angular%20Material-3F51B5?style=for-the-badge&logo=materialdesign&logoColor=white" alt="Angular Material" />
  <br/>
  <img src="https://img.shields.io/badge/SSR-Angular%20SSR%20%2B%20Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="SSR" />
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" />
  <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" alt="RxJS" />
  <br/>
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-success?style=flat-square" alt="Status: concluído" /> <img src="https://img.shields.io/badge/aulas-04%20a%2034-DD0031?style=flat-square" alt="Aulas 04 a 34" /> <img src="https://img.shields.io/badge/vers%C3%A3o-aplica%C3%A7%C3%A3o%20pr%C3%A1tica-1F3A93?style=flat-square" alt="Versão de aplicação prática" />
</p>

---

## 💡 Sobre este repositório

Este repositório é a **aplicação prática** do material didático que escrevi para a unidade curricular de **Front-end com Angular** do curso de **Desenvolvedor Fullstack** do **SENAI Digitech — Centro de Referência em TIC RJ**.

Aqui o roteiro das apostilas foi percorrido do início ao fim, tema por tema, mostrando a evolução real de um projeto Angular: do primeiro componente a um e-commerce com autenticação, área administrativa e SSR.

O resultado é a **Minha Loja**, um e-commerce completo construído com **Angular 21** e as práticas mais atuais do framework: **componentes standalone, Signals, novo control flow (`@if` / `@for`), lazy loading, guards e interceptors funcionais, Reactive Forms, Angular Material e renderização no servidor (SSR)**.

Este é o projeto que o aluno termina o curso sabendo construir sozinho: uma aplicação com cara de produto real, organizada como em uma equipe profissional.

## ✨ O que a aplicação faz

| Funcionalidade | Descrição |
|---|---|
| 🏠 **Home** | Página inicial da loja |
| 🛍️ **Catálogo de produtos** | Produtos carregados de uma API REST real ([Fake Store API](https://fakestoreapi.com)) via `HttpClient` |
| 🛒 **Carrinho de compras** | Adiciona e remove itens e calcula o total em tempo real com **Signals** e `computed()`. O carrinho persiste no `localStorage` |
| 🔐 **Login com JWT** | Autenticação simulada com token JWT e perfis de **usuário** e **administrador** |
| 🧾 **Checkout** | Formulário reativo com validações (`required`, `minLength`, `email`) |
| 🛡️ **Área administrativa** | Rota protegida, acessível somente ao perfil admin |
| 🚫 **Acesso negado** | Redirecionamento automático quando o usuário não tem permissão |
| 📱 **Interface responsiva** | Layout com Angular Material, header com menu e foco em UX |

## 🧠 Conceitos de Angular moderno aplicados

<table>
<tr>
<td valign="top" width="50%">

**⚡ Reatividade com Signals**
- `signal()`, `computed()` e `effect()`
- Estado global do carrinho e da autenticação em services com Signals
- Persistência automática com `effect()` + `localStorage`

**🧩 Componentes**
- Componentes **standalone**
- Comunicação pai ↔ filho com `@Input()` e `@Output()` / `EventEmitter`
- Novo control flow: `@if`, `@else` e `@for`
- Pipes nativos (`CurrencyPipe`) e **pipe customizado** (`precoFormatado`)

**🧭 Rotas**
- `provideRouter` com rotas do e-commerce
- **Lazy loading** com `loadComponent`
- **Guards funcionais** (`authGuard`, `adminGuard`) com `createUrlTree`

</td>
<td valign="top" width="50%">

**🌐 HTTP e integração**
- `provideHttpClient(withFetch(), withInterceptors(...))`
- **Interceptor funcional** que injeta o header `Authorization: Bearer`
- Tratamento centralizado de erros **401, 403 e 500**

**📝 Formulários**
- **Reactive Forms** com `FormGroup` e `FormControl`
- Validações e mensagens de erro no checkout

**🏗️ Arquitetura profissional**
- Organização em `core/`, `features/` e `shared/`
- Padrão **Facade** (`AuthFacade`, `CarrinhoFacade`) separando a UI da lógica
- Models tipados com TypeScript

**🚀 Produção**
- **SSR** com `@angular/ssr` + Express e hidratação com `withEventReplay()`
- Código seguro para SSR com `isPlatformBrowser`
- Testes unitários com **Vitest**

</td>
</tr>
</table>

## 🗺️ Trilha de aprendizagem

Cada commit corresponde a um tema do material ("Componente Produto", "Introdução ao Router", "Reactive Forms", "Login com JWT"…), na mesma ordem das aulas. O [histórico de commits](../../commits/main) funciona como um passo a passo do curso.

```mermaid
flowchart TB
    subgraph T1 [" "]
        direction LR
        A["🧩 Fundamentos<br/>Componentes · Control flow<br/>Pipes · Comunicação"] --> B["⚡ Signals<br/>signal · computed<br/>effect · Carrinho"] --> C["🧭 Rotas<br/>Router · Lazy loading<br/>Guards"] --> D["🌐 HTTP<br/>HttpClient · API<br/>Interceptors · Erros"]
    end
    subgraph T2 [" "]
        direction LR
        E["🎨 Interface<br/>Angular Material<br/>Header · Responsividade"] --> F["📝 Estado e Forms<br/>Estado global<br/>Reactive Forms · Checkout"] --> G["🔐 Segurança<br/>Login JWT<br/>Guards + Interceptors"] --> H["🏆 Profissional<br/>Organização<br/>Refatoração · Refino"]
    end
    T1 --> T2
```

| Módulo | Aulas | Conteúdo |
|---|:---:|---|
| 🧩 Fundamentos | 04 – 07 | Componentes, controle de fluxo, pipes, comunicação entre componentes e estrutura do projeto |
| ⚡ Signals | 08 – 11 | Introdução a Signals, writable e computed signals, effects e carrinho de compras com Signals |
| 🧭 Rotas | 12 – 15 | Router, rotas do e-commerce, lazy loading com `loadComponent`, guards e segurança de rotas |
| 🌐 HTTP | 16 – 20 | HttpClient, consumo de API em service, interceptors e tratamento de erros |
| 🎨 Interface | 21 – 23 | Angular Material, interface e header com menu, responsividade e UX |
| 📝 Estado e formulários | 24 – 27 | Estado global com Signals e services, Reactive Forms, validações e formulário de checkout |
| 🔐 Segurança | 28 – 30 | Login com JWT, guards + interceptors para proteger a área admin e controle de acesso |
| 🏆 Acabamento profissional | 31 – 34 | Organização profissional, refatoração, finalização funcional e refino final |

## 📂 Estrutura do projeto

```
src/app/
├── core/                      # Núcleo da aplicação (singleton)
│   ├── facades/               # AuthFacade, CarrinhoFacade
│   ├── interceptors/          # http.interceptor.ts (token + erros)
│   ├── models/                # ProdutoLoja, ItemCarrinho
│   ├── services/              # AuthService, CarrinhoService, ProdutosService
│   ├── auth.guard.ts
│   └── admin.guard.ts
├── features/                  # Telas da aplicação (lazy loaded)
│   ├── home/
│   ├── produtos/              # lista-produtos + produto
│   ├── carrinho/
│   ├── checkout/
│   ├── login/
│   ├── admin/
│   └── acesso-negado/
├── shared/                    # Reutilizáveis
│   ├── layout/header/
│   └── pipes/preco-formatado-pipe.ts
├── app.config.ts              # Providers: router, HttpClient, interceptors, hydration
└── app.routes.ts              # Rotas com loadComponent e guards
```

## 🚀 Como executar

**Pré-requisitos:** Node.js (LTS) e Angular CLI 21.

```bash
git clone https://github.com/fabcurvello/meu-primeiro-app.git
cd meu-primeiro-app
npm install
npm start
```

Acesse **http://localhost:4200**.

| Comando | O que faz |
|---|---|
| `npm start` | Servidor de desenvolvimento |
| `npm run build` | Build de produção (com SSR) |
| `npm run serve:ssr:meu-primeiro-app` | Executa a versão SSR compilada com Express |
| `npm test` | Testes unitários com Vitest |

### 🔑 Como testar o login

O login é **simulado** para fins didáticos e aceita qualquer e-mail e senha:

| Perfil | E-mail | Acesso |
|---|---|---|
| 👤 Usuário | qualquer e-mail | Catálogo, carrinho e checkout |
| 🛡️ Administrador | `admin@email.com` | Tudo acima + área **/admin** |

## 👨‍🏫 Sobre o autor

**Fabricio Curvello** é desenvolvedor e professor de desenvolvimento de software, e o **autor do material didático** da unidade curricular de Front-end com Angular do curso de Desenvolvedor Fullstack do SENAI Digitech.

Leciona no SENAI-RJ desde 1997, em cursos de programação, banco de dados, web e desenvolvimento fullstack, e no Centro Universitário IBMR desde 2018, nos cursos de Análise e Desenvolvimento de Sistemas, Ciência da Computação e Gestão de TI.

No front-end, ensina Angular do jeito que o mercado usa hoje: Signals, standalone, SSR e uma arquitetura organizada desde a primeira linha. O aluno não aprende só a fazer funcionar, aprende a fazer do jeito certo.

<p align="left">
  <a href="https://www.linkedin.com/in/fabriciocurvello"><img src="https://img.shields.io/badge/LinkedIn-fabriciocurvello-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://www.youtube.com/@fabriciocurvello"><img src="https://img.shields.io/badge/YouTube-@fabriciocurvello-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" /></a>
  <a href="https://github.com/fabcurvello"><img src="https://img.shields.io/badge/GitHub-fabcurvello-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="http://lattes.cnpq.br/2406072276749635"><img src="https://img.shields.io/badge/Lattes-Curr%C3%ADculo-003366?style=for-the-badge" alt="Currículo Lattes" /></a>
</p>

---

<p align="center">
  Material didático da unidade curricular de Front-end com Angular — Curso de Desenvolvedor Fullstack<br/>
  <strong>SENAI Digitech — Centro de Referência em TIC RJ</strong>
</p>
