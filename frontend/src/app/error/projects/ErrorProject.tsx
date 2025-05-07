"use client";
import React from "react";
import Image from "next/image";

const ErrorPage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-black">
                <Image
                    src="/logoAT.svg"
                    alt="Error 404"
                    width={300}
                    height={300}
                    className="mb-4"
                />
                <h1 className="text-4xl font-bold text-lila-100">404</h1>
                <p className="mt-4 text-lg text-lila-100">Page Not Found</p>
                <button
                    className="mt-6 px-4 py-2 bg-greenPastel-100 text-black rounded hover:bg-blue-600"
                    onClick={() => window.history.back()}
                >
                    Revenir à la page précédente
                </button>
            </div>
        </>
    );
};

export default ErrorPage;