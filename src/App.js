import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import CV from './pages/CV';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/publications" element={<Publications/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/blog" element={<BlogIndex/>}/>
            <Route path="/blog/:slug" element={<BlogPost/>}/>
            <Route path="/cv" element={<CV/>}/>
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;