import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderTracking from '../components/OrderTracking';

const TrackOrder = () => {
    const location = useLocation();
    const { orderId } = location.state || {};

    return <OrderTracking orderId={orderId} />;
};

export default TrackOrder;