// components/Modal.tsx
"use client";
import { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={handleBackdropClick}>
            <div className=" rounded-lg shadow-lg w-full max-w-lg  relative" >
                <button
                    onClick={onClose}
                    className="absolute top-32 right-2 text-gray-500 hover:text-black "
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
}
