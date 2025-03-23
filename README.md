# Wise Wallet

**Organize suas finanças, alcance seus objetivos.**

Wise Wallet é um sistema moderno e intuitivo para gestão de finanças pessoais, projetado para auxiliar usuários no controle de suas receitas, despesas e investimentos. O objetivo do projeto é fornecer uma visão clara e prática da saúde financeira do usuário, facilitando o planejamento financeiro e o alcance de metas.

## Tecnologias Utilizadas

- **Front-end**
  - [TypeScript](https://www.typescriptlang.org/)
  - [React](https://reactjs.org/)
  - [Next.js](https://nextjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Shadcn/UI](https://shadcn.dev/)

- **Back-end**
  - [TypeScript](https://www.typescriptlang.org/)
  - [Node.js](https://nodejs.org/)
  - [Fastify](https://www.fastify.io/)
  - [Prisma ORM](https://www.prisma.io/)
  - [PostgreSQL](https://www.postgresql.org/)

## Futuras Funcionalidades

- **Controle de Receitas e Despesas**  
  Permite adicionar, editar e categorizar entradas e saídas financeiras, com detalhamento por data, categoria e descrição.

- **Dashboard Financeiro Dinâmico**  
  Visualização gráfica e intuitiva do saldo atual, fluxo de caixa e distribuição de gastos por categoria.

- **Metas Financeiras Personalizadas**  
  Usuários podem definir metas como reserva de emergência, viagens ou aquisição de bens, acompanhando seu progresso ao longo do tempo.

- **Histórico e Relatórios**  
  Acompanhamento detalhado do histórico de transações, com geração de relatórios mensais ou anuais.

- **Gerenciamento de Usuários e Autenticação**  
  Cadastro, login e segurança com tokens de autenticação para garantir a privacidade dos dados financeiros.

## Instalação

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Passos para rodar o projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/samuelgomes0/wise.wallet.git
    ```

2. Acesse os diretórios do projeto:

    ```bash
    cd wise.wallet/client
    cd wise.wallet/server
    ```

3. Instale as dependências em ambos os diretórios:

    ```bash
    npm install
    ```

4. Configure os arquivos `.env` com as variáveis de ambiente necessárias. Exemplo:

    ```bash
    DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
    JWT_SECRET=suasecretkey
    ```

5. Rode as migrações do Prisma no servidor para configurar o banco de dados:

    ```bash
    npx prisma migrate dev
    ```

6. Inicie os ambientes de desenvolvimento em ambos os diretórios:

    ```bash
    npm run dev
    ```

7. Acesse o projeto no navegador:

    ```
    http://localhost:3000
    ```

## Contribuição

Contribuições são muito bem-vindas! Caso deseje colaborar com o projeto:

1. Faça um fork do repositório.

2. Crie uma nova branch para sua feature ou correção:

    ```bash
    git checkout -b minha-feature
    ```

3. Commit suas alterações:

    ```bash
    git commit -m 'Adicionar nova feature'
    ```

4. Faça push para sua branch:

    ```bash
    git push origin minha-feature
    ```

5. Abra um Pull Request.
