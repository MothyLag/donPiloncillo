import React from "react";
import { Switch, Route } from "react-router-dom";
import NewLoginPage from "./pages/NewLogin/NewLogin.page";

import { Provider } from "react-redux";
import reducers from "./store/reducers";
import { createStore } from "redux";
import { AdminDashboard } from "./pages/adminDashboard/adminDashboard";

function App() {
  const store = createStore(reducers, ["AppState"]);
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/adminDashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/">
          {/* <NavBar /> */}
          <NewLoginPage />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
