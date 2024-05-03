
import { useEffect, useState } from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Exercises from './components/Exercises/Exercises';
import { addToDb } from './utilities/localDB';
import Blog from './components/Blog/Blog';

function App() {
  const [exerciseTime, setExerciseTime] = useState(0);
  const handleAddCart = (time) => {
    // console.log('1. App.js')
    setExerciseTime(exerciseTime + parseInt(time));
  }
  return (
    <div className="App">
      <Exercises handleAddCart={handleAddCart}></Exercises>
      <Aside exerciseTime={exerciseTime}></Aside>
      <Blog></Blog>
    </div>
  );
}

export default App;
