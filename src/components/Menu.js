import React from 'react';

const Menu = ({ menuItems, onSelectItem }) => {
    
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id} className="mb-2">
                        <button onClick={() => onSelectItem(item)} className="text-blue-500">
                            {item.name} - ${item.price}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;