import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
        <Header />
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <Contacts />
    </div>
  );
}

export default App;
