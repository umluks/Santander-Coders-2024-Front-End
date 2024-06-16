import React from "react";
import logoImg from "../../assets/images/logo-WeBrasilia.png";
import "./style-navbar.css";

export class Navbar extends React.Component {
  render() {
    return (
      <header id="nav">
        <div className="container">
          <nav id="navbar">
            <div className="nav-brand">
              <a href="/">
                <img src={logoImg} alt="Logo" width="60" />
                <h1>WE BRASILIA</h1>
              </a>
            </div>
            <ul className="nav-list">
              <li className="nav-list itens">
                <a href="/">Home</a>
              </li>
              <li className="nav-list itens">
                <a href="/">Sobre Nos</a>
              </li>
              <li className="nav-list itens">
                <a href="/">Noticias</a>
              </li>
              <li className="nav-list itens">
                <a href="/">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
