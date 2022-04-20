import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import './style.scss'
import axios from 'axios';
import RestaurantCard from '../Components/RestaurantCard';
import Map from '../Components/Map';
import { avgRating } from '../Helper';
const Home = () => {
    const [restaurantData, setRestaurantData] = useState([])
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios.get('https://techd.s3.amazonaws.com/restaurant-data.json')
            .then(res => { setRestaurantData(res.data.restaurants) })
            .catch(function (error) {
                console.log(error)
            })
    }
    const handleSorting = (type) => {
        let temp = [...restaurantData]

        switch (type) {
            case "alphabetically":
                temp.sort((a, b) => a.name.localeCompare(b.name))
                setRestaurantData(temp);
                break;
            case "rating":
                temp.sort((a, b) => avgRating(a.reviews) - avgRating(b.reviews))
                setRestaurantData(temp);
                break;
            default:
                temp.sort((a, b) => a.id - b.id)
                setRestaurantData(temp);
                break;
        }
    }

    return (
        <div>
            <Header />
            <div className='home-container'>
                <div className='sort-by'>
                    <select onChange={(data) => handleSorting(data.target.value)}>
                        <option value="">Sort By</option>
                        <option value="alphabetically">alphabetically</option>
                        <option value="rating">rating</option>

                    </select>
                </div>
                {restaurantData.map((item, index) => {
                    return <RestaurantCard restaurant={item} key={item.id} index={index} />
                })}
            </div>
            {restaurantData.length && <Map restaurantData={restaurantData} />}
        </div>
    )
}

export default Home;