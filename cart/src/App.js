import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/compo/Cart';
import Container from './components/compo/Container';
import Nav from './components/compo/Nav';


function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(cart);
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }
  
  return (
    <div>
      <Nav cart={cart.length} />
      <Routes>
        <Route path="/" element={<Container handleClick={handleClick} />} />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
