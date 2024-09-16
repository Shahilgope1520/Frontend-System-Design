import React, { useState } from "react";

const CommentBox = ({ data }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Handle mouse enter to set the hovered index
    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };
  
    // Handle mouse leave to reset the hovered index
    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };
  return data?.map((item, key) => {
    const borderClasses =
      hoveredIndex === key
        ? "border-blue-500 border-l-4 border-b-4" // Blue border with increased thickness
        : "border-black border-l-2 border-b-2";
    return (
      <div
        key={key}
        className={`${borderClasses} p-4 ml-4 mt-4`}
      >
        <div className="flex">
          <div>
            <img
              src="https://i.redd.it/snoovatar/avatars/204fd71e-5799-4947-91cf-23f3e537498c.png"
              alt="img"
              className="h-10 w-10"
              onMouseEnter={()=>handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div>
            <h1>{item.userName}</h1>
            <h1>{item.comment}</h1>
          </div>
        </div>
        <div> {item?.reply && <CommentBox data={item?.reply} />}</div>
      </div>
    );
  });
};

export default CommentBox;
