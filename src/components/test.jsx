import { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 0,
      b: 23,
    };
  }
  inc() {
    this.setState((prev) => ({ a: prev.a + 1 }));
  }
  render() {
    return (
      <div>
        <div> Hello from class component</div>
        <div>A:{this.state.a}</div>
        <button onClick={this.inc}>inc</button>
      </div>
    );
  }
}

export { Test };
