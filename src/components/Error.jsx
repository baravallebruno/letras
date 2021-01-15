import React from 'react';
import PropTypes from 'prop-types';


const Error = ({mensaje}) => {
    return (
        <p className="alert alert-dismissible alert-danger text-center" > {mensaje} </p>
    );
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;