import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import './style.scss'
import axios from 'axios';
import APIData from '../data';
import RestaurantCard from '../Components/RestaurantCard';
import Map from '../Components/Map';
const Home = () => {
    const [restaurantData, setRestaurantData] = useState([])
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios.get('https://techd.s3.amazonaws.com/restaurant-data.json')
            .then(res => setRestaurantData(res.data.restaurants))
            .catch(function (error) {
                console.log(error)
            })
    }


    return (
        <div>
            <Header />
            <div className='home-container'>
                {restaurantData.map((item, index) => {
                    return <RestaurantCard restaurant={item} index={index} />
                })}
            </div>
            {restaurantData.length && <Map restaurantData={restaurantData} />}
        </div>
    )
}

export default Home;