import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    // console.log(target.checked);
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(({ [name]: value }), () => {
      if (this.validation()) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });

    this.hasTrunfoValidation({ target });
  }

  hasTrunfoValidation = ({ target }) => {
    const condition = (target.checked === true
      ? this.setState({ hasTrunfo: true })
      : this.setState({ hasTrunfo: false }));

    if (target.type === 'checkbox') {
      return condition;
    }
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

    console.log(empty);

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
    console.log(validation);

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
    console.log(result);

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
      cardRare: 'normal',
    });
  }

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
      isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo!</h1>
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
      </div>
    );
  }
}

export default App;
