// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-black text-gray-200 py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Informations principales */}
                <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-bold">Asma Touzani</h4>
                    <p>Développeur Web</p>
                </div>

                {/* Liens sociaux */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://www.linkedin.com/in/asma-touzani-077268251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src="/linkerdin.png" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/Atouzani7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <img src="/github.png" alt="GitHub" className="w-6 h-6" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm">&copy; 2025 Asma Touzani. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
