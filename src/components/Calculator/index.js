import React from 'react';

function Mult05(props) {
  const number = parseFloat(props.userInput);
      if (Number.isNaN(number)) {
        return '';
      }
      const result = number * 0.5;
      console.log(result.toString());
      return <p>{number} * 0.5 is equal to {result.toString()}</p>;
}
function Mult005(props) {
  const number = parseFloat(props.userInput);
      if (Number.isNaN(number)) {
        return '';
      }
      const result = number * 0.05;
      console.log(result.toString());
      return <p>{number} * 0.05 is equal to {result.toString()}</p>;
}

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {userInput: ''};
    }
  
    handleChange(e) {
      this.setState({userInput: e.target.value});
    }
    render() {
      const userInput = this.state.userInput;
      return (
        <fieldset>
          <legend>Value to be calculated:</legend>
          <input
            value={userInput}
            onChange={this.handleChange} />
            <Mult05 userInput={userInput} />
            <Mult005 userInput={userInput} />
        </fieldset>
      );
    }
  }

export default Calculator;