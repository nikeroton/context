import React, { createContext, useState } from 'react';

// Create a Context
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Define the state you want to share
  const [items, setItems] = useState([
    { id:1, name: 'Burger ', price: 100 ,description:'this ia burger',variation:'s,m,l,lx pack'},
    { id:2,name: 'Fries', price: 80,description:'this ia fries', variation:'s,m,l,lx pack' },
  ]);

  // The context value that will be supplied to any descendants of this component.
  const value = {items,setItems};

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};
