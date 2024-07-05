import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Available Restaurants</h1>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant.id} className="mb-2">
                        <Link to={`/restaurant/${restaurant.id}`} className="text-blue-500">
                            {restaurant.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantList;