import styles from '../styles/Home.module.css';
import Layout from '../components/layout.js';
import {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import Card from '../components/card.js'

export default function PastExperiences() {
    const [hydration, setHydration] = useState(false);

    useEffect(() => setHydration(true),[]);

    if(!hydration){
        return null;
    }

    return (
        <Layout>
            <h1 className={styles.pageTitle}>Past Experiences</h1>

            <div className={styles.homeCard}>
            <section className= {styles.homeText}>
                <p>Along my career in sales, I've had the pleasure of learning the ins and outs of different industries 
                    and gaining universal skills that help me connect with people and solve problems on and off the job.
                </p>
                <p>With a shot at a new role with Vercel, my attention turns toward my future while remembering the 
                    most important lessons I've picked up so far.
                </p>
            </section>

            <div>
                <section>
                    <h3 className={styles.subTitle}>Career Wishlist</h3>
                
                    <div className={`${styles.row} ${styles.centeredSpaced}`}>
                        <Card 
                        sideOne={<h4 className={styles.prodSideOne}>Work On The Edge</h4>}
                        sideTwo={<div className= {styles.expSideTwo}>
                            <p>Vercel provides developers and companies with cutting edge software engineering technology. As an avid 
                            user of Next.js, I'm excited to be a part of the effort to expand adoption of Vercel services.</p>
                            <p>It's a rare opportunity to join a newly formed sales arm of a rising company, and my hope is to be a key player 
                            in developing outreach and conversion best practices as the Product Advocation team grows. 
                        </p></div>}/>
                        
                        <Card 
                        sideOne={<h4 className={styles.prodSideOne}>Master The Framework</h4>}
                        sideTwo={<div className= {styles.expSideTwo}><p>
                            As stated above, Next.js is an incredible React framework that I use in my personal and professional 
                            projects. I'm looking forward to learning the details of Next.Js as well as the other technologies Vercel 
                            offers to provide problem-solving insight to customers and deliver helpful product demos to prospects.</p>
                            <p>Growing as a developer as I build this knowledge will be a great tangential bonus. 
                        </p></div>}/>
                        
                        <Card
                        sideOne= {<h4 className={styles.prodSideOne}>Build The Community</h4>}
                        sideTwo={<div className= {styles.expSideTwo}><p>
                            Before I applied for a role at Vercel, I joined the <a className={styles.pageLink} href="https://www.reddit.com/r/nextjs/">Next.js subreddit</a> to learn more about the framework and find answers to more nuanced questions I had about my projects. It was great to see 
                            other developers invested in the technology and working together to improve.</p> 
                            <p>As a Product Advocate, I would like to engage 
                            with and learn from the greater community building around Vercel services to grow as a salesprofessional and organically 
                            expand Vercel's place in the world of software development.
                        </p></div>}/>
                    </div>
                </section>

                <section className={styles.pageCard}>
                    <h3 className={styles.subTitle}>Inpsirations</h3>
                    <div>
                        <div className= {styles.pageText}>
                            <p>Out of all the material I've taken in to become a more effective salesperson, nothing has stuck with me longer than <span className= {styles.bookTitle}>Never Split The Difference: Negotiating As If Your Life Depended On It</span>, an accessible guide to successful negotations written by former FBI investigator 
                                Chris Voss.</p>
                            <p>In just ten chapters, Voss completely shifted the way I looked at interpersonal conflict: from a challenge to a potential opportunity. 
                                One of the biggest flaws I had as a professional was assuming everyone I spoke to saw the world the way I saw it. It took reading <span className= {styles.bookTitle}>Never Split The Difference</span> to show me that the key to reaching true understanding was to mindfully collect information about 
                                the problem at hand then present a solution that answered the concerns of the other party while preserving my own interests.  
                            </p>
                            <p>You can access a digital copy of the book <a className= {styles.pageLink} href="https://drive.google.com/file/d/1-WAlUoommutRFqRKiwuob9FxC9SUDPko/view?usp=sharing">here.</a></p>
                        </div>
                        <div className= {styles.videoBlock}>
                            <ReactPlayer url='https://www.youtube.com/watch?v=MjhDkNmtjy0'/>
                            <p>Chris Voss, author of <span className={styles.bookTitle}>Never Split The Difference</span>, breaks down 
                            the basic tenants of his book at the University of Nevada.</p>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        </Layout>
    )
}