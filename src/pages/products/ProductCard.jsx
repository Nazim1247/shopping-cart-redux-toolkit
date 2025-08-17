import React from 'react';

const ProductCard = ({product}) => {
    const {name, image, price, category, date} = product || {};
    // console.log(product);
    return (
        <div>
            <div className="card bg-base-100 w-96 h-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shirt" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <p>$ {price}</p>
    <p>{date}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Bay Naw</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;