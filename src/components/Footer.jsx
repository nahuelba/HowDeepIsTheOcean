import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const Footer = () =>{

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }
    

    return(
    
    <Fragment>
        <footer className="footer" id="has-background-orange">

            <div className="container">

                <div className="columns">

                <div className="column is-8 is-offset-2">

                    <label className="label is-size-4 has-text-weight-medium has-text-light">Recibe las últimas noticias</label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                    
                    <p className="control is-expanded has-icons-left">
                        <input 
                        className="input"
                        type="email" 
                        placeholder="Ingrese su Email"
                        name="email"
                        ref={register({
                            required: {
                                value: true, 
                                message: 'Debe ingresar un Email'
                                }})
                            }
                          
                        ></input>
                        
                        
                        <span className="icon is-small is-left">
                        <i className="zmdi zmdi-email"></i>
                        </span>
                        <span className="help is-white">
                            {errors?.email?.message}
                        </span>
                    </p>
                    <p className="control">
                        <button className="button is-primary">
                        Suscríbete
                        </button>
                    </p>
                    </div>


                    </form>
                </div>
                </div>
            </div>
        </footer>

    </Fragment>

    )
}
export default Footer