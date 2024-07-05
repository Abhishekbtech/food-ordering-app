import React, { useEffect, useState } from 'react';

const OrderTracking = ({ orderId }) => {
    const [status, setStatus] = useState('Preparing');

    useEffect(() => {
        const timer = setInterval(() => {
            setStatus(prevStatus => {
                if (prevStatus === 'Preparing') return 'On the way';
                if (prevStatus === 'On the way') return 'Delivered';
                clearInterval(timer);
                return prevStatus;
            });
        }, 5000);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Order Tracking</h1>
            <p>Order ID: {orderId}</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default OrderTracking;