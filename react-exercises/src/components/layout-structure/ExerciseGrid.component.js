import {useState} from 'react';
import './ExerciseGrid.scss'

import Counter from '../counter/Counter.component'
import SayHello from '../sayHello/SayHello.component'
import ToDo from '../todo/ToDo.component'

const ExerciseGrid = () => {
    // eventually I want to have a title in each component to say 
    // exercise 1, exercise 2
    // this should automatically increment for each creation of each component
    // then passed into the component to give each a Heading in the grid
    return(
      <div className="gridContainer">
        <Counter />
        <SayHello />
        <ToDo />
        <div>Next Exercise</div>
        <div>Next Exercise</div>
        <div>Next Exercise</div>
      </div>
    );
  }

export default ExerciseGrid;