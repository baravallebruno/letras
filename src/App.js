import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Info from "./components/Info";
import Error from "./components/Error";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";

import axios from "axios";

function App() {
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [informacion, guardarInformacion] = useState({});
  const [error, guardarError] = useState(false);
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      //mostrar el spinner
      guardarCargando(true);

      const { artista, cancion } = busquedaletra;

      const codeartista = encodeURIComponent(artista);
      const codecancion = encodeURIComponent(cancion);
      const url = `https://api.lyrics.ovh/v1/${codeartista}/${codecancion}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      axios
        .all([axios.get(url), axios.get(url2)])
        .then(
          axios.spread((letra, info) => {
            guardarLetra(letra.data.lyrics);
            guardarInformacion(info.data.artists[0]);
          })
        )
        .catch((error) => {
          guardarError(true);
        });
      guardarError(false);

      //ocultar el spinner y mostrar resultado
      setTimeout(() => {
        //ocultar el spinner
        guardarCargando(false);
      }, 1200);
    };
    consultarApiLetra();
  }, [busquedaletra]);

  const componente = cargando ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          {(letra.length === 0 && Object.keys(informacion).length !== 0) ||
          error ? (
            <Error mensaje="No pudimos encontrar la letra. Intenta nuevamente!" />
          ) : null}
          <div className="col-md-6">
            <Info informacion={informacion} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} busquedaletra={busquedaletra} />
          </div>
        </div>
      </div>

      {Object.keys(informacion).length === 0 || letra === "" ? null : (
        <Footer />
      )}
    </Fragment>
  );

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
        busquedaletra={busquedaletra}
      />

      {Object.keys(busquedaletra).length === 0 ? null : componente}
    </Fragment>
  );
}

export default App;
