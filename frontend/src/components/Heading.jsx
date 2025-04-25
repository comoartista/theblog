import React from "react";

export default function Heading({ title }) {
  return (
    <section className=" text-7xl font-bold uppercase border-t-2 border-b-2 ">
      <h1 className="c-container flex justify-center text-7xl lg:text-9xl xl:text-[210px] font-bold uppercase my-2">
        {title}
      </h1>
    </section>
  );
}
