import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
    console.log("construindo o counter");
  }

  render() {
    return (
      <div id="counter">
        <div>
          <h1> {this.state.contador} </h1>
        </div>
        <div id="btn-counter">
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            Diminuir
          </button>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            Aumentar
          </button>
        </div>
      </div>
    );
  }
}
