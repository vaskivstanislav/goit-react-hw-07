import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);