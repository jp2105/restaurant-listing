import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { avgRating } from '../Helper';
const Reviews = ({ restaurant }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className='review-container'>
            {!open && <p className='show-more' onClick={() => setOpen(open => !open)}>more details...</p>}
            {open && <div>
                <div>
                    <p className='heading'>Operating hours</p>
                    {Object.keys(restaurant.operating_hours).map(keyValue => {
                        return <div key={keyValue} className='week-days'>{keyValue}: {restaurant.operating_hours[keyValue]}</div>
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