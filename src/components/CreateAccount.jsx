// File: src/components/CreateAccount.jsx
import React from 'react';
import { usePrivy } from '@privy-io/react-auth';

function CreateAccount({ onNext }) {
    const { user } = usePrivy();

    return (
        <div>
            <h2>Account Created</h2>
            <p>Welcome, {user.email || user.wallet.address}!</p>
            <button onClick={onNext}>Continue</button>
        </div>
    );
}

export default CreateAccount;