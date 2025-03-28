import { useState } from 'react';
import axios from 'axios';
import './CheckTraditionalScore.css';

function CheckTraditionalScore({score, setScore}) {
    const [formData, setFormData] = useState({
        Num_Bank_Accounts: '',
        Outstanding_Debt: '',
        Annual_Income: '',
        Interest_Rate: '',
        Credit_Mix: '',
        Num_of_Delayed_Payment: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/predictScore1', formData);
            // Handle response
            setScore(response.data.score)
            console.log(response.data);
        } catch (err) {
            setError('Failed to calculate score. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="traditional-score-container">
            <div className="score-content">
                <div className="header-section">
                    <h1>Traditional Credit Score Calculator</h1>
                    <p className="subtitle">Calculate your credit score based on traditional parameters</p>
                </div>

                <form onSubmit={handleSubmit} className="score-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="Num_Bank_Accounts">Number of Bank Accounts</label>
                            <input
                                type="number"
                                id="Num_Bank_Accounts"
                                name="Num_Bank_Accounts"
                                value={formData.Num_Bank_Accounts}
                                onChange={handleChange}
                                min="0"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Outstanding_Debt">Outstanding Debt ($)</label>
                            <input
                                type="number"
                                id="Outstanding_Debt"
                                name="Outstanding_Debt"
                                value={formData.Outstanding_Debt}
                                onChange={handleChange}
                                min="0"
                                step="0.01"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Annual_Income">Annual Income ($)</label>
                            <input
                                type="number"
                                id="Annual_Income"
                                name="Annual_Income"
                                value={formData.Annual_Income}
                                onChange={handleChange}
                                min="0"
                                step="0.01"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Interest_Rate">Interest Rate (%)</label>
                            <input
                                type="number"
                                id="Interest_Rate"
                                name="Interest_Rate"
                                value={formData.Interest_Rate}
                                onChange={handleChange}
                                min="0"
                                step="0.01"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Num_of_Delayed_Payment">Number of Delayed Payments</label>
                            <input
                                type="number"
                                id="Num_of_Delayed_Payment"
                                name="Num_of_Delayed_Payment"
                                value={formData.Num_of_Delayed_Payment}
                                onChange={handleChange}
                                min="0"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group radio-group">
                            <label>Credit Mix</label>
                            <div className="radio-options">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="Credit_Mix"
                                        value="0"
                                        checked={formData.Credit_Mix === '0'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Good
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="Credit_Mix"
                                        value="1"
                                        checked={formData.Credit_Mix === '1'}
                                        onChange={handleChange}
                                    />
                                    Average
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="Credit_Mix"
                                        value="2"
                                        checked={formData.Credit_Mix === '2'}
                                        onChange={handleChange}
                                    />
                                    Poor
                                </label>
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={`submit-button ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Calculating...' : 'Calculate Score'}
                    </button>

                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
}

export default CheckTraditionalScore;