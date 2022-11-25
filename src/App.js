import React from "react";
import { Brand, Cta, Navbar } from "./component";
import {
  Surat,
  Data,
  Footer,
  Header,
  Profiledesa,
  Pemerintahan,
} from "./container";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Pemerintahan />
      <Data/>
      <Profiledesa />
      <Surat/>
      <div className="gradient__bg">
        <Footer />
      </div>
    </div>
  );
};

export default App;
