import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import getSortedPostsData from '../lib/posts'
import Link from 'next/link'

function Home({ allPostsData }) {
 return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>Me llamo Gonzalo. Soy Ingeniero Comercial,fotógrafo publicitario y desarrollador Web. Poseo amplio conocimiento en negocios, diseño de campañas y gestión Web, por lo que puedo ser un buen aporte en grupos de Marketing al tener la capacidad interactuar y coordinar entre las múltiples disciplinas que hay dentro.</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Competencias</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />

</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}


export default Home;