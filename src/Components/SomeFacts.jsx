import React from 'react'
import customers from '../../../G3-Architect/images/icons/myIcons/customers.png'
import email from '../../../G3-Architect/images/icons/myIcons/email.png'
import projects from '../../../G3-Architect/images/icons/myIcons/projects.png'
import ribon from '../../../G3-Architect/images/icons/myIcons/ribon.png'


const SomeFacts = () => {
  return (
    <div className='mt-30'>
        <h1 className='font-bold text-[45px]'>Some Facts</h1>

        <p className='text-[#727272] mt-6'>There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration.</p>

        <div className='mt-25 mx-12.5 flex gap-30'>
            <div className='border-2 border-[#FF900E] w-60 h-60 rounded-lg flex flex-col justify-center items-center'>
                <img src={ribon} alt="icon" />

                <h1 className='text-[#424242] font-semibold text-[45px]'>54</h1>

                <h2 className='text-[#727272] font-semibold text-[20px]'>Awards Winnings</h2>
            </div>

            <div className='border-2 border-[#FF900E] w-60 h-60 rounded-lg flex flex-col justify-center items-center'>
                <img src={projects} alt="icon" />

                <h1 className='text-[#424242] font-semibold text-[45px]'>1458</h1>

                <h2 className='text-[#727272] font-semibold text-[20px]'>Projects Finished</h2>
            </div>

            <div className='border-2 border-[#FF900E] w-60 h-60 rounded-lg flex flex-col justify-center items-center'>
                <img src={customers} alt="icon" />

                <h1 className='text-[#424242] font-semibold text-[45px]'>590</h1>

                <h2 className='text-[#727272] font-semibold text-[20px]'>Clients Worked</h2>
            </div>

            <div className='border-2 border-[#FF900E] w-60 h-60 rounded-lg flex flex-col justify-center items-center'>
                <img src={email} alt="icon" />

                <h1 className='text-[#424242] font-semibold text-[45px]'>22578</h1>

                <h2 className='text-[#727272] font-semibold text-[20px]'>Email Sent</h2>
            </div>


        </div>
    </div>
  )
}

export default SomeFacts