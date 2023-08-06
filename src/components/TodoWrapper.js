import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodos]= useState([])
    //for adding the todo activities when submitting form
    const addTodo = (todo)=>{
        setTodos([...todos,{id : uuidv4(), task: todo, completed : false, isEditing:false}])
        console.log(todos)
    }
    // for mark as todo list completed and viseversa by clicking todo list activity
    const toggleComplete = id => {
        setTodos(todos.map(todo=> todo.id === id?{...todo,completed:!todo.completed}:todo))
    }

    // for deleting todo list from the todos state by clicking delete icon
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }   
  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo,index)=>(
              <Todo task = {todo}  key = {index} toggleComplete = {toggleComplete} deleteTodo = {deleteTodo}/>
        ))}
      
    </div>
  )
}
