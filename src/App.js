import React ,{useState}from "react";
import './App.css';

 const App =() => {

  let [score,setScore] = useState(0);
  return (
    <div className="App">
      <h1>Counter App!</h1>
      <h3>This is my {score}</h3>
      <button onClick = {()=>(score<25) ? setScore(score+1):alert("Max limit reached!")}>Increment</button>
      <button onClick = {()=>(score>0) ? setScore(score-1):alert("Lower limit reached!")}>Decrement</button>
      <button onClick = {()=>{ setScore(0)}}>Reset</button>
    </div>
  );
}

export default App;
