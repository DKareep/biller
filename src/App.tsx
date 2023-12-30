import React from "react";
import { Provider } from "react-redux";
import Billing from "./Pages/Billing";
import store from "./Store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Billing />
      </div>
    </Provider>
  );
}

export default App;
