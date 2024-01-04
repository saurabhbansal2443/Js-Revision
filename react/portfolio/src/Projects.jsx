import React from 'react'
import ProjectCard from './ProjectCard'

import projectsArray from '../assets/ProjectInfo'

const Projects = () => {

  return (
    <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap" , marginTop:"1%"}}>
      <ProjectCard obj={projectsArray[0]}></ProjectCard>
      <ProjectCard obj={projectsArray[1]}></ProjectCard>
      <ProjectCard obj={projectsArray[2]}></ProjectCard>
      <ProjectCard obj={projectsArray[3]}></ProjectCard>
      <ProjectCard obj={projectsArray[4]}></ProjectCard>
    </div>
  )
}

export default Projects