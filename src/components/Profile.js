import React from 'react';
import styles from './Profile.module.css'
import myphoto from '../images/profile.jpeg'
const Profile = () => {
    return (
        <div className={styles.container}>
        <div className={styles.textbox}>
        <h2>Who I Am ?!</h2>
        <p>
       I'm Amirhossein Abshari A junior front-end web developer who loves Javascript and now i'm happy cause I've launched my first react full static web page 
       I'm Amirhossein Abshari A junior front-end web developer who loves Javascript and now i'm happy cause I've launched my first react full static web page
       I'm Amirhossein Abshari A junior front-end web developer who loves Javascript and now i'm happy cause I've launched my first react full static web page
      
        </p>
        </div>
        <div className={styles.photo}>
        <img src={myphoto}/>
        </div>
        </div>
      )
}
 
export default Profile;