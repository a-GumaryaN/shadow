import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global.styles";
import HomePage from "./pages/HomePage/HomePage";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
