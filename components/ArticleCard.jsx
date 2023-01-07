import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from './SanityConfig'
const ArticleCard = ({ blog }) => {
    const builder = imageUrlBuilder(client)
    if (!blog) {
        return <p>Loading...</p>
    }
    return (
        <div className='shadow-lg border-2 mt-4 group rounded-lg'>
            <div className="flex rounded mx-auto items-center justify-center">
                <div className="rounded shadow-lg m-4 flex flex-col ">
                    <img className='rounded-lg' src={builder.image(blog.Image).width(300).url() || "https://tailwindcss.com/img/card-top.jpg"} alt="Sunset in the mountains" />
                    <div>
                        <div className="font-bold text-xl my-2 text-white">{blog.Title}</div>
                    </div>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center">
                        <Link href={`/Blogs/${blog.slug.current}`}><span>Read More</span></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard