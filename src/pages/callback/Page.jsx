import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function CallbackPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = searchParams.get('code');

        async function handleExchange() {
            if (!code) return;

            try {
                // 1. Exchange Code for Access Token
                const params = new URLSearchParams({
                    client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
                    client_secret: import.meta.env.VITE_DISCORD_CLIENT_SECRET,
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: 'http://localhost:3000/callback',
                });

                const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
                    method: 'POST',
                    body: params,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                });

                const tokenData = await tokenResponse.json();

                // 2. Use Token to get User Profile
                const userResponse = await fetch('https://discord.com/api/users/@me', {
                    headers: { Authorization: `Bearer ${tokenData.access_token}` },
                });

                const userData = await userResponse.json();

                // 3. Save to localStorage so Profile Page can read it
                localStorage.setItem('discord_user', JSON.stringify(userData));

                // 4. Go to profile
                navigate('/profile/me');
            } catch (error) {
                console.error("Auth failed", error);
            }
        }

        handleExchange();
    }, [code, navigate]);

    return (
        <div className="min-h-screen bg-beer-dark text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Fetching Discord Profile...</h1>
        </div>
    );
}
