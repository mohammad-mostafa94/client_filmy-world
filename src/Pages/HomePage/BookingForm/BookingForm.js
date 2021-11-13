import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const BookingForm = () => {

    const {filmId} = useParams();
    const [singleFilm , setSingleFilm] = useState([]);

    const {name , price} = singleFilm;

    const history = useHistory()

    const {user} = useAuth();
    
    useEffect(()=>{
        const url = `https://vast-mesa-82001.herokuapp.com/film/${filmId}`
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            setSingleFilm(data)
        })
    },[filmId]);

    const refNumber = useRef();
    const refCost = useRef();
    const refAddress = useRef();


        const handleBookForm = (e) =>{
            const userName = user.displayName;
            const email=  user.email;
            const number=  refNumber.current.value;
            const cost=  refCost.current.value;
            const address=  refAddress.current.value;
            const status = 0;
            const info = {userName,number,email,cost,name,price,address,status};

            axios.post("https://vast-mesa-82001.herokuapp.com/users",info)
                .then(res=>{
                    if (res.data.insertedId) {
                        alert("data added successfully");
                        
                        history.push("/");
                    }
                })
                e.preventDefault();
            };

    
    return (
        <div>
            <form onSubmit={handleBookForm} className="bg-light rounded-20 p-5 mt-5">
                    <h3 className="mt-4 mb-0 text-warning">Booking Form</h3>
                    <div className="my-4">
                        <label htmlFor="name" className="form-label">Full Name</label>

                        <input  type="text" className="form-control" id="name" value={user.displayName} disabled />
                    </div>
                    <div className="my-4">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input value={user.email} disabled  type="email" className="form-control" id="email" required />
                    </div>
                    <div className="my-4">
                        <label htmlFor="phone" className="form-label">Contact Number</label>
                        <input ref={refNumber} type="number" className="form-control" id="phone" required />
                    </div>
                    <div className="my-4">
                        <label htmlFor="costtime" className="form-label">Total Cost (in dollars)</label>
                        <input ref={refCost}  type="number" className="form-control" id="costtime" value={price} disabled required />
                    </div>
                    <label htmlFor="address" className="form-label">Address</label>
                        <input ref={refAddress}  type="text" className="form-control" id="address" required />
                    <button type="submit" className="btn btn-warning mt-4">Book This Package</button>
                </form>
        </div>
    );
};

export default BookingForm;