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
            <h1 className="text-3xl font-bold mb-4">Place Order</h1>
            <button
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 text-white p-4 mt-4 rounded-md hover:bg-blue-700"
            >
                Confirm Order
            </button>
            {orderId && <p className="mt-4 text-green-600">Order ID: {orderId}</p>}
        </div>
    );
};

export default PlaceOrder;