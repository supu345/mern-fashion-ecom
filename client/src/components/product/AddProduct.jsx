import React, { useState } from "react";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [productDetails, setProductDetails] = useState({
    title: "",
    shortDes: "",
    price: "",
    discount: false, // Checkbox, so initialize as false
    discountPrice: "",
    image: "",
    star: "",
    stock: false, // Checkbox, so initialize as false
    remark: "",
    categoryID: "",
    brandID: "",
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const imagehandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = async () => {
    if (
      !productDetails.title ||
      !productDetails.shortDes ||
      !productDetails.price ||
      !productDetails.discount ||
      !productDetails.discountPrice ||
      !productDetails.star ||
      !productDetails.stock ||
      !productDetails.remark ||
      !productDetails.categoryID ||
      !productDetails.brandID ||
      !image
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setIsLoading(true);
    try {
      let formData = new FormData();
      formData.append("product", image);

      const uploadResponse = await fetch(
        "http://localhost:5000/api/v1/upload",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      fetch("http://localhost:5000/api/v1/test")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));

      if (!uploadResponse.ok) {
        throw new Error(`Upload failed: ${uploadResponse.statusText}`);
      }

      const responseData = await uploadResponse.json();

      if (responseData.success) {
        const product = {
          ...productDetails,
          image: responseData.image_url,
        };

        const productResponse = await fetch(
          "http://localhost:5000/api/v1/addproduct",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );

        if (!productResponse.ok) {
          throw new Error(
            `Product addition failed: ${productResponse.statusText}`
          );
        }

        const data = await productResponse.json();

        if (data.success) {
          alert("Product Added");
          // Optionally reset form state here
        } else {
          alert("Upload Failed");
        }
      }
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("An error occurred while adding the product: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-5 lg:ml-5">
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Product Title:</h4>
        <input
          value={productDetails.title}
          onChange={changeHandler}
          type="text"
          name="title"
          placeholder="Type here..."
          className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="bold-18 pb-2">Short Description:</h4>
        <textarea
          value={productDetails.shortDes}
          onChange={changeHandler}
          name="shortDes"
          placeholder="Type here..."
          className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="bold-18 pb-2">Price:</h4>
        <input
          value={productDetails.price}
          onChange={changeHandler}
          type="text"
          name="price"
          placeholder="Type here..."
          className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="bold-18 pb-2">Discount:</h4>
        <input
          checked={productDetails.discount}
          onChange={changeHandler}
          type="checkbox"
          name="discount"
          className="outline-none rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="bold-18 pb-2">Offer Price:</h4>
        <input
          value={productDetails.discountPrice}
          onChange={changeHandler}
          type="text"
          name="discountPrice"
          placeholder="Type here..."
          className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="bold-18 pb-2">Star Rating:</h4>
        <input
          value={productDetails.star}
          onChange={changeHandler}
          type="text"
          name="star"
          placeholder="Type here..."
          className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="bold-18 pb-2">In Stock:</h4>
        <input
          checked={productDetails.stock}
          onChange={changeHandler}
          type="checkbox"
          name="stock"
          className="outline-none rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="bold-18 pb-2">Remark:</h4>
        <input
          value={productDetails.remark}
          onChange={changeHandler}
          type="text"
          name="remark"
          placeholder="Type here..."
          className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="bold-18 pb-2">Category ID:</h4>
        <input
          value={productDetails.categoryID}
          onChange={changeHandler}
          type="text"
          name="categoryID"
          placeholder="Type here..."
          className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Brand ID:</h4>
        <input
          value={productDetails.brandID}
          onChange={changeHandler}
          type="text"
          name="brandID"
          placeholder="Type here..."
          className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="w-20 rounded-sm inline-block"
          />
        </label>
        <input
          onChange={imagehandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button
        onClick={Add_Product}
        className={`btn-dark rounded-lg mt-4 flexCenter gap-x-1 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add Product"}
      </button>
    </div>
  );
};

export default AddProduct;
