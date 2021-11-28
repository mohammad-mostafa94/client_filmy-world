import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <span className="fs-4 text-warning">FilmyWorld</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5 mb-lg-0">

                            <li className="nav-item me-2">
                                <Link to="/movies" className="nav-link" >Movies</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link to="/" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item me-2">
                                <span className="nav-link">

                                </span>
                            </li>
                            <li className="nav-item me-5">
                                {
                                    user.email ? <span>

                                        <Link to="/dashboard" className="nav-link ">hi, {user.displayName}</Link>
                                        <Link to="/dashboard" className="nav-link " >Dashboard</Link>
                                        <Link to="/" className="nav-link text-warning" onClick={logOut}> Logout</Link>
                                    </span> : <Link to="/login" className="nav-link text-warning" > Login</Link>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navigation;