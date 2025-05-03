'use client';
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const smoothScroll = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
            setIsMenuOpen(false); // Ferme le menu mobile après clic
        }
    };

    return (
        // <header className="w-full h-20 flex items-center justify-between px-4 bg-yellow-300 shadow-md relative z-10">
        <header className="fixed bg-opacity-70 top-0 left-0 right-0 w-full h-20 flex items-center justify-between px-4 bg-yellow-300 shadow-md z-50">

            {/* Logo */}
            <Image
                src="/logoAT.svg"
                alt="logo"
                width={95}
                height={20}
                priority
                className="z-20"
            />

            {/* Bouton hamburger pour mobile */}
            <button
                className="md:hidden text-black z-20"
                onClick={toggleMenu}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Navigation */}

            <nav
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } absolute top-20 left-0 w-full bg-lila-100 md:bg-transparent z-50 md:static md:block md:w-auto`}
            >
                <ul className="flex flex-col md:flex-row w-full md:w-auto text-center">
                    {[
                        { id: 'introdution', label: 'Introduction' },
                        { id: 'skills', label: 'Compétences' },
                        { id: 'projects', label: 'Projets' },
                        { id: 'contact', label: 'Contact' },
                    ].map(({ id, label }) => (
                        <li key={id} className="md:mx-2 my-2 md:my-0">
                            <button
                                onClick={() => smoothScroll(id)}
                                className="w-full text-black hover:text-black hover:bg-greenPastel-100 px-4 py-2 rounded"
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>


        </header>
    );
}
