import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const onChange = (e)=> setTodo(e.target.value)
  const onSubmit = (e)=> {
    e.preventDefault()
    if (todo === "") {
      return
    }
    setTodos((currentArray)=> [todo, ...currentArray])
    setTodo("")
  }
  return(
    <div>
      <h1>My Todo List ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value = {todo} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index)=> <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App;
