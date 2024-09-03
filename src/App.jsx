import React from 'react';
import { StoreProvider } from './StoreContext';
import CardItem from './CardItem';
import './style.css';  // Import the CSS file

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <h1>My Store</h1>
        <CardItem />
      </div>
    </StoreProvider>
  );
}

export default App;
