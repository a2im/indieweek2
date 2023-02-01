import { IWPostsList } from './posts'
import Footer from '../footer'
import Head from 'next/head'

export default function News() {
  return (
    <div className="bggradient">
      <Head>
          <title>Indie Week - NEWS</title>
          <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
      </Head>
          <div className="relative grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  NEWS
  </h1>
  </div>
          <IWPostsList/>
          <Footer />
    </div>
  )
}
