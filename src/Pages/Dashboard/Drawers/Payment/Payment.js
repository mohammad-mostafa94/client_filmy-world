import React from 'react';

// import React, { useEffect, useState } from 'react';

import Drawers from '../Drawers';

// import { useParams } from 'react-router-dom';
// import CheckoutForm from './CheckoutForm';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51JwVygCIa9kR8eTHz3xEN6w2BRNaH9cEbvIdFv2uOIWkdey6JPTfgyditG4p9KBtDRwtkcwr3Lj1ya3G5t9pp9Dq00IoYB8VIj');


const Payment = () => {

    // const { appointmentId } = useParams();
    // const [appointment, setAppointment] = useState({});

    // useEffect(() => {
    //     fetch(`https://agile-plains-37007.herokuapp.com/appointments/${appointmentId}`)
    //         .then(res => res.json())
    //         .then(data => setAppointment(data));
    // }, [appointmentId]);
    // const {price, serviceName,name,patientName} = appointment;

    return (
        <div className="container-fluid">
            <div className="row">
                <Drawers></Drawers>
                <div className="col-md-9 col-sm-12 py-4 bg-info">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img className="img-fluid h-100" src="https://i.ibb.co/brmJPjw/payment.png" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h1 className="my-2">Payment Stripe coming soon... </h1>
                        </div>
                        {/* <div className="col-sm-12 col-md-6">
                            <div className="text-center">

                                <h2>Please Pay for: <span className="text-info">{appointment.serviceName}</span> </h2>
                                <h4>Pay: ${appointment.price}</h4>

                                {appointment?.price && <Elements stripe={stripePromise}>
                                    <CheckoutForm
                                        appointment={appointment}
                                    />
                                </Elements>}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;