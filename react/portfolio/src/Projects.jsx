import React from 'react'
import ProjectCard from './ProjectCard'
import { v4 as uuidv4 } from 'uuid';


import projectsArray from '../assets/ProjectInfo'

const Projects = ({theme}) => {
  console.log(theme)
  return (
    <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap" , paddingTop:"1%", backgroundColor:theme=="light"?"white":"black" ,minHeight:"100vh"}}>
     {
       projectsArray.map((detailsObj  )=>{
        return <ProjectCard theme={theme} key ={uuidv4()} obj={detailsObj}></ProjectCard>
       })
     }
    </div>
  )
}

export default Projects