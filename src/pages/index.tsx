import { Navbar, Tablet } from '@/components'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>OCA Blast</title>
      </Head>
      <main>
        <Navbar />
        <Tablet>
          <Image
            src="/hero.png"
            height={1000}
            width={1000}
            alt=""
            className="h-full w-full"
          />
        </Tablet>
      </main>
    </>
  )
}
