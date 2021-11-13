import React from 'react';

const ReviewItem = ({reviewItem}) => {
    
    const {userName,rating,review,first} = reviewItem;
    const rate = parseInt(rating);
    console.log(rate);
    return (
        <div style={{height:"280px"}} className={`carousel-item rounded-3 border-2 ${first}`} data-bs-interval="2000">
            <div className="text-center pt-5">
                {
                    [...Array(rate)].map(() => <span>star <i className="far fa-star"></i> </span>)
                }
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