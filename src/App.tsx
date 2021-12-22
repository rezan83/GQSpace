import React, { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getData } from './apiHelper';
import './App.css';
import About from './components/About';
import Article from './components/Article';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  const [news, set_news] = useState<any>([])

  

  useEffect(()=>{
    const populateNews = async () => {
      let news = await getData()
      set_news(news)
    }
    populateNews()
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
      <footer></footer>
    </>
  
  );
}

export default App;
