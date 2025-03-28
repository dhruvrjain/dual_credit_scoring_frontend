import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Dual Credit Scoring System</h1>
        <p className="subtitle">Discover a more comprehensive way to assess your creditworthiness</p>
      </header>

      <main className="main-content">
        <div className="info-section">
          <h2>Why Choose Our Dual Scoring System?</h2>
          <p>
            Traditional credit scores don't tell the whole story. Our innovative dual scoring
            system provides a more complete picture of your financial health by analyzing both
            traditional factors and your spending behavior.
          </p>
        </div>

        <div className="score-options">
          <div className="score-card">
            <h3>Traditional Credit Score</h3>
            <p>
              Based on conventional factors like income, debt, and payment history.
              Perfect for understanding your current credit standing.
            </p>
            <button 
              className="score-button traditional"
              onClick={() => navigate('/traditional-score')}
            >
              Check Traditional Score
            </button>
          </div>

          <div className="score-card">
            <h3>Spending Score</h3>
            <p>
              Our innovative approach analyzes your spending patterns from bank statements
              to provide a more nuanced view of your financial responsibility.
            </p>
            <button 
              className="score-button spending"
              onClick={() => navigate('/spend-score')}
            >
              Check Spending Score
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;