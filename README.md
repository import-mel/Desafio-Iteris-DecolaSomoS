# Desafio SomoS: Jogo de comparação de cartas de Pokémon

<img align="center" src='https://media.sketchfab.com/models/befc8f22e2bc4f3185ed638a0beae46d/thumbnails/54f623d8a5d94fdfa1a300edc120ba99/d68fb0040eab431fb7c5cc51676aa303.jpeg'>

Realizei o desafio utilizando a linguagem `Node.js` e o framework `Express`.

# Descrição
Este é um jogo de comparação de cartas de Pokémons, onde é possível fazer o  CRUD (criar, listar, atualizar e deletar)  de cartas de Pokemons para que dois jogadores possam escolher duas cartas por meio do id (a chave primária ou identificador das cartas) para a aplicação fazer uma comparação de atributos, e a carta com a maior quantidade de atributos fortes será a vencedora.


### Pré-requisitos:
- Para conseguir testar o projeto tenha o `Node.js` instalado em sua máquina e o `git` para conseguir baixar os arquivos;
- O banco de dados utilizado nesse projeto foi o `MySQL` server, então para que possa usar a aplicação precisará ter ele instalado e configurado;
- O Postman será necessário para fazer as requisições.

# Instalação e execução: 

Para instalar/executar este projeto, siga as seguintes etapas:

Passo 1:  Depois de ter instalado o projeto em sua máquina, entre na pasta pelo terminal (pode ser o terminal do VSCode, caso tenha ele instalado):
```
    cd <nome da pasta>
```

Passo 2: Depois de entrar na pasta pelo terminal você terá que baixar as dependências da aplicação, então basta usar o comando:

```
    npm install
```

Passo 3: O próximo passo será configurar seu banco de dados, primeiro, crie um database na sua máquina (você pode fazer isso utilizando o MySQLWorkbench):
```
CREATE DATABASE <nome do db>
```

Passo 4: Depois de criado, você terá que criar um arquivo chamado `.env` na raiz do projeto e colocará os seus dados do banco de dados, para que a aplicação consiga ter acesso ao seu banco:

```
DATABASE_PORT= 'nome da porta onde o banco está, normalmente é 3306'
DATABASE_NAME= 'nome do banco de dados'
DATABASE_USERNAME= 'nome do usuario do seu banco, normalmente é root'
DATABASE_PASSWORD= 'senha do seu banco de dados, caso tenha'
DATABASE_HOST= 'aqui é onde especifica onde o seu banco esta rodando, como será na sua própria máquina, coloque localhost'
```

Passo 5: Agora basta rodar a aplicação usando o comando:

```
    npm run dev
```

# Rotas da aplicação

## Rotas das cartas:

---

### 1. Cadastrar as Cartas: método POST

Rota: http://localhost:9091/pokedex/adicionar

Escreva os dados do pokemon novo no body:

###### Requisição
```
  {
    "name": "Boldore",
    "category": "Ore",
    "type": "Rock",
    "hp": 50,
    "attack": 70,
    "defense": 70,
    "special_Attack": 30,
    "special_Defense": 30,
    "speed": 20
  }
```

###### Resposta

```
{
  msg: NOVO POKEMON ADICIONADO A POKEDEX: {
      "id_Pokemon": 1
      "name": "Boldore",
      "category": "Ore",
      "type": "Rock",
      "hp": 50,
      "attack": 70,
      "defense": 70,
      "special_Attack": 30,
      "special_Defense": 30,
      "speed": 20
  }
}
```

#### Observação: cada campo esstá configurado para não receber um valor nulo, então para cadastrar o pokemon você precisará preencher todos os campos, ou mudar pra allowNull: true.

### 2. Atualizar as Cartas: método PUT

Rota: http://localhost:9091/pokedex/atualizar/:id (substitua o id pelo numero do identificador do pokemon)

Para atualizar algum campo da carta, basta escrever o campo que deseja mudar no body:

###### Requisição
```
  {
    "name": "Leadron",
  }
```

###### Resposta

```
{
  "message": "Novo Pokémon: ",
    "pokemon": {
        "id_Pokemon": 1,
        "name": "Leandro",
        "category": "Seed",
        "type": "Grass and Poison",
        "hp": 30,
        "attack": 30,
        "defense": 30,
        "special_Attack": 40,
        "special_Defense": 40,
        "speed": 30
  }
}
```
#### Observacão: o campo name está como unique na aplicação, isso faz com que nenhum pokemon possa ser cadastrado ou atualizado caso já existe um pokemon com o mesmo nome no banco de dados.

### 3. Consultar Pokémon especifico: método GET

Rota: http://localhost:9091/pokedex/consultar/:id (substitua o id pelo numero do identificador do pokemon)

###### Requisição
```
  http://localhost:9091/pokedex/consultar/13
```

###### Resposta

```
{
    "pokemonAchado": {
        "id_Pokemon": 13,
        "name": "Nidoran female",
        "category": "Poison Pin",
        "type": "Poison",
        "hp": 40,
        "attack": 30,
        "defense": 40,
        "special_Attack": 30,
        "special_Defense": 30,
        "speed": 30
    }
}
```

### 4. Listar todos os pokémons: método GET

Rota: http://localhost:9091/pokedex/listar 

Nessa rota ele irá delvolver todos os dados registrados no banco de dados.


### 5. Deletar pokémon especifico: método DELETE

Rota: 'http://localhost:9091/pokedex/deletar/:id'

Aqui ele irá deletar o dado que possue como identificador o passado pela rota.

## Rotas da batalha:

---

###  1. Batalha/Comparação de cartas: método POST

Rota: http://localhost:9091/batalha

Nesta rota é onde você irá escrever no body quais cartas o playerOne e o playerTwo escolheram através do id (identificador) dos pokemons:

###### Requisição
```
  {
    "playerOneCard": 1,
    "playerTwoCard": 3
  }
```

###### Resposta

```
{
    "ResultadoDaBatalha": {
        "player_vencedor": "PlayerTwo",
        "Pokemon_winner": 3,
        "Pokemon_loser": 1,
        "details": {
            "hp": 3,
            "attack": 0,
            "defense": 3,
            "special_Attack": 1,
            "special_Defense": 0,
            "speed": 0
        }
    }
}
```

#### Observações:
- A partida será registrada em uma tabela chamada `partidas`;
- O numero zero indica que houve empate entre os atributos (atributos com valores iguais entre os dois pokemons);
- Caso os jogadores escolham o mesmo pokemon ou a partida de empate quando o numero de atributos fortes forem iguais, a batalha não será registrada no banco de dados e aparecerá outra resposta:
```
  RESULTADO DA BATALHA: EMPATE - Jogadores escolheram o mesmo pokémon
```

```
   RESULTADO DA BATALHA: EMPATE - Pokémons com o mesmo número de atributos fortes
```

### 2. Total de vitórias de cada jogador: método GET

Rota: http://localhost:9091/batalha/jogadores

Mostra o total de vitórias de cada jogador:

###### Resposta

```
{
    "PlayerOne": 4,
    "PlayerTwo": 3
}
```

### 3. Listar Partidas: método GET

Rota: http://localhost:9091/batalha/partidas

Nesta rota irá mostrar todas as partidas registradas no banco de dados.

---

## Desenvolvedora

Projeto desenvolvido por Maria Eduarda de Lima (Linkedin: https://www.linkedin.com/in/maria-eduarda-de-lima-538233231/).

---

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
