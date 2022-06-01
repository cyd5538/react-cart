import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let money = 0;
    cart.map((item) => (money += item.amount * item.price));
    console.log(money)
    setPrice(money);
  };

  useEffect(() => {
    handlePrice();
  }, [handleChange]);

  return (
    <div className="cart_flex">
      <div className="article">
        {cart.map((item) => (
          <div className="article_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p className="title">{item.title}</p>
            </div>
            <div className="btn">
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div className="remove">
              <div>{item.price}</div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <span>Total</span>
        <span>{price} 원</span>
      </div>
    </div>
  );
};

export default Cart;
