# Dual Credit Scoring System

A modern web application that provides a comprehensive credit scoring system by analyzing both traditional credit factors and spending patterns. The application calculates two distinct scores:

1. **Traditional Credit Score**: Based on conventional factors like income, debt, and payment history
2. **SpendScore™**: An AI-enhanced score that analyzes spending patterns from bank statements

## Features

- Modern, responsive UI built with React
- Real-time credit score calculation
- PDF bank statement analysis
- Interactive dashboards with data visualization
- Comprehensive financial health assessment
- Secure data handling

## Prerequisites

Before running the application, make sure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dhruvrjain/dual_credit_scoring_frontend.git
cd dual_credit_scoring_frontend
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### Development Server
```bash
npm run dev
```
Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build
```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally.

### Lint
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## Project Structure

```
dual_credit_scoring_frontend/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── CheckTraditionalScore.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── CheckSpendScore.jsx
│   └── ScoreIndicator.jsx
├── public/
└── package.json
```

## Dependencies

- React (v18.3.1)
- React Router DOM (v7.3.0)
- Axios (v1.7.7)
- React D3 Speedometer (v2.2.1)
- Recharts (v2.13.3)

## Backend Requirements

This frontend application requires a backend server running at `http://127.0.0.1:8000`. Make sure the backend server is running before using the application.

For instructions on the backend app, visit [Dual Credit Scoring Backend](https://github.com/dhruvrjain/dual_credit_scoring_backend)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped with this project