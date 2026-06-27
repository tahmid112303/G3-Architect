import React from 'react'
import amazon from '../../../G3-Architect/images/sponsors/amazon.png'
import google from '../../../G3-Architect/images/sponsors/google.png'
import figma from '../../../G3-Architect/images/sponsors/figma.png'
import spotify from '../../../G3-Architect/images/sponsors/spotify.png'
import telerama from '../../../G3-Architect/images/sponsors/telerama.png'

const Footer = () => {
  return (
    <div className='mt-45'>
        <h1 className='text-center font-bold text-[45px]'>Our Sponsors</h1>

        <p className='mt-6 text-[#727272] text-center'>There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration.</p>

        <div className='flex gap-30 justify-center mt-12.5 mb-30'>
            <img className='w-30 h-12.5 cursor-pointer' src={spotify} alt="Icon" />
            <img className='w-30 h-12.5 cursor-pointer' src={amazon} alt="Icon" />
            <img className='w-30 h-12.5 cursor-pointer' src={google} alt="Icon" />
            <img className='w-30 h-12.5 cursor-pointer' src={telerama} alt="Icon" />
            <img className='w-30 h-12.5 cursor-pointer' src={figma} alt="Icon" />
        </div>

        <h1 className='text-[#424242] text-[20px] text-center mb-25'>All rights reserved copyright@2023 startup landing page design</h1>
    </div>
  )
}

export default Footer