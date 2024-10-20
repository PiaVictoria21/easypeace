// File: src/components/AcceptReject.jsx
import React from 'react';

function AcceptReject({ peaceMessage, onResult }) {
    const handleAccept = () => {
        onResult('accepted');
    };

    const handleReject = () => {
        onResult('rejected');
    };

    return (
        <div>
            <h2>Peace Proposal</h2>
            <p>{peaceMessage}</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
        </div>
    );
}

export default AcceptReject;