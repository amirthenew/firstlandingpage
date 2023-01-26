import React,{Component}from 'react';
import Banner from './Banner';
import Cards from './Cards'
import Search from './Search';
import Logos from './Logos';
import Profile from './Profile';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Banner/>
        <Cards/>
        <Search/>
        <Profile/>
        <Logos/>
        </div>);
        
    }
}
 
export default Landing;
