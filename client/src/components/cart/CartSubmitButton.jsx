import React from "react";
import CartStore from "../../store/CartStore.js";

const CartSubmitButton = (props) => {
  let { isCartSubmit } = CartStore();

  if (isCartSubmit === false) {
    return (
      <button
        onClick={props.onClick}
        type="submit"
        className={`${props.className} bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300`}
      >
        {props.text}
      </button>
    );
  } else {
    return (
      <button
        disabled={true}
        className={`${props.className} bg-gray-400 text-white rounded px-4 py-2`}
      >
        <svg
          className="animate-spin h-5 w-5 text-white inline-block mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        Processing...
      </button>
    );
  }
};

export default CartSubmitButton;
