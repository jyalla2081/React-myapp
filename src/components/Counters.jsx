import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    console.log("Handling Delete", id);
    let counter = this.state.counter.filter((x) => x.id !== id);
    this.setState({ counter });
  };

  resetCounter = () => {
    let counter = this.state.counter.map((x) => {
      x.value = 0;
      return x;
    });
    this.setState({ counter });
  };

  incrementHandler = (counter) => {
    let counterList = [...this.state.counter];
    let index = counterList.indexOf(counter);
    counterList[index].value++;
    this.setState({ counter: counterList });
  };

  decrementHandler = (counter) => {
    console.log(counter);
    let counterList = [...this.state.counter];
    let index = counterList.indexOf(counter);
    counterList[index].value--;
    this.setState({ counter: counterList });
  };

  render() {
    return (
      <div>
        <button className="btn btn-success m-2" onClick={this.resetCounter}>
          Reset
        </button>
        <br></br>
        {this.state.counter.map((x) => (
          <Counter
            key={x.id}
            counter={x}
            onDelete={() => this.handleDelete(x.id)}
            onIncrement={(x) => this.incrementHandler(x)}
            onDecrement={(x) => this.decrementHandler(x)}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
