import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        Nome:
        <input type="text" data-testid="name-input" />

        Descrição:
        <textarea data-testid="description-input" />

        Attributo 1:
        <input type="number" data-testid="attr1-input" />

        Attributo 2:
        <input type="number" data-testid="attr2-input" />

        Attributo 3:
        <input type="number" data-testid="attr3-input" />

        Imagem:
        <input type="text" data-testid="image-input" />

        Inserir raridade:
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        Super trunfo:
        <input type="checkbox" data-testid="trunfo-input" />

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
