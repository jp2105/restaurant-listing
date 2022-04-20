import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const Reviews = ({ restaurant }) => {

    const [open, setOpen] = useState(false);
    const avgRating = (reviews) => {
        let totalRating = 0;
        reviews?.map(review => {
            totalRating += review?.rating;
        })
        return totalRating / reviews.length;
    }
    return (
        <div className='review-container'>
            {!open && <p className='show-more' onClick={() => setOpen(open => !open)}>more details...</p>}
            {open && <div>
                <div>
                    <p className='heading'>Operating hours</p>
                    {Object.keys(restaurant.operating_hours).map(key => {
                        return <div className='week-days'>{key}: {restaurant.operating_hours[key]}</div>
                    })}
                </div>
                <div>
                    <p className='heading'>Reviews</p>
                    {
                        restaurant.reviews.map((item, index) => {
                            return <div key={index}>
                                <p className='review-name'>{item.name}</p>
                                <p className='review-name review-comments'>{item.comments}</p>
                                <ReactStars
                                    count={5}
                                    size={14}
                                    activeColor="#ffd700"
                                    value={avgRating(restaurant.reviews)}
                                    classNames={'rating-start'}
                                    isHalf
                                />
                            </div>
                        })
                    }
                </div>
                <p className='show-more' onClick={() => setOpen(open => !open)}>less details...</p>
            </div>
            }
        </div>
    )
}

export default Reviews