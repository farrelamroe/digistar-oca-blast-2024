import { Navbar, Tablet } from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>OCA Blast</title>
      </Head>
      <main>
        <Navbar />
        <Tablet>
          <h1>Hello, Welcome to OCA Blast</h1>
        </Tablet>
      </main>
    </>
  )
}
