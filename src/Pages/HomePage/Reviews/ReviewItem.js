import { Rating } from '@mui/material';
import React from 'react';

const ReviewItem = ({ reviewItem }) => {
    console.log(reviewItem);

    const { userName, rating, review, first, photo } = reviewItem;
    const rate = parseInt(rating);

    return (
        <div style={{ height: "280px" }} className={`carousel-item rounded-3 border-2 ${first}`} data-bs-interval="2000">
            <div className="text-center pt-5">
                <Rating name="read-only" value={rate} readOnly />
            </div>
            <div className="text-center">
                <img className="rounded-circle mb-2" style={{ width: "100px" }} src={photo ? photo : "https://i.ibb.co/ZVL2SBL/rounded-profile-pic.jpg"} alt="..." />
            </div>
            <div className="mx-4">
                <p className="text-center">{review}</p>
            </div>
            <div className="text-center">
                <h4>{userName}</h4>
            </div>
            <div>
            </div>
        </div>
    );
};

export default ReviewItem;