import Image from "next/image";

export default function Introduction() {
    return (
        <div className="flex justify-center items-center h-[70vh] md:h-[60vh] lg:h-[70vh] max-h-[80vh] p-4 bg-black text-white">
            <div className="w-full max-w-4xl">
                {/* Avatar et introduction */}
                <div className="flex flex-row gap-8 m-auto  p-2 justify-center items-center ">
                    <Image
                        src="/avatarAsma.png"
                        alt="avatar"
                        width={180}
                        height={38}
                        priority
                        className="rounded-full"
                    />
                    <p className="text-2xl font-GillSans text-center md:text-left">
                        Hello moi c'est Asma
                    </p>
                </div>

                {/* Texte principal */}
                <div className="mt-4">
                    <p className="lg:text-xl font-GillSans text-center mx-auto w-3/4 p-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* Boutons */}
                <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-lila-100 h-30 hover:bg-lila-200 text-black py-2 px-4 rounded">
                        Télécharger CV
                    </button>
                    <button className="bg-greenPastel-100 h-30 hover:bg-greenPastel-200 text-black py-2 px-4 rounded">
                        Me contacter
                    </button>
                </div>
            </div>
        </div >
    );
}
