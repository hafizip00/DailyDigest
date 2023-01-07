import Image from 'next/image'
import React from 'react'
import { client } from './SanityConfig'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from "react-portable-text"

const Blog = ({ blog }) => {
    const builder = imageUrlBuilder(client)
    if (!blog) {
        return <p>Loading...</p>
    }

    return (
        <div className='flex items-center justify-center'>
            <div className='mt-32 max-w-[80vw]'>
                <div>
                    <div className='relative flex items-center justify-center -z-10 w-full'>
                        <img src={builder.image(blog.Image).width(600).url() || "https://tailwindcss.com/img/card-top.jpg"} alt="Blog"
                            className='rounded-xl w-60 h-60 object-cover'
                        />
                        <div className='absolute w-full h-full bg-gradient-to-t from-black rounded-xl'>
                        </div>
                        <div className='absolute bottom-20 w-full px-4'>
                            <h2 className=' font-bold text-4xl text-white'>{blog.Title}</h2>
                            <p className='text-white'>Dated : {blog.Time}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#7c5e58] p-8 rounded-lg my-8'>
                    <PortableText
                        content={blog.content}
                        serializers={{
                            h1: (props) => <h1 style={{ color: "orange" }} {...props} />,
                            li: ({ children }) => <li classNameNameNameName="special-list-item">{children}</li>,
                        }}
                        projectId={"20yq843l"}
                        dataset={"production"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog