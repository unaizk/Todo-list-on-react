import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue]= useState("");
    const [err,setErr]= useState("")
    const handleSubmit = e=>{
        e.preventDefault();

        if (!value.trim()) {
          setErr('Please add Items....!')
          
          return;
        }
        
          addTodo(value)
          setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value = {value} placeholder='What is the task today?' 
        onChange={(e)=>{setValue(e.target.value);
        setErr('')}}/>
        <button type='submit' className='todo-btn'>Add Task</button>
        {err?<p style={{color:"red"}}>{err}</p>:""}
    </form>
  )
}
