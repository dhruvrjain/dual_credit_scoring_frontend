import axios from "axios";
import { useState } from "react";
import "./CheckSpendScore.css";

function CheckSpendScore({score, setScore, setSplitup, showSpendScorePrompt, showTradScorePrompt}) {
    const [file, setFile] = useState(null);
    const [alert, setAlert] = useState('');
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState('');

    function handleChange(e) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile?.name || '');
        setAlert('');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if(!file) {
            setAlert('Please select a PDF bank statement first');
            return;
        }

        setLoading(true);
        const formdata = new FormData();
        formdata.append('file', file);

        try {
            const response = await axios.post('http://127.0.0.1:8000/predictScore2', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            setScore(response.data.ans);
            setSplitup(response.data.categorized_data);
        } catch(e) {
            setAlert('Failed to process your bank statement. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="spend-score-container">
            <div className="score-content">
                <div className="header-section">
                    <h1>SpendScore™ Calculator</h1>
                    <p className="subtitle">Discover your spending habits score based on your bank statements</p>
                </div>

                <div className="info-box">
                    <h3>How it works</h3>
                    <ul>
                        <li>Upload your bank statement in PDF format</li>
                        <li>Our AI analyzes your spending patterns</li>
                        <li>Get detailed insights about your financial behavior</li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="upload-form">
                    <div className="file-upload-container">
                        <div className="file-input-wrapper">
                            <input 
                                type="file" 
                                name="file" 
                                id="statementFile" 
                                accept="application/pdf" 
                                onChange={handleChange}
                                className="file-input"
                            />
                            <label htmlFor="statementFile" className="file-label">
                                {fileName ? fileName : 'Choose PDF Statement'}
                            </label>
                        </div>
                        <div className="security-note">
                            <span className="lock-icon">🔒</span>
                            Your statements are encrypted and secure
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={`submit-button ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Calculate Score'}
                    </button>

                    {alert && <div className="alert-message">{alert}</div>}
                </form>
            </div>
        </div>
    );
}

export default CheckSpendScore;