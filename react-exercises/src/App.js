import './App.scss';
import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  const [word, setWord] = useState("");

  const sayHello = () => setWord("Hello");

  const increment = () => setCount(count+1);

  const decrement = () => setCount(count-1);

  return (
    <div className="App">
      <h1 className ="Title">Number:</h1>
      <h2 className="SayHello" >{word}</h2>
      <p className="Counter">{count}</p>
      <button className="Increment" onClick={increment}>+</button>
      <button className="Decrement" onClick={decrement}>-</button>
      <button className="Hello" onClick={sayHello}>Say Hi to me :&#41;</button>

      
      {/* TO BE USED LATER */}
      {/* <Counter />
      <Increment />
      <Decrement /> */}
    </div>
  );
}

// TO BE USED LATER
// const Counter = () => {
//   return (    
//       <p className="Counter">0</p>
//   );
// } 

// const Increment = () => {
//   return (
    
//       <p className="Increment">+</p>

//   );
// }

// const Decrement = () => {
//   return (
    
//       <p className="Decrement">-</p>

//   );
// }

export default App;
