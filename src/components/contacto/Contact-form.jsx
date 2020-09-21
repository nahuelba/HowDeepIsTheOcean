import React from 'react';
import {useForm} from 'react-hook-form';



const Contacto = () =>{

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    };
    
    return(
        <section className="section">   
          <div className="container">
           
            <div className="column has-background-white is-10 is-offset-1">
                  
                  <div className="column is-10 is-offset-1">
                  <h1 className="title is-size-2">Contacto</h1>

                  <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="field">
                    <label className="label">Nombre</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Ingrese su Nombre..." name="nombre" 
                        ref={register({
                            required: {
                                value: true, 
                                message: 'Debe ingresar un Nombre'
                                }})
                            }/>
                    </div>
                    <p class="help is-danger">{errors?.nombre?.message}</p>
                    </div>

                    <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Ingrese su Email..." name="email" 
                        ref={register({
                            required: {
                                value: true, 
                                message: 'Debe ingresar un Email'
                                }})
                            }/>
                    </div>
                    <p class="help is-danger">{errors?.email?.message}</p>
                    </div>


                    <div className="field">
                    <label className="label">Mensaje</label>
                    <div className="control">
                    <textarea class="textarea" placeholder="Ingrese su mensaje..." name="mensaje"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'Debe ingresar un Mensaje'
                            }})
                        }></textarea>
                    </div>
                    <p class="help is-danger">{errors?.mensaje?.message}</p>
                    </div>

                    <div class="field">
                    <div class="control">
                        <button class="button is-primary">Enviar</button>
                    </div>
                    </div>


                  </form>


                  </div>
            
            
            </div>
          </div>
        </section>


)
}

export default Contacto
