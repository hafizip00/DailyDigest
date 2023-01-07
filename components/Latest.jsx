import React from 'react'
import ArticleCard from './ArticleCard'
const Latest = () => {
    return (
        <div className='flex flex-col md:flex-grow m-1 gap-4'>
            <div className='bg-[#2a2b2dff] rounded-lg p-2 divide-y divide-white'>
                <h1 className='text-white'>Latest</h1>
                <div className='grid md:grid-cols-4 gap-4 p-4 max-w-screen'>
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
        </div>
    )
}

export default Latest