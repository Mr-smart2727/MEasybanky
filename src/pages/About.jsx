import React from 'react'

const About = () => {
  return (
    <div className='px-[40px]'>
       <div className=''>
          <div className='header'>  
              <h1 className='text-[40px]'>Why choose Easybank?</h1>
              <p className=''>We leaverage Open Banking to turn your bank account into your financial hub.</p>
              <p> Control your finances like never before.</p>
          </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-[40px] mt-[30px] mb-[5rem]'>
            <div>
                  <img className='mx-auto' src="/images/icon-api.svg" alt="" />
                  <div className='text-center'>
                    <h4 className='font-[500] my-[20px]'>Online banking</h4>
                    <p className='text-[14px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
                  </div>
            </div> 
            <div>
                  <img className='mx-auto' src="/images/icon-budgeting.svg" alt="" />
                     <div className='text-center'>
                        <h4 className='font-[500] my-[20px]'>Simple Budgeting</h4>
                        <p className='text-[14px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                     </div>
            </div>
            <div>
                  <img className='mx-auto' src="/images/icon-onboarding.svg" alt="" />
                   <div className='text-center'>
                      <h4 className='font-[500] my-[20px]'>Fast Onboarding</h4>
                      <p className='text-[14px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                   </div>
            </div>
            <div>
                  <img className='mx-auto' src="/images/icon-api.svg" alt="" />
                  <div className='text-center'>
                      <h4 className='font-[500] my-[20px]'>Open API</h4>
                      <p className='text-[14px]'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                  </div>
            </div>
        </div>
       
    </div>
    </div>
  )
}

export default About