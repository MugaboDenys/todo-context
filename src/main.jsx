import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoProvider from "./context/TodoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
