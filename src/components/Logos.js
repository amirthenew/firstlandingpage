import React from "react";
import styles from './Logos.module.css'
import udemy from '../images/u.png'
import udemy2 from '../images/u2.png'
import freelance from '../images/free.jpg'


const Logos = ()=>{

    return(
        <div className={styles.container}>
        <h3>Check our courses</h3>
        <div>
        <img src={udemy} alt='udemy'/>
        <img src={udemy2} alt='udemy'/>
        <img src={freelance} alt='freelance'/>
        </div>
        
        </div>
        )
}

export default Logos;