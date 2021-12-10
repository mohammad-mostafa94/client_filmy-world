import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookingForm from "../../HomePage/BookingForm/BookingForm";

const MovieDetails = () => {

    const [singleFilm, setSingleFilm] = useState([]);

    const { filmId } = useParams();

    useEffect(() => {
        const url = `https://vast-mesa-82001.herokuapp.com/film/${filmId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSingleFilm(data)
            })
    }, [filmId])



    const { name, tomato, genre, tagline, syn, director, dimg, writter, lead, leadImg, lang, runtime, img, trailer, } = singleFilm;
    return (
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-8">
                    <img className="img-fluid" src={img} alt={name} />
                </div>
                <div className="col-xl-5 col-lg-5 col-md-9 p-4">
                    <div>
                        <h1 className="text-warning">{name}</h1>
                        <p className="fs-5">{tagline}</p>
                    </div>
                    <div className="text-secondary my-3">
                        <small className="d-block"><i className="fas fa-arrow-right"></i> {lang}</small>
                        <small className="d-block"><i className="fas fa-arrow-right"></i> {genre}</small>
                        <small className="d-block"><i className="fas fa-arrow-right"></i> {runtime}</small>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="pt-2">Rotten Tomato: <span className="fw-bold">{tomato}%</span></p>
                        <a className="btn text-danger fw-bolder" href={"https://www.youtube.com/watch?v=" + trailer} rel="noreferrer" target="_blank"><i className="bi bi-caret-right-square-fill"></i> <i className="fas fa-caret-square-right"></i>  Play Trailer</a>
                    </div>
                    <div>
                        <h4 className="text-secondary">Overview</h4>
                        <p className="">{syn}</p>
                    </div>
                    <div className="py-4">
                        <h4 className="text-secondary">Writter</h4>
                        <h5>{writter}</h5>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3 p-4 text-center">
                    <div className="">
                        <img className="img-fluid rounded p-4" src={dimg} alt="" />
                        <h5>{director}</h5>
                        <p className="fw-bolder text-secondary">Director</p>
                    </div>
                    <div className="">
                        <img className="img-fluid rounded p-4" src={leadImg} alt="" />
                        <h5>{lead}</h5>
                        <p className="fw-bolder text-secondary">Lead Actor</p>
                    </div>
                </div>
            </div>
            <BookingForm></BookingForm>
        </div>
    );
};

export default MovieDetails;