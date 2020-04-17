import React from "react";
import ReactDOM from "react-dom";
import Main from "Main";
import * as serviceWorker from "serviceWorker";

import "scss/main.scss";

/**
 * Index
 * ----------------------------------------------------------------------
 * Ponto de entrada do app.
 * 
 * @since 0.0.1
 */
ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById("ftc-root")
);

serviceWorker.unregister();
