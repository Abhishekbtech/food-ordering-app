import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemSelection from '../components/ItemSelection';

const OrderSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedItems  = location.state.key;

    const handleTrackOrder = orderId => {
        navigate("/track-order", { state: { orderId } })
    };

    return (
        <ItemSelection selectedItems={selectedItems} onPlaceOrder={() => handleTrackOrder(1234)} />
    );
};

export default OrderSummary;