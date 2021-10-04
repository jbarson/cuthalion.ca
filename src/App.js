import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';

function App() {
  const [sidebarSide, setSidebarSide] = useState('left')
  const handleClick = () => {
    setSidebarSide(sidebarSide === 'left' ? 'right' : 'left')
  }
  return (
    <Router>
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
    </Router>
  );
}

export default App;
