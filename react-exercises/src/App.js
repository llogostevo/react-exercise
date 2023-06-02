import './App.scss';
import {useState} from 'react';

import Counter from './components/counter/Counter.component'


const App = () => {
  
  const [word, setWord] = useState("");
  const sayHello = () => setWord("Hello");

  return (
    <div className="App">
      <h1 className ="Title">Number:</h1>
      <h2 className="SayHello" >{word}</h2>
      <Counter />
      <button className="Hello" onClick={sayHello}>Say Hi to me :&#41;</button>

      
    </div>
  );
  // @refresh reset
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
