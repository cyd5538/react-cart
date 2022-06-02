import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/component/Cart';
import Container from './components/component/Container';
import Nav from './components/component/Nav';


function App() {
  const [cart, setCart] = useState([]);


  const handleClick = (item) => {
    //중복으로 안들어가게
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart, item]); 
  };
  
  const handleChange = (item, number) => {
    const ind = cart.indexOf(item);
    const arr = cart;

    arr[ind].amount += number;
    
    //숫자가 0이 되지않게 리턴
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
