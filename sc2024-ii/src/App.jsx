import React from "react";
import { Counter } from "./components/counter/Counter";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }

  render() {
    return (
      <div>
        <h1>Ciclo de Vida no React</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter
            ? "Remover component: showCounter"
            : "Mostrar component: showCounter"}
        </button>

        {this.state.showCounter ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
