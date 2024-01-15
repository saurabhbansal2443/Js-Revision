import React, { useState, useReducer } from 'react'
import Navbar from "./Navbar"
import Wrapper from './Wrapper';

const App = () => {
  // let [state , setState ] = useState(0);
  let intialState = 99;

  let reducer = (state, action) => {
    if (action.type == "INC") {
      return state + action.payload;
    } else if (action.type == "DEC") {
      return state - 1;
    } else {
      return state;
    }

  }
  let [state2, dispatch] = useReducer(reducer, intialState);
  

  return (
    <div>
      <Wrapper element={Navbar} color={"red"}></Wrapper>
      <Wrapper element={Navbar} color={"yellow"}></Wrapper>
      <Wrapper element={Navbar} color={"green"}></Wrapper>
      <h1> {state2}</h1>
      <button onClick={() => { dispatch({ type: "INC" , payload : 20  }) }}>INCREMENT </button>
      <button onClick={() => { dispatch({ type: "DEC" }) }}>DECREMENT </button>
    </div>
  )
}

export default App