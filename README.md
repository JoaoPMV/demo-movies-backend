# Movies API

API backend da aplicação **Movies**, responsável por autenticação de usuários e fornecimento de dados para o frontend.

---

## Objetivo

Fornecer serviços de backend para:

- cadastro e autenticação de usuários
- proteção de rotas com JWT
- integração com banco de dados MongoDB
- suporte aos exercícios de filmes consumidos pelo frontend

---

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JWT (autenticação)
- bcrypt

---

## Funcionalidades

- Cadastro de usuários
- Login com geração de token JWT
- Middleware de autenticação
- Rotas protegidas
- CRUD/listagem de dados de filmes (conforme implementação)

---

## Melhorias Futuras

- [ ] Refresh token
- [ ] Recuperação de senha
- [ ] Validação avançada de payload
- [ ] Rate limiting
- [ ] Logs e monitoramento

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- MongoDB em execução (local ou cloud)

### 1. Clonar o repositório

```bash
git clone https://github.com/JoaoPMV/movies-backend.git
```

### 2. Acessar a pasta do projeto

```bash
cd backend
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
JWT_SECRET=seu_segredo_jwt
```

### 5. Executar o projeto

```bash
npm run dev
```

Se não houver script `dev`, use:

```bash
npm start
```

A API ficará disponível em:

```bash
http://localhost:3000
```

---

## Frontend da Aplicação

Este repositório contém apenas o backend da aplicação.  
O frontend está disponível em:  
https://github.com/JoaoPMV/movies-frontend

---

## Autor

Desenvolvido por **JoaoPMV**  
GitHub: https://github.com/JoaoPMV
