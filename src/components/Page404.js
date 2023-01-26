import React, { Component } from 'react';
import styles from './Page404.module.css'
class Page404 extends Component {

    render() { 
        return (
            <div className={styles.container}>
            <h1>404 : page not found</h1>
            </div>
        );
    }
}
 
export default Page404;