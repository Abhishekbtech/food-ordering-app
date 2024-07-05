import React from 'react';

const Menu = ({ menuItems, onSelectItem }) => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id} className="mb-4">
                        <button
                            onClick={() => onSelectItem(item)}
                            className="block w-full text-left bg-gray-100 p-4 rounded-md shadow-md hover:bg-gray-200"
                        >
                            <span className="text-xl">{item.name}</span>
                            <span className="block text-gray-600">${item.price}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;