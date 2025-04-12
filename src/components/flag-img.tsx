import React from "react";
import flagg from "@/assets/flagg.png";
import { FlagText } from "./flag-text";

export const FlagImg = () => {
  return (
    <div className="flex flex-1 flex-col bg-[#141414] text-white px-4 py-4">
      <div className="m-6">
        <div className=" mx-auto text-center flex flex-col justify-center items-center">
          <img
            src={typeof flagg === "string" ? flagg : flagg.src}
            className=" items-center object-contain  flex"
          />

          <FlagText />
        </div>
      </div>
    </div>
  );
};
