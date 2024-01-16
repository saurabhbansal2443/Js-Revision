import { createSlice  ,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : [{text:"I am a dummy Task" , id:12}]
}

let handleTodoAdder = (state , action)=>{
     let newTodoObj = {
        text:action.payload,
        id : nanoid()
     }
     state.todos = [...state.todos , newTodoObj];
}

let handleTodoRemover = (state , action )=>{
    let rid = action.payload
    state.todos = state.todos.filter((todoObj)=>{
        return todoObj.id != rid;
    })
}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers : {
        addTodo : handleTodoAdder,
        removeTodo : handleTodoRemover
    }

})

export const {addTodo , removeTodo} = todoSlice.actions;

export default todoSlice.reducer;