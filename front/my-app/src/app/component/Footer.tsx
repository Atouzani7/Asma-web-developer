import Image from "next/image";

const Footer = () => {
    return (

        <footer className="flex flex-wrap gap-4 justify-between items-center p-4 w-full font-[family-name:var(--font-geist-sans)] text-[#000000] dark:text-[#ffffff] border-t-2 border-[#eaeaea] dark:border-[#333333">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Informations principales */}
                <Image
                    //             // className="dark:invert";
                    src="/logoAT.svg"
                    alt="Logo"
                    width={30}
                    height={6.33}
                    priority
                />
                <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-bold">Asma Touzani</h4>
                    <p>Développeur Web</p>
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/Atouzani7">
                        <Image src="/github.png" alt="Github" width={30} height={30} /></a>
                    <a href="https://www.linkedin.com/in/asma-touzani-077268251/">
                        <Image src="/linkedin.png" alt="Linkedin" width={30} height={30} /></a>
                    <a href="https://www.linkedin.com/in/asma-touzani-077268251/"></a>
                </div>

                {/* Copyright */}
                <p className="text-sm">&copy; 2025 Asma Touzani. Tous droits réservés.</p>
            </div>
        </footer>




    );
};

export default Footer;