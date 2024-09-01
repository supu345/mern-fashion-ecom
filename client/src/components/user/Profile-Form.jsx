import UserStore from "../../store/UserStore.js";
import ProfileSkeleton from "../../skeleton/profile-skeleton.jsx";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const ProfileForm = () => {
  let {
    ProfileDetails,
    ProfileForm,
    ProfileFormChange,
    ProfileDetailsRequest,
    ProfileSaveRequest,
  } = UserStore();

  useEffect(() => {
    (async () => {
      await ProfileDetailsRequest();
    })();
  }, []);

  const Save = async () => {
    let res = await ProfileSaveRequest(ProfileForm);
    if (res) {
      toast.success("Profile Updated");
      await ProfileDetailsRequest();
    }
  };

  if (ProfileDetails === null) {
    return <ProfileSkeleton />;
  } else {
    return (
      <div className="container mx-auto mt-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h6 className="text-lg font-semibold">Customer Details</h6>
          <hr className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col">
              <label className="form-label">Customer Name</label>
              <input
                value={ProfileForm.cus_name}
                onChange={(e) => {
                  ProfileFormChange("cus_name", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Customer Phone</label>
              <input
                value={ProfileForm.cus_phone}
                onChange={(e) => {
                  ProfileFormChange("cus_phone", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Customer Fax</label>
              <input
                value={ProfileForm.cus_fax}
                onChange={(e) => {
                  ProfileFormChange("cus_fax", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Customer Country</label>
              <input
                value={ProfileForm.cus_country}
                onChange={(e) => {
                  ProfileFormChange("cus_country", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Customer City</label>
              <input
                value={ProfileForm.cus_city}
                onChange={(e) => {
                  ProfileFormChange("cus_city", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Customer State</label>
              <input
                value={ProfileForm.cus_state}
                onChange={(e) => {
                  ProfileFormChange("cus_state", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Customer Post Code</label>
              <input
                value={ProfileForm.cus_postcode}
                onChange={(e) => {
                  ProfileFormChange("cus_postcode", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Customer Address</label>
              <input
                value={ProfileForm.cus_add}
                onChange={(e) => {
                  ProfileFormChange("cus_add", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
          </div>

          <h6 className="text-lg font-semibold">Shipping Details</h6>
          <hr className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label className="form-label">Shipping Name</label>
              <input
                value={ProfileForm.ship_name}
                onChange={(e) => {
                  ProfileFormChange("ship_name", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Shipping Phone</label>
              <input
                value={ProfileForm.ship_phone}
                onChange={(e) => {
                  ProfileFormChange("ship_phone", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Shipping Country</label>
              <input
                value={ProfileForm.ship_country}
                onChange={(e) => {
                  ProfileFormChange("ship_country", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Shipping City</label>
              <input
                value={ProfileForm.ship_city}
                onChange={(e) => {
                  ProfileFormChange("ship_city", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Shipping State</label>
              <input
                value={ProfileForm.ship_state}
                onChange={(e) => {
                  ProfileFormChange("ship_state", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Shipping Post Code</label>
              <input
                value={ProfileForm.ship_postcode}
                onChange={(e) => {
                  ProfileFormChange("ship_postcode", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="form-label">Shipping Address</label>
              <input
                value={ProfileForm.ship_add}
                onChange={(e) => {
                  ProfileFormChange("ship_add", e.target.value);
                }}
                type="text"
                className="form-input px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 border border-l-gray-50"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={Save}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileForm;
