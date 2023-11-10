import React from "react";
import Header from './Components/Header/Header'
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import './App.css'
import Residencies from "./Residencies/Residencies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <div>
        <div className="White-gradient" />
    <Header/>
    <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    </div>
  );
} 

export default App;
