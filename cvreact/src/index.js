import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3d3d3d',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>
);

reportWebVitals();