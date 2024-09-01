import React from "react";
import ProductStore from "../../store/ProductStore.js";
import ProductsSkeleton from "../../skeleton/products-skeleton.jsx";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
const AllProducts = () => {
  const { ProductList } = ProductStore();

  if (!ProductList || ProductList.length === 0) {
    return <ProductsSkeleton />;
  } else {
    return (
      <div>
        <section className="max-padd-container bg-primary p-12 xl:py-28">
          {/* Title */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-3xl font-bold">All Products</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              id!
            </p>
          </div>
          {/* Container */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-28 mt-32">
            {ProductList.map((item) => {
              const imageUrl = item.image.startsWith("http")
                ? item.image
                : `http://localhost:5000/images/${item.image}`;

              console.log(imageUrl);

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
                      <p className="text-gray-800 my-1">
                        Price: ${item["price"]}
                      </p>

                      <StarRatings
                        rating={parseFloat(item["star"])}
                        starRatedColor="red"
                        starDimension="15px"
                        starSpacing="2px"
                      />
                    </div>
                  </Link>

                  {/* <h4>{item.title}</h4>
                  <img
                    alt={item.title}
                    className="h-10 w-10 object-cover"
                    src={imageUrl}
                  /> */}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
};

export default AllProducts;
