import '@/styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>

        <link rel="icon" href="/pizzafav.svg" />
        <title>Pizzeria del Vic</title>
        <meta name="description" content="la mejor del frente" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
