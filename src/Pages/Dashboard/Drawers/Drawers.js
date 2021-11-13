import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Drawers = () => {
    const {logOut, isAdmin} = useAuth();
    return (
        <>
            <div className=" m-4 col-md-2">
                {
                    isAdmin ? (
                        <span>
                            <Link to="/orders" className="btn me-4 ">Add product</Link>
                            <div className="my-3 d-none d-md-block">Delete product </div>
                            <Link to="/reviews" className="btn me-4 ">Manage User</Link>
                            <div className="my-3 d-none d-md-block"></div>
                        </span>
                    )
                    :(
                        <span><Link to="/orders" className="btn me-4 ">Orders</Link>
                            <div className="my-3 d-none d-md-block"></div>
                            <Link to="/reviews" className="btn me-4 "> Reviews</Link>
                            <div className="my-3 d-none d-md-block"></div>
                            <div className="my-3 d-none d-md-block"></div>
                        </span>
                    )
                }
                    


                    <Link to="/" onClick={logOut} className="btn me-4 ">logout</Link>
                    <div className="my-3 d-none d-md-block"></div>

                </div>
        </>
        
    );
};

export default Drawers;