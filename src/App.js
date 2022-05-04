import './App.css';
import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './itemDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<ItemDetail/>}/>
      </Routes>
    </div>
  )
    
}

const Home = () => {
  <div>
    <h1>
      Home Page
    </h1>
  </div>
}

export default App;
