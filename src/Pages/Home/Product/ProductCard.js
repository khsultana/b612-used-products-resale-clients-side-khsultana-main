import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  const { _id, picture, name, about } = products;

  return (
    <div>
      {/* Card */}

      <div className="card w-96 bg-base-100 shadow-xl rounded-none">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <h2>{about} </h2>
          <div className="card-actions justify-end">
            <Link to={`/products/${_id}`}>
              <FaArrowRight size="20px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
