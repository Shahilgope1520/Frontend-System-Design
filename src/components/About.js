import React from "react";
import { langConfig } from "../utlis/utils";

const About = ({lang}) => {
    const data = langConfig[lang]
  return (
    <div>
      <h1 className="font-bold"> {data?.title}</h1>
      <p>
      {data?.desc}
      </p>
    </div>
  );
};

export default About;
