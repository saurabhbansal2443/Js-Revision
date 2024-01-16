import React , {useState  } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addTodo  , removeTodo} from './app/todoSlice';


const App = () => {
  let [ input , setInput] = useState("");
  let dispatch = useDispatch();
  const taskArray = useSelector((state)=> state.todos)

  return (
    <div>
      <input type="text" onChange={(event)=>setInput(event.target.value)} value={input} />
      <button onClick={()=>{dispatch(addTodo(input))}} > Add </button>

      <ul>
        {
          taskArray.map((obj)=>{
            return <li key={obj.id}> {obj.text} <button onClick={()=>{dispatch(removeTodo(obj.id))}}> Delete </button></li>
          })
        }
      </ul>
    </div>

  )
}

export default App
