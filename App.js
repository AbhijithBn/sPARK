import React from "react";
import { Provider } from "react-native-paper";
import App from "./src";
import { theme } from "./src/core/theme";

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;

// To support custom themes, paper exports a Provider component.
//  You need to wrap your root component with the provider to be able to support themes.