import Link from 'next/link'
import React from 'react'
import ArticleCard from './ArticleCard'
const Article = ({ blogs }) => {
    if (!blogs) {
        return <p>Loading...</p>
    }
    return (
        <div className='flex flex-col md:flex-grow m-1 gap-4'>
            <div className='col-span-2 bg-[#2a2b2dff] rounded-lg p-2 divide-y divide-white'>
                <h1 className='text-white'>Featured</h1>
                <div className='grid md:grid-cols-4 gap-4 p-4'>
                    {blogs.map((blog) => {
                        return <ArticleCard key={blog.slug.current} blog={blog} />
                    })}
                </div>
            </div>
            <div className='bg-[#2a2b2dff] rounded-lg p-2 divide-y divide-white'>
                <h1 className='text-white'>Latest</h1>
                <div className='grid md:grid-cols-4 gap-4 p-4 max-w-screen'>
                    {blogs.map((blog) => {
                        return <ArticleCard key={blog.slug.current} blog={blog} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Article