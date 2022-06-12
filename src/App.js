import React,{useState,useReducer} from 'react';
import Form from './Form';
import './App.css';



const ACTIONS = {
  INCREMENT:'increment',
  DECREMENT:'decrement'
}



function App() {

  const reducer = (countState,action) =>{
    switch(action.type){
      case ACTIONS.INCREMENT:
        return{count:countState.count+1};
      case ACTIONS.DECREMENT:
        return{count:countState.count - 1};
      default:
        return {countState}  
    }
  } 

  const [countState,dispatch] = useReducer(reducer,{count:0})
  const [counter,setCounter] = useState(0);



  function increment() {
    dispatch({type:increment})
  }
  function decrement() {
    dispatch(decrement)
  }
  return (
    <div className="App">
      <span onClick={increment}>+</span>
      <span>{counter}</span>
      <span onClick={decrement}>-</span>
    </div>
  );
}

export default App;
