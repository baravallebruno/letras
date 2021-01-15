import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


function Formulario({guardarBusquedaLetra, busquedaletra}) {

const [ busqueda, guardarBusqueda ] = useState({
    artista: '',
    cancion: ''
});

const [ error, guardarError ] = useState(false);

const { artista, cancion } = busqueda;

//funcion a cada input para leer su contenido

const actualizarState = e => {
    guardarBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
    })
}

//consultar las Apis

const buscarInformación = e =>{
    e.preventDefault();

    if( artista.trim() === '' || cancion.trim() === '' ){
        guardarError(true);
        return;
    }
    guardarError(false);

    //todo bien pasar al componente principal

    guardarBusquedaLetra(busqueda);
}

    return (
        <div className="bg-primary">
                { error ? <Error mensaje="Todos los campos son obligatorios" />: null}
            <div className={ (Object.keys(busquedaletra).length === 0 ) ? 'container fullscreen' : 'container' }>
                <div className="row">  
                    <form
                    onSubmit={buscarInformación} 
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <h1 className="text-center text-light font-weight-light">
                            <i className="fas fa-headphones-alt"></i> REACT <span className="text-danger font-weight-bold">LYRICS</span>
                            </h1>
                        
                        
                            
                            <h1 
                                className={`text-light text-center ${(Object.keys(busquedaletra).length === 0 ) ? 'pt-3 mt-5 titulo' : 'pt-1 titulo_sub' } `}
                            >Encontrá la letra de tus canciones favoritas
                            </h1>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label col-form-label-lg text-uppercase">Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="artista"
                                            placeholder="Nombre del Artista"
                                            onChange={actualizarState}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                            <label className="col-form-label col-form-label-lg text-uppercase">Cancion</label>
                                            <input 
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="cancion"
                                                placeholder="Nombre de la canción"
                                                onChange={actualizarState}
                                            />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary text-danger"
                            >
                                <i className="fas fa-search"></i>
                            </button>

                        </fieldset>

                        

                    </form>
                </div>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    guardarBusquedaLetra: PropTypes.func.isRequired,
    busquedaletra: PropTypes.object.isRequired
}

export default Formulario;