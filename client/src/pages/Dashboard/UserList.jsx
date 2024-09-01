import React from "react";
import DasboardLayout from "../../components/layout/DasboardLayout";

const UserList = () => {
  return (
    <DasboardLayout>
      <div>
        <div className="container">
          <h5 className="text-2xl pb-2 font-semibold hover:text-orange-500">
            User List
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
                    Name
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    email
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    image
                  </th>
                  <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 p-3 border border-gray-300">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">1</td>
                  <td className="border border-gray-300 p-3">Name</td>
                  <td className="border border-gray-300 p-3">email</td>
                  <td className="border border-gray-300 p-3">image</td>
                  <td className="border border-gray-300 p-3">action</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DasboardLayout>
  );
};

export default UserList;
