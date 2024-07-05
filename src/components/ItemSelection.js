import React from 'react';

const ItemSelection = ({ selectedItems, onPlaceOrder }) => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Selected Items</h1>
            <ul>
                {selectedItems.map(item => (
                    <li key={item.id} className="mb-2">
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <button
                onClick={onPlaceOrder}
                className="w-full bg-blue-600 text-white p-4 mt-4 rounded-md hover:bg-blue-700"
            >
                Place Order
            </button>
        </div>
    );
};

export default ItemSelection;