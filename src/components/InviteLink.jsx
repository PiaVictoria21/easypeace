// File: src/components/InviteLink.jsx
import React from 'react';
import { usePrivy } from '@privy-io/react-auth';

function InviteLink({ onNext }) {
    const { user } = usePrivy();

    return (
        <div>
            <h2>Are you willing to resolve a conflict with {user.email || 'another user'} in full privacy?</h2>
            <button onClick={onNext}>Yes, I'm willing</button>
        </div>
    );
}

export default InviteLink;