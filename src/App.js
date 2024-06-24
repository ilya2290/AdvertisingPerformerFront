import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
          <Navigation />
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
