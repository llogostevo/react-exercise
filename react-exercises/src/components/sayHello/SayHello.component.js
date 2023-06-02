import './SayHello.scss';

import {useState} from 'react';

const SayHello = () => {
  
    const [word, setWord] = useState("");
    
    const hello = () => setWord("Hello");
  
    return(      
      <div className="sayhello-container">
        <h2 className="SayHello" >{word}</h2>
        <button className="Hello" onClick={hello}>Say Hi to me :&#41;</button>
      </div>
    );
  }

export default SayHello;