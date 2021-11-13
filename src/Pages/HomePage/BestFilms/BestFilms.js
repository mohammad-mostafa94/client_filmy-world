import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const BestFilms = ({nowShow}) => {
    const {_id, name, year, genre, price, img} = nowShow;
    
    const history = useHistory();

    const handleDetails = ()=>{
        history.push(`/film/${_id}`);
    }
    return (
        <div className="col-lg-4 col-md-6">
            <div className="h-100 rounded bg-light shadow">
                <img className="img-fluid rounded-3" src={img} alt="" />
                <div className="container py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="">{name}</h5>
                        <h6>({year})</h6>
                    </div>
                    <small>{genre}</small>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mt-3">Price: <span className="fw-bold">${price}</span></p>

                        <Link to={`/film/${_id}`} onClick={handleDetails} className="btn btn-warning"> Details <i className="fas fa-info-circle"></i></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFilms;