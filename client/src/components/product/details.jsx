import React, { useState } from "react";
import ProductImages from "./ProductImages.jsx";
import ProductStore from "../../store/ProductStore.js";
import DetailsSkeleton from "../../skeleton/details-skeleton.jsx";
import parse from "html-react-parser";
//import Reviews from "./reviews.jsx";
import CartSubmitButton from "../cart/CartSubmitButton.jsx";
import CartStore from "../../store/CartStore.js";
import toast from "react-hot-toast";
import WishStore from "../../store/WishStore.js";
import WishSubmitButton from "../wish/WishSubmitButton.jsx";

const Details = () => {
  const { Details } = ProductStore();
  const [quantity, setQuantity] = useState(1);

  const { CartFormChange, CartForm, CartSaveRequest, CartListRequest } =
    CartStore();
  const { WishSaveRequest, WishListRequest } = WishStore();

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const AddWish = async (productID) => {
    let res = await WishSaveRequest(productID);
    if (res) {
      toast.success("Wish Item Added");
      await WishListRequest();
    }
  };

  const AddCart = async (productID) => {
    let res = await CartSaveRequest(CartForm, productID, quantity);
    if (res) {
      toast.success("Cart Item Added");
      await CartListRequest();
    }
  };

  if (Details === null) {
    return <DetailsSkeleton />;
  } else {
    return (
      <div className="container mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-7/12 p-3">
            <ProductImages />
          </div>
          <div className="w-full md:w-5/12 p-3">
            <h4 className="text-2xl font-semibold">{Details[0]["title"]}</h4>
            <p className="text-gray-600 my-1">
              Category: {Details[0]["category"]["categoryName"]}
            </p>
            <p className="text-gray-600 my-1">
              Brand: {Details[0]["brand"]["brandName"]}
            </p>
            <p className="my-2">{Details[0]["shortDes"]}</p>
            {Details[0]["discount"] ? (
              <span className="text-xl font-bold">
                Price:{" "}
                <span className="line-through text-gray-500">
                  {Details[0]["price"]}
                </span>{" "}
                {Details[0]["discountPrice"]}
              </span>
            ) : (
              <span className="text-xl font-bold">
                Price: {Details[0]["price"]}
              </span>
            )}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="w-1/3 p-2">
                <label className="block text-gray-700">Size</label>
                <select
                  value={CartForm.size}
                  onChange={(e) => CartFormChange("size", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Size</option>
                  {Details[0]["details"]["size"].split(",").map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/3 p-2">
                <label className="block text-gray-700">Color</label>
                <select
                  value={CartForm.color}
                  onChange={(e) => CartFormChange("color", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Color</option>
                  {Details[0]["details"]["color"].split(",").map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-1/3 p-2">
                <label className="block text-gray-700">Quantity</label>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border-r border-gray-300 text-gray-700"
                  >
                    -
                  </button>
                  <input
                    value={quantity}
                    type="text"
                    className="w-20 text-center bg-gray-100"
                    readOnly
                  />
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border-l border-gray-300 text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <CartSubmitButton
                  onClick={async () => {
                    await AddCart(Details[0]["_id"]);
                  }}
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                  text="Add to Cart"
                />
              </div>
              <div className="w-1/2 p-2">
                <WishSubmitButton
                  onClick={async () => {
                    await AddWish(Details[0]["_id"]);
                  }}
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  text="Add to Wish"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <ul className="flex border-b border-gray-200">
            <li className="mr-1">
              <button
                className="py-2 px-4 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 focus:outline-none"
                role="tab"
                aria-selected="true"
              >
                Specifications
              </button>
            </li>
            <li className="mr-1">
              <button
                className="py-2 px-4 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 focus:outline-none"
                role="tab"
                aria-selected="false"
              >
                Review
              </button>
            </li>
          </ul>
          <div className="tab-content mt-4">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="Speci-tab"
            >
              {parse(Details[0]["details"]["des"])}
            </div>
            <div
              className="tab-pane fade"
              role="tabpanel"
              aria-labelledby="Review-tab"
            >
              {/* <Reviews /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
