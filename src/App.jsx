import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import ReactSpeedometer from 'react-d3-speedometer';
import CheckSpendScore from './CheckSpendScore';

function App() {
  const [score, setScore] = useState(0);

  return (
    (score==0)? <CheckSpendScore score={score} setScore={setScore}/> : <Header score={score}/> 
  );
}

function Header({score}){
  return <ReactSpeedometer value={score} minValue={500} maxValue={750}/>
}



export default App
