import React from "react";
import '../Login.css';

export function Profile(){
    const handleLogout = () => {
        window.location.href = "http://localhost:3000/auth/logout";
    };
    return (
        <main>
            <div>
                <button onClick={handleLogout} className="oauthButton">
                    Logout
                    <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m6 17 5-5-5-5" />
                        <path d="m13 17 5-5-5-5" />
                    </svg>
                </button>
            </div>
        </main>
    )
}