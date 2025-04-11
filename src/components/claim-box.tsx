import React from 'react'
import primary from "../assets/primary.png";
export const ClaimBox = () => {

  return (
    <div className='claim-box-container'>
      <div className='claim-box bg-primary/5 dark:bg-card '> 
        <h2 className='title '> Claim Submission</h2>
        <p className='subtitle'> 
          Effectively submit claims with confidence reducing errors and frustrations.
        </p>

        <div className='input-container'>
          <input 
              type='text'
              placeholder='Enter claim or paste URL claim here. '
              className='input-field'
              
              

              
              />
        

          <button type='submit' >
            <img src={ typeof primary === 'string' ? primary : primary.src } alt="Submit" className='h-9 w-9 flex '  />
          </button>

          




        </div>
      </div>
    </div>
  )
}

