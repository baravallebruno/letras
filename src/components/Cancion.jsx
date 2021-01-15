import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Cancion = ({letra, busquedaletra}) => {

    if (letra.length === 0 ) return null;

    const { cancion } = busquedaletra;

   return (
        <Fragment>
             <div className="card-header bg-primary text-light font-weight-bold">
                {cancion}
            </div>
            <p className="letra pt-3 pl-3 pb-5 font-weight-normal">{letra}</p>
         </Fragment>
   );
};

Cancion.propTypes = {
    letra: PropTypes.string.isRequired,
    busquedaletra: PropTypes.object.isRequired
}

export default Cancion;