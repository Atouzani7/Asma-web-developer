import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-background text-text-base">
            <Image src="/logoAT.svg" alt="Logo" width={90} height={19} />
            <ul className="flex space-x-4">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}