import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodos]= useState([])
    //for adding the todo activities when submitting form
    const addTodo = (todo)=>{
        setTodos([...todos,{id : uuidv4(), task: todo, completed : false, isEditing:false}])
        console.log(todos)
    }
    // for mark as todo list completed and viseversa when clicking todo list activity
    const toggleComplete = id => {
        setTodos(todos.map(todo=> todo.id === id?{...todo,completed:!todo.completed}:todo))
    }

    // for deleting todo list from the todos state when clicking delete icon
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }  
    
    //for editing todo list from todos state when clicking edit icon
    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}:todo))
    }
    const editTask = (task,id)=>{
        setTodos(todos.map(todo=>todo.id === id?{
            ...todo,task,isEditing:!todo.isEditing
        }:todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo,index)=>(
            todo.isEditing?(
                <EditTodoForm editTodo={editTask} task = {todo}/>
            ):(
                <Todo task = {todo}  key = {index} toggleComplete = {toggleComplete} deleteTodo = {deleteTodo} editTodo = {editTodo}/>
            )
              
        ))}
      
    </div>
  )
}
