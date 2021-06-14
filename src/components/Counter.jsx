import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className="btn btn-warning m-2">
              {this.props.counter.value}
            </span>
          </div>
          <div className="col-11">
            <button
              className="btn btn-primary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
