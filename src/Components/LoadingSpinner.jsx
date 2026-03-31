import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <h1 className="text-5xl font-bold flex items-center gap-2">
                L
                <span className="inline-block w-12 h-12">
                    <img
                        src="https://i.ibb.co.com/s9cTWgYJ/logo.png"
                        alt="loading..."
                        className="w-full h-full animate-spin"
                    />
                </span>
                ADING
            </h1>
        </div>
    );
};

export default LoadingSpinner;