import React from 'react';

// import React, { useEffect, useState } from 'react';

import Drawers from '../Drawers';

import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';

const stripePromise = loadStripe('pk_test_51JwVygCIa9kR8eTHz3xEN6w2BRNaH9cEbvIdFv2uOIWkdey6JPTfgyditG4p9KBtDRwtkcwr3Lj1ya3G5t9pp9Dq00IoYB8VIj');


const Payment = () => {

    const { orderId } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch(`https://vast-mesa-82001.herokuapp.com/user/${orderId}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)
            });
    }, [orderId]);
    // const {price, serviceName,name,patientName} = appointment;

    return (
        <div className="container-fluid">
            <div className="row">
                <Drawers></Drawers>
                <div className="col-md-9 col-sm-12 py-4 ">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 ">
                            <div className="text-center">

                                <h2>Please Pay for: <span className="text-info">{order.name}</span> </h2>
                                <h4>Amount: ${order.price}</h4>

                                {order?.price && <Elements stripe={stripePromise}>
                                    <CheckoutForm
                                        order={order}
                                    />
                                </Elements>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;