import React, { Dispatch, SetStateAction } from 'react';
import pin from "@/assets/pin.png"
interface IProps {
    setStep: Dispatch<SetStateAction<number>>
}
 export const FlagClaimForm: React.FC<IProps>  = ({setStep}) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md w-full mt-5">
      <h1 className="text-2xl font-semibold justify-center flex  text-gray-800 mb-8">Flag Claim</h1>
      
      <form className="space-y-4">
        <div>
          <input 
            type="text" 
            placeholder='Claim Title'
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
         
          <textarea 
            rows={4}
            placeholder='Enter Claim description'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className='w-full'>
          <label className="block text-sm font-medium text-gray-700 mb-1"></label>
         
          <input 
          placeholder='Source link or screenshot'
            type="text" 
            className="w-full px-5 py-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        
        
    
          
        </div>
        
        <button
          type="submit"
          onClick={() => setStep(2)}
          className="flex justify-self-end   bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
