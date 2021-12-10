import { Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Drawers from '../Drawers';

// import Order from './Order';

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://vast-mesa-82001.herokuapp.com/user?email=${user.email}`)
            .then(res => res.json())
            .then((data) => {
                setOrders(data);
                console.log(data);
            })
    }, [user.email]);

    const handleDelete = id => {
        const proceed = window.confirm("are you sure , you want to delete it?");
        if (proceed) {
            const url = `https://vast-mesa-82001.herokuapp.com/user/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("delete a order");
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <div className="container-fluid">
            <div className="row ">
                <Drawers></Drawers>
                <div className="col-md-9 bg-white">
                    {
                        orders.length !== 0 ?
                            <h1 className="text-center my-3">{user.displayName},Your total Orders:{orders.length}</h1>
                            : <h1 className="text-center my-5"> {user.displayName} order list is empty</h1>
                    }
                    {/* <div className="row g-3 ">
                        {
                            orders.map(order => <Order order={order}
                                handleDelete={handleDelete}
                                key={order._id}>
                            </Order>)
                        }
                    </div> */}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 300 }} aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell>Movie Name</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Product Delete</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow
                                        key={order._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {order.name}
                                        </TableCell>
                                        <TableCell >${order.price}</TableCell>
                                        <TableCell ><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button></TableCell>
                                        <TableCell >{
                                            order.status ? (<span className="text-success">Shipped <i className="fas fa-check-circle"></i></span>) : (<span className="text-danger"> Pending <i className="fas fa-hourglass-start"></i></span>)
                                        }</TableCell>
                                        <TableCell >{order.payment ? <span className="text-success">Paid</span> :
                                            <Link to={`/payment/${order._id}`}><button className="btn btn-info">Pay</button></Link>
                                        }</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>


                </div>
            </div>
        </div>
    );
};

export default Orders;