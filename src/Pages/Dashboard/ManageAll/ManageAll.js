import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Drawers from '../Drawers/Drawers';
import OrderManage from './OrderManage/OrderManage';

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
        const proceed = window.confirm("are you sure , you want to delete this order?");
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
        <div className=" row">
            <Drawers></Drawers>
            <div>
                <div className="col-md-9">
                    <h3 className="text-center my-3">Total Orders {orders.length}</h3>
                    <div className="row">
                        {
                            orders.map(order => <OrderManage order={order}
                                handleDelete={handleDelete}
                                handleStatus={handleStatus}
                                key={order._id}>
                            </OrderManage>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageAll;