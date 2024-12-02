import React, { useState } from "react";
import { pizzaCart } from "./pizzas"; 

const Cart = () => {

  const [cart, setCart] = useState(pizzaCart);

  
  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id && pizza.count > 1
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0) 
    );
  };

  
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div>
      <h2>Tu carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="d-flex justify-content-between align-items-center">
              <img src={pizza.img} alt={pizza.name} style={{ width: "80px", height: "80px" }} />
              <div>
                <h5>{pizza.name}</h5>
                <p>Precio: ${pizza.price}</p>
                <p>Cantidad: {pizza.count}</p>
              </div>
              <div>
                <button onClick={() => increaseQuantity(pizza.id)} className="btn btn-success m-1">
                  +
                </button>
                <button onClick={() => decreaseQuantity(pizza.id)} className="btn btn-danger m-1">
                  -
                </button>
              </div>
            </div>
          ))}
          <hr />
          <h4>Total: ${total}</h4>
          <button className="btn btn-primary">Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
