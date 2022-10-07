import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout.js';

export default function Home() {
  return (
   <Layout>
      <div>
        <h1 className={styles.pageTitle}>Welcome!</h1>
        
        <section className={`${styles.row} ${styles.centeredSpaced} ${styles.homeCard}`}>
          <Image
          priority
          src="/Images/profile.JPG"
          height= {200}
          width= {200}
          className={styles.profile}
          alt="Lee Gill"
          />

          <section className= {styles.homeText} > 
            <p>Here you will find all the information you need to assess Lee Gill's understanding of Next.js, Vercel,
            and general sales concepts.</p>

            <p>To learn more about Vercel, follow this link: 
              <a href= "https://vercel-tech-test-lee-gill-final.vercel.app/api/handlers">https://vercel-tech-test-lee-gill-final.vercel.app/api/handlers</a> </p>

            <p>To find out more info, use the links in the footer to reach me/see the code.</p>
          </section>
        </section>
      </div>
   </Layout>
  )
}
