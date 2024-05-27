# Blogs API

## Descrição do Projeto
Este projeto consiste no desenvolvimento de uma API e um banco de dados para a produção de conteúdo para um blog. A aplicação em Node.js utiliza o pacote Sequelize para criar um CRUD de posts, permitindo a criação, leitura, atualização e remoção de posts, usuários e categorias.

A API segue os princípios do REST, com endpoints conectados ao banco de dados. É necessário autenticação de usuário para criar posts, sendo assim, a relação entre usuário e post é tratada. Além disso, os posts estão associados a categorias, possibilitando a relação entre posts e categorias.

## Instruções de Execução com Docker

### Pré-requisitos
- Docker instalado na sua máquina

### Passos para Execução
1. Clone este repositório para a sua máquina.
2. Navegue até o diretório do projeto.
3. Execute o comando `docker-compose up -d` para iniciar os containers do MySQL e da API em segundo plano.
4. Aguarde até que os containers estejam prontos.
5. A API estará disponível em `http://localhost:3000`.
  
