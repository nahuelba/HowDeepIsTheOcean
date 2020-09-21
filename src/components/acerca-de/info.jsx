import React from 'react';


const info = () =>{
    return(
        <section className="section">   
          <div className="container">
           
              <div className="column has-background-white is-10 is-offset-1">
                  <h1 className="title is-size-2 ">Acerca de</h1>
                  <div className="columns">
                  <div className="column is-half">
                    <img src="https://bulma.io/images/placeholders/480x480.png" alt=""/>
                  </div>
                  <div className="column is-half">
                  <p className="is-italic has-text-weight-medium is-size-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, saepe perspiciatis! Distinctio commodi reiciendis doloribus qui! A voluptates fugiat omnis accusantium eos, porro atque optio deserunt enim blanditiis vero aspernatur.</p>   
                  </div>
                  </div>
            </div>
          </div>
        </section>
    )
}


export default info