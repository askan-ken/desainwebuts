import React from "react";
import { Navbar } from "./component";
import {
  Surat,
  Data,
  Footer,
  Header,
  Pemerintahan,
  Wilayah,
} from "./container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Pemerintahan />
      <Data/>
      <Wilayah />
      <Surat/>
      <div className="gradient__bg">
        <Footer />
      </div>
    </div>
  );
};

export default App;
