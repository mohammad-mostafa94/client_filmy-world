import React from 'react';
import Drawers from '../Drawers';

const Payment = () => {
    return (
        <div className="container row">
            <Drawers></Drawers>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img className="img-fluid h-100" src="https://i.ibb.co/brmJPjw/payment.png" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h1>Payment Strip coming soon... </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;