import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Auth from "../pages/Auth/Auth";
import Error404 from "../pages/Error/Error404";
import useAuth from "../providers/useAuth";
import { routes } from "./list";

const Routes: FC = () => {
  const { user } = useAuth();
  console.log(!user, routes);

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              key={`route ${route.path}`}
            >
              <Layout>
                {route.auth && !user ? <Auth /> : <route.component />}
              </Layout>
            </Route>
          );
        })}
        <Route component={Auth} />
        {/* <Route component={Error404} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
