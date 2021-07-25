const initialState={
       list:[]
}
 

const TodoReducers=(state=initialState,action)=>{
      switch (action.type) {
          case "ADD-TODO":
              return{
                  ...state,
                  list:[
                      ...state.list,
                      {
                          id:action.payload.id,
                          data:action.payload.data
                      }
                  ]
                    
              }
              case "DELETE_TODO":
                  const todos=state.list.filter((event)=>event.id !== action.id)
                  return{
                         ...state,
                         list:todos,
                  }
                  case "REMOVE_ALL":
                    return{
                           ...state,
                           list:[],
                    }
            
      
          default:
              return state
      }
}

export default TodoReducers;