import React, { useEffect, useState } from "react";
import { RiYoutubeFill } from "react-icons/ri";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { PiVanBold } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import user from "../../assets/user1.webp";
import Navbar from "../Navbar";
import { FaRegHeart } from "react-icons/fa";
import UserStore from "../../store/UserStore"; // Import UserStore
import ProductStore from "../../store/ProductStore.js";
import UserSubmitButton from "../user/UserSubmitButton.jsx";
import CartStore from "../../store/CartStore.js";
import WishStore from "../../store/WishStore.js";
const AppNavBar = () => {
  const { SetSearchKeyword, SearchKeyword } = ProductStore();
  const { isLogin, UserLogoutRequest } = UserStore();
  const { CartCount, CartListRequest } = CartStore();
  const { WishCount, WishListRequest } = WishStore();
  // Log the login status to debug
  useEffect(() => {
    console.log("Is user logged in:", isLogin());
  }, [isLogin]);

  const onLogout = async () => {
    await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/";
  };
  useEffect(() => {
    (async () => {
      if (isLogin()) {
        await CartListRequest();
        await WishListRequest();
      }
    })();
  }, []);
  return (
    <>
      <div className="max-padd-container w-full z-50 bg-gray-400">
        <div className="flexBetween py-1">
          <Link to="/" className="flex items-center gap-x-2">
            <FaEnvelope />
            <span className="text-black">fahim@fashion.com</span>
            <FaPhoneAlt />
            <span className="text-black">0173012345</span>
          </Link>
          <div className="flexCenter gap-x-4">
            <RiYoutubeFill />
            <RiWhatsappFill />
            <FaFacebook />
          </div>
        </div>
      </div>

      <header className="container w-full z-50 px-2">
        <div className="flexBetween py-1">
          <Link to="/" className="flex items-center gap-x-1">
            <img src={logo} alt="logo" height={31} width={32} />
            <span className="bold-24 hidden xs:flex">Fahim</span>
          </Link>
          <div className="flexCenter gap-x-1">
            <div>
              <Navbar
                containerStyles={
                  "hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"
                }
              />
            </div>
            <div className="flex">
              <form className="flex items-center">
                <input
                  onChange={(e) => SetSearchKeyword(e.target.value)}
                  className="border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Search..."
                />
                <Link
                  className="flex items-center bg-secondary text-white font-bold py-2 px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none"
                  to={
                    SearchKeyword.length > 0
                      ? `/by-keyword/${SearchKeyword}`
                      : `/`
                  }
                >
                  <svg
                    className="w-6 h-6 mr-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M16 11a5 5 0 10-10 0 5 5 0 0010 0z"
                    />
                  </svg>
                </Link>
              </form>
            </div>
            <div>
              <div className="flexBetween sm:gap-x-6 gap-1">
                <NavLink to="/cart" className="flex">
                  <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
                  <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-primary medium-14 -top-2 right-3">
                    {CartCount}
                  </span>
                </NavLink>
                <NavLink to="/wish" className="flex">
                  <FaRegHeart className="p-2 h-10 w-10 hover:text-secondary" />
                  <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-primary medium-14 -top-2 right-3">
                    {WishCount}
                  </span>
                </NavLink>
                <NavLink
                  to="/order"
                  className=" flexCenter gap-x-2 medium-16 rounded-md"
                >
                  <PiVanBold className="p-1 h-10 w-10  hover:text-secondary" />
                  order
                </NavLink>
                {isLogin() ? (
                  <>
                    {/* <NavLink
                      to="/logout"
                      onClick={() => {
                        UserStore.getState().UserLogoutRequest();
                        window.location.replace("/");
                      }}
                      className="btn-secondary flexCenter gap-x-2 medium-16 rounded-xl"
                    >
                      Logout
                    </NavLink> */}

                    <UserSubmitButton
                      onClick={onLogout}
                      text="Logout"
                      className="btn-secondary ms-3 d-flex rounded-md"
                    />
                    <NavLink
                      to="/profile"
                      className="btn-secondary flexCenter gap-x-2 medium-16 rounded-md"
                    >
                      Profile
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="btn-secondary flexCenter gap-x-2 medium-16 rounded-md"
                    >
                      Login
                    </NavLink>
                  </>
                )}
                {/** */}
                {isLogin() ? (
                  user &&
                  user.role === "admin" && (
                    <>
                      <UserSubmitButton
                        onClick={onLogout}
                        text="Logout"
                        className="btn-secondary ms-3 d-flex rounded-md"
                      />
                      <NavLink
                        to="/profile"
                        className="btn-secondary flexCenter gap-x-2 medium-16 rounded-md"
                      >
                        Profile
                      </NavLink>
                      <NavLink
                        to="/profile"
                        className="btn-secondary flexCenter gap-x-2 medium-16 rounded-md"
                      >
                        Admin
                      </NavLink>
                    </>
                  )
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="btn-secondary flexCenter gap-x-2 medium-16 rounded-md"
                    >
                      Login
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppNavBar;
