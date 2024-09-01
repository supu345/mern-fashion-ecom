import React, { useEffect } from "react";
import DasboardLayout from "../../components/layout/DasboardLayout";
import ProductStore from "../../store/ProductStore.js";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { DeleteAlert } from "../../helper/DeleteAlert.js";

const ProductList = () => {
  const { ProductList, ProductListRequest } = ProductStore();

  useEffect(() => {
    (async () => {
      await ProductListRequest();
    })();
  }, []);

  const deleteProduct = async (id) => {
    const { DeleteProductRequest } = ProductStore.getState();

    // Show the confirmation alert
    const result = await DeleteAlert();

    // Check if the user confirmed the deletion
    if (result.isConfirmed) {
      const response = await DeleteProductRequest(id);

      if (response.status === "success") {
        // Show a success message
        await Swal.fire(
          "Deleted!",
          "Your product has been deleted.",
          "success"
        );
        console.log("Product deleted successfully:", response.data);
      } else {
        // Show an error message
        await Swal.fire(
          "Failed!",
          "There was an issue deleting the product.",
          "error"
        );
        console.log("Failed to delete product:", response.data);
      }
    } else {
      // Handle the case where the user cancels the deletion
      console.log("Product deletion was cancelled by the user.");
    }
  };

  return (
    <DasboardLayout>
      <div>
        <div className="container">
          <h5 className="text-2xl pb-2 font-semibold hover:text-orange-500">
            Product List
          </h5>
          <hr className="bg-light pb-7" />
          <div>
            <table className="min-w-full border border-gray-300 border-collapse">
              <thead>
                <tr>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Sl No
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Title
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Price
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Discount
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Discount Price
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Image
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Star
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Stock
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Remark
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Category ID
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    Brand ID
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {ProductList && ProductList.length > 0 ? (
                  ProductList.map((item, i) => {
                    const imageUrl = item.image.startsWith("http")
                      ? item.image
                      : `http://localhost:5000/images/${item.image}`;

                    return (
                      <tr key={item._id || i}>
                        <td className="border border-gray-300 p-3">
                          <p className="text-xs text-start">{i + 1}</p>
                        </td>
                        <td className="border border-gray-300 p-3">
                          {item.title}
                        </td>
                        <td className="border border-gray-300 p-3">
                          ${item.price}
                        </td>
                        <td className="border border-gray-300 p-3">
                          {item.discount ? "Yes" : "No"}
                        </td>
                        <td className="border border-gray-300 p-3">
                          ${item.discountPrice}
                        </td>
                        <td className="border border-gray-300 p-3">
                          <img
                            className="w-[200px] h-[70px] object-cover p-2"
                            src={imageUrl}
                            alt={item.title}
                          />
                        </td>
                        <td className="border border-gray-300 p-3">
                          {item.star}
                        </td>
                        <td className="border border-gray-300 p-3">
                          {item.stock ? "In Stock" : "Out of Stock"}
                        </td>
                        <td className="border border-gray-300 p-3">
                          {item.remark}
                        </td>
                        <td className="border border-gray-300 p-3">
                          {item.categoryID || "N/A"}
                        </td>
                        <td className="border border-gray-300 p-3">
                          {item.brandID || "N/A"}
                        </td>
                        <td className="border border-gray-300 p-3">
                          <button
                            // onClick={() => UpdateItem(item._id)}
                            className="btn text-info btn-outline-light p-2 mb-0 btn-sm hover:text-green-700"
                          >
                            <AiOutlineEdit size={15} />
                          </button>
                          <button
                            onClick={() => deleteProduct(item._id)}
                            className="btn btn-outline-light text-danger p-2 mb-0 btn-sm ms-2 hover:text-red-600"
                          >
                            <AiOutlineDelete size={15} />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="12"
                      className="border border-gray-300 p-3 text-center"
                    >
                      No Products Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DasboardLayout>
  );
};

export default ProductList;
