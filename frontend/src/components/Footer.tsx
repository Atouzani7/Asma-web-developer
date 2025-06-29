import Image from "next/image";
export default function Footer() {
    return (
        <footer className="bg-black text-gray-200 py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                    <Image
                        src="/logoAT.svg"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="mb-4 md:mb-0"
                    />
                    {/* Informations principales */}
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold">Asma Touzani</h4>
                        <p>Développeuse Web</p>
                    </div>
                </div>


                {/* Liens sociaux */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://www.linkedin.com/in/asma-touzani-077268251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Image src="/linkerdin.png" alt="LinkedIn" width={50} height={50} className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/Atouzani7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Image src="/github.png" alt="GitHub" width={50} height={50} className="w-6 h-6" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm">&copy; 2025 Asma Touzani. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
