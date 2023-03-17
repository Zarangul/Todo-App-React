import React from 'react'

function List({setTodos, todos}) {
    const handleDelete = (todo)=>{
        setTodos(todos.filter(item=>item!==todo))
    }
  return (
    <div>
        {
            todos.map(todo=>{
                return (
                    <h2>{todo} <span onClick={()=>handleDelete(todo)}>SIL</span></h2>
                )
            })
        }
    </div>
  )
}

export default List