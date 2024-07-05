import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import { fetchMenuItems } from '../utils/api';

const RestaurantDetails = () => {
    const { id } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        fetchMenuItems(id).then(data => setMenuItems(data));
    }, [id]);

    const handleSelectItem = item => {
        setSelectedItems([...selectedItems, item]);
    };

    const handlePlaceOrder = () => {
        navigator('/order-summary', {state : {key : selectedItems}})
    };

    return (
        <div className="bg-white min-h-screen p-4">
            <Menu menuItems={menuItems} onSelectItem={handleSelectItem} />
            <button
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 text-white p-4 mt-4 rounded-md hover:bg-blue-700"
            >
                Review Order
            </button>
        </div>
    );
};

export default RestaurantDetails;