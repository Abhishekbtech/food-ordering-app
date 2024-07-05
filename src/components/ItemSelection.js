import React from 'react';

const ItemSelection = ({ selectedItems, onPlaceOrder }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Selected Items</h1>
            <ul>
                {selectedItems.map(item => (
                    <li key={item.id} className="mb-2">
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <button onClick={onPlaceOrder} className="bg-blue-500 text-white p-2 mt-4">Place Order</button>
        </div>
    );
};

export default ItemSelection;