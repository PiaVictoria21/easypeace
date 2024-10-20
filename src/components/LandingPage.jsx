// File: src/components/LandingPage.jsx
import React from 'react';

function LandingPage({ onNext }) {
    return (
        <div>
            <h1>Welcome to EasyPeace</h1>
            <p>Whether you're navigating communication barriers, emotional misunderstandings, or complex relationship dynamics, EasyPeace provides a safe space for reflection, resolution, and growth in four steps:</p>
            <ol>
                <li>Present the problem</li>
                <li>AI will rephrase it & suggest solutions</li>
                <li>Agree/Reject</li>
                <li>Send peace message</li>
            </ol>
            <button onClick={onNext}>Start Mediation</button>
        </div>
    );
}

export default LandingPage;