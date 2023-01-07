import Head from 'next/head'
import Article from '../components/Article'
import Main from '../components/Category'
import { client } from '../components/SanityConfig'


export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Daily Digest</title>
        <meta name="description" content="PRofessional Articles  of World News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main />
        <Article blogs={blogs} />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const query = `*[_type == "Blog"][0...4]`
  const blogs = await client.fetch(query)
  return {
    props: {
      blogs
    }
  }
}
