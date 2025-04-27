import Image from "next/image";

export default function Project() {
    const projects = [
        {
            title: "Nom du Projet",
            description: "Une brève description de votre projet.",
            imageUrl: "./vercel.svg",
            link: "https://example.com",
        },
        {
            title: "Nom du Projet",
            description: "Une breve description de votre projet.",
            imageUrl: "./logoAT.svg",
            link: "https://example.com",
        },
        {
            title: "Nom du Projet",
            description: "Une breve description de votre projet.",
            imageUrl: "./file.svg",
            link: "https://example.com",
        }, {
            title: "Nom du Projet",
            description: "Une breve description de votre projet.",
            imageUrl: "./logoAT.svg",
            link: "https://example.com",
        },
        // Ajoutez d'autres projets ici
    ];

    return (
        // <div className="flex flex-col items-center gap-8">
        // <div className="border-2 border-lila-100  justify-center items-center h-[70vh] md:h-[60vh] lg:h-[70vh] max-h-[80vh] p-4 bg-black  text-white">
        <div className="border-2 border-lila-100 grid place-items-center h-[70vh] md:h-[60vh] lg:h-[70vh] max-h-[80vh] p-4 bg-black text-white">


            <h2 className="text-3xl font-Avenir text-center mb-6">Projets</h2>

            <div className="flex flex-wrap gap-8 justify-center align-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative w-[300px] h-[200px] rounded-lg overflow-hidden group"
                    >
                        {/* Image visible */}
                        {/* <div className="relative w-full h-full flex justify-center items-center">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={180}
                                height={38}
                                className="object-cover transition-transform duration-300 group-hover:scale-105 flex justify-center items-center"
                            />
                        </div> */}


                        <div className="relative w-full h-full flex justify-center items-center rounded-lg overflow-hidden group">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={180}
                                height={38}
                                className="object-cover transition-transform duration-300 group-hover:scale-105 flex justify-center items-center"
                            />
                            {/* Pulsation */}
                            <div className="absolute inset-0 rounded-lg border-2 border-lila-100 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                        </div>



                        {/* Contenu affiché au hover */}
                        <div className="absolute inset-0 bg-lila-100 bg-opacity-80 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-bold text-black">{project.title}</h3>
                            <p className="text-sm text-black transition-colors duration-200 mt-2 text-center">
                                {project.description}
                            </p>
                            <div className="mt-4">
                                <h3 className="text-base font-bold text-black">{"Langages utilisés"}</h3>
                                <p className="text-sm text-black transition-colors duration-200 mt-2 text-center">
                                    {project.description}
                                </p>
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 px-4 py-2 bg-greenPastel-100 text-black text-sm font-medium rounded-md hover:bg-greenPastel-200 transition-colors duration-200"
                            >
                                Voir le projet
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}