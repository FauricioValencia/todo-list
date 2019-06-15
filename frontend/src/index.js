import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./Shared/Routes/Root/AppRoutes.routes";
import * as serviceWorker from "./serviceWorker";
// ! RUTAS
import { BrowserRouter as Router } from "react-router-dom";
// !REDUX
import { Provider } from "react-redux";

// * Styles
import { ThemeProvider } from "react-jss";
import theme from "./Shared/Themes/black.theme";
import configureStore from "./Shared/Redux/configure_store.store";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
