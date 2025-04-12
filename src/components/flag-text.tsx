import { useRouter } from "next/router";
import React from "react";

export const FlagText = () => {
  const router = useRouter();
  return (
    <div className="flag-text">
      <h1>No Flag Claims made</h1>
      <p className="border ">
        Claim Not Found. We couldn't find this claim in our database. Click the
        button below to flag a claim{" "}
      </p>
      <button
        onClick={() => router.push("/user/create-claim")}
        className="flag-button">
        Submit Claim
      </button>
    </div>
  );
};
