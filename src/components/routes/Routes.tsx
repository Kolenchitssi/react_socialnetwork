import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Error404 from "../pages/Error/Error404";
import { routes } from "./list";

const Routes: FC = () => {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          if (route.auth && !isAuth) {
            return false;
          }
          return (
            <Route
              path={route.path}
              exact={route.exact}
              key={`route ${route.path}`}
            >
              <Layout>
                <route.component />
              </Layout>
            </Route>
          );
        })}
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
