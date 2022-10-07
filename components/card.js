import {useState} from 'react'
import styles from '../styles/Home.module.css' 


export default function Card( {sideOne, sideTwo}){
    const [flipped, setFlip] = useState(false);

    return (
        <div
        className= {styles.flipCard}
         onClick={(e)=> setFlip(!flipped)}
        >
            {!flipped ? <div className={styles.sideOne}>{sideOne}</div> : <div className={styles.sideTwo}>{sideTwo}</div>}
        
        </div>
    )
} 
