import React, { useState, useEffect } from 'react';
import RestaurantList from '../components/RestaurantList';
import { fetchRestaurants } from '../utils/api';

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants().then(data => setRestaurants(data));
    }, []);

    return <RestaurantList restaurants={restaurants} />;
};

export default Home;