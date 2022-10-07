import styles from '../styles/Home.module.css';
import Layout from '../components/layout.js';
import Card from '../components/card.js';

export default function ProductAdvocate() {
    
    return (
        <Layout>
            <h1 className= {styles.pageTitle}>Product Advocate</h1>
            <div className= {styles.homeCard}>
                <section className= {styles.homeText}>
                    <p>The role of Product Advocate at Vercel is an exciting opportunity I'm ready to take on.
                        While the prospect of advancing a service that I both use personally and believe in, it 
                        is important to take an objective look at the necessary duties that come with the job.
                    </p>
                    <p>
                        Below is brief breakdown of which aspects of the Product Advocate position I find most and least favorable.
                    </p>
                </section>

                <div>
                    <section>
                        <Card 
                        sideOne={<div className= {`${styles.column} ${styles.prodSideOne}`}>
                            <h3> Most Preferred </h3> 
                            </div>} 
                        sideTwo={<div className= {styles.prodSideTwo}>
                            <ul className={styles.advoList}>
                            <li className= {styles.advoItem}>Find ways to continually improve the day-to-day workflow for converting leads</li>
                            <li className= {styles.advoItem}>Hop on a Zoom call to do a product demo</li>
                            <li className= {styles.advoItem}>Analyze sales inquiries to help spot trends in needs</li>
                            </ul>
                            </div>}/>
                    </section> 

                    <section>
                    <Card
                    sideOne={<div className={`${styles.column} ${styles.prodSideOne}`}>
                        <h3>Least Preferred</h3>
                        </div>}      
                    sideTwo={<div className= {styles.prodSideTwo}>
                            <ul className={styles.advoList}>
                            <li className= {styles.advoItem}>Organize, Schedule {`&`} book meetings for Account Executives with prospects</li>
                            <li className= {styles.advoItem}>Research and organize notes to ensure Account Executives are prepared for calls</li>
                            <li className= {styles.advoItem}>Work with the Team to make sure email tone is consistent with the Vercel brand</li>
                            </ul>
                            </div>}/>
                    </section>
                </div>
            </div>   
        </Layout>
    )
}

// export function ProductRole ({children}){
//     const [toggle, setToggle] = useState(false);
//     return (
//         {children}
//     )
// }