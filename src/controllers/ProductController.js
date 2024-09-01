const {
  BrandListService,
  CategoryListService,
  SliderListService,
  ListByBrandService,
  ListByCategoryService,
  ListBySmilierService,
  ListByKeywordService,
  ListByRemarkService,
  DetailsService,
  ReviewListService,
  CreateReviewService,
  ListByFilterService,
  ProductListService,
  DeleteProductService,
  CreateProductService,
  UpdateProductService,
  ReadProductByIDService,
  AddProductService,
} = require("../services/ProductServices");

// exports.UpdateProduct = async (req, res) => {
//   try {
//     let result = await UpdateProductService(req, res);
//     return res.status(200).json(result);
//   } catch (error) {
//     console.error("Error in UpdateProduct controller:", error);
//     return res
//       .status(500)
//       .json({ status: "error", message: "Internal Server Error" });
//   }
// };

exports.UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UpdateProductService(id, req.body);

    if (result.status === "fail") {
      return res.status(404).json(result); // Use 404 if product is not found
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in UpdateProduct controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.ReadProductByID = async (req, res) => {
  try {
    let result = await ReadProductByIDService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in ReadProductByID controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

exports.ProductBrandList = async (req, res) => {
  let result = await BrandListService();
  return res.status(200).json(result);
};
exports.ProductList = async (req, res) => {
  let result = await ProductListService();
  return res.status(200).json(result);
};

exports.ProductCategoryList = async (req, res) => {
  let result = await CategoryListService();
  return res.status(200).json(result);
};

exports.ProductSliderList = async (req, res) => {
  let result = await SliderListService();
  return res.status(200).json(result);
};

exports.ProductListByBrand = async (req, res) => {
  let result = await ListByBrandService(req);
  return res.status(200).json(result);
};

exports.ProductListByCategory = async (req, res) => {
  let result = await ListByCategoryService(req);
  return res.status(200).json(result);
};
exports.ProductListByRemark = async (req, res) => {
  let result = await ListByRemarkService(req);
  return res.status(200).json(result);
};

exports.ProductListBySmilier = async (req, res) => {
  let result = await ListBySmilierService(req);
  return res.status(200).json(result);
};

exports.ProductListByKeyword = async (req, res) => {
  let result = await ListByKeywordService(req);
  return res.status(200).json(result);
};

exports.ProductDetails = async (req, res) => {
  let result = await DetailsService(req);
  return res.status(200).json(result);
};

exports.ProductReviewList = async (req, res) => {
  let result = await ReviewListService(req);
  return res.status(200).json(result);
};
exports.CreateReview = async (req, res) => {
  let result = await CreateReviewService(req);
  return res.status(200).json(result);
};

exports.ProductListByFilter = async (req, res) => {
  let result = await ListByFilterService(req);
  return res.status(200).json(result);
};

//delete product
exports.DeleteProduct = async (req, res) => {
  try {
    let result = await DeleteProductService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in UpdateProduct controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};

//create product

exports.CreateProduct = async (req, res) => {
  try {
    let result = await CreateProductService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in CreateProduct controller:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal Server Error" });
  }
};
exports.AddProduct = async (req, res) => {
  try {
    const result = await AddProductService(req, res);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error in AddProduct controller:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
