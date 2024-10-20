// File: src/components/PeaceMessage.jsx
import React, { useState } from 'react';

function PeaceMessage({ onSend }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(message);
    };

    return (
        <div>
            <h2>Send a Peace Message</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your peace message..."
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default PeaceMessage;