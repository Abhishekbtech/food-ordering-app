export const fetchRestaurants = async () => {
    return [
        { id: 1, name: 'Pizza Palace' },
        { id: 2, name: 'Burger Barn' },
    ];
};


export const fetchMenuItems = async (restaurantId) => {
    return [
        { id: 1, name: 'Margherita Pizza', price: 12 },
        { id: 2, name: 'Pepperoni Pizza', price: 15 },
    ];
};