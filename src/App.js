import React,{useState,useReducer} from 'react';
import './App.css';

function App() {

  const [] = useReducer()
  const [counter,setCounter] = useState(0);



  function increment() {
    setCounter(counter + 1)
  }
  function decrement() {
    setCounter(counter -1)
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
