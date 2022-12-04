import React from 'react'

const TodoFilter = ({changeFilter, filter}) => {
  return (
    <section className='container mx-auto' >
    <div className='bg-white mt-8 p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800 transition-all duration-1000'>
        <button className={` ${filter === "all" ? "text-blue-600 hover:text-gray-500" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter('all')}>All</button>
        <button className={` ${filter === "all" ? "text-blue-600 hover:text-gray-500" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter('active')}>Active</button>
        <button className={` ${filter === "all" ? "text-blue-600 hover:text-gray-500" : "text-gray-400 hover:text-blue-500"}`} onClick={() => changeFilter('completed')}>Completed</button>
    </div>
    </section>
  )
}

export default TodoFilter
