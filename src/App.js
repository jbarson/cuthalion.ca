import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="side">
          <nav className="navbar side" >
            <Sidebar />
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
