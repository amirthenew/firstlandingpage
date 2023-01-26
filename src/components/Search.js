//class component

import React, { Component } from 'react';
import styles from './Search.module.css'
class Search extends Component {

    constructor(){
        super();
        this.state = {
            text : '',
        }
    }

    changeHandler = (e)=>{
        this.setState({
text : e.target.value
        })
    }
    render() { 

        return (
            <div className={styles.container}>
            
            <p>looking for ?</p>
            <div>
            <input type='text' value={this.state.text} onChange={this.changeHandler} placeholder='search it !'/>
            <br/>
<span>{this.state.text}</span>      
            </div>
            </div>
        );
    }
}
 
export default Search;