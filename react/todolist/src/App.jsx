import React, { useState } from 'react'

const App = () => {
  let [task, setTask] = useState("");
  let [taskArray, setTaskArray] = useState([]);
  let taskChanger = (e) => {
    setTask(e.target.value);
  }
  let handleClick = () => {
    let finalarray = [...taskArray, task];
    setTaskArray(finalarray);
    setTask("");
  }
  let handleDelete = (idx)=>{
    console.log(  idx )
    let narr = taskArray.filter((ele,i)=>{
       return idx!=i;
    })
       setTaskArray(narr);

  }
  return (
    <div>
      <div className="container">
        <input value={task} onChange={(event) => { taskChanger(event) }} />
        <button onClick={handleClick}> Add </button>
      </div>
      <ul>
        { taskArray.map((ele, idx) => {
            return <li key={idx}> {ele} <button onClick={()=>{handleDelete(idx)}}> Delete </button></li>
          }) }
      </ul>
    </div>
  )
}

export default App