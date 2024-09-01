import React from "react";
import Skeleton from "react-loading-skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h6 className="text-lg font-semibold">Customer Details</h6>
        <hr className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
        </div>

        <h6 className="text-lg font-semibold">Shipping Details</h6>
        <hr className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
          <div className="p-2">
            <Skeleton height={20} />
            <Skeleton height={20} className="mt-2" />
          </div>
        </div>

        <div className="mt-4 p-2">
          <Skeleton height={20} />
          <Skeleton height={20} className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
