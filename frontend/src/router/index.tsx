import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Dashboard from "../pages/Home/dashboard";
import Architecture from "../pages/Home/architecture";
import Home from "../pages/Home";
import TableauePAge from "../pages/Home/tableaupage"
import Login from "../pages/Home/login"
import Model from "../pages/Home/model"
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {

  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          console.log("routeItem")
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
        <Route 
          key = "1"
          exact path ="/"
          component={Home}
        />
        <Route
          key = "2"
          exact path="/dashboard"
          component= {Dashboard}
        />
        <Route 
          key = "3"
          exact path="/architecture"
          component = {Architecture}
        />
        <Route
          key = "4"
          exact path="/tableau"
          component={TableauePAge}
        />
        <Route
          key = "5"
          exact path="/login"
          component={Login}
          />
        <Route
          key = "6"
          exact path="/historical-analysis"
          component={Model}
        />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
