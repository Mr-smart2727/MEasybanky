import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-between items-center md:px-[30px] md:py-[40px] gap-[2rem] py-[30px] flex-col-reverse md:flex-row'>
         <div className='md:w-[40%] w-[70%] text-center md:text-left'>
              <h1 className='text-[45px] md:[25px]'>Next generation digital banking</h1>
              <p className='py-[25px] text-[19px] '>Take your financial life online. Your easybank account will be a one-stop-shop for spending,saving,budgeting,investing and much more.</p>
              <button className='bg-green-500 text-white px-[10px] rounded-[50px] py-[7px]'>Request Invite</button>
         </div>
          <img className="md:w-[40%] w-[80%]" src="/images/image-mockups.png" alt=""/>
    </div>
    
  )
}

export default Home