import React, { useEffect, useState } from 'react';
import { Circle } from 'react-spinners-css';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner (1).jpg';
import banner2 from '../../../images/banner (2).jpg';
import banner3 from '../../../images/banner (3).jpg';
import banner4 from '../../../images/banner (4).jpg';
import banner5 from '../../../images/banner (5).jpg';
import banner6 from '../../../images/banner (6).jpg';
import BestFilms from '../BestFilms/BestFilms';

const Home = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch('https://vast-mesa-82001.herokuapp.com/filmy')
            .then(res => res.json())
            .then((data) => setFilms(data))
    }, []);
    const bestFilms = films.slice(0, 6);
    return (
        <div className="container">
            <div className="row justify-content-between align-items-center">

                <div id="carouselExampleIndicators" className="col-md-7 carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={banner1} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner2} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner3} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner4} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner5} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={banner6} className="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="col-md-4 px-5 me-5">
                    <h3 className="text-warning">Welcome To FilmyWorld....</h3>
                    <p className="text-secondary">Purchase original BlueRay Copies of Your Favorite Movies. Explore now.</p>
                    <div className="input-group mb-3">
                        <Link className="btn btn-warning rounded-3 px-4 shadow" to="/movies">Explore Now</Link>
                    </div>
                </div>
            </div>
            <div className="py-4 mt-5">
                <h1 className="text-warning text-center">Our Top Sellers</h1>
                <div className="mt-4 row justify-content-between g-4">

                    {
                        (bestFilms.length === 0) ? (
                            <Circle color="#be97e8" size={200} />
                        ) : (
                            bestFilms.map(nowShow => <BestFilms
                                key={nowShow._id}
                                nowShow={nowShow}>
                            </BestFilms>)
                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default Home;