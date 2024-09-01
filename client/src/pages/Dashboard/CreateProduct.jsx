import React, { useEffect, useState } from "react";
import DasboardLayout from "../../components/layout/DasboardLayout";
// import { useNavigate } from "react-router-dom";
// import { ErrorToast, SuccessToast } from "../../helper/ValidationHelper";
import ProductStore from "../../store/ProductStore";
import upload_area from "../../assets/upload_area.svg";
const CreateProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    title: "",
    shortDes: "",
    price: "",
    discount: "",
    discountPrice: "",
    image: "",
    star: "",
    stock: "",
    remark: "",
    categoryID: "",
    brandID: "",
  });

  const {
    BrandList,
    CategoryList,
    BrandListRequest,
    CategoryListRequest,
    CreateProductRequest,
    productFormData,
    productFormOnChange,
    ListByRemarkRequest,
  } = ProductStore();

  useEffect(() => {
    (async () => {
      if (!BrandList) await BrandListRequest();
      if (!CategoryList) await CategoryListRequest();
    })();
  }, [BrandList, CategoryList]);

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imagehandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = async () => {
    // console.log(productDetails);
    let responseDate;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:5000/api/v1/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseDate = data;
        console.log("Upload Response:", responseDate);
      });
    if (responseDate.success) {
      product.image = responseDate.image_url;
      //console.log(product);
      await fetch("http://localhost:5000/api/v1/CreateProduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Upload Failed");
        });
    }
  };
  return (
    <DasboardLayout>
      <div>
        <div className="container">
          <h5 className="text-2xl pb-2 font-semibold hover:text-orange-500">
            Create New Product
          </h5>
          <hr className="bg-light" />
          <div className="flex gap-4 pt-4">
            <div>
              Product title
              <div className="col-4 p-2">
                <input
                  value={productDetails.title}
                  onChange={changeHandler}
                  type="text"
                  name="title"
                  placeholder="Type here..."
                  className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
                />
              </div>
            </div>
            <div>
              Product shortDes
              <div className="col-4 p-2">
                <input
                  value={productDetails.shortDes}
                  onChange={changeHandler}
                  className="outline-none max-w-80 w-full py-3 px-4 rounded-md"
                  type="text"
                  name="shortDes"
                  placeholder="Add description"
                />
              </div>
            </div>
            <div>
              Product price
              <div className="col-4 p-2">
                <input
                  value={productDetails.price}
                  onChange={changeHandler}
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="price"
                  placeholder="Add price"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <div>
              Product Discount
              <div className="col-4 p-2">
                <select
                  value={productDetails.discount}
                  onChange={changeHandler}
                  className="form-control form-select"
                  name="discount"
                >
                  <option value="">Choose Discount</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div>
              Product discountPrice
              <div className="col-4 p-2">
                <input
                  value={productDetails.discountPrice}
                  onChange={changeHandler}
                  className="form-control form-control-sm"
                  type="text"
                  name="discountPrice"
                />
              </div>
            </div>
            <div>
              Product image
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
                  className="bg-primary max-w-80 w-full py-3 px-4"
                />
                {/* <input type="file" onChange={handleFileChange} />
                <button onClick={handleSubmit}>Upload Image</button>
                {imagePreview && <img src={imagePreview} alt="Preview" />} */}
              </div>
              {/* <div>
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
                  className="bg-primary max-w-80 w-full py-3 px-4"
                />
              </div> */}
              {/* <label htmlFor="file-input">
                <img
                  src={imagePreview || "default-image-url"} // Replace with default image URL if needed Replace with default image URL if needed
                  alt="Upload Preview"
                  className="w-20 rounded-sm inline-block cursor-pointer"
                />
              </label> */}
            </div>
          </div>
        </div>
        {/* {imagePreview && (
          <div className="flex gap-4 pt-4">
            <div className="col-4 p-2">
              <img
                className="w-[200px] h-[70px] object-cover p-2"
                src={imagePreview}
                alt="Product Preview"
              />
            </div>
          </div>
        )} */}
      </div>

      <div className="flex gap-4 pt-4">
        <div>
          Product star
          <div className="col-4 p-2">
            <input
              value={productDetails.star}
              onChange={changeHandler}
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="star"
              placeholder="Add star rating"
            />
          </div>
        </div>
        <div>
          Product Stock
          <div className="col-4 p-2">
            <select
              value={productDetails.stock}
              onChange={changeHandler}
              className="form-control form-select"
              name="stock"
            >
              <option value="">Choose stock</option>
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>
        </div>
        <div>
          Product remark
          <div className="col-4 p-2">
            <select
              value={productDetails.remark}
              onChange={changeHandler}
              className="form-control form-select"
              name="remark"
            >
              <option value="new">New</option>
              <option value="top">Top</option>
              <option value="popular">Popular</option>
              <option value="trending">Trending</option>
              <option value="special">Special</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <div>
          Categories
          <div className="col-4 p-2">
            <select
              value={productDetails.categoryID}
              onChange={changeHandler}
              className="form-control form-select"
              name="categoryID"
            >
              <option value="">Choose Category</option>
              {CategoryList !== null ? (
                CategoryList.map((item, i) => (
                  <option key={i} value={item["_id"]}>
                    {item["categoryName"]}
                  </option>
                ))
              ) : (
                <option></option>
              )}
            </select>
          </div>
        </div>
        <div>
          Brands
          <div className="col-4 p-2">
            <select
              value={productDetails.brandID}
              onChange={changeHandler}
              className="form-control form-select col-md-4 p-2"
              name="brandID"
            >
              <option value="">Choose Brand</option>
              {BrandList !== null ? (
                BrandList.map((item, i) => (
                  <option key={i} value={item["_id"]}>
                    {item["brandName"]}
                  </option>
                ))
              ) : (
                <option></option>
              )}
            </select>
          </div>
        </div>
        <div className="pt-4">
          <button
            onClick={() => {
              Add_Product();
            }}
            className="text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Save Product
          </button>
        </div>
      </div>
    </DasboardLayout>
  );
};

export default CreateProduct;
