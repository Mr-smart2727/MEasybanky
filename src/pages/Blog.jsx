import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <h2 className='pl-[40px] text-[25px] py-[20px]'>Latest Article</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-[40px] mb-[20px]'>
            <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                  <img src="/images/image-currency.jpg" alt="" />
                    <div className='px-[20px] py-[20px]'>
                          <h4>By Claire Robinson</h4>
                          <Link to="/about"><p>Receive money in any currency with no fees</p></Link>
                          <p>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div>
            </div>
            <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                   <img src="/images/image-restaurant.jpg" alt="" />
                   <div className='px-[20px] py-[20px]'>
                      <h4>By Wilson Hutton</h4>
                      <Link to="/about"><p>Treat yourself without worrying about money</p></Link>
                      <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                   </div>
            </div>
            <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                    <img src="/images/image-plane.jpg" alt="" />
                    <div className='px-[20px] py-[20px]'>
                      <h4>By Wilson Hutton</h4>
                      <Link to=""><p>Take your Easybank card whereveryou go</p></Link>
                      <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …</p>
                    </div>
            </div>
            <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                  <img src="/images/image-confetti.jpg" alt="" />
                 <div className='px-[20px] py-[20px]'>
                    <h4>By Claire Robinson</h4>
                    <Link to="/about" className='py-[20px]'><p>Our invite-only Beta are now live!</p></Link>
                    <p>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
                  </div>
                 </div>
         </div>
  </div>
  )
  
}

export default Blog