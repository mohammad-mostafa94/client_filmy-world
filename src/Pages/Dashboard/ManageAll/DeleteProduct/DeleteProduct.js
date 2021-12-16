import axios from 'axios';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Drawers from '../../Drawers/Drawers';

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

        <div className="container-fluid">
            <div className="row ">
                <Drawers></Drawers>
                <div className=" col-md-9 bg-info">

                    <h3 className="text-center my-3">Total Films {products.length}</h3>
                    <div className="row">

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell >Movie Name</TableCell>
                                        <TableCell>Language</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Director</TableCell>
                                        <TableCell className="bg-danger" >Product Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map(product => (
                                        <TableRow
                                            key={product._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {product.name}
                                            </TableCell>
                                            <TableCell >{product.lang}</TableCell>
                                            <TableCell >${product.price}</TableCell>
                                            <TableCell >{product.director}</TableCell>
                                            <TableCell ><button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete <i class="fas fa-trash"></i></button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;