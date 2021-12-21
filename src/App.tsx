import React, { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Article from './components/Article';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Inews} from './interfaces';

function App() {
  const [news, set_news] = useState<any>([])

  const getData= async ()=>{

    let data:Promise<Inews[]> = await fetch('news50.json'
    ,{

      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(response => response.json())
      .then(news => news);
      
     set_news(data)
  }

  useEffect(()=>{
   getData()
    
  },[])

  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        <Routes>
          {news.length && <Route path='/' element={<Home news={news}/>} /> }
          
          <Route path='/article' element={<Article/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </main>
    <button></button>
      <footer></footer>
    </>
  
  );
}

export default App;
