import React, { useEffect } from "react";
import ProductStore from "../../store/ProductStore.js";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import ProductsSkeleton from "../../skeleton/products-skeleton.jsx";

const Products = () => {
  const { ListByRemark, ListByRemarkRequest } = ProductStore();

  useEffect(() => {
    ListByRemarkRequest("new").then(() => {
      console.log(ProductStore.getState().ListByRemark);
    });
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Our Products</h1>
        <p className="text-center text-sm mb-6">
          Explore a World of Choices Across Our Most Popular
        </p>
        <div>
          <ul className="flex justify-center mb-6 border-b border-gray-200">
            {["new", "trending", "popular", "top", "special"].map((remark) => (
              <li key={remark} className="mr-4">
                <button
                  onClick={() => ListByRemarkRequest(remark)}
                  className={`px-4 py-2 border-b-2 ${
                    ListByRemark === remark
                      ? "border-red-500 text-red-500"
                      : "border-transparent text-gray-500"
                  } hover:text-red-500`}
                >
                  {remark.charAt(0).toUpperCase() + remark.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <div>
            {ListByRemark === null ? (
              <ProductsSkeleton />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ListByRemark.map((item) => {
                  const imageUrl = item.image.startsWith("http")
                    ? item.image
                    : `http://localhost:5000/images/${item.image}`;

                  console.log(imageUrl);
                  const price = item["discount"] ? (
                    <p className="text-gray-800 my-1">
                      Price:{" "}
                      <span className="line-through">${item["price"]}</span> $
                      {item["discountPrice"]}
                    </p>
                  ) : (
                    <p className="text-gray-800 my-1">
                      Price: ${item["price"]}
                    </p>
                  );

                  return (
                    <div
                      key={item["_id"]}
                      className="bg-white shadow rounded-lg overflow-hidden"
                    >
                      <Link to={`/details/${item["_id"]}`}>
                        <img
                          className="w-full h-48 object-cover p-2"
                          src={imageUrl}
                          alt={item["title"]}
                        />
                        <div className="card-body">
                          <p className="bodySmal text-black text-xl my-1">
                            {item["title"]}
                          </p>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-600 text-sm mb-2">
                            Old Price: ${item["price"]}
                          </p>
                          {price}
                          <StarRatings
                            rating={parseFloat(item["star"])}
                            starRatedColor="red"
                            starDimension="15px"
                            starSpacing="2px"
                          />
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
