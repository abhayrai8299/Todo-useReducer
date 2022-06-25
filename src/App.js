import React,{useReducer,useState} from 'react';
import './App.css';

function reducer(state,action)
{
  switch(action.type)
  {
    case "add-todo":
      return {
         todos:[...state.todos,{text:action.text,completed:false}]
      }
      case "toggle-todo":
        return{
          todos:state.todos.map((t,idx)=>
          idx===action.idx? {...t,completed:!t.completed}:t)
        }
        case "delete-todo":
          return {
            todos:state.todos.filter((t,idx)=>idx!==action.idx)
          }
    default: return state;
  
  }

}

function App() {
   const [{todos,todoCount}, dispatch] = useReducer(reducer,{
    todos:[],
    todoCount:0
   })
   const [text,setText]=useState();
   
   

  return (
    <div className="App">
       <form onSubmit={e=>{
        e.preventDefault();
        dispatch({type:'add-todo',text})
        setText("")
       }}>
          <input type="text" placeholder="Add a Task" value={text}
            onChange={e=>setText(e.target.value)}/>
           
        </form>
        {todos.map((t,idx)=>(
            <div key={idx}
            style={{textDecoration:t.completed?"line-through":""}}
            onClick={()=>dispatch({type:'toggle-todo',idx})}
            onDoubleClick={()=>dispatch({type:"delete-todo",idx})}
            >
               {t.text}
            </div>
        ))}

       <pre>{JSON.stringify(todos,null,2)}</pre>
    </div>
  );
}

export default App;
