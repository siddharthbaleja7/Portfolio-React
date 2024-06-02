import logo from './logo.svg';
import './App.css';
import Portfolio from './Portfolio'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App() {
    return (
      <div>
        
        <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </Router>
      </div>
    );
}

export default App;
