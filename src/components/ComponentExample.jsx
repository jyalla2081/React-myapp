import React, { Component } from "react";
export default class ComponentExample extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.count === 0 && "Test Truthy"}
        <br></br>
        <span className={this.modifyClasses()}>{this.formatCount()}</span>
        <button className="btn btn-primary" onClick={this.addCount}>
          Increment
        </button>
        <ul>
          {this.state.tags.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  modifyClasses() {
    let classes = "btn btn-warning m-2 ";
    return (classes += this.state.count === 0 ? "" : "");
  }

  formatCount() {
    const cnt = this.state.count;
    return cnt === 0 ? "Zero" : this.state.count;
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
}

export class SecondaryComponent extends Component {
  state = {};
  render() {
    return <h2>Second Component</h2>;
  }
}
