# API de Gerenciamento de Filmes

Esta é uma API RESTful desenvolvida com o framework NestJS para gerenciar filmes e controlar o tráfego de usuários com
autenticação JWT.

## Tecnologias Utilizadas

- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional, robusto e altamente escalável.
- **Redis**: Armazenamento de estrutura de dados em memória, extremamente rápido e versátil, ideal para caching e
  gerenciamento de filas de mensagens.
- **NestJS**: Um framework Node.js para construir aplicativos escaláveis do lado do servidor. Ele utiliza TypeScript e é
  construído com base na arquitetura do Angular.
- **TypeORM**: Uma biblioteca de mapeamento objeto-relacional (ORM) para TypeScript e JavaScript. É usada para interagir
  com o banco de dados relacional.
- **Swagger**: Uma ferramenta de documentação para APIs RESTful. É usada para descrever e documentar os endpoints da API
  de forma clara e abrangente.
- **JWT (JSON Web Tokens)**: Um método padrão para transmitir informações de forma segura entre duas partes. É usado
  para autenticação e geração de tokens de acesso.
- **Class Validator**: Uma biblioteca para validação de dados em classes TypeScript. É usada para validar os dados de
  entrada para a API.
- **Class Transformer**: Uma biblioteca para transformação de classes em JavaScript/TypeScript. É usada para transformar
  objetos de entrada em instâncias de classes.

## Experiência

Recentemente, dediquei-me ao estudo e aplicação de padrões de design, notando sua relevância neste projeto. Destaco a
implementação do padrão Singleton, permitindo uma instância imutável, alinhada à abordagem com Redis. Com experiência
em Java, encontrei uma curva de aprendizado suave com TypeScript e NestJS. Em aproximadamente sete meses, aprimorei meu
domínio em TypeScript, incluindo sua aplicação no front-end do meu TCC em Angular. Também conduzi projetos de back-end
em Nest.js de forma independente, ampliando minhas habilidades nessa área.

### Funcionalidades

- Documentação detalhada da API com Swagger

#### API de Usuários

- Registro de usuários
- Login e autenticação com JWT
- Recuperação de informações do usuário
- Exclusão de usuários

#### API de Catálogo de Filmes

- Registro de filmes
- Recuperação de informações de filmes
- Atualização de detalhes do filme
- Exclusão de filmes

#### Instalação

1. Clone o repositório: git clone https://github.com/fferme/movie-catalog
2. Instale as dependências: npm install
3. Configure as variáveis de ambiente em um arquivo .env
4. Execute o servidor: npm run start:dev

#### Uso do Swagger

Acesse a documentação da API em http://localhost:3000/api#/default para obter informações sobre os endpoints e como
utilizá-los.
Faça requisições HTTP para os endpoints fornecidos na documentação para interagir com a API.

#### Deploy

Deploy do banco de dados (Postgres) e dados em cache (Redis) foi feito utilizando o Aiven, que provisiona serviços da
Digital Ocean. Já a aplicação foi provisionada no site Netlify.

##### TypeORM com PostgreSQL (Aiven):

- Tipo de Banco de Dados: PostgreSQL
- Host: movie-catalog-postgres-movie-catalog-fferme.l.aivencloud.com
- Porta: 20957
- Nome de Usuário: avnadmin
- Senha: AVNS_mAR5hA-Ef-AFjJurxDU
- Banco de Dados: defaultdb
- Opções Adicionais: SSL é ativado e configurado para rejeitar não autorizados, com o arquivo de certificado CA sendo
  lido a partir de "./ca.pem".

##### Redis (Aiven)

- Host: movie-catalog-redis-movie-catalog-fferme.l.aivencloud.com
- Porta: 20958
- Nome de Usuário: default
- Senha: AVNS_OY3E85e518t6uERf2dr
- Opções Adicionais: Configurações para evitar limites de tentativas de solicitação e desabilitar a verificação de
  prontidão.

#### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias, correções de
bugs ou novas funcionalidades.

#### Licença

Este projeto está licenciado sob a Licença MIT.

Este README fornece uma visão geral das tecnologias utilizadas no projeto, suas funcionalidades, instruções de
instalação e uso, diretrizes de contribuição e informações de licença. Certifique-se de personalizar as seções conforme
necessário para refletir o conteúdo específico do seu projeto.