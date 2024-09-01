import React from "react";
import FeatureStore from "../../store/FeatureStore.js";
import FeaturesSkeleton from "../../skeleton/features-skeleton.jsx";
import { TbTruckReturn } from "react-icons/tb";
import about from "../../assets/about.jpg";

const Features = () => {
  const { FeatureList } = FeatureStore();
  if (FeatureList === null) {
    return <FeaturesSkeleton />;
  } else {
    return (
      <section className="max-padd-container py-12 xl:py-22">
        {/*container */}
        <div className="flex flex-col gap-16 xl:flex-row">
          {/*left*/}
          <div className="flex-1">
            <h3 className="h3 capitalize">
              Unveiling Our Product's key features !
            </h3>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              magni nisi ab quis veniam vero odit numquam veritatis magnam
              voluptate!
            </p>
            {FeatureList.map((item, i) => {
              return (
                <div className="flex flex-col items-start gap-y-4 pb-3">
                  <div className="flexCenter gap-x-8">
                    <div className="h-20 min-w-20 bg-white flexCenter rounded-md shadow-md border-spacing-1">
                      <img
                        alt="img"
                        className="h-10 w-10 object-cover "
                        src={item["img"]}
                      />
                    </div>
                    <div className="">
                      <h4 className="medium-18 flexStart">{item["name"]}</h4>
                      <p>{item["description"]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*right */}
          <div className="flex-1 flexCenter">
            <div>
              <img src={about} alt="about" height={400} width={400} />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Features;
