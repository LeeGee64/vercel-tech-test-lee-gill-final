import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Layout({children}) {
    return (
        <div className={styles.container}>
        <Head>
          <title>Lee Gill's Vercel Technical Exam</title>
          <meta name="Test Page" content="Lee Gill demonstrates basic knowledge of Next.js" />
          <link rel="icon" href="/Favicon.ico" />
        </Head>
        <header className= {styles.header}>
        <nav className= {styles.nav}>
          <ul className= {styles.navList}>
            <li id="Home" className= {styles.navItem}>
              <Link href= '/'>
                  <a className= {styles.navName}>Home</a>
              </Link>
            </li>
            <li id="productAdvocate" className= {styles.navItem}>
              <Link href= '/productAdvocate'>
                  <a className= {styles.navName}>Advocate Duties</a>
              </Link>
            </li>
            <li id="pastExperiences" className= {styles.navItem}>
              <Link href= '/pastExperiences'>
                  <a className= {styles.navName}> Sales Experience</a>
              </Link>
            </li>
            <li id="sampleEmail" className= {styles.navItem}>
              <Link href= '/sampleEmail'>
                  <a className= {styles.navName}>Sample Emails</a>
              </Link>
            </li>
            <li id="recommendations" className= {styles.navItem}>
              <Link href= '/recommendations'>
                  <a className= {styles.navName}>Recommendations</a>
              </Link>
            </li>
          </ul>
      </nav>
        </header>

        <main className={styles.main}>
            {children}
        </main>

        <footer id="footer" className={styles.footer}>
        <div className={styles.linkList}>
          <a className={styles.logo} href="https://twitter.com/LeeGee64">
          <Image
                priority
                src="/Images/logos/2021-Twitter-logo-blue.png"
                height= {30}
                width= {30}
                className={styles.logo}
                alt="Twitter"
              />
            </a>
          <a className={styles.logo} href="https://github.com/LeeGee64/vercel-tech-test-lee-gill-final">
            <Image
                priority
                src="/Images/logos/GitHub-Mark-Light-64px.png"
                height= {30}
                width= {30}
                className={styles.logo}
                alt="GitHub"
              />
            </a>
          <a className={styles.logo} href="https://www.linkedin.com/in/leland-gill">
            <Image
                priority
                src="/Images/logos/In-Blue-34.png"
                height= {30}
                width= {30}
                className={styles.logo}
                alt="LinkedIn"
              />
            </a>
          </div>
      </footer>
      </div>
      
    )    
 }