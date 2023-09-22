import React from 'react'
import { FiMenu as Icon } from 'react-icons/fi'
const SidebarMobile = ({setter}) => {
  return (
    <div  className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-[#4285F4] flex [&>*]:my-auto px-2 justify-between">
        <button className='text-4xl flex text-white'  onClick={() => {
          setter((oldVal) => !oldVal);
        }}>
            <Icon/>
        </button>
        <span className='text-white mx-5 text-2xl font-semi-bold'>Dashboard</span>
    </div>
  )
}

export default SidebarMobile