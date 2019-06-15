import React from "react";
import App from "../../../Containers/App/App.container";
import PrivateRoutes from "../Private/PrivateRoutes.routes";
import PublicRoutes from "../Public/PublicRoutes.routes";
function AppRoutes() {
  const login = true;
  return <App>{login ? <PrivateRoutes /> : <PublicRoutes />}</App>;
}

export default AppRoutes;
