import React from 'react'
const Footer = () => { 
    return (
                <div className='flex-col md:justify-between items-center md:px-[20px] bg-[#2D314D] md:py-[20px] py-[15px] px-[15px] flex justify-center gap-6 md:flex-row'>
                        <div className=''>
                                <img className=' invert-[3] items-center' src="/images/logo.svg" alt="" />
                                <div className='none'>
                                        <ul>
                                               <li>
                                                <a href="#">
                                                                <i class="ri-facebook-box-fill "></i>
                                                        </a>
                                               </li>
                                                <li>
                                                        <a href="#">
                                                                <i class="ri-youtube-fill"></i>
                                                        </a>
                                                </li>
                                                <li>
                                                        <a href="#">
                                                                <i class="ri-twitter-fill"></i>
                                                        </a>
                                                </li>
                                               <li>
                                                        <a href="#">
                                                                        <i class="ri-pinterest-fill"></i>
                                                                </a>
                                               </li>
                                                <li>
                                                        <a href="#">
                                                                <i class="ri-instagram-fill"></i>
                                                        </a>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                                <div className='flex gap-[30px] text-white'>
                                        <ul>
                                                <li>
                                                        <a href='#'>About Us</a>     
                                                </li>
                                                <li> 
                                                        <a href='#'>Contact</a>     
                                                </li> 
                                                <li>
                                                        <a href='#'>Blog</a>        
                                                </li>
                                        </ul> 
                                        <ul>
                                                <li>         
                                                        <a href='#'>Carriers</a>
                                                </li>  
                                                <li>
                                                        <a href='#'>Support</a>   
                                                </li>
                                                <li>
                                                        <a href='#'>Privacy Policy</a>    
                                                </li>
                                        </ul>
                                </div>
                                        <div className='community'>
                                        <button className='bg-green-500 text-white px-[10px] rounded-[50px] py-[7px] ml-[50px]'>Request Invite</button>
                                        <p className='text-white'>&copy;Easybank. All Rights Reserved.</p>
                                </div>
                        </div>

        )    
}

export default Footer