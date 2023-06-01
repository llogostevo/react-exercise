import './App.scss';
import useCounter from 

// ERROR WITH THIS HOOK
function useCounter(counter) {
  
  const increment = (counter) => counter++;

  const decrement = (counter) => counter--;

  return {counter, increment, decrement};
}

const App = () => {
  // THIS CODE NEEDS CHECKING
  const {counter, increment, decrement} = useCounter(counter);
  return (
    <div className="App">
      <h1 className="Title">Number:</h1>
      <p className="Counter">{counter}</p>
      <p className="Increment" onClick={increment}>+</p>
      <p className="Decrement" onClick={decrement}>-</p>
      
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
