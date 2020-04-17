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

          <p className={"lead"}>
            Codar, progredir e ajudar.<br/>
            Aqui ninguém vence sozinho.<br/>
            FINISH THAT CODE, NOW.
          </p>

          <hr/>

          <p>O <strong>FinishThatCode</strong> é um pequeno coletivo criativo, grupo de estudos, discussão e incentivo para desenvolvedores web, cujo foco é o auxílio no desenvolvimento das habilidades e, também, projetos comunitários.</p>

          <p>Alguns dos projetos serão open source e abertos ao público, enquanto outros ficarão limitados para membros. O uso dos projetos pelos membros, porém, é irrestrito. Limitamos o acesso ao público em geral unicamente por questões de organização e manutenção.</p>

          <hr/>

          <p style={{fontWeight: 200}}>
            &copy;2020 Finish That Code
          </p>
        </div>
      </>
    );
  }
}
