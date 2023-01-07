import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { LinkAnimations, IconSize, IconStyle } from '../utilities/Utils'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineGithub, AiOutlineClose } from 'react-icons/ai'
import { IoMdCamera } from 'react-icons/io'
const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className=''>
            <div className='fixed top-0 w-full'>
                <div className='flex justify-between items-center bg-[#D9514eff] z-10 px-4 h-16 shadow-xl'>
                    <div>
                        <h1 className={`font-bold text-white text-2xl ${LinkAnimations} cursor-pointer`}>Daily Digest</h1>
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex gap-8 '>
                            <Link href={"/"} className={`uppercase ${LinkAnimations}`}>Home</Link>
                            <Link href={"/Blogs"} className={`uppercase ${LinkAnimations}`}>Blogs</Link>
                            {/* <Link href={"/"} className={`uppercase ${LinkAnimations}`}>Contact</Link>
                            <Link href={"/"} className={`uppercase ${LinkAnimations}`}>About</Link> */}
                        </div>
                    </div>
                    <div className='md:hidden block' onClick={() => setOpen(!open)}>
                        <HiOutlineMenu fontSize={IconSize} />
                    </div>
                </div>
            </div>
            <div className={open ? 'bg-[#D9514eff] fixed z-10 h-full min-w-[60vw] duration-300 transition-all ease-in md:hidden opacity-100' : 'bg-pink-200 absolute z-10 h-screen min-w-[60vw] translate-x-[-100%] duration-300 transition-all ease-in md:hidden opacity-   '}>
                <div className='m-2 shadow-lg rounded-lg bg-white flex flex-col items-center justify-center mt-4'>
                    <div className='flex w-full items-center justify-between px-4 py-4'>
                        <h1>LOGO</h1>
                        <div className={`${IconStyle}`}>
                            <AiOutlineClose fontSize={IconSize} onClick={() => setOpen(false)} />
                        </div>
                    </div>
                    <div className='flex flex-col w-full items-center justify-center shadow-lg rounded-lg'>
                        <Link href={"/"} className={`uppercase ${LinkAnimations} p-4`}>Home</Link>
                        <Link href={"/Blogs"} className={`uppercase ${LinkAnimations} p-4`}>Blogs</Link>
                        {/* <Link href={"/"} className={`uppercase ${LinkAnimations} p-4`}>Contact</Link>
                        <Link href={"/"} className={`uppercase ${LinkAnimations} p-4`}>About</Link> */}
                    </div>

                </div>
                <div className='m-2 h-40 flex items-center justify-start'>
                    <h1 className='text-8xl bg-white rounded-tr-full rounded-br-full w-full py-8 shadow-xl px-2'>HI</h1>
                </div>
                <div className='flex bg-white items-center justify-around rounded-lg shadow-xl p-2 m-2'>
                    <div className={IconStyle}>
                        <AiOutlineInstagram fontSize={IconSize} />
                    </div>
                    <div className={IconStyle}>
                        <AiOutlineFacebook fontSize={IconSize} />
                    </div>
                    <div className={IconStyle}>
                        <AiOutlineTwitter fontSize={IconSize} />
                    </div>
                    <div className={IconStyle}>
                        <AiOutlineGithub fontSize={IconSize} />
                    </div>

                </div>
            </div>
            <div className={open ? "w-screen h-screen fixed bg-black/30 transition-all duration-300 md:hidden" : "hidden md:hidden"}>

            </div>
        </div>
    )
}

export default Navbar