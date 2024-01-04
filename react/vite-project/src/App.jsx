import React from 'react'

let reactEle = React.createElement("h1",{},"i am created through react");
let sum = 1+2 ;
let jsxElement =  <h1 className = "head"> <img/> {3  + 12 } { 3 -1 }</h1>;


const Comp = ()=>{
  return <h1> I am h1 </h1>
}

const App = () => {
  return (
    <div>
     <Comp/>
    </div>
  )
}

export default App