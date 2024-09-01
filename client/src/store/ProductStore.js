import create from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
  productFormData: {
    title: "",
    shortDes: "",
    price: "",
    discount: "",
    discountPrice: "",
    image: "",
    star: "",
    remark: "",
    stock: "",
    categoryID: "",
    brandID: "",
  },

  productFormOnChange: (name, value) => {
    set((state) => ({
      productFormData: {
        ...state.productFormData,
        [name]: value,
      },
    }));
  },

  BrandList: null,
  BrandListRequest: async () => {
    let res = await axios.get(`/api/v1/ProductBrandList`);
    if (res.data["status"] === "success") {
      set({ BrandList: res.data["data"] });
    }
  },
  ProductList: null,
  ProductListRequest: async () => {
    let res = await axios.get(`/api/v1/ProductList`);
    if (res.data["status"] === "success") {
      set({ ProductList: res.data["data"] });
    }
  },

  CategoryList: null,
  CategoryListRequest: async () => {
    let res = await axios.get(`/api/v1/ProductCategoryList`);
    if (res.data["status"] === "success") {
      set({ CategoryList: res.data["data"] });
    }
  },

  SliderList: null,
  SliderListRequest: async () => {
    let res = await axios.get(`/api/v1/ProductSliderList`);
    if (res.data["status"] === "success") {
      set({ SliderList: res.data["data"] });
    }
  },

  ListByRemark: null,
  ListByRemarkRequest: async (Remark) => {
    set({ ListByRemark: null });
    let res = await axios.get(`/api/v1/ProductListByRemark/${Remark}`, {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    if (res.status === 200 && res.data["status"] === "success") {
      set({ ListByRemark: res.data["data"] });
    }
  },

  ListProduct: null,
  ListByBrandRequest: async (BrandID) => {
    set({ ListProduct: null });
    let res = await axios.get(`/api/v1/ProductListByBrand/${BrandID}`);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },
  ListByCategoryRequest: async (CategoryID) => {
    set({ ListProduct: null });
    let res = await axios.get(`/api/v1/ProductListByCategory/${CategoryID}`);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },
  ListByKeywordRequest: async (Keyword) => {
    set({ ListProduct: null });
    let res = await axios.get(`/api/v1/ProductListByKeyword/${Keyword}`);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },
  ListByFilterRequest: async (postBody) => {
    set({ ListProduct: null });
    let res = await axios.post(`/api/v1/ProductListByFilter`, postBody);
    if (res.data["status"] === "success") {
      set({ ListProduct: res.data["data"] });
    }
  },

  SearchKeyword: "",
  SetSearchKeyword: async (keyword) => {
    set({ SearchKeyword: keyword });
  },

  Details: null,
  DetailsRequest: async (id) => {
    let res = await axios.get(`/api/v1/ProductDetails/${id}`);
    if (res.data["status"] === "success") {
      set({ Details: res.data["data"] });
    }
  },

  ReviewList: null,
  ReviewListRequest: async (id) => {
    let res = await axios.get(`/api/v1/ProductReviewList/${id}`);
    if (res.data["status"] === "success") {
      set({ ReviewList: res.data["data"] });
    }
  },

  CreateProductRequest: async (formData) => {
    try {
      let res = await axios.post(`/api/v1/CreateProduct`, formData);
      return res.data; // Ensure the response is in the expected format
    } catch (error) {
      console.error("Error creating product:", error);
      return { status: "fail", data: error.toString() };
    }
  },

  DeleteProductRequest: async (id) => {
    try {
      let res = await axios.post(`/api/v1/DeleteProduct/${id}`);
      if (res.data["status"] === "success") {
        return { status: "success", data: res.data["data"] };
      } else {
        return { status: "fail", data: res.data["message"] };
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      return { status: "fail", data: error.toString() };
    }
  },
}));

export default ProductStore;
