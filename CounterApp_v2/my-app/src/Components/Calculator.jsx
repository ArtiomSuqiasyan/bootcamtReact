import React from "react";
import Button from "./Button/Button";
import Input from "./Input/input";
import Paragraph from "./Paragraph/Paragraph";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: localStorage.getItem("count") ? Number(localStorage.getItem("count")): 0,
      step: localStorage.getItem("step") ? Number(localStorage.getItem("step")): 1,
    };
  }
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + this.state.step,
    }));
  };
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - this.state.step,
    }));
  };
  reset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };

  maxValue = ({ target: { value } }) => {
    this.setState({
      maxValue: Number(value),
    });
  };

  minValue = ({ target: { value } }) => {
    this.setState({
      minValue: Number(value),
    });
  };

  handleStepChange = ({ target: { value } }) => {
    this.setState({
      step: Number(value),
    });
  };

  render() {
    localStorage.setItem("count", this.state.count)
    localStorage.setItem("step", this.state.step)

    const moreMaxValue =
      this.state.count + this.state.step > this.state.maxValue;
    const lessMinValue =
      this.state.count - this.state.step < this.state.minValue;
    return (
      <div>
        <Input
          type="number"
          placeholder="Maximal value"
          onChange={this.maxValue}
        />
        <Input
          type="number"
          placeholder="Minimal value"
          onChange={this.minValue}
        />
        <Input
          type="number"
          placeholder="Step"
          onChange={this.handleStepChange}
          defaultValue={this.state.step}
        />
        <Paragraph text={this.state.count} />
        <Button text="+" onClick={this.increment} disabled={moreMaxValue} />
        <Button
          text="-"
          onClick={this.decrement}
          disabled={this.state.count <= 0 || lessMinValue}
        />
        <Button text="Reset" onClick={this.reset} />
      </div>
    );
  }
}

export default Calculator;
