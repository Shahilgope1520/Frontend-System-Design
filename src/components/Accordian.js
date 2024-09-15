import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = () => {
  const [open, setOpen] = useState(null);
  const data = [
    {
      title: "title 1",
      id:1,
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum`,
    },

    {
      title: "title 2",
      id:2,
      desc: "desc",
    },

    {
      title: "title 3",
      id:3,
      desc: "desc",
    },
  ];
  return (
    <div className="w-[50%] m-auto mt-5">
      {data?.map((item) => (
        <AccordianItem
          key={item?.title}
          data={item}
          open={open === item?.id}
          setOpen={() => {
            setOpen(open !== item?.id ? item?.id : null);
          }}
        />
      ))}
    </div>
  );
};

export default Accordian;
