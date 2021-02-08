import React from "react";
import PropTypes from "prop-types";

const Error = ({ mensaje }) => {
  return (
    <p className="alert alert-dismissible alert-danger bg-danger border-0 text-center font-weight-bold text-white w-100 py-5 my-3">
      {" "}
      {mensaje}{" "}
    </p>
  );
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
