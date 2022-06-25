import React,{useReducer} from 'react';
import './App.css';

function reducer(state,action)
{
  switch(action.type) {
    case "increment":return state+1;
    case "decrement":return state-1;
    default:return state
  }
}

function App() {
   const [count, dispatch] = useReducer(reducer,0)
   
    const increment=()=>{
       dispatch({type:'increment'})
    }
    const decrement=()=>{
        dispatch({type:'decrement'})
    }

  return (
    <div className="App">
       <div>Count:{count}</div>
       <button onClick={increment}>Increment Count</button>
       <button onClick={decrement}>Decrement Count</button>
    </div>
  );
}

export default App;
