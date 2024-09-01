import React, { useEffect } from "react";
import ProductStore from "../store/ProductStore.js";
import { useParams } from "react-router-dom";
import ProductList from "../components/product/ProductList.jsx";
import Layout from "../components/layout/layout.jsx";

const ProductByCategory = () => {
  const { ListByCategoryRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ListByCategoryRequest(id);
    })();
  }, [id]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductByCategory;
