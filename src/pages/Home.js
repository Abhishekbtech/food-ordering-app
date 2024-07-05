import React, { useState, useEffect } from 'react';
import RestaurantList from '../components/RestaurantList';
import { fetchRestaurants } from '../utils/api';

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants().then(data => setRestaurants(data));
    }, []);

    return (
        <div className="bg-white min-h-screen p-4">
            <RestaurantList restaurants={restaurants} />
        </div>
    );
};

export default Home;