
## Projeto Cardgame Trunfo - JavaScript - React

Neste projeto foi desenvolvido um formulário para criar e adicionar cartas a um baralho no estilo do jogo Super Trunfo. O usuário poderá:

  * Criar um baralho, com o tema desejado;

  * Adicionar e remover uma carta do baralho;

  * Escolher apenas 1 carta Super Trunfo;

  * Visualizar todas as cartas que foram adicionadas ao baralho;

## Sumário

[Tecnologias](#tecnologias)

[Como instalar e inicializar o projeto](#como-instalar-e-inicializar-o-projeto)

[Imagens da aplicação em funcionamento](#imagens-da-aplicação-em-funcionamento)

[Detalhes e uso da aplicação](#detalhes-e-uso-da-aplicação)

## Tecnologias

- Projeto desenvolvido na linguagem Javascript;
- Utiliza a biblioteca React para montar interfaces;
- Utiliza CSS para estilizar os componentes.

## Como instalar e inicializar o projeto

- Instale as dependências com o comando:
  - `npm install`
- Inicialize o projeto com o comando:
  - `npm start`

## Detalhes e uso da aplicação
A aplicação inicia com um formulário vazio, um preview da carta que será adicionada e o botão "Salvar" desabilitado, para adicionar uma carta é necessário preencher todos os campos em branco do formulário e cumprir as validações necessárias.

Existem algumas validações para que a carta seja considerada adequada:
- Os campos de atributo devem ter valor maior que 1 e menor 90;
- A soma dos atributos deve ser menos que 210;
- A imagem da carta deverá ser um link direto à imagem (exemplo: https://veganapati.pt/img/cats_general_info/68/attitudes-calico-cats.jpg)
Após passar por essas validações e preencher todos os campos, o botão "Salvar" será habilitado.


## Imagens da aplicação em funcionamento
![iLxTgZ2](https://user-images.githubusercontent.com/97243572/169710974-2ab3ab5c-b5b1-4efc-8e15-b8892efc638c.png)
- Tela principal da aplicação, com preview da carta que está em preenchimento.

