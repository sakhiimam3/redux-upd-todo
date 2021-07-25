
export const addTodo=(data)=>{
    
        return{
              type:"ADD-TODO",
              payload:{
                      id:new Date().getTime().toString(),
                      data:data
              }
        }
    }


    
export const DeletTodo=(id)=>{
    return{
          type:"DELETE_TODO",
          id,
    }
}


export const RemoveAll=()=>{
    return{
          type:"REMOVE_ALL"
    }
}