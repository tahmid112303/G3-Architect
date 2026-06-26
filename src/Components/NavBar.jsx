import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-40 mt-15'>
        <div>
            <h2 className='font-bold text-[45px]'>G3 Architects</h2>
        </div>

        <div className='flex gap-25 text-[18px] text-[#424242] font-bold'>
            <p>Home</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Login</p>
        </div>
    </div>
  )
}

export default NavBar