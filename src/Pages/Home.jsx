import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import './style.scss'
import axios from 'axios';
import APIData from '../data';
import RestaurantCard from '../Components/RestaurantCard';
const Home = () => {
    const [restaurantData, setRestaurantData] = useState([])
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios.get('https://techd.s3.amazonaws.com/restaurant-data.json')
            .then(function (response) {
                setRestaurantData(APIData.restaurants);
            })
            .catch(function (error) {
                setRestaurantData(APIData.restaurants);
            })
    }


    return (
        <div >
            <Header />
            <div className='home-container'>
                {restaurantData.map((item, index) => {
                    return <RestaurantCard restaurant={item} index={index} />
                })}
            </div>
        </div>
    )
}

export default Home;