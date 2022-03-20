import React from 'react';

const CartContext = (props) => React.createContext({
   items: [],
   totalAmount: 0, 
   addItem: (id) => {},
   removeItem: (id) => {},
});

export default CartContext;