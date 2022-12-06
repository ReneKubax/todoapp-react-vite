import {Droppable, Draggable } from '@hello-pangea/dnd'
import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <Droppable droppableId='todos'>
    {(dropabbleProvided)=>(
      <div ref={dropabbleProvided.innerRef}
      {...dropabbleProvided.droppableProps}
       className='bg-white rounded-t-md overflow-hidden [&>article]:p-4 mt-8 '>
      {todos.map((todo, index)=>(
        <Draggable  key={todo.id} index={index} draggableId={`${todo.id}`}>
        {
          (dragabbleProvided) => (
            <TodoItem 
            todo={todo} 
            removeTodo={removeTodo} 
            updateTodo={updateTodo}
            ref={dragabbleProvided.innerRef}
            {...dragabbleProvided.dragHandleProps}
            {...dragabbleProvided.draggableProps}
            />
          )
        } 
       </Draggable>
      ))}
 
      {dropabbleProvided.placeholder}
     </div>
    )}
   
    </Droppable>
  )
}

export default TodoList
