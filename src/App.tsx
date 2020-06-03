import React from "react";
import { Switch, Route } from "react-router-dom";
import NewLoginPage from "./pages/NewLogin/NewLogin.page";

import { Provider } from "react-redux";
import reducers from "./store/reducers";
import { createStore } from "redux";
import { AdminDashboard } from "./pages/adminDashboard/adminDashboard";
import { RequisicionDocument } from "./components/printDocument/printDocument";
import { PDFViewer } from "@react-pdf/renderer";
import { DownloadMedia } from "./pages/dowonladMedia/downloadMedia";

function App() {
  const store = createStore(reducers, ["AppState"]);
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/adminDashboard">
          <AdminDashboard />
        </Route>
        <Route path="/printRequisicion/:catalog">
          <DownloadMedia />
        </Route>
        <Route path="/">
          {/* <NavBar /> */}
          <NewLoginPage />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
