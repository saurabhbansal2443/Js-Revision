import React from 'react'
import { useParams } from 'react-router-dom'

const Myid = () => {
    let {resID} =  useParams();
  return (
    <div>{resID}</div>
  )
}

export default Myid