import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Drawers from '../Drawers';
import Order from './Order';

const Orders = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch(`https://vast-mesa-82001.herokuapp.com/user?email=${user.email}`)
        .then(res => res.json())
        .then((data) =>{
            console.log(data);
            setOrders(data);
        })
    },[user.email]);

    const handleDelete = id => {
        const proceed = window.confirm("are you sure , you want to delete it?");
        if (proceed) {
            const url = `https://vast-mesa-82001.herokuapp.com/user/${id}`
                    axios.delete(url)
                    .then(res=>{
                        if (res.data.deletedCount) {
                            alert("delete a order");
                            const remainingOrders = orders.filter(order=> order._id !== id);
                            setOrders(remainingOrders);

                        }
                    })
        }
        
    }
    return (
        <div className="container row">
            <Drawers></Drawers>
            <div className="col-md-10">
                <div className="row g-3 ">
                    {
                        orders.map(order=> <Order order = {order}
                        handleDelete  = {handleDelete}
                        key={order._id}>
                        </Order>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Orders;