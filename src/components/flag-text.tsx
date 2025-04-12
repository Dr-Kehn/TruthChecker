import { useRouter } from "next/router";
import React from "react";

export const FlagText = () => {
  const router = useRouter();
  return (
    <div className="flag-text">
      <h1>No Flag Claims made</h1>
      <p className="">
        {`Claim Not Found. We couldn't find this claim in our database. Click the
        button below to flag a claim`}
      </p>
      <button
        onClick={() => router.push("/user/create-claim")}
        className="bg-[#1E90FF] text-white hover:bg-[#1E90FF] w-fit mx-auto cursor-pointer border-none rounded-md px-4 py-2 mt-4"
        >
        Submit Claim
      </button>
    </div>
  );
};
