import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Drawers = () => {
    const { logOut, admin } = useAuth();
    return (

        <div className="col-lg-2 bg-warning ">
            <div className="mt-5">
                {
                    admin ? (
                        <span className="mt-4">

                            <Link to="/allOrders" className="btn me-4  d-block">
                                <button className="btn w-100 text-bold btn-info text-white p-3">Manage All Orders</button>
                            </Link>
                            <div className="my-3 d-none d-md-block"></div>

                            <Link to="/manageProduct" className="btn me-4 d-block">
                                <button className="btn  w-100 text-bolder btn-info text-white p-3">Manage product</button>
                            </Link>
                            <div className="my-3 d-none d-md-block"> </div>

                            <Link to="/addProduct" className="btn me-4 d-block">
                                <button className="btn w-100  text-bolder btn-info text-white p-3">Add a product </button>
                            </Link>
                            <div className="my-3 d-none d-md-block"></div>


                            <Link to="/makAdmin" className="btn me-4  d-block">
                                <button className="btn w-100 text-bolder btn-info text-white p-3">Make Admin</button>
                            </Link>
                            <div className="my-3 d-none d-md-block"></div>
                        </span>
                    )
                        : (
                            <span className="my-3  d-md-block">
                                {/* <Link to="/payment" className="btn me-4 d-block">
                                    <button className="btn w-100  btn-info p-3">Order Payment</button>
                                </Link>
                                <div className="my-3 d-none d-md-block"></div> */}

                                <Link to="/reviews" className="btn me-4 d-block">
                                    <button className="btn w-100 btn-info p-3">Your Review</button>
                                </Link>
                                <div className="my-3 d-none d-md-block"></div>

                                <Link to="/orders" className="btn me-4 d-block">
                                    <button className="btn w-100 btn-info p-3">All Orders</button>
                                </Link>
                                <div className="my-3 d-none d-md-block"></div>

                            </span>
                        )
                }
                <Link to="/" onClick={logOut} className="btn me-4 d-block">
                    <button className="btn btn-danger  w-100 text-bolder p-3"> logout</button>

                </Link>
                <div className="my-3 d-none d-md-block"></div>
                <div className="my-3 d-none d-md-block"> <Link to="/" className="btn me-4 d-block">Go Back </Link></div>

            </div>
        </div>
    );
};

export default Drawers;