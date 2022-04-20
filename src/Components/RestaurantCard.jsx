import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FacebookShareButton } from "react-share";
import Reviews from "./Reviews"
const RestaurantCard = ({ restaurant, index }) => {
    const [like, setLike] = useState(false)
    const avgRating = (reviews) => {
        let totalRating = 0;
        reviews?.map(review => {
            totalRating += review?.rating;
        })
        return totalRating / reviews.length;
    }
    return <div className='restaurant-main-card'>
        <div className='card-top'>
            <img className='restaurant-img' src={require(`./../Assets/${index + 1}.jpeg`)} alt="img" />
            <div className='card-name'>
                <p className='r-name'>{restaurant.name}</p>
                <p className='r-address'><img alt="img" className='small-icon' src={require(`./../Assets/pin.png`)} />{restaurant.address}</p>
                <p className='r-address'><img alt="img" className='small-icon' src={require(`./../Assets/restaurant.png`)} />{restaurant.cuisine_type}</p>
                <ReactStars
                    count={5}
                    size={14}
                    activeColor="#ffd700"
                    value={avgRating(restaurant.reviews)}
                    classNames={'rating-start'}
                    isHalf
                />
                <Reviews restaurant={restaurant} />

            </div>

        </div>
        <div className="social-container">
            <img alt="img" className='like-icon' onClick={() => setLike(like => !like)} src={like ? require(`./../Assets/heart.png`) : require(`./../Assets/like.png`)} />
            <FacebookShareButton
                url={"https://jp2105.github.io/restaurant-listing/"}
                quote={restaurant.name}
            >
                <img alt="img" className='like-icon share-button' src={require(`./../Assets/send.png`)} />
            </FacebookShareButton>
        </div>

    </div>
}

export default RestaurantCard;