import React from "react";

const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 m-5 w-56"
          >
            {/* Image placeholder */}
            <div className="w-full h-40 mb-4 bg-gray-300 rounded-lg "></div>

            {/* Title placeholder */}
            <div className="w-3/4 h-6 mb-2 bg-gray-300 rounded-lg "></div>

            {/* Line placeholders */}
            <div className="w-full h-4 mb-2 bg-gray-300 rounded-lg "></div>
            <div className="w-5/6 h-4 bg-gray-300 rounded-lg "></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUi;
