import React from 'react'
import architect from '../../../G3-Architect/images/icons/images/architect.png'

const Features = () => {
  return (
    <div className='max-w-7xl mx-auto mt-30 flex gap-12'>
        <div>
            <div className='flex gap-5 items-center'>
                <div className='w-1.25 h-25 bg-[#FF900E]'></div>
                <div><h1 className='font-bold text-[45px]'>Features you will <br /> love & enjoy</h1></div>
            </div>

            <div className='text-[#727272] mb-7.5 mt-6'>
                There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even
            </div>

            <div className='flex flex-col gap-12.5'>
                <div>
                    <h1 className='font-semibold text-2xl'>Desktop & Mobile Version</h1> <br />

                    <p className='text-[#727272]'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by <br /> injected humour, or randomised...........</p>
                </div>

                <div>
                    <h1 className='font-semibold text-2xl'>Drag & Drop Builder</h1> <br />

                    <p className='text-[#727272]'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by <br /> injected humour, or randomised...........</p>
                </div>

                <div>
                    <h1 className='font-semibold text-2xl'>Awesome Modern Design</h1> <br />

                    <p className='text-[#727272]'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by <br /> injected humour, or randomised...........</p>
                </div>

                <div>
                    <h1 className='font-semibold text-2xl'>Super Easy to Edit</h1> <br />

                    <p className='text-[#727272]'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by <br /> injected humour, or randomised...........</p>
                </div>
            </div>
        </div>


        <div className='w-200 h-265'>
            <img className='w-full h-full' src={architect} alt="A picture that might contain a girl standing" />
        </div>
    </div>
  )
}

export default Features