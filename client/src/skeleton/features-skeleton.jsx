import React from "react";
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturesSkeleton = () => {
  return (
    <div className="flex flex-row gap-4 py-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-row gap-4 border rounded-lg p-2 shadow-md w-full max-w-sm"
        >
          {/* Lottie Animation Section */}
          <div className="basis-1/2 flex justify-center items-center">
            <Lottie
              className="w-3/4 h-auto max-w-xs"
              animationData={ImagePlaceholder}
              loop={true}
            />
          </div>

          {/* Skeleton Section */}
          <div className="basis-1/2 space-y-2">
            <Skeleton height={20} />
            <Skeleton count={4} height={15} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSkeleton;
