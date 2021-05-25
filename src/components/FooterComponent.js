import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-2 offset-1 col-sm-2">
                    
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon" target="_blank" href="https://www.instagram.com/srij_111/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon" target="_blank" href="https://www.linkedin.com/in/srijan-garg-b30b871bb"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon" target="_blank" href="mailto:srijangarg111@gmail.com"><i className="fa fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Srijan Garg</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;