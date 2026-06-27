import React from 'react'
import team1 from '../../../G3-Architect/images/icons/images/team1.png'
import team2 from '../../../G3-Architect/images/icons/images/team2.png'
import team3 from '../../../G3-Architect/images/icons/images/team3.png'
import team4 from '../../../G3-Architect/images/icons/images/team4.png'

export default function QuickList() {
  return (
    <div className='mt-25 max-w-6xl mx-auto flex gap-15 items-center'>
        <div className='grid grid-cols-2 w-fit mx-auto gap-6'>
          <img className='w-85 h-85' src={team1} alt="An image of a business team" />
          <img className='w-85 h-85' src={team2} alt="An image of a business team" />
          <img className='w-85 h-85' src={team3} alt="An image of a business team" />
          <img className='w-85 h-85' src={team4} alt="An image of a business team" />
        </div>

        <div className='flex flex-col gap-6'>
            <h1 className='text-[45px]'><span className='text-[#727272]'>Quick list</span> <span className='text-[#131313] font-bold'>of Our</span><br /><span className='text-[#FF900E] font-bold'>Features</span></h1>

            <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even</p>

            <button className='btn bg-[#FF900E] text-white w-45 h-16 font-semibold text-[20px] rounded-lg'>Explore More</button>
        </div>
    </div>
  )
}
