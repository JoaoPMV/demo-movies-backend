# Projects: Movies 🎬 – Backend (API)

API REST para gerenciar filmes e exercícios de aprendizado de inglês.  
Fornece autenticação, persistência de dados e endpoints para o frontend consumir.

## 🎯 Objetivo

Oferecer uma API robusta e segura para suportar a aplicação frontend, gerenciando usuários, filmes e progresso de aprendizado.

## 🛠️ Stack Tecnológico

- Node.js
- Express
- MongoDB
- JWT (autenticação)
- bcrypt (hash de senha)

## ✨ Funcionalidades

- ✅ Autenticação com JWT
- ✅ Cadastro e login de usuários
- ✅ Rotas protegidas
- ✅ CRUD de filmes
- ✅ Armazenamento de respostas do usuário
- ✅ Cálculo de pontuação

## 🚀 Como Começar

### Pré-requisitos

- Node.js instalado
- MongoDB rodando

### Instalação

```bash
npm install
npm run dev
```

Configure as variáveis de ambiente no `.env`:

````PORT=3000
MONGODB_URI=mongodb://localhost:27017/movies
JWT_SECRET=sua_chave_secreta_aqui_```

## 🔗 Integração

Este é o **backend** da aplicação. O frontend (React) está em:
👉 https://github.com/JoaoPMV/movies-frontend

## 📝 Status do Projeto

Projeto em evolução para portfólio, com frontend e backend integrados.
````
