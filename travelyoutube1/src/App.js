import React from "react";
import "./app.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Main from "./Component/Main";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
