import React from 'react'

import { Footer, Header } from './containers';
import { Cards, Navbar, Search, Features } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <Header /> 
      <Search />
      <Cards />
      <Features />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App