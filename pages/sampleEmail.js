import styles from '../styles/Home.module.css';
import Layout from '../components/layout.js';

export default function SampleEmail() {
    return (
        <Layout>
            <h1 className={styles.pageTitle}>Sample Email Responses</h1>

            <div className= {styles.homeCard}>
            <p className={styles.homeText}>Here, I demonstrate how I will use the information contained in a prospect's basic interest query 
                to identify customer needs and secure follow-up meetings which will lead to conversion.
            </p>

            <section className={styles.emailBlock}>
                <div> 
                     
                        <div className={styles.messageInfo}>
                            <p><strong>From: </strong>Joe Fox (jfox@barnesandnoble.com)</p>
                            <p><strong>Employees: </strong>1000+</p>
                            <p><strong>Subject: </strong>Sales Lead for barnesandnoble.com</p>
                        </div>

                     <div className={styles.messageBlock}>
                        <p>New site launching soon using Next.js and we are thinking about
                        using Vercel to host. I would like more information about the Enterprise option.
                        </p>
                    </div>
                </div>

                <div className={styles.reply}>
                   
                        <div className={styles.messageInfo}>
                            <p><strong>From: </strong>Lee Gill (lgill@vercel.com)</p>
                            <p><strong>To: </strong>Joe Fox (jfox@barnesandnoble.com)</p>
                        </div>
 
                     <div className={styles.messageBlock}>
                        <span>Hi Joe,</span>
                        <p>
                            First, I want to thank you for considering Vercel as your next hosting platform. I would be 
                            happy to explain all the ways our Enterprise services will support and even improve Barnes and Noble's
                            web presences with tools like effective SEO, efficient content management, and comprehensive internal analytics. 
                        </p>
                        <p>What dates and times this week can we schedule a call?</p>
                        <p>Best, <br/> Lee Gill <br/> <italic>Vercel Product Advocate</italic></p>
                     </div>
                </div>
            </section>
            
            <section className={styles.emailBlock}>

                <div> 
                
                        <div className={styles.messageInfo}>
                            <p><strong>From: </strong>Melissa Wright (mwright@hipcamp.com)</p>
                            <p><strong>Employees: </strong>10-100</p>
                            <p><strong>Subject: </strong>Sales Lead for hipcamp.com</p>
                        </div>

                     <div className={styles.messageBlock}>
                        <p>
                        We are looking to re-platform our site and are considering Vercel. 
                        Would like to evaluate options to see if Pro or Enterprise would fit out needs better. 
                        Timeline is Q3. Can you help?
                        </p>
                    </div>
                </div>

   
                <div className={styles.reply}>
                    
                        <div className={styles.messageInfo}>
                            <p><strong>From: </strong>Lee Gill (lgill@vercel.com)</p>
                            <p><strong>To: </strong>Melissa Wright (mwright@hipcamp.com)</p>
                        </div>

                     <div className={styles.messageBlock}>
                     <span>Hi Melissa,</span>
                        <p>
                           Thank you for considering Vercel as your next hosting platform. I'm excited to inform you that 
                           a migration to Vercel by Q3 is possible with either the Pro or Enterprise plan. The proper plan for you depends
                           on both the operational needs of your business as well as the technical needs of your dev team. 
                        </p>
                        <p>
                            I am happy to make a more detailed recommendation to you once I learn more about your company's goals for your site. 
                            What dates and times this week can we schedule a call?
                        </p>
                        <p>Best, <br/> Lee Gill <br/> <italic>Vercel Product Advocate</italic></p>
                     </div>
                </div>
            </section>
            </div>
        </Layout>
    )
}