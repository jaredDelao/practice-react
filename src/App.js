import React from "react";
import "./App.css";

// importar componentes
import Header from "./components/Header";
import Slider from './components/Slider';
import Sidebar from './components/Siderbar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';
import Router from "./routes/router";


function App() {

  return (
    <div className="App">
      <Header />
      <Slider title="Web Developer"/>

      <div className="center">

        <Router/>

        {/* <Peliculas />*/}
        <Sidebar /> 
      </div>

      <div className="clearfix">
        <Footer />
      </div>

    </div>
  );
}

export default App;
