

import { useRouter } from 'next/navigation';
import React from 'react';
import  {CiCircleCheck}  from "react-icons/ci";

export const ClaimSubmitted = () => {
    const {push} = useRouter()
  return (
    <div className="max-w-md gap-1 mx-auto m-36 flex self-center flex-col p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center">
      <div className='flex flex-col justify-center items-center'><CiCircleCheck className='w-20 h-22' /></div>
      <h1 className="text-xl font-bold text-gray-800 mb-1">Claim Submitted</h1>
      <p className="text-base font-medium text-green-600 mb-4">Successfully</p>
      
      <div className="text-sm text-gray-600 space-y-2 mb-6">
        <p>Thank you for your submission to a team will</p>
        <p>improve the patient already and follow our IT mode</p>
        <p>information for analysis</p>
      </div>

      <div className='flex flex-col  items-center'>

     
      <button onClick={() => push("/user/flag-claim?hasData=true")} className="px-4 py-2 w-32 h-12 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none">
        OK Thanks
      </button>
      </div>
    </div>
  );
};