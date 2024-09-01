import React from "react";
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";
import "react-loading-skeleton/dist/skeleton.css";

const SliderSkeleton = () => {
  return (
    <div className="flex flex-row gap-4">
      {/* Skeleton Section */}
      <div className="basis-1/2 space-y-2">
        <Skeleton height={30} />
        <Skeleton count={6} height={15} />
        <div className="mb-8"></div>
        <Skeleton count={6} height={15} />
      </div>

      {/* Lottie Animation Section */}
      <div className="basis-1/2 flex justify-center items-center">
        <Lottie
          className="w-3/4 h-auto max-w-xs"
          animationData={ImagePlaceholder}
          loop={true}
        />
      </div>
    </div>
  );
};

export default SliderSkeleton;
