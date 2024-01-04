import React from 'react'
import ProjectCard from './ProjectCard'

import projectsArray from '../assets/ProjectInfo'

const Projects = () => {

  return (
    <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap" , marginTop:"1%"}}>
     {
       projectsArray.map((detailsObj)=>{
        return <ProjectCard obj={detailsObj}></ProjectCard>
       })
     }
    </div>
  )
}

export default Projects