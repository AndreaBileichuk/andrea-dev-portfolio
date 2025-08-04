import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div className="App">
        <Header />
        <Welcome />
        <About />
        <Skills />
    </div>
  );
}

export default App;
