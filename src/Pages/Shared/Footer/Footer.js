import React from 'react';
import { Link } from 'react-router-dom';
import googlePlay from "../../../android.png";
import appStore from "../../../apple.png";

const Footer = () => {
    return (
        <div>
            <footer className="pt-4 shadow-lg bg-dark">
                <div className="container py-4 mx-auto row align-items-center justify-content-between">
                    <div className="col-lg-5 col-12">
                        <p className="text-white fw-bolder fs-3">Filmy World</p>
                        <small className="text-secondary d-block">Dozens of movies, TV shows and people to discover. Explore now.</small>
                        <small className="mt-2 text-white d-block">2021 &copy; Mohammad Mostafa. All Rights Reserved Here.</small>
                        <div className="pt-3">
                            <Link to="/" className="text-decoration-none text-secondary pe-3"></Link>
                            <Link to="/" className="text-decoration-none text-secondary"></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-8">
                        <Link to="/" className="text-white text-decoration-none d-block">FAQ</Link>
                        <Link to="/" className="text-white text-decoration-none d-block">Contact Us</Link>
                        <Link to="/" className="text-white text-decoration-none d-block">Privacy Policy</Link>
                        <Link to="/" className="text-white text-decoration-none d-block">Refund Policy</Link>
                        <Link to="/" className="text-white text-decoration-none d-block">Blog</Link>
                        <Link to="/" className="text-white text-decoration-none d-block">Terms & conditions</Link>
                    </div>
                    <div className="col-lg-2 col-4">
                        <Link to="/appStore">
                            <img src={appStore} alt="" className="pb-2 img-fluid" />
                        </Link>
                        <Link to="/googlePlay">
                            <img src={googlePlay} alt="" className="pt-2 img-fluid" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;