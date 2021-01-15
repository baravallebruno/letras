import React from 'react';
import '../index.css';

const Footer = () => {

    const urlBehance = 'https://www.behance.net/baravallebruno';
    const urlLinkedin = 'https://www.linkedin.com/in/bruno-baravalle/';


    return (
        <footer className="container-fluid bg-primary">
          <div className="row">
              <div className="container text-center">
                <p className="text-light pt-4 mt-4">Desarrollado en React</p>
               <p className="mb-1">- Segui mi trabajo -</p>
                    <div className="row justify-content-center">
                    <a 
                            className="nav-link pb-4 mb-4" 
                            href={urlBehance}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-behance text-light"></i>
                        </a>
                        <a 
                            className="nav-link pb-4 mb-4" 
                            href={urlLinkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin-in text-light"></i>
                        </a>
                    </div>
              </div>
          </div>
        </footer>
    );
};

export default Footer;