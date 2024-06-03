# Meu Projeto Serverless

Este é um projeto Serverless para gerenciamento de usuários.

## Como Rodar os Testes

Para rodar o projeto localmente, siga as instruções abaixo:

### Pré-requisitos

- Node.js instalado na sua máquina
- Conta na AWS com credenciais configuradas

### Instalação

1. Clone o repositório:

```bash
git clone git@github.com:luanhcastro/serverless-app.git
```

2. Instale as dependencias

```bash
npm install
```

3. Executar os testes:

```bash
npm run test
```

### Consumindo a API:

API_URL: https://plt19n2heg.execute-api.us-east-1.amazonaws.com/dev

#### POST:

##### post /users

body:

```json
{
    "name": "Carlos",
    "age": 30,
    "role": "admin"
}
```

#### GET ALL:

##### get /users

#### GET BY ID:

##### get /users/id


#### PUT:

##### put /users/id

body:

```json
{
    "role": "customer"
}
```

#### DELETE

##### delete /users/id