import './App.css';
import React, { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';

function App() {
  const [sidebarSide, setSidebarSide] = useState('left')
  const handleClick = () => {
    setSidebarSide(sidebarSide === 'left' ? 'right' : 'left')
  }
  return (
      <div className="App">
        <div className={`side ${sidebarSide}`} >
          <nav className="navbar side" >
            <Sidebar handleClick={handleClick}/>
          </nav>
        </div>
        <div className="main">
          <About />
        </div>
      </div>
  );
}

export default App;
