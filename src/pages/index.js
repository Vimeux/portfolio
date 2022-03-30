import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

// import { getAllRepos } from './api/services'

export default function Home () {
  // const [allRepos, setAllRepos] = useState()

  // useEffect(() => {
  //   getData()
  // }, [])

  // const getData = async () => {
  //   const result = await getAllRepos({})
  //   setAllRepos(result)
  // }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title} data-scroll data-scroll-speed='3'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description} data-scroll data-scroll-speed='2'>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <br />

        {/* {allRepos?.map(repo => {
          return (
            <h1 key={repo.id}>{repo.name}</h1>
          )
        })} */}

      </div>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
