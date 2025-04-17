# 🧾 Numora

**Numora** é um micro-SaaS de gestão financeira pessoal e para pequenos negócios. Com uma interface intuitiva, visual moderno e recursos poderosos, o sistema permite acompanhar receitas, despesas, categorias e gerar relatórios claros — tudo isso com foco em simplicidade e segurança.

## 🚀 Tecnologias

- **Next.js 14** — App Router e API Routes
- **React 18** — Componentização moderna
- **TypeScript** — Tipagem estática para maior segurança
- **TailwindCSS** — Estilização rápida e responsiva
- **ShadCN/UI** — Componentes acessíveis e consistentes
- **Prisma ORM** — Manipulação de dados com PostgreSQL
- **Node.js** — Backend leve e performático

## 📦 Funcionalidades (MVP)

- Autenticação de usuários (login/cadastro)
- Dashboard com visão geral de saldo, receitas e despesas
- CRUD de lançamentos financeiros
- Categorias personalizáveis
- Relatórios e gráficos mensais
- Tema claro/escuro
- Totalmente responsivo

## 📁 Estrutura Inicial de Pastas

```
/app
  /dashboard
  /auth
  /api
/components
  /ui
  /form
  /dashboard
/lib
  /auth
  /db
  /utils
/prisma
  schema.prisma
```

## 🛠️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/numora.git
cd numora
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

Crie um arquivo `.env` com a URL do seu banco PostgreSQL:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/numora"
```

4. Execute as migrações:

```bash
npx prisma migrate dev --name init
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## 🌱 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir *issues*, *pull requests* ou sugerir melhorias.

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais detalhes.

---

Feito com 💰 por [Seu Nome]
