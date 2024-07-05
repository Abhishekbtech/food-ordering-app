import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderTracking from '../components/OrderTracking';

const TrackOrder = () => {
    const location = useLocation();
    const orderId  = location.state.key || {};

    return (
        <div className="bg-white min-h-screen p-4">
            <OrderTracking orderId={orderId} />
        </div>
    );
};

export default TrackOrder;