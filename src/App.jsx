import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css';
import Home from './components/Home';
import CheckSpendScore from './CheckSpendScore';
import ScoreIndicator from './ScoreIndicator';
import CheckTraditionalScore from './components/CheckTraditionalScore';
import Dashboard from './components/Dashboard';

function App() {
  const [spendScore, setSpendScore] = useState(0);
  const [tradScore, setTradScore] = useState(0);
  const [splitup, setSplitup] = useState({});

  const bothScoresCalculated = spendScore !== 0 && tradScore !== 0;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/spend-score"
          element={
            bothScoresCalculated ? (
              <Navigate to="/dashboard" />
            ) : spendScore === 0 ? (
              <CheckSpendScore 
                score={spendScore} 
                setScore={setSpendScore} 
                setSplitup={setSplitup}
                showTradScorePrompt={tradScore === 0}
              />
            ) : (
              <ScoreIndicator 
                score={spendScore} 
                splitup={splitup} 
                scoreName="SpendScore™"
                showTradScorePrompt={tradScore === 0}
              />
            )
          }
        />
        <Route
          path="/traditional-score"
          element={
            bothScoresCalculated ? (
              <Navigate to="/dashboard" />
            ) : tradScore === 0 ? (
              <CheckTraditionalScore 
                score={tradScore} 
                setScore={setTradScore}
                showSpendScorePrompt={spendScore === 0}
              />
            ) : (
              <ScoreIndicator 
                score={tradScore} 
                splitup={splitup} 
                scoreName="Traditional Score"
                showSpendScorePrompt={spendScore === 0}
              />
            )
          }
        />
        <Route 
          path="/dashboard" 
          element={
            bothScoresCalculated ? (
              <Dashboard spendScore={spendScore} tradScore={tradScore} />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;