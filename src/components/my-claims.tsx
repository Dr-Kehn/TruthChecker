import React from "react";
import { FiFileText } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { FlagImg } from "./flag-img";
import { FlagText } from "./flag-text";

interface Claim {
  title: string;
  description: string;
}

interface MyClaimsProps {
  claims: Claim[];
}

const MyClaims: React.FC<MyClaimsProps> = ({ claims }) => {
  return (
    <>
      {claims.length > 0 ? (
        <div className="max-w-2xl m-5 p-4  flex flex-col justify-self-start self-start">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">My Claims</h1>

          <div className="space-y-4">
            {claims.map((claim, index) => (
              <div
                key={index}
                className=" flex bg-white gap-2 justify-center items-center p-4 rounded-lg shadow-sm border border-gray-200">
                <FiFileText className="flex-3 w-10 h-10 bg-blue-500 text-white rounded-sm p-1" />

                <div className="flex flex-col ">
                  <h2 className="text-lg flex-1 font-semibold text-gray-700 mb-1">
                    {claim.title}
                  </h2>
                  <p className="text-gray-600">{claim.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
          <FlagImg />
      )}
    </>
  );
};

// Example usage:
const App: React.FC = () => {
  const searchParams = useSearchParams();

  const hasData = searchParams.get("hasData");
  const claimsData: Claim[] = [
    ...(hasData
      ? [
          {
            title: "Claim Title 0379CT",
            description:
              "This claim is already valid symbols 35 right, and have it been true.",
          },
        ]
      : []),
    // Add more claims as needed
  ];

  return <MyClaims claims={claimsData} />;
};

export default App;
