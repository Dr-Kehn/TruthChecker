import React from "react";
import flagg from "@/assets/flagg.png";
import { FlagText } from "./flag-text";

export const FlagImg = () => {
  return (
    <div className="w-full md:w-1/2 p-4 flag-cont  ">
      <img
        src={typeof flagg === "string" ? flagg : flagg.src}
        className=" items-center object-contain  flex"
      />

      <FlagText />
    </div>
  );
};
