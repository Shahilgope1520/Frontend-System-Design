import React from "react";

const MemeCard = ({ data }) => {
  const { url} = data;
  return (
    <div className="border border-black rounded-lg border-solid p-4 m-4">
      <img className="w-56 h-56" src={url} alt="Meme" />
    </div>
  );
};

export default MemeCard;
