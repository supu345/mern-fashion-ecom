import React from "react";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";
import Skeleton from "react-loading-skeleton";

const DetailsSkeleton = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-wrap gap-4">
        {/* Left Section */}
        <div className="w-full md:w-7/12 p-2">
          <div className="space-y-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} height={20} />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-1/4">
                <Lottie
                  className="w-full h-full"
                  animationData={ImagePlaceholder}
                  loop={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-5/12 p-2">
          <div className="space-y-2">
            {Array.from({ length: 16 }).map((_, index) => (
              <Skeleton key={index} height={20} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
