import React from 'react'

const Main = () => {
    return (
        <div className='mt-24 bg-[#2a2b2dff] rounded-lg m-1'>
            <div className='flex px-4 py-4 items-center justify-center flex-wrap'>
                <p className='text-white rounded-full p-2 px-4 border-2 border-white m-2 cursor-pointer hover:text-[#ff5fa5] hover:bg-white ease-in duration-300'>Politics</p>
                <p className='text-white rounded-full p-2 px-4 border-2 border-white m-2 cursor-pointer hover:text-[#ff5fa5] hover:bg-white ease-in duration-300'>Sports</p>
                <p className='text-white rounded-full p-2 px-4 border-2 border-white m-2 cursor-pointer hover:text-[#ff5fa5] hover:bg-white ease-in duration-300'>Fashion</p>
                <p className='text-white rounded-full p-2 px-4 border-2 border-white m-2 cursor-pointer hover:text-[#ff5fa5] hover:bg-white ease-in duration-300'>Technology</p>
                <p className='text-white rounded-full p-2 px-4 border-2 border-white m-2 cursor-pointer hover:text-[#ff5fa5] hover:bg-white ease-in duration-300'>Social</p>
            </div>
        </div>
    )
}

export default Main