import React from "react";
import { pizzas } from "./pizzas";
import CardPizza from "./CardPizza"; 
const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4">¡Bienvenido a Mamma Mia Pizzería!</h1>
      <p className="text-center">
        Elige entre nuestra selección de deliciosas pizzas y disfruta de una experiencia única.
      </p>
      <div className="row mt-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4 mb-3">
            <CardPizza
              name={pizza.name}
              img={pizza.img}
              ingredients={pizza.ingredients}
              price={pizza.price}
              desc={pizza.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
