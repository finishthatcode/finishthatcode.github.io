import React, { Component } from "react";

import Logo from "assets/img/ftc-logo.png";

/**
 * Main
 * ----------------------------------------------------------------------
 * Ponto de entrada da aplicação.
 * 
 * @since      0.0.1
 */
export default class Main extends Component {
  render () {
    return (
      <>
        <div class="ftc-main">
          <img src={Logo} alt={"/>"}/>
          <h1>FINISH THAT CODE</h1>
          <p>Aqui ninguém vence sozinho. FINISH THAT CODE, NOW.</p>
        </div>
      </>
    );
  }
}
