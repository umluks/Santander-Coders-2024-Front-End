import React from "react";
import "./style-counter.css";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0, nome: "", password: "" };
  }

  render() {
    return (
      <div>
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
        <form action="">
          <input
            type="text"
            placeholder="Qual o seu nome?"
            value={this.state.nome}
            onChange={(event) => {
              this.setState({ nome: event.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Digite sua senha!"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
