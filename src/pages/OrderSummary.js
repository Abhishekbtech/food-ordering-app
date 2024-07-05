import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemSelection from '../components/ItemSelection';

const OrderSummary = () => {
    const location = useLocation();
    const navigator = useNavigate();
    const selectedItems  = location.state.key || [];

    const handleTrackOrder = orderId => {
        navigator('/track-order', {state : {key : orderId}})
    };

    return (
        <div className="bg-white min-h-screen p-4">
            <ItemSelection selectedItems={selectedItems} onPlaceOrder={() => handleTrackOrder(1234)} />
        </div>
    );
};

export default OrderSummary;