// File: src/App.jsx
import React, { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import InviteLink from './components/InviteLink';
import LandingPage from './components/LandingPage';
import CreateAccount from './components/CreateAccount';
import PresentProblem from './components/PresentProblem';
import AIRephrase from './components/AIRephrase';
import PeaceMessage from './components/PeaceMessage';
import AcceptReject from './components/AcceptReject';

function App() {
  const { ready, authenticated, login } = usePrivy();
  const [currentStep, setCurrentStep] = useState('invite');
  const [userType, setUserType] = useState(null);
  const [problem, setProblem] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [peaceMessage, setPeaceMessage] = useState('');

  const nextStep = (step) => setCurrentStep(step);

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return (
      <div>
        <h1>Welcome to EasyPeace</h1>
        <p>Please log in to continue</p>
        <button onClick={login}>Log In</button>
      </div>
    );
  }

  return (
    <div className="App">
      {currentStep === 'invite' && <InviteLink onNext={() => nextStep('landing')} />}
      {currentStep === 'landing' && <LandingPage onNext={() => nextStep('create-account')} />}
      {currentStep === 'create-account' && <CreateAccount onNext={() => nextStep('present-problem')} />}
      {currentStep === 'present-problem' && (
        <PresentProblem
          onSubmit={(problem) => {
            setProblem(problem);
            nextStep('ai-rephrase');
          }}
        />
      )}
      {currentStep === 'ai-rephrase' && (
        <AIRephrase
          problem={problem}
          onAgree={(suggestion) => {
            setAiSuggestion(suggestion);
            nextStep('peace-message');
          }}
        />
      )}
      {currentStep === 'peace-message' && (
        <PeaceMessage
          onSend={(message) => {
            setPeaceMessage(message);
            nextStep('accept-reject');
          }}
        />
      )}
      {currentStep === 'accept-reject' && (
        <AcceptReject
          peaceMessage={peaceMessage}
          onResult={(result) => {
            // Handle final result
            console.log(result);
          }}
        />
      )}
    </div>
  );
}

export default App;

// File: src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrivyProvider } from '@privy-io/react-auth';
import App from './App';
import './index.css';

const PRIVY_APP_ID = 'your-privy-app-id'; // Replace with your actual Privy app ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrivyProvider
      appId={PRIVY_APP_ID}
      onSuccess={(user) => {
        console.log(`User ${user.id} logged in!`);
      }}
      config={{
        loginMethods: ['email', 'google', 'twitter'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);