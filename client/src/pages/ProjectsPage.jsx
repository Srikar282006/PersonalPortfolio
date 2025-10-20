import React,{useState} from 'react'
import { ThemeProvider } from '../components/ThemeContext' 
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectHero from '../components/ProjectHero'

const ProjectsPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  return (

    <>
    <ThemeProvider>
        <Navbar/>
      <div className="pt-20">
        <ProjectHero onTagSelect={setSelectedTag}/>
        <Projects selectedTag={selectedTag}/>
        <Footer />
      </div>
    </ThemeProvider>
    </>
  )
}

export default ProjectsPage