import React from "react";
import notfound from "../../assets/images/no-results.png";

const NoData = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-center">
        <div className="w-full max-w-xs text-center">
          <img
            alt="No results found"
            className="w-3/4 mx-auto"
            src={notfound}
          />
        </div>
      </div>
    </div>
  );
};

export default NoData;
