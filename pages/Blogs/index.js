import React from 'react'
import Article from '../../components/Article'
import { client } from '../../components/SanityConfig'
const index = ({ blogs }) => {
    return (
        <div className='mt-20'>
            <Article blogs={blogs} />
        </div>
    )
}

export default index


export async function getServerSideProps(context) {
    const query = `*[_type == "Blog"]`
    const blogs = await client.fetch(query)
    return {
        props: {
            blogs
        }
    }
}