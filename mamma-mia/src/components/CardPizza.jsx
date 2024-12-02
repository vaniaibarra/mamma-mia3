import React from "react";


const CardPizza = ({ name, img, ingredients, price, desc }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text">
          <strong>Precio:</strong> ${price}
        </p>
        <button className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;
