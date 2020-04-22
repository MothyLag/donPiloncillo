import React from "react";
import "./App.sass";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login.page";
import SignUpPage from "./pages/SignUp/SignUp.page";
import NewLoginPage from "./pages/NewLogin/NewLogin.page";

import { Provider } from "react-redux";
import reducers from "./store/reducers";
import { createStore } from "redux";

function App() {
  const store = createStore(reducers, ["AppState"]);
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/">
            {/* <NavBar /> */}
            <NewLoginPage  />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
