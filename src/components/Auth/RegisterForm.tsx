import React, { useState } from 'react'
import pb from '../../services/pocketbase';
import { Input, TextField } from '@mui/joy';

function RegisterForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        await pb.collection('users').create({
            email: username,
            password: password,
            passwordConfirm: password,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="login-form">
                <div>

                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)}
                        required
                        component="input"
                    />

                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default RegisterForm