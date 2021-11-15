import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Drawers from '../../Drawers/Drawers';
import ProductList from './ProductList';

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://vast-mesa-82001.herokuapp.com/filmy`)
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
            })
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm("are you sure , you want to delete this film?");
        if (proceed) {
            const url = `https://vast-mesa-82001.herokuapp.com/film/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("delete a film");
                        const remainingFilms = products.filter(film => film._id !== id);
                        setProducts(remainingFilms);
                    }
                })
        }
    }
    return (
        <div className=" row">
            <Drawers></Drawers>
            <div>
                <div className="col-md-9">
                    <h3 className="text-center my-3">Total Films {products.length}</h3>
                    <div className="row">
                        {
                            products.map(film => <ProductList film={film}
                                handleDelete={handleDelete}
                                key={film._id}>
                            </ProductList>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;