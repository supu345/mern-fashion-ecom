import React from "react";
import DasboardLayout from "../layout/DasboardLayout";

const Dashboard = (props) => {
  return (
    <>
      <div className="w-64 bg-gray-800 text-white h-full p-5">
        <h2 className="text-2xl font-bold mb-5">My Sidebar</h2>
        <ul>
          <li className="mb-3">
            <a href="/createProduct" className="hover:underline">
              createProduct
            </a>
          </li>
          <li className="mb-3">
            <a href="/productList" className="hover:underline">
              productList
            </a>
          </li>
          <li className="mb-3">
            <a href="/userList" className="hover:underline">
              userList
            </a>
          </li>
        </ul>
      </div>

      <div ref={(div) => (contentRef = div)} className="content">
        {props.children}
      </div>
    </>
  );
};

export default Dashboard;
