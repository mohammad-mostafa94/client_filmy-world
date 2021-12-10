import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Drawers from '../Drawers/Drawers';
// import OrderManage from './OrderManage/OrderManage';

const ManageAll = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://vast-mesa-82001.herokuapp.com/users`)
            .then(res => res.json())
            .then((data) => {
                setOrders(data);
            })
    }, [user.email]);

    const handleDelete = id => {
        const proceed = window.confirm("are you sure, you want to delete this order?");
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

    const handleStatus = (id) => {
        const url = `https://vast-mesa-82001.herokuapp.com/user/${id}`;
        axios.put(url).then((res) => {
            if (res.data.modifiedCount) {
                alert("Order Accept Successfully");
                fetch(`https://vast-mesa-82001.herokuapp.com/user`)
                    .then((res) => res.json())
                    .then((data) => setOrders(data));
            }
        });
    };
    return (
        <div className="container-fluid">
            <div className=" row">
                <Drawers></Drawers>

                <div className="col-md-9 bg-info">
                    <h1 className="text-center my-2">Total Orders {orders.length}</h1>
                    <div className="row">
                        {/* {
                            orders.map(order => <OrderManage order={order}
                                handleDelete={handleDelete}
                                handleStatus={handleStatus}
                                key={order._id}>
                            </OrderManage>)
                        } */}
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell>Movie Name</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Product Delete</TableCell>
                                        <TableCell>Approval status</TableCell>
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
                                                order.status ? (<span className="text-success">Accepted <i className="fas fa-check-circle"></i></span>) : (<button onClick={() => handleStatus(order._id)} className="btn btn-warning">Accept</button>)
                                            }</TableCell>
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
        </div>
    );
};

export default ManageAll;