import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, signInUser,isLoading,authError} = useAuth();

    const location = useLocation()
    const history = useHistory();

    const handleChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmitLogin = e =>{
        signInUser(loginData.email,loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md ={6}>
                    <img className="mw-100 mh-100" src="https://i.ibb.co/Sfvxdfg/login.png" alt="" />
                </Grid>
                <Grid item xs={12} md ={6}>
                <Typography sx={{mt:8, mb:5,text:"white"}} variant="h5" gutterBottom>
                    <span className="text-white">Login</span>
                </Typography>
                <form onSubmit={handleSubmitLogin} >
                    <TextField
                        sx={{my:1}} 
                        id="standard-basic" 
                        label="Your email"
                        variant="standard" 
                        style={{width:"90%"}}
                        name="email"
                        type="email"
                        onBlur={handleChange}
                        />
                    <TextField
                        id="standard-basic" 
                        label="Your Password"
                        variant="standard" 
                        type="password"
                        sx={{width:"90%",mt:4}}
                        name="password"
                        onBlur={handleChange}
                        />


                        <button style={{ width:"90%"}} type="submit" className="btn btn-warning mt-1 text-white">Login</button>
                        <Link  style={{textDecoration:"none"}} to ="/register">
                            
                            <Button className="mt-3" variant="text">New User ? Please Register</Button>
                        </Link>

                </form>
                {isLoading && <CircularProgress />}
                {
                    user?.email &&  <Alert severity="success">User login successfully </Alert>
                }
                {
                    authError &&  <Alert severity="error">{authError}</Alert>
                }
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Login;