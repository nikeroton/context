import React from 'react';

const ItemDetails = ({ item }) => {
  return (
    <div className="item-details">
      <h4>Details of {item.description}</h4>
      <p>Packaging in: {item.variation}</p>
    </div>
  );
};

export default ItemDetails;
