import React from 'react';
import styles from './Banner.module.css';
import banner from '../images/banner.jpg'
const Banner = () => {
    return (  
        <div className={styles.container}>
<img alt='banner' src={banner}/>
<div className={styles.textContainer}>
<h1>Webidemy</h1>
<p>
Make it onilne and <span>Jump</span>!
</p>
</div>
        </div>
    );
}
 
export default Banner;