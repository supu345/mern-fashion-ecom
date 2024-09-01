import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, old_price, new_price }) => {
  const imageUrl = `http://localhost:5000/images/${image} `;
  console.log(imageUrl);

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/product/${id}`}
      className="bg-white p-4 rounded-xl relative block"
    >
      <div className="flex justify-center items-center">
        <img
          src={imageUrl}
          alt={`Product image of ${name}`}
          height={211}
          width={211}
          className="rounded-lg drop-shadow-xl"
        />
      </div>
      <div className="flex flex-col gap-y-3 pt-24">
        <h4 className="line-clamp-2 text-lg font-semibold">{name}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          corrupti.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4 text-lg font-medium">
            <span>${new_price}.00</span>
            <span className="line-through text-secondary">${old_price}.00</span>
          </div>
          <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary cursor-pointer" />
        </div>
      </div>
    </Link>
  );
};

export default Item;
