import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../404.png';

// 404 Error Page
const NotFound = () => {
    return (
        <div className="p-4 text-center bg-warning">
            <div className="py-2 mb-4">
                <h1>OOPSS!!</h1>
                <h3>The Page You Requested Couldn't Be Found.</h3>
                <Link to="/home" className="my-2 btn btn-dark">Go Back To Home Page</Link>
            </div>
            <img src={notfound} className="pb-4 mx-auto mb-4 w-50 d-block" alt="404 Not Found" />
        </div>
    );
};

export default NotFound;