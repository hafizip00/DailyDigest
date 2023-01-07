import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#D9514eff] p-2 flex items-center justify-center sticky bottom-0 w-full'>
            <div className='flex flex-col items-start justify-start gap-8 mt-8 md:items-center'>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className='text-black font-bold text-4xl'>LOGO</h1>
                    <p className='font-bold'>READ.EXPLORE.WRITE</p>
                </div>
                <div className='flex flex-col md:flex-row md:gap-8'>
                    <p>Downaload Now</p>
                    <p>License</p>
                </div>
                <div className='flex flex-col md:flex-row md:gap-8 items-start  gap-4'>
                    <p>About</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Careers</p>
                    <p>Help</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>	&#169; Dailydigest. All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer