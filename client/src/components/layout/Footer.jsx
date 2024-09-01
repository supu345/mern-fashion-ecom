import React from "react";
import SocialIcons from "../SocialIcons";
import Navbar from "../Navbar";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="max-padd-container bg-tertiary py-8">
      <div className="flexCenter flex-col gap-y-4">
        {/* logo */}
        <Link to={""} className="flex items-center gap-x-2">
          {/*<img src={logo} alt="logo" height={31} width={31} />*/}
          <FaShoppingBag className="text-orange-300 text-2xl" />
          <span className="bold-24 hidden xs:flex text-white">Fahim</span>
        </Link>
        {/* Nav */}
        <div className="py-4">
          <Navbar
            containerStyles={
              "flex gap-x-5 xl:gap-x-10 text-white medium-15 rounded-full px-2 py-1"
            }
          />
        </div>
        <SocialIcons />
        <hr className="h-[1px] w-2/3 my-3" />
        <div className="text-white">
          {" "}
          Copyright &copy; Suparna | All right reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
