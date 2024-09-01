import React from "react";
import UserStore from "../../store/UserStore";
import UserSubmitButton from "./UserSubmitButton";
import ValidationHelper from "../../utility/ValidationHelper";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OtpForm = () => {
  let { OTPFormData, OTPFormOnChange, VerifyLoginRequest } = UserStore();
  let navigate = useNavigate();

  const onFormSubmit = async () => {
    try {
      if (ValidationHelper.IsEmpty(OTPFormData.otp)) {
        toast.error("Valid PIN Required");
      } else {
        let res = await VerifyLoginRequest(OTPFormData.otp);
        console.log("VerifyLoginRequest response", res);

        if (res) {
          navigate("/");
        } else {
          toast.error("Login failed");
        }
      }
    } catch (error) {
      console.error("Error during verification:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h4 className="text-lg font-semibold mb-2">
            Enter Verification Code
          </h4>
          <p className="text-gray-600 mb-4">
            A verification code will be sent to the email address you provide
          </p>
          <input
            value={OTPFormData.otp}
            onChange={(e) => OTPFormOnChange("otp", e.target.value)}
            placeholder="Verification"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <UserSubmitButton
            onClick={onFormSubmit}
            submit={false}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            text="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
