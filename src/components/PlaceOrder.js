import React, { useState } from 'react';

const PlaceOrder = ({ onTrackOrder }) => {
    const [orderId, setOrderId] = useState(null);

    const handlePlaceOrder = () => {
        const newOrderId = Math.floor(Math.random() * 10000);
        setOrderId(newOrderId);
        onTrackOrder(newOrderId);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Place Order</h1>
            <button onClick={handlePlaceOrder} className="bg-blue-500 text-white p-2">Confirm Order</button>
            {orderId && <p>Order ID: {orderId}</p>}
        </div>
    );
};

export default PlaceOrder;