"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SpinLoading from "./SpinLoading";

export default function Project() {

    interface Project {
        id: number;
        name: string;
        description: string;
        details?: string;
        image: string;
        link: string;
        skills: string;
    }

    // const [projects, setProjects] = useState([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const fetchProjects = async () => {
        try {
            setLoading(true);

            const baseUrl = process.env.NEXT_PUBLIC_API_URL;
            console.log('Using API base URL:', baseUrl);
            const finalUrl = `${baseUrl}/project`;
            console.log('✅ URL utilisée dans fetch:', finalUrl);

            const response = await fetch(`${baseUrl}/project`);



            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des projets");
            }
            const data = await response.json();

            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la récupération des projets:", error);
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);
    // console.log("projets", projects);
    if (!projects || loading) {
        return <div className="text-white text-center mt-20">
            <SpinLoading />
        </div>;
    }
    if (!projects || error) {
        return <div className="text-white text-center mt-20">
            <h2 className="text-2xl md:text-3xl font-Avenir text-center mb-6">Projets</h2>
            Erreur lors de la récupération des projets</div>;
    }

    return (

        <div id="projects" className="min-h-80 flex items-center justify-center ">



            <div className=" grid place-items-center h-auto min-h-[70vh]  p-2 bg-black text-white">
                <h2 className="text-2xl md:text-3xl font-Avenir text-center mb-6">Projets</h2>

                <div className="flex flex-wrap gap-6 md:gap-8 justify-center items-center">
                    {projects.sort((a, b) => a.id - b.id).map((project, index) => (
                        <div
                            key={project.id ?? index} // ✅ id si dispo, sinon index
                            className="relative w-[90%] sm:w-[300px] h-[200px] sm:h-[220px] md:h-[250px] rounded-lg overflow-hidden group"
                        >
                            <div className="relative w-full h-full flex justify-center items-center rounded-lg overflow-hidden group ">

                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={300}
                                    height={250}
                                    className="object-cover  transition-transform duration-300 group-hover:scale-105 "
                                />



                                <div className="absolute inset-0 rounded-lg border-2 border-lila-100 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                            </div>

                            <div className="absolute inset-0 bg-lila-100 bg-opacity-80 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-lg md:text-xl font-bold text-black">{project.name}</h3>
                                <p className="text-xs md:text-sm text-black transition-colors duration-200 mt-2 text-center whitespace-pre-line">
                                    {project.details}

                                </p>

                                {project.skills && (
                                    <div className="mt-4">

                                    </div>
                                )}

                                <a
                                    href={`/projects/${project.id}`}
                                    // target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 px-3 py-2 bg-greenPastel-100 text-black text-xs md:text-sm font-medium rounded-md hover:bg-greenPastel-200 transition-colors duration-200"
                                >
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}