import React, { useEffect, useState } from "react";
import ProductStore from "../../store/ProductStore.js";
import ProductsSkeleton from "../../skeleton/products-skeleton.jsx";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const ProductList = () => {
  const {
    ListProduct,
    BrandListRequest,
    BrandList,
    CategoryList,
    CategoryListRequest,
    ListByFilterRequest,
  } = ProductStore();

  let [Filter, SetFilter] = useState({
    brandID: "",
    categoryID: "",
    priceMax: "",
    priceMin: "",
  });

  const inputOnChange = async (name, value) => {
    SetFilter((data) => ({
      ...data,
      [name]: value,
    }));
  };

  useEffect(() => {
    (async () => {
      if (!BrandList) await BrandListRequest();
      if (!CategoryList) await CategoryListRequest();

      const isEveryFilterPropertyEmpty = Object.values(Filter).every(
        (value) => value === ""
      );
      if (!isEveryFilterPropertyEmpty) await ListByFilterRequest(Filter);
    })();
  }, [Filter]);

  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4 p-2">
          <div className="bg-white shadow-md rounded-lg p-4">
            <label className="block text-sm font-medium mt-3">Brands</label>
            <select
              value={Filter.brandID}
              onChange={async (e) => {
                await inputOnChange("brandID", e.target.value);
              }}
              className="form-select block w-full mt-1"
            >
              <option value="">Choose Brand</option>
              {BrandList
                ? BrandList.map((item, i) => (
                    <option key={i} value={item["_id"]}>
                      {item["brandName"]}
                    </option>
                  ))
                : null}
            </select>

            <label className="block text-sm font-medium mt-3">Categories</label>
            <select
              value={Filter.categoryID}
              onChange={async (e) => {
                await inputOnChange("categoryID", e.target.value);
              }}
              className="form-select block w-full mt-1"
            >
              <option value="">Choose Category</option>
              {CategoryList
                ? CategoryList.map((item, i) => (
                    <option key={i} value={item["_id"]}>
                      {item["categoryName"]}
                    </option>
                  ))
                : null}
            </select>

            <label className="block text-sm font-medium mt-3">
              Maximum Price ${Filter.priceMax}
            </label>
            <input
              value={Filter.priceMax}
              onChange={async (e) => {
                await inputOnChange("priceMax", e.target.value);
              }}
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range mt-1"
            />

            <label className="block text-sm font-medium mt-3">
              Minimum Price ${Filter.priceMin}
            </label>
            <input
              value={Filter.priceMin}
              onChange={async (e) => {
                await inputOnChange("priceMin", e.target.value);
              }}
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range mt-1"
            />
          </div>
        </div>

        <div className="w-full md:w-3/4 p-2">
          {ListProduct === null ? (
            <ProductsSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ListProduct.map((item, i) => {
                const imageUrl = item.image.startsWith("http")
                  ? item.image
                  : `http://localhost:5000/images/${item.image}`;

                console.log(imageUrl);
                let price = (
                  <p className="text-sm text-gray-700 my-1">
                    Price: ${item["price"]}
                  </p>
                );
                if (item["discount"]) {
                  price = (
                    <p className="text-sm text-gray-700 my-1">
                      Price:
                      <span className="line-through"> ${item["price"]} </span> $
                      {item["discountPrice"]}
                    </p>
                  );
                }
                return (
                  <Link
                    key={i}
                    to={`/details/${item["_id"]}`}
                    className="bg-white shadow-md rounded-lg overflow-hidden h-full"
                  >
                    <img
                      className="w-full object-cover"
                      src={imageUrl}
                      alt={item["title"]}
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-500 my-1">
                        {item["title"]}
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
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
