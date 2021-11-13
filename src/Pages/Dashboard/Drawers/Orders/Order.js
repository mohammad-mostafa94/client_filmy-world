import React from 'react';

const Order = ({order,handleDelete}) => {

    const {name,email,price,userName}= order;
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card shadow h-100 " >
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h6 className="card-subtitle mb-2 text-muted"><span className="text-warning">User name:</span> {userName}</h6>
                    <h4 className="text-bold"><span className="text-warning">Price $</span> {price}</h4>
                    <p className="card-text">Email: {email}</p>
                    <button onClick={()=>handleDelete(order._id)} className="card-link btn btn-warning">Delete</button>
                    <button className="card-link btn btn-warning">Card link</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Order;