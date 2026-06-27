import React from 'react'
import bannerImg from '../../../G3-Architect/images/icons/images/banner.png'
const Banner = () => {
  return (
    <div className='mt-25'>
        <h1 className='text-center font-bold text-6xl'>Brand New <br />Group of Architects</h1> <br />

        <h1 className='text-center text-[#727272]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in <br /> some form, by injected humour, or randomised words which don't look even</h1>

        <div className='flex justify-center items-center mt-8'>
            <button className='btn bg-[#FF900E] text-white w-45 h-16 font-semibold text-[20px] rounded-lg'>Explore More</button>
        </div>

        <div className='max-w-7xl mx-auto mt-12.5'>
            <img className='w-full' src={bannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner