import React, { Fragment } from 'react';
import {
    Link
  } from "react-router-dom";



const Card = ({articulo}) =>{

    console.log(articulo.imagen);
    return(
    
    <Fragment>
        
    <div className="column is-8 is-offset-2">
    <Link to={articulo.link}>
    <a>
        <figure className="image image is-5by4">
        <img src={articulo.imagen} alt="Bill-evans" />
    </figure>
    <h1 className="title is-4 margen">{articulo.titulo}</h1>
    <p className="margen">{articulo.descripcion} </p>
    </a> 
    </Link>
    <br></br>

    <p className="vistas">Vistas: </p>

    </div>
                

    </Fragment>
    )
    }
export default Card