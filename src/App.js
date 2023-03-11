import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>

            {/* generate home page */}
            <Route path="/" element={<Home />} />

            {/* generate projects page */}
            <Route path="/projects" element={<Projects />} />

            {/* generate contact page */}
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
