import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import { fetchMenuItems } from '../utils/api';

const RestaurantDetails = () => {
    const { id } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMenuItems(id).then(data => setMenuItems(data));
    }, [id]);

    const handleSelectItem = item => {
        setSelectedItems([...selectedItems, item]);
    };

    const handlePlaceOrder = () => {
        navigate("/order-summary", { state: { key: selectedItems } })
    };

    return (
        <div>
            <Menu menuItems={menuItems} onSelectItem={handleSelectItem} />
            <button onClick={handlePlaceOrder} className="bg-blue-500 text-white p-2 mt-4">Review Order</button>
        </div>
    );
};

export default RestaurantDetails;