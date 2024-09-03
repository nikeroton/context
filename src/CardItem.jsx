import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';
import ItemDetails from './ItemDetails';

const CardItem = () => {
  const { items } = useContext(StoreContext);

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="card">
          <h2>{item.id}. {item.name}</h2>
          <p>Price: ${item.price}</p>
          <ItemDetails item={item} />
        </div>
      ))}
    </div>
  );
};

export default CardItem;
