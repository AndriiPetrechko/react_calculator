import React, { Component } from 'react';
import Keypad from './Components/Keypad';
import Output from './Components/Output';
import './App.css';


export default class App extends Component {
  state = {
    result: 'результат'
  };
  buttonPresed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else if (this.state.result == 'результат') {
      this.setState({
        result: '' + buttonName
      })
    } else if (buttonName === "CE") {
      this.backspace();
    } else
      this.setState({
        result: this.state.result + buttonName
      })
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }
  calculate = e => {
    try {
      this.setState({
        result: eval(this.state.result)
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  reset = e => {
    this.setState({
      result: ''
    })
  };
  render() {
    return (
      <div className="wrapper">
        <Output result={this.state.result} />
        <Keypad
          buttonPresed={this.buttonPresed}
          reset={this.reset}
        />
        <div className="logo">
          Made by A. Petrechko
        </div>
      </div>
    );
  }
}
