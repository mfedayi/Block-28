import ReactDOM from "react-dom/client";

import App from "./app/App";
import  store from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
