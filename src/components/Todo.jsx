import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'

function Todo({todo, removeTodo, completeTodo}) {
    console.log(todo)
  return (
    <div className={todo.isComplete ? 'todo complete' : 'todo'}>
        <span onClick={() => completeTodo(todo.id)} className={'todo-text'}>
            {todo.text}
        </span>
        <AiOutlineDelete className='icon' onClick={() => removeTodo(todo.id)}/>
    </div>
  )
}

export default Todo