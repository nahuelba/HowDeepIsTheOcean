import React, {Fragment} from 'react';
import {
  NavLink
} from "react-router-dom";
import Background from '../img/piano.jpg';



const Navbar = () =>{
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');

            });
          });
        }

        });
    
    return(
        <Fragment>
        <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">      
            <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
      
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start justifycenter">
            <NavLink to="/" exact className="navbar-item" activeClassName="has-background-grey-dark has-text-light" >
              Blog
            </NavLink>
      
            <NavLink className="navbar-item" activeClassName="has-background-grey-dark has-text-light" to="/acerca-de" exact>
              Acerca de
            </NavLink>

            <NavLink className="navbar-item" activeClassName="has-background-grey-dark has-text-light" to="/contacto">
                Contacto
            </NavLink>
          </div>
          
        </div>
      </nav>
      

    <section className="hero is-medium is-bold imagen-portada" style={{backgroundImage: `url(${Background})`}}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-white is-italic">
              ¿Qué tan profundo es el oceano?
            </h1>
            <h2 className="subtitle has-text-white is-italic">
              Blog de música
            </h2>
          </div>
        </div>
    </section>
    </Fragment>
    );
};

export default Navbar 