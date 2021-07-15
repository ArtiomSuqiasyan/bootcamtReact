import React from "react";
import "./App.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    if (this.state.count + Number(this.step.value) > this.max.value) {
      alert("Count can't be more maximal value");
      return;
    }
    this.setState((prevState) => ({
      count: prevState.count + Number(this.step.value),
    }));
  };
  decrement = () => {
    if (this.state.count - Number(this.step.value) < this.min.value) {
      alert("Count can't less minimal value");
      return;
    }
    this.setState((prevState) => ({
      count: prevState.count - Number(this.step.value),
    }));
  };
  reset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Maximal value"
          ref={(value) => (this.max = value)}
        />
        <input
          type="number"
          placeholder="Minimal Value"
          ref={(value) => (this.min = value)}
        />

        <input
          type="number"
          placeholder="Step"
          ref={(value) => (this.step = value)}
        />
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement} disabled={this.state.count <= 0}>
          -
        </button>
        <button onClick={this.reset}>Reset</button>
        
      </div>
    );
  }
}

export default Calculator;
