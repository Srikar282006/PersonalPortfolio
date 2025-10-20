import React from 'react';
import HomePage from '../src/pages/HomePage'
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import {BrowserRouter  as Router,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
 <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/experience" element={<ExperiencePage/>}/>
      </Routes>
  </Router>
    </>
  );
}

export default App;
