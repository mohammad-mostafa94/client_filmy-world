import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import Drawers from '../Drawers';

const Review = () => {

    const [review, setReview] = useState([]);
    const { user } = useAuth();
    console.log(user);

    useEffect(() => {
        fetch("https://vast-mesa-82001.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    const id = review.length;

    const history = useHistory()
    const refRating = useRef();
    const refReviews = useRef();

    const handleReview = (e) => {
        const userName = user.displayName;
        const email = user.email;
        const photo = user.photoURL;
        const rating = refRating.current.value;
        const review = refReviews.current.value;

        const reviews = { id, userName, rating, email, review, photo };

        axios.post("https://vast-mesa-82001.herokuapp.com/reviews", reviews)
            .then(res => {
                if (res.data.insertedId) {
                    setReview(res.data);
                    console.log("review length", review.length);
                    alert("review added successfully");
                    history.push("/");
                }
            })
        e.preventDefault();
    };

    return (
        <div className="container-fluid">
            <div className=" row">
                <Drawers></Drawers>
                <div className="col-md-9 col-sm-12 bg-info py-2 ">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <form onSubmit={handleReview} className="bg-light rounded p-5 mt-5">
                                <h3 className="mt-4 mb-0 text-warning">Please Your Review</h3>
                                <div className="my-4">
                                    <label htmlFor="name" className="form-label">Full Name</label>

                                    <input type="text" className="form-control" id="name" value={user.displayName} disabled />
                                </div>
                                <div className="my-4">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input value={user.email} disabled type="email" className="form-control" id="email" required />
                                </div>
                                <div className="my-4">
                                    <label htmlFor="rating" className="form-label">Rating</label>
                                    <input type="number" min="1" max="5" className="form-control"
                                        placeholder=" 1 to 5 "
                                        id="rating"
                                        ref={refRating} required />
                                </div>
                                <label htmlFor="address" className="form-label ">Review</label>
                                <input style={{ height: "100px" }} ref={refReviews} type="text"
                                    className="form-control " id="address" required />

                                <button type="submit" className="btn btn-warning mt-4">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;