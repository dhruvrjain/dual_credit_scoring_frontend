import ReactSpeedometer from 'react-d3-speedometer';
import './Dashboard.css';

function Dashboard({ spendScore, tradScore }) {
    const getScoreCategory = (score) => {
        if (score >= 700) return ['Excellent', '#10B981'];
        if (score >= 650) return ['Good', '#3B82F6'];
        if (score >= 600) return ['Fair', '#F59E0B'];
        return ['Poor', '#EF4444'];
    };

    const [spendCategory, spendColor] = getScoreCategory(spendScore);
    const [tradCategory, tradColor] = getScoreCategory(tradScore);

    const getOverallFeedback = () => {
        const avgScore = (spendScore + tradScore) / 2;
        if (avgScore >= 700) return "Excellent financial health! Your spending habits and traditional credit metrics are both strong.";
        if (avgScore >= 650) return "Good financial standing. Consider small improvements in areas with lower scores.";
        if (avgScore >= 600) return "Fair financial health. Focus on improving both spending habits and traditional credit factors.";
        return "There's room for improvement. Consider financial counseling to boost both scores.";
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <div className="header-section">
                    <h1>Your Credit Health Dashboard</h1>
                    <p className="subtitle">Comprehensive view of your financial standing</p>
                </div>

                <div className="scores-grid">
                    <div className="score-card">
                        <h2>SpendScore™</h2>
                        <ReactSpeedometer
                            value={spendScore}
                            minValue={500}
                            maxValue={750}
                            segments={4}
                            currentValueText={`${spendScore} - ${spendCategory}`}
                            textColor="#1F2937"
                            valueTextFontSize="24px"
                            segmentColors={['#EF4444', '#F59E0B', '#3B82F6', '#10B981']}
                            width={300}
                            height={200}
                        />
                    </div>

                    <div className="score-card">
                        <h2>Traditional Score</h2>
                        <ReactSpeedometer
                            value={tradScore}
                            minValue={300}
                            maxValue={900}
                            segments={4}
                            currentValueText={`${tradScore} - ${tradCategory}`}
                            textColor="#1F2937"
                            valueTextFontSize="24px"
                            segmentColors={['#EF4444', '#F59E0B', '#3B82F6', '#10B981']}
                            width={300}
                            height={200}
                        />
                    </div>
                </div>

                <div className="feedback-section">
                    <h2>Overall Assessment</h2>
                    <p>{getOverallFeedback()}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;