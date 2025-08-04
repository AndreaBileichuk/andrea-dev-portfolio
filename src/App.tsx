import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
        <Header />
        <Welcome />
        <About />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
