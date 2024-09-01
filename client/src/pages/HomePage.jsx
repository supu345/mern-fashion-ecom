import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import Slider from "../components/product/slider";
import Features from "../components/features/features";
import Categories from "../components/product/categories";
import Products from "../components/product/products";
import Brands from "../components/product/brands";
import FeatureStore from "../store/FeatureStore";
import ProductStore from "../store/ProductStore";
import AllProducts from "../components/product/AllProducts";

const HomePage = () => {
  const {
    BrandListRequest,
    CategoryListRequest,
    SliderListRequest,
    ListByRemarkRequest,
    ProductListRequest,
  } = ProductStore();
  const { FeatureListRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await CategoryListRequest();
      await ListByRemarkRequest("new");
      await BrandListRequest();
      await ProductListRequest();
    })();
  }, []);
  return (
    <Layout>
      <Slider />
      <Features />
      <Categories />
      <Products />
      <Brands />
      <AllProducts />
    </Layout>
  );
};

export default HomePage;
