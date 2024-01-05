import React from 'react'
import ProjectCard from './ProjectCard'
import { v4 as uuidv4 } from 'uuid';


import projectsArray from '../assets/ProjectInfo'

const Projects = () => {

  return (
    <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap" , marginTop:"1%"}}>
     {
       projectsArray.map((detailsObj  )=>{
        return <ProjectCard key ={uuidv4()} obj={detailsObj}></ProjectCard>
       })
     }
    </div>
  )
}

export default Projects