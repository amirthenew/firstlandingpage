import React, { Component } from 'react';
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer';
import Landing from './components/Landing';
import { Route ,Routes,Navigate} from "react-router-dom";
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Details from './components/Details';
import Page404 from './components/Page404';
import Programmers from './components/Programmers';

const App = () => {
  return (
    <div>
<Navbar/>
<Routes>
<Route path='/' element={<Landing/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path ='/aboutus/*' element={<AboutUs/>}>
        <Route path="programmers" element={<Programmers/>}/>
        <Route path="drivers" element={<h1>drivers</h1>} />
    </Route>
    <Route path='/products/:id' element={<Details/>}/>
    <Route path ='/404' element={<Page404/>}/>
    <Route path ='/*' element={<Navigate to ="/404"/>}/>
</Routes>

<Footer/>
    </div>
    );
}
 
export default App;
