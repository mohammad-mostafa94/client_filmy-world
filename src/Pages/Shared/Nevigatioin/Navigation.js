import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <span className="fs-4 text-info">RaceZone Bike</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-lg-0">
                        
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/service">Service</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        <li className="nav-item me-2">
                            <span className="nav-link">
                                
                            </span>
                        </li>
                        <li className="nav-item me-5">
                        
                        <Link  className="nav-link text-info" to="/login"> Login</Link>
                    
                    
                        </li>

                        
                    </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Navigation;