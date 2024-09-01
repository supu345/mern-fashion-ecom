import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddProduct from "./components/product/AddProduct";
import CreateProduct from "./pages/Dashboard/CreateProduct";
import ProductList from "./pages/Dashboard/ProductList";
import UserList from "./pages/Dashboard/UserList";
import Dashboard from "./components/dashboard/dashboard";
import Admin from "./pages/Dashboard/admin";
import LoginPage from "./pages/login-page";
import OtpPage from "./pages/otp-page";
import AdminRoute from "./components/AdminRoute";
import ProfilePage from "./pages/profile-page";
import ProductByBrand from "./pages/product-by-brand";
import ProductByCategory from "./pages/product-by-category";
import ProductByKeyword from "./pages/product-by-keyword";
import ProductDetails from "./pages/product-details";
import WishPage from "./pages/wish-page";
import CartPage from "./pages/cart-page";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import { Toaster } from "react-hot-toast";
function App() {
  // // Example values, replace these with your actual authentication logic
  // const isAuthenticated = true; // Check if the user is authenticated
  // const userRole = "admin"; // Retrieve the user's role (e.g., from session storage or context)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/by-brand/:id" element={<ProductByBrand />} />
        <Route path="/by-category/:id" element={<ProductByCategory />} />
        <Route path="/by-keyword/:keyword" element={<ProductByKeyword />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        /> */}
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Routes>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
}

export default App;
