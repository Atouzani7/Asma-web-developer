"use client";

export default function TestEnv() {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL); // Test

    return (
        <div>
            <h1>Test des Variables d&apos;Environnement</h1>
            <p>API URL: {process.env.NEXT_PUBLIC_API_URL}</p>



        </div>
    );
}
