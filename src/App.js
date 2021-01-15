import React, { Fragment, useState, useEffect }from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import Error from './components/Error';
import Spinner from './components/Spinner';
import Footer from './components/Footer';

import axios from 'axios';


function App() {

const [ busquedaletra, guardarBusquedaLetra ] = useState({});
const [ letra, guardarLetra ] = useState('');
const [ informacion, guardarInformacion ] = useState({});
const [ error, guardarError ] = useState(false);
const [ cargando, guardarCargando ] = useState(false);

useEffect(() => {
  if(Object.keys(busquedaletra).length === 0 ) return;

  const consultarApiLetra = async () => {

    //mostrar el spinner
    guardarCargando(true);

    const { artista, cancion } = busquedaletra;
    
    const codeartista = encodeURIComponent(artista);
    const codecancion = encodeURIComponent(cancion);
    const url = `https://api.lyrics.ovh/v1/${codeartista}/${codecancion}`;
    const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
  

    const [letra, info] = await Promise.all([axios(url), axios(url2)]).catch(
      (err) => {
        guardarError(true);
      }
    );
       guardarError(false);

    // console.log(letra);
    // console.log(info.data.artists[0]);

    

    
    //guarda datos en states
    guardarLetra(letra.data.lyrics);
    guardarInformacion(info.data.artists[0]);

    //ocultar el spinner y mostrar resultado
    
    guardarCargando(false);
   


  }
  consultarApiLetra();

}, [busquedaletra]);

const componente = (cargando) ? <Spinner /> : (

    <Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
                <Info 
                  informacion={informacion}
                />
            </div>
            <div className="col-md-6">

              {((letra.length === 0  &&  Object.keys(informacion).length !== 0) || error ) ? <Error mensaje="No pudimos encontrar la letra."  /> : null}

              <Cancion 
                    letra={letra}
                    busquedaletra={busquedaletra}
              />
                
            </div>
          </div>
        </div>
        
      <Footer />

    </Fragment>  
); 


  return (
    
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
        busquedaletra={busquedaletra}
      />

  {(Object.keys(busquedaletra).length === 0 ) ? null : componente }
      

    </Fragment>
    

  );
}

export default App;
