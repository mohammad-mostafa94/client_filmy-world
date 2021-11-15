import React from 'react';

const ProductList = ({ film, handleDelete }) => {

    const { name, lang, price, director } = film;
    // const {name,lang,img,price,director} = film;
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card shadow h-100 " >
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h6 className="card-subtitle mb-2 text-muted"><span className="text-warning">Director name:</span> {director}</h6>
                    <h4 className="text-bold"><span className="text-warning">Price $</span> {price}</h4>
                    <p className="card-text">Language: {lang}</p>
                    <button onClick={() => handleDelete(film._id)} className="card-link btn btn-warning">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default ProductList;