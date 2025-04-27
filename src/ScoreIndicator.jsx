import ReactSpeedometer from 'react-d3-speedometer';
import { useNavigate } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './ScoreIndicator.css';

function ScoreIndicator({score, splitup, scoreName, showSpendScorePrompt, showTradScorePrompt}) {
    // Transform splitup data for radar chart
    // const radarData = Object.entries(splitup).map(([category, value]) => ({
    //     category: category.charAt(0).toUpperCase() + category.slice(1),
    //     value: value
    // }));
    const navigate = useNavigate();

    const getScoreCategory = (score) => {
        if (score >= 700) return ['Excellent', '#10B981'];
        if (score >= 650) return ['Good', '#3B82F6'];
        if (score >= 600) return ['Fair', '#F59E0B'];
        return ['Poor', '#EF4444'];
    };

    const [category, color] = getScoreCategory(score);

    return (
        <div className="score-indicator-container">
            <div className="score-content">
                <div className="header-section">
                    <h1>Your {scoreName} Results</h1>
                    <p className="subtitle">Based on your spending patterns analysis</p>
                </div>

                <div className="score-section">
                    <div className="speedometer-container">
                        <h2>Overall Score</h2>
                        <ReactSpeedometer
                            value={score}
                            minValue={scoreName=="SpendScore™" ? 500 : 300}
                            maxValue={scoreName=="SpendScore™" ? 750 : 900}
                            segments={4}
                            currentValueText={`${score} - ${category}`}
                            textColor="#1F2937"
                            valueTextFontSize="24px"
                            segmentColors={['#EF4444', '#F59E0B', '#3B82F6', '#10B981']}
                            width={300}
                            height={200}
                        />
                    </div>

                    {/* <div className="radar-container">
                        <h2>Spending Categories Analysis</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={radarData}>
                                <PolarGrid stroke="#E5E7EB" />
                                <PolarAngleAxis 
                                    dataKey="category" 
                                    tick={{ fill: '#4B5563' }}
                                />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                <Radar
                                    name="Spending Pattern"
                                    dataKey="value"
                                    stroke={color}
                                    fill={color}
                                    fillOpacity={0.6}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div> */}
                </div>

                {/* <div className="insights-section">
                    <h2>Key Insights</h2>
                    <div className="insights-grid">
                        {Object.entries(splitup).map(([category, value]) => (
                            <div key={category} className="insight-card">
                                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                                <p className="score-value">{value}%</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {(showSpendScorePrompt || showTradScorePrompt) && (
                    <div className="prompt-section">
                        <h2>Want a more complete picture?</h2>
                        <p>
                            {showSpendScorePrompt 
                                ? "Check your SpendScore™ to understand your spending habits"
                                : "Calculate your Traditional Score for a comprehensive view"}
                        </p>
                        <button 
                            className="prompt-button"
                            onClick={() => navigate(showSpendScorePrompt ? '/spend-score' : '/traditional-score')}
                        >
                            Calculate {showSpendScorePrompt ? "SpendScore™" : "Traditional Score"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ScoreIndicator;