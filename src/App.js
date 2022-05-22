import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import styles from './App.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const { deck } = this.state;
    // console.log(target.checked);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const deckHasTrunfo = deck.some((cards) => cards.cardTrunfo === true);

    this.setState(({ [name]: value }), () => {
      if (deckHasTrunfo || target.checked) {
        this.setState({ hasTrunfo: true });
      }
      if (this.validation()) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }


  validateIsEmpty = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    const empty = (cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== '');

    return empty;
  }

  validateSum = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const sum = (
      Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
    );

    const magicNumber = 210;

    const validation = (sum <= magicNumber);
    return validation;
  }

  maxAttributeValue = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const magicNumber = 90;

    const attrb1 = (Number(cardAttr1) <= magicNumber && Number(cardAttr1) >= 0);
    const attrb2 = (Number(cardAttr2) <= magicNumber && Number(cardAttr2) >= 0);
    const attrb3 = (Number(cardAttr3) <= magicNumber && Number(cardAttr3) >= 0);

    const result = (attrb1 && attrb2 && attrb3);

    return result;
  }

  validation = () => (
    this.validateIsEmpty()
    && this.validateSum()
    && this.maxAttributeValue())

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const newCard = this.state;
    this.setState((prevState) => ({
      deck: [...prevState.deck, newCard],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardTrunfo: false,
      cardRare: 'normal',
    });
  }

  removeCard = (e) => {
    const { deck } = this.state;
    const click = e.target.previousSibling.querySelector('.name').textContent;
    const filtro = deck.filter((card) => (card.cardName !== click));
    this.setState({ deck: filtro, hasTrunfo: false });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      deck,
      isSaveButtonDisabled } = this.state;

    return (
      <div className={ styles.divMainContainer }>
        <main className={ styles.mainContainer }>
          <section className={ styles.formSection }>
            <h1>Monte seu baralho</h1>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section>
            <h2>Preview</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </main>

        { deck.map((card) => (
          <section className={ styles.deck }>
            <Card key={ card.cardName } { ...card } />
            <button
              className={ styles.button }
              data-testid="delete-button"
              type="button"
              onClick={ this.removeCard }
            >
              Excluir

            </button>
          </section>
        ))}
      </div>
    );
  }
}

export default App;
