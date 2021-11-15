import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import Drawers from "../Drawers/Drawers";
const AddAProduct = () => {
    const history = useHistory();


    const refName = useRef();
    const refImg = useRef();
    const refId = useRef();
    const refPrice = useRef();
    const refYear = useRef();
    const refTomato = useRef();
    const refGenre = useRef();
    const refTagline = useRef();
    const refSyn = useRef();
    const refDirector = useRef();
    const refDimg = useRef();
    const refWritter = useRef();
    const refLead = useRef();
    const refLeadImg = useRef();
    const refLang = useRef();
    const refRuntime = useRef();

    const refTrailer = useRef();




    const handleNewFilm = (e) => {
        console.log("e ===", e);
        const name = refName.current.value;
        const img = refImg.current.value;
        const id = refId.current.value;
        const price = refPrice.current.value;
        const year = refYear.current.value;
        const tomato = refTomato.current.value;
        const genre = refGenre.current.value;
        const tagline = refTagline.current.value;
        const syn = refSyn.current.value;
        const director = refDirector.current.value;
        const dimg = refDimg.current.value;
        const writter = refWritter.current.value;
        const lead = refLead.current.value;
        const leadImg = refLeadImg.current.value;
        const lang = refLang.current.value;
        const trailer = refTrailer.current.value;
        const runtime = refRuntime.current.value;

        const newFilm = {
            id,
            name,
            year,
            tomato,
            genre,
            tagline,
            syn,
            director,
            dimg,
            writter,
            lead,
            leadImg,
            lang,
            runtime,
            img,
            trailer,
            price,
        };


        axios.post("https://vast-mesa-82001.herokuapp.com/film", newFilm)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("film Added Successfully");
                    history.push("/movies");
                }
            });
        e.preventDefault();
    };
    return (
        <div>
            <div className=" row">
                <div className="">
                    <Drawers></Drawers>
                    <div className="col-md-8">
                        <form onSubmit={handleNewFilm} className="row g-3 bg-light shadow p-3 my-5 rounded" >
                            <h1 className="fw-bold text-center text-prime">Add A New Film</h1>
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label"> Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="film Name"
                                    required
                                    ref={refName}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="image" className="form-label">  Image(url) </label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="image"
                                    placeholder="film Img URL"
                                    required
                                    ref={refImg}
                                />
                            </div>
                            <div className="col-10"><label htmlFor="id" className="form-label">Id</label>
                                <input
                                    className="form-control"
                                    id="id"
                                    type="number"
                                    placeholder="id"
                                    ref={refId}
                                    required
                                ></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="price" className="form-label"> Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    placeholder="film Price"
                                    required
                                    ref={refPrice}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="year" className="form-label"> Year</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="year"
                                    placeholder="year"
                                    required
                                    ref={refYear}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="tomato" className="form-label"> Tomato </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="tomato"
                                    placeholder="tomato"
                                    required
                                    ref={refTomato}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="genre" className="form-label">
                                    Genre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="genre"
                                    placeholder="genre"
                                    required
                                    ref={refGenre}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="tagline" className="form-label">
                                    Tagline
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="tagline"
                                    placeholder="Tagline"
                                    required
                                    ref={refTagline}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="syn" className="form-label">
                                    syn
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="syn"
                                    placeholder="syn"
                                    required
                                    ref={refSyn}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="director" className="form-label">
                                    director
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="director"
                                    placeholder="director"
                                    required
                                    ref={refDirector}
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="dimg" className="form-label">
                                    dimg
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dimg"
                                    placeholder="dimg"
                                    required
                                    ref={refDimg}
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="writter" className="form-label">
                                    writter</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="writter"
                                    placeholder="writter"
                                    required
                                    ref={refWritter}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lead" className="form-label">
                                    lead </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lead"
                                    placeholder="lead"
                                    required
                                    ref={refLead}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="leadImg" className="form-label">
                                    leadImg</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="leadImg"
                                    placeholder="leadImg"
                                    required
                                    ref={refLeadImg}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lang" className="form-label">
                                    lang </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lang"
                                    placeholder="lang"
                                    required
                                    ref={refLang}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="runtime" className="form-label">
                                    runtime </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="runtime"
                                    placeholder="runtime"
                                    required
                                    ref={refRuntime}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="trailer" className="form-label">
                                    trailer </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="trailer"
                                    placeholder="trailer"
                                    required
                                    ref={refTrailer}
                                />
                            </div>
                            <br />


                            <div>
                                <button type="submit" className="text-warning w-50 mx-auto my-3 rounded-pill" >
                                    Add A New Film
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;

