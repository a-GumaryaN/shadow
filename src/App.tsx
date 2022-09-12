import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global.styles";
import HomePage from "./pages/HomePage/HomePage";
import "font-awesome/css/font-awesome.min.css";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Layout>
                    <HomePage />
                  </Layout>
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <Layout>
                    <AboutPage />
                  </Layout>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
