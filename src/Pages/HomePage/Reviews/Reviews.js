import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';

const Reviews = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch("https://vast-mesa-82001.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, []);
    return (
        <div>
            <h1 className="text-center text-warning mt-5 mb-0">Customer Reviews </h1>
            <div id="carouselExampleIndicators" className="my-5 col-md-8 my-3 py-3 mx-auto carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        reviews.map((reviewItem) => (
                            <ReviewItem key={reviewItem._id} reviewItem={reviewItem}></ReviewItem>
                        ))
                    }

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Reviews;