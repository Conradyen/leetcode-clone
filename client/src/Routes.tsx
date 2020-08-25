import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Me } from "./modules/users/me";
import { Login } from "./modules/users/login";
import { Register } from "./modules/users/register";
import { Header } from "./components/auth";
import { RoutesProps } from "./Theme/type";
import { SideBar } from "./components/SideBar";

const Routes: React.FC<RoutesProps> = ({ isDarkMode, handelThemeChange }) => {
  return (
    <BrowserRouter>
      <>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/"
              render={() => (
                <div>
                  <Header
                    isDarkMode={isDarkMode}
                    handelThemeChange={handelThemeChange}
                  />

                  <SideBar />
                  <Route path="/register" component={Register} />
                  <Route path="/me" component={Me} />
                  <Route
                    exact={true}
                    path="/"
                    render={() => <div>home page</div>}
                  />
                </div>
              )}
            />
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
};
export default Routes;
