import React from 'react'
import {  LuBadgeCheck } from "react-icons/lu";
import Waitlist from './Waitlist';

const Layout = () => {
  return (
    <section className='text-primary flex gap-5 h-screen'>
        <div className='flex-1 mt-3'>
            <h1 className='text-[18px] w-full text-center p-3 font-bold'>Unite, Collaborate, Create: Your all-in-one tech collaboration
            platform</h1>
            <div className='flex flex-col items-center max-w-[500px] mx-auto'>
                <div className='m-2'>
                    <div className='flex items-center gap-3 my-3'>
                    <LuBadgeCheck className='text-secondary' size={25}/>
                    <p className='font-medium text-[14px] capitalize'>Enhanced Collaboration</p>
                    </div>
                    <small className='text-white py-3 w-full text-[12px]'>Break  down silos and foster cross-disciplinary collaboration for better projects outcomes.</small>
                </div>
                <div className='m-2'>
                    <div className='flex items-center gap-3 my-3'>
                    <LuBadgeCheck className='text-secondary' size={25}/>
                    <p className='font-medium text-[14px] capitalize'>project management</p>
                    </div>
                    <small className='text-white py-3 w-full text-[12px]'>Streamline project workflows with integrated task management and project tracking.</small>
                </div>
                <div className='m-2'>
                    <div className='flex items-center gap-3 my-3'>
                    <LuBadgeCheck className='text-secondary' size={25}/>
                    <p className='font-medium text-[14px] capitalize'>secure and scalable</p>
                    </div>
                    <small className='text-white py-3 w-full text-[12px]'>Rest assured knowing  your data is protected with robust security measures, while our platform scales with your team's needs.</small>
                </div>
                <div className='m-2'>
                    <div className='flex items-center gap-3 my-3'>
                    <LuBadgeCheck className='text-secondary' size={25}/>
                    <p className='font-medium text-[14px] capitalize'>Increased Productivity</p>
                    </div>
                    <small className='text-white py-3 w-full text-[12px]'>Eliminate communication barriers and streamline workflows to boost efficiency.</small>
                </div>
            </div>
        </div>

        <div className='flex-1'>
            <Waitlist/>
        </div>
    </section>
  )
}

export default Layout