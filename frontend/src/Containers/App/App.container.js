import React from "react";
// * style
import injectSheet from "react-jss";
import style from "./app.style";
function App({ children, classes }) {
  return <div className={classes.appContainer}>{children}</div>;
}
const appWithStyle = injectSheet(style)(App);
export default appWithStyle;
