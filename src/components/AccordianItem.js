import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const AccordianItem = ({ data, open, setOpen }) => {
  return (
    <div className="border border-black my-2">
      <div className="flex justify-between p-2 border bg-slate-300" onClick={setOpen}>
        <span>{data.title}</span>
        <span>{open ? <FaArrowAltCircleDown /> : <FaArrowAltCircleUp />}</span>
      </div>
      {open && <div className="p-2">{data.desc}</div>}
    </div>
  );
};

export default AccordianItem;
