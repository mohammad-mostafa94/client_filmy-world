import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Drawers = () => {
    const { logOut, admin } = useAuth();
    return (
        <div className="container col-md-2">
            <div>
                {
                    admin ? (
                        <span>
                            <Link to="/addProduct" className="btn me-4 ">Add a product</Link>
                            <div className="my-3 d-none d-md-block"> </div>
                            <Link to="/deleteProduct" className="btn me-4 ">Manage product</Link>
                            <div className="my-3 d-none d-md-block"> </div>
                            <Link to="/allOrders" className="btn me-4 ">Manage All Orders</Link>
                            <div className="my-3 d-none d-md-block"></div>
                            <Link to="/makAdmin" className="btn me-4 ">Make Admin</Link>
                            <div className="my-3 d-none d-md-block"></div>
                        </span>
                    )
                        : (
                            <span><Link to="/orders" className="btn me-4 ">Orders</Link>
                                <div className="my-3 d-none d-md-block"></div>
                                <Link to="/reviews" className="btn me-4 "> Reviews</Link>
                                <div className="my-3 d-none d-md-block"></div>
                                <Link to="/payment" className="btn me-4 ">Payment</Link>
                                <div className="my-3 d-none d-md-block"></div>

                            </span>
                        )
                }



                <Link to="/" onClick={logOut} className="btn me-4 ">logout</Link>
                <div className="my-3 d-none d-md-block"></div>

            </div>
        </div>

    );
};

export default Drawers;