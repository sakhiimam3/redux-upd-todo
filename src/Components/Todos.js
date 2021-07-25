import React,{useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {addTodo,DeletTodo,RemoveAll}from "../store/actions/index"
const Todos = () => { 
    const [todo,setTodo]=useState('')
    const list=useSelector((state)=>state.TodoReducers.list)
    console.log(list)
    const dispatch= useDispatch()
    return (
        <div>
             <input type="text" value={todo} placeholder="Enter your todo" onChange={(e)=>{
                   setTodo(e.target.value)
             }}/> <button onClick={()=>dispatch(addTodo(todo),setTodo(""))}>Add</button>
                  <button onClick={()=>dispatch(RemoveAll())}>Remove all</button>
               {
                     list.map((e)=>{
                     return(
                   <div key={e.id}>
                    <ul>
                        <li> {e.data} <button onClick={()=>dispatch(DeletTodo(e.id))}> X </button></li>
                        </ul>
                    </div>

                           )
                     })
               }
        </div>
    )
}

export default Todos
