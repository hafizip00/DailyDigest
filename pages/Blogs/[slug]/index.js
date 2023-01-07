import React from 'react'
import Blog from '../../../components/Blog'
import { client } from '../../../components/SanityConfig'

const index = ({ blog, blogs }) => {
    return (
        <div>
            <Blog blog={blog} />
        </div>
    )
}

export default index

export async function getServerSideProps(context) {

    const { slug } = context.query
    const Blogs = "Blog"

    const blogsquery = `*[_type == "${Blogs}"][0...3]`
    const blogs = await client.fetch(blogsquery)
    const query = `*[_type == "Blog" && slug.current == "${slug}"][0]`
    const blog = await client.fetch(query)
    return {
        props: {
            blog,
            blogs
        }
    }
}