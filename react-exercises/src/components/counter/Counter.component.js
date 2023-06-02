import {useState} from 'react';
import './Counter.scss';

const Counter = () =>{

    const [count, setCount] = useState(0);
    const increment = () => setCount(count+1);
  
    const decrement = () => setCount(count-1);
  
    return (
      <div className="Counter">
        <p className="theCount">{count}</p>
        <button className="Increment" onClick={increment}>+</button>
        <button className="Decrement" onClick={decrement}>-</button>
      </div>
    )
  }

  export default Counter;
