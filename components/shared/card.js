import React from "react";

const Card = ({product}) => {
  return (
    <div>
      <img src={product.url} />
      <h1>{product.title}</h1>
    </div>
  );
};

export default Card;
