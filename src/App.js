import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './css/style.css';
import Navbar from './components/Navbar.jsx';
import Card from './components/index/Cards.jsx';
import Footer from './components/Footer.jsx';  
import Info from './components/acerca-de/info.jsx';  
import Contacto from './components/contacto/Contact-form.jsx';
import Eddiegomez from './components/Articulos/Eddiegomez.jsx';
import Laurie from './components/Articulos/Laurie.jsx';




const laurie = {
  imagen:"https://i.ibb.co/mRVB72g/bill-evans.jpg",
  link:'/laurie',
  titulo:'Laurie análisis', 
  descripcion: 'Analisis de laurie, todas sus caracteristicas, armonia, melodia, acordes, improvisación.',

}
const eddiegomez = {
  imagen:"https://www.wmky.org/sites/wmky/files/styles/medium/public/201510/gomez.jpeg",
  link:'/eddiegomez',
  titulo:'Análisis de Eddie Gomez', 
  descripcion: 'Analisis de Eddie gomez, características en sus solos, herramientas rítmicas de su improvisación.',

}

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          
        <Switch>


        <Route path="/" exact>
        <section className="section">   
          <div className="container">
            <div className="columns">
           
              <div className="column has-background-white is-8 is-offset-2">
              <h1 className="has-text-centered is-size-3 has-text-weight-semibold">Articulos</h1>
                <Card articulo={laurie}/>
                <hr/>
                <Card articulo={eddiegomez}/>
              </div>  
            </div>
          </div>  
        </section>
        </Route>

        {/* Articulos */}
        <Route path="/laurie">
          <Laurie/>
        </Route>
        <Route path="/eddiegomez">
          <Eddiegomez/>
        </Route>


        

        <Route path="/acerca-de">
          <Info/>
        </Route>

        <Route path="/contacto">
          <Contacto/>
        </Route>


        </Switch>
          
        <Footer/>  

        </div>
      </Router>
  );
}

export default App;
