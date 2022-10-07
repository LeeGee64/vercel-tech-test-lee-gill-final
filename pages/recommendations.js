import styles from '../styles/Home.module.css';
import Layout from '../components/layout.js';
import Card from '../components/card.js';

export default function Recommendations() {
    return (
        <Layout>
            <h1 className={styles.pageTitle}>Personal Recommendations</h1>

            <div className= {styles.homeCard}>
            <section className={styles.homeText}>
                <p>To be an effective product advocate means to step inside the shoes of those who 
                    ask about Vercel's services and understand their needs/concerns in a way that allows
                    one to make helpful recommendations and convert The Interested into The Invested.
                </p>
                <p>Below are three profiles of interested parties and my projections of what their chief concerns might be:</p>
            </section>

            <section>
                <div className={styles.pageCard}>
                    <h3 className= {styles.subTitle}>Party #1</h3>
                    <section className= {styles.pageText}>
                        <p><strong>Profile: </strong>Crypto Organization</p>
                        <p><strong>Size: </strong>1-25 employees</p>
                        <p><strong>Goal: </strong>A series of NFT drops</p>
                    </section>

                    <section className ={`${styles.row} ${styles.centeredSpaced}`}>
                        <Card 
                        sideOne={<h4 className={styles.prodSideOne}>SEO</h4>}
                        sideTwo={<p className= {`${styles.recomSideTwo} ${styles.expSideTwo}`}>In order to stand out from the the plethora of other crypto projects, we need 
                            to make sure our NFTs reach the eyes of invested buyers ahead of our competition.
                            The crypto market develops fast, so anything that helps us stay in the forefront will
                            build our ecosystem with momentum.</p>}/>

                        <Card 
                        sideOne={<h4 className={styles.prodSideOne}>Transaction Speed</h4>}
                        sideTwo={<p className= {`${styles.recomSideTwo} ${styles.expSideTwo}`}>Crypto prices can fluctuate day to day, so buyers need to be sure that the asset they view on
                            our platform will be worth what they pay when they pay for it. Any transaction delays can result
                             in upset customers and a tarnished reputation.</p>}/>
                      
                        <Card 
                        sideOne={<h4 className={styles.prodSideOne}>Security</h4>}
                        sideTwo={<p className= {`${styles.recomSideTwo} ${styles.expSideTwo}`}>Our NFTs carry values of hundreds, if not thousands, of dollars. Our collectors need to know that
                            their wallet information will be secure at every point in their transaction.</p>}/>
                    </section>
                </div>

                <div>
                    <h3 className= {styles.subTitle}>Party #2</h3>
                    <section className= {styles.pageText}>
                        <p><strong>Profile: </strong>Mid-Sized Retailer</p>
                        <p><strong>Size: </strong>100-250 employees</p>
                        <p><strong>Goal: </strong>A webfront built for holiday traffic</p>
                    </section>

                    <section className ={`${styles.row} ${styles.centeredSpaced}`}>
                        
                    <Card 
                        sideOne={<h4 className={styles.prodSideOne}>SEO</h4>}
                        sideTwo={<p className= {styles.expSideTwo}>Staying at the top of search results for our products is the cornerstone of 
                            our marketing strategy. Our products are great, but it means nothing if prospective 
                            customers can't find our store. This is especially true during our holiday rush when
                             buyers are bombarded with aggressive advertising from our competitors.</p>}/>

                        <Card 
                        sideOne={<h4 className={styles.prodSideOne}>CMS</h4>}
                        sideTwo={<p className= {styles.expSideTwo}>Our inventory fluctuates rapidly during our sales events and during holidays. We need
                            a system that allows us to update our site with deals, accurate inventory count, and new 
                            items as they're made available for sale.</p>}/>
                

                        <Card 
                        sideOne={<h4 className={styles.prodSideOne}>Dynamic Recommending</h4>}
                        sideTwo={<p className= {styles.expSideTwo}>Once a shopper finds a product of ours they like, we want to encourage them to keep
                            finding more items that suit their tastes. Having a system that is responsive to customer 
                            search history, in-session selections, and purchases is integral to our shopping experience.</p>}/>
 

                        <Card 
                        sideOne={<h4 className={styles.prodSideOne}>Traffic Management</h4>}
                        sideTwo={<p className= {styles.expSideTwo}>During the holiday season, traffic to our website increases by multitudes. We need a platform
                            and backend service that deliver content to shoppers consistently no matter how many visitors
                             our site gets.</p>}/>
                    </section>
                </div>

                <div className={styles.pageCard}>
                    <h3 className= {styles.subTitle}>Party #3</h3>
                    <section className= {styles.pageText}>
                        <p><strong>Profile: </strong>Video Game Publisher</p>
                        <p><strong>Size: </strong>2000+ employees</p>
                        <p><strong>Goal: </strong>Marketing pages for games catalogue</p>
                    </section>

                    <section className ={`${styles.row} ${styles.centeredSpaced}`}>
                        <Card
                            sideOne={<h4 className={styles.prodSideOne}>SEO</h4>}
                            sideTwo={<p className= {`${styles.recomSideTwo} ${styles.expSideTwo}`}> When our new games release, we want our titles to show up first when players look
                                up specific genres and game franchises. Our professional game events also benefit from 
                                 outranking others high-profile competitions.</p>}/>
                    
                         <Card 
                            sideOne={<h4 className={styles.prodSideOne}>Content Streaming</h4>} 
                            sideTwo={<p className= {`${styles.recomSideTwo} ${styles.expSideTwo}`}> We show game demos of new releases as well as live streams of sponosered players and competitions.
                                Our website needs to be able to host this video content at stable rates and high-resolutions.</p>}
                            />
                    
                         <Card
                            sideOne={<h4 className={styles.prodSideOne}>Catalogue Access</h4>}  
                            sideTwo ={<p className= {`${styles.recomSideTwo} ${styles.expSideTwo}`}>Although the content of our website will primarily feature our newer games, we still want customers to 
                            have access to past lines of our games. Player access to these older titles needs to be as readily available 
                            as the new ones.</p>}/>
                        
                        <Card
                            sideOne={<h4 className={styles.prodSideOne}>Subscription Portals</h4>}
                            sideTwo={<p className= {`${styles.recomSideTwo} ${styles.expSideTwo}`}>Our publishing umbrella covers a number of player subscriptions users need to access
                                certain games and features. The portals need to be fast and secure.</p>}/> 
                    </section>
                </div>
            </section>
            </div>
        </Layout>
    )
}