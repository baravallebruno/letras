import React, { useState } from 'react';
import '../index.css';
import PropTypes from 'prop-types';


const Info = ({informacion}) => {

    const { strArtistThumb, strBiographyES, strBiographyEN, strGenre, strFacebook, strTwitter, strLastFMChart, strArtist   } = informacion;

    const [ biografia, guardarBiografia ] = useState(strBiographyES);

    const cambiarEsp = e => {
        e.preventDefault();
        guardarBiografia(strBiographyES);
    }

    const cambiarEng = e => {
        e.preventDefault();
        guardarBiografia(strBiographyEN);
    }

    if(Object.keys(informacion).length === 0 ) return null;

    
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                {strArtist}
            </div>
            <div className="card-body mb-5 pb-5">
                <img src={strArtistThumb} alt="Imagen artista"/>
                <div className="row justify-content-between px-3">
                    <p className="card-text">Género: {strGenre} </p>
                    <p className="card-text float-right"> 
                    <button
                        className="btn-idioma"
                        onClick={cambiarEsp}
                    >ES</button> |

                    <button
                        className="btn-idioma"
                        onClick={cambiarEng}
                    >EN</button>
                    
                    </p>
                </div>
                
                <p className="card-header bg-primary text-light font-weight-bold">Biografía</p>
                <p className="card-text text-justify py-3">{biografia}</p>
                <div className="row card-text justify-content-around">
                <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook text-danger"></i>
                </a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter text-danger"></i>
                </a>
                <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm text-danger"></i>
                </a>


                </div>
            </div>
        </div>

    );
};

Info.propTypes = {
    informacion: PropTypes.object.isRequired
}

export default Info;