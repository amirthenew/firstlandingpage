import React ,{Component} from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'
import down from '../images/down.svg'
import up from '../images/up.svg'
class Card extends Component  {

    constructor() {
        super();
        this.state ={
            counter : 0
        }
    }

    downHandler = ()=>{
     if(this.state.counter>=1)  {this.setState(prevState=>({
            counter : prevState.counter - 1,
        }))} 
    }
    upHandler = ()=>{
        this.setState(prevState=>({
            counter : prevState.counter + 1,
        }))
    }

    render() { 
        const {image,name,cost,id} = this.props
        const {counter} = this.state
        return (
            <div className={styles.container}>
  <img src={image}/>
  <h3><Link to={`/products/${id}`}>{name}</Link></h3>
  <p>{cost} {counter ? `* ${counter}=${counter * parseInt(cost)}$` : ''}</p>
            
  <div className={styles.counter}>
 <img  src={up} onClick={this.upHandler} alt='arrow'/> 
 <span>{counter}</span>
 <img className={!counter ? styles.deactive : '' } src={down} onClick={this.downHandler} alt='arrow'/>
    


  </div>
            </div>
        );
    }
}
 
export default Card;