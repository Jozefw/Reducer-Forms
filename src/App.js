import React,{useReducer} from 'react';
import Form from './Form';
import './App.css';


function reducer(countState,action){
  switch(action.type){
    case ACTIONS.INCREMENT:
      return{count:countState.count+1};
      case ACTIONS.DECREMENT:
        return{count:countState.count - 1};
        default:
          return {countState}  
        }
      } 
      
      const ACTIONS = {
        INCREMENT:'increment',
        DECREMENT:'decrement'
      }
function App() {

  const [countState,dispatch] = useReducer(reducer,{count:0})

  function increment() {
    dispatch({type:ACTIONS.INCREMENT})
  }
  function decrement() {
    dispatch({type:ACTIONS.DECREMENT})
  }
  return (
    <div className="App">
      <span onClick={increment}>+</span>
      <span>{countState}</span>
      <span onClick={decrement}>-</span>
      poo
    </div>
  );
}

export default App;
