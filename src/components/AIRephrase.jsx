// File: src/components/AIRephrase.jsx
import React, { useState, useEffect } from 'react';

function AIRephrase({ problem, onAgree }) {
    const [rephrased, setRephrased] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Simulate AI rephrasing and suggestion generation
        setRephrased(`AI rephrased: ${problem}`);
        setSuggestions([
            "Suggestion 1: Try to understand the other person's perspective",
            "Suggestion 2: Communicate your feelings clearly and calmly",
            "Suggestion 3: Look for common ground and shared interests"
        ]);
    }, [problem]);

    return (
        <div>
            <h2>AI Rephrasing and Suggestions</h2>
            <p>{rephrased}</p>
            <h3>Suggestions:</h3>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
            <button onClick={() => onAgree(suggestions)}>Agree with Suggestions</button>
        </div>
    );
}

export default AIRephrase;