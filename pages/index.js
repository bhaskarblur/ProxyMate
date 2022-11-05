import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderFile from '../components/headerFile'
import BodyFile from '../components/bodyFile'
import FooterFile from '../components/footerFile'

export default function Home() {
  return (
    <div className={styles.containerNew}>
      <Head>
        <title>ProxyMate - The Comfort Clicks</title>
        <meta name="Title" content="ProxyMate - The comfort clicks" />
        <meta name="description" content="ProxyMate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <HeaderFile></HeaderFile>
  <BodyFile></BodyFile>
  <FooterFile></FooterFile>
    </div>
  )
}
