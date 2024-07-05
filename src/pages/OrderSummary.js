import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ItemSelection from '../components/ItemSelection';

const OrderSummary = () => {
    const location = useLocation();
    const history = useHistory();
    const { selectedItems } = location.state || [];

    const handleTrackOrder = orderId => {
        history.push('/track-order', { orderId });
    };

    return (
        <div className="bg-white min-h-screen p-4">
            <ItemSelection selectedItems={selectedItems} onPlaceOrder={() => handleTrackOrder(1234)} />
        </div>
    );
};

export default OrderSummary;