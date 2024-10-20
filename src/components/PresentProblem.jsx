// File: src/components/PresentProblem.jsx
import React, { useState } from 'react';

function PresentProblem({ onSubmit }) {
    const [problem, setProblem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(problem);
    };

    return (
        <div>
            <h2>What is the issue you are facing?</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Describe the conflict..."
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PresentProblem;