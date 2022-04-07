# CADFácil - Backend
## Passo a passo para configuração do projeto

1-Clone o projeto e dentro da pasta do projeto digite `yarn` para baixar as dependencias

2-Crie um arquivo .env na raiz do projeto com a mesma estrutura do `.env.example` presente na pasta

2.1- Edite o `.env` colocando as informações de qual banco será usado
exemplo

```sh
TYPEORM_CONNECTION = postgres
TYPEORM_HOST = localhost
TYPEORM_USERNAME = admin
TYPEORM_PASSWORD = 123456
TYPEORM_DATABASE = cadFacil
TYPEORM_PORT = 5432
```

2.2 Crie o banco de dados com o mesmo nome e informaçoes colocado no arquivo `.env`

2.3 No terminarl digite o comando `yarn typeorm migration:run` para realizar a criação das tabelas

3-Apos a configuração para iniciar o backend digite `yarn dev`

4- se tudo ocorreu corretamente irá aparecer a mensagem de `Server running ✔` e já está preparado para receber as requisiçoes

## Endpoints da API

| Metodo | Rota | body | Função
| ------ | ------ | ------ |  ------
| POST | /clients | `{"name": string "client_code": string"birthday": string}` | Cria novo Cliente
| GET | /clients/:id | **No body** | Vizualiza cliente por Id
| GET | /files/:nome_da_foto_banco | **No body** | Url para vizualizar a foto do cliente salva no banco
| GET | /clients | **No body**  | Vizualiza todos os clientes
| PUT | /clients/:id | `{"name": string "client_code": string"birthday": string}` | Atualiza os dados do cliente
| PATCH | /clients/profilePhoto/:id | **No body**  | Atualiza foto por id do cliente
| DELETE | /clients/:id | **No body**  | Deleta cliente
