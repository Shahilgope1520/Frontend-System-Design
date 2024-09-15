import React, { useEffect, useState, useCallback } from "react";
import ShimmerUi from "./ShimmerUi";
import MemeCard from "./MemeCard";

const MemeBody = () => {
  const [memeData, setMemeData] = useState(null);
  const [error, setError] = useState(null); // To handle error states

  const fetchData = async (number) => {
    try {
      const res = await fetch(`https://meme-api.com/gimme/${number || 20}`);
      if (!res.ok) {
        throw new Error("Failed to fetch memes");
      }
      const data = await res.json();
      setMemeData(data?.memes || []); // Set default empty array if data is invalid
    } catch (err) {
      setError("Failed to load memes");
      setMemeData([]); // Set to empty array if error
    }
  };
  const handleScroll = () => {
    const reachedEndScroll =
      window.scrollY + window.innerHeight >= document.body.scrollHeight;
    console.log("reachedEndScroll", reachedEndScroll);
    if (reachedEndScroll) {
      // fetchData(number);
      console.log("reached");
    }
  };

  const renderMeme = useCallback(() => {
    if (error) {
      return <div>{error}</div>; // Render error message if there's an error
    }
    if (!memeData) {
      return <ShimmerUi />; // Loading state
    }
    if (memeData.length === 0) {
      return <div>No Memes Found</div>; // No data case
    }
    return (
      <div className="flex flex-wrap justify-center">
        {memeData.map((data) => (
          <MemeCard data={data} key={data?.url} />
        ))}
      </div>
    );
  }, [memeData, error]); // Depend on memeData and error to avoid unnecessary renders

  useEffect(() => {
    // fetchData();
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>{renderMeme()}</div>;
};

export default MemeBody;
