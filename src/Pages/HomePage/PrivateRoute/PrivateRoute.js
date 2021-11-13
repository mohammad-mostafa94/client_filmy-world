import React from 'react';
import Loader from "react-loader-spinner";
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Loader
        type="PacmanLoader"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
    />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>(user.displayName )? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;