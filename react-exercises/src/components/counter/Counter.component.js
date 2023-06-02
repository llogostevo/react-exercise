import {useState} from 'react';

const Counter = () =>{

    const [count, setCount] = useState(0);
    const increment = () => setCount(count+1);
  
    const decrement = () => setCount(count-1);
  
    return (
      <div>
        <p className="Counter">{count}</p>
        <button className="Increment" onClick={increment}>+</button>
        <button className="Decrement" onClick={decrement}>-</button>
      </div>
    )
  }

  export default Counter;
