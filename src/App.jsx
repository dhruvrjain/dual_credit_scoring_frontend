import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Home from './components/Home';
import CheckSpendScore from './CheckSpendScore';
import ScoreIndicator from './ScoreIndicator';
import CheckTraditionalScore from './components/CheckTraditionalScore';

function App() {
  const [score, setScore] = useState(0);
  const [splitup, setSplitup] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/spend-score"
          element={
            score === 0
              ? <CheckSpendScore score={score} setScore={setScore} setSplitup={setSplitup} />
              : <ScoreIndicator score={score} splitup={splitup} scoreName={"SpendScore™"}/>
          }
        />
        <Route path="/traditional-score" element={score === 0
          ? <CheckTraditionalScore score={score} setScore={setScore}/>
          : <ScoreIndicator score={score} splitup={splitup} scoreName={"Traditional Score"}/>} />
        <Route path="/testIndicator" element={<ScoreIndicator score={678} splitup={splitup} scoreName={"Traditional Score"}  />} />
      </Routes>
    </Router>
  );
}

export default App;