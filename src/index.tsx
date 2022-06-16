import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { gsap } from "gsap";
import "animate.css";
import { Provider } from "react-redux";
import store from "./Store/store";

const ORANGE_COLOR = "#FF3300";
const DARK_COLOR = "#2A2727";
const WHITE_COLOR = "#000000";

const theme = createTheme({
  palette: {
    primary: {
      main: DARK_COLOR,
    },
    secondary: {
      main: ORANGE_COLOR,
    },
    info: {
      main: WHITE_COLOR,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
