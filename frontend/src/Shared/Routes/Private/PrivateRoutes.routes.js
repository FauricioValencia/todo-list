import React from "react";
// !import rutas
import { Switch, Route } from "react-router-dom";
// ! Rutas

// ? containers
import Home from "../../../Containers/Home/Home.container";
import Todo from "../../../Containers/Todo/Todo.container";
import Error404 from "../../Components/Error404/Error404";

// ? components
import HeaderComponent from "../../Components/Header/Header.component";
import FooterComponent from "../../Components/Footer/Footer.component";

// * Styles
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function PrivateRoutes() {
  return (
    <>
      <Layout style={{height: '100%', width: '100%'}}>
        <HeaderComponent />
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/todo" component={Todo} exact />
              <Route component={Error404} />
            </Switch>
          </Content>
        </Layout>
        <FooterComponent />
      </Layout>
    </>
  );
}

export default PrivateRoutes;
