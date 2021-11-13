import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser, isLoading,authError,user,googleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmitLogin = e =>{
        if (loginData.password !== loginData.password2) {
            alert("Password is not matched");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history);
        e.preventDefault();
    };

    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={12} md ={6}>
                    <img className="mw-100 mh-100" src="https://i.ibb.co/Sfvxdfg/login.png" alt="" />
                </Grid>
                <Grid item xs={12} md ={6}>
                <Typography sx={{mt:8, mb:5}} variant="h5" gutterBottom>
                    Registration Form
                </Typography>
                {!isLoading && <form onSubmit={handleSubmitLogin} >
                    <TextField
                        sx={{my:1}} 
                        id="standard-basic" 
                        label="Your Name"
                        variant="standard" 
                        style={{width:"90%"}}
                        name="name"
                        onBlur={handleOnBlur}
                        />
                    <TextField
                        sx={{my:1}} 
                        id="standard-basic" 
                        label="Your email"
                        variant="standard" 
                        style={{width:"90%"}}
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        />
                    <TextField
                        id="standard-basic" 
                        label="Your Password"
                        variant="standard" 
                        type="password"
                        style={{width:"90%"}}
                        name="password"
                        onBlur={handleOnBlur}
                        />
                        <TextField
                        id="standard-basic" 
                        label="Confirm Password"
                        variant="standard" 
                        type="password"
                        style={{width:"90%"}}
                        name="password2"
                        onBlur={handleOnBlur}
                        />

                        <button style={{ width:"90%"}} type="submit" className="btn btn-warning mt-1 text-white">Registration</button>

                        <Link  style={{textDecoration:"none"}} to ="/login">
                            <Button className="mt-3" variant="text" >Already register ? Please Login</Button>
                        </Link>
                </form>}
                
                    {isLoading && <CircularProgress />}
                    {
                        user?.email &&  <Alert severity="success">User created successfully.</Alert>
                    }
                    {
                        authError &&  <Alert severity="error">{authError}</Alert>
                    }

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;