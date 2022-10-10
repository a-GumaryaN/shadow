import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global.styles";
import "font-awesome/css/font-awesome.min.css";
import Layout from "./components/Layout/Layout";
import Loading from "./containers/Loading/Loading";
import Loading2 from "./containers/Loading2/Loading2";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage/AboutPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
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
            
             <Route
              path="*"
              element={
                <PageNotFound/>
              }
            />


          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
