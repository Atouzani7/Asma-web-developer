"use client";

import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ErrorProject from "@/app/error/projects/ErrorProject";
import Link from "next/link";
import Image from "next/image";
import SpinLoading from "@/components/SpinLoading";
import Footer from "@/components/Footer";

interface Skill {
    id: number;
    name: string;
    image: string;
}

interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    skills: Skill[];
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const [project, setProject] = useState<Project | null>(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchProject = async () => {
            try {
                // const response = await fetch(`${baseUrl}/project`, {
                const response = await fetch(`/data/project.json`, {

                    cache: "no-store",
                });

                if (!response.ok) throw new Error("Failed to fetch projects");

                const projects: Project[] = await response.json();
                const found = projects.find((p) => p.id === Number(id));
                console.log("Skills ID:", response);

                if (!found) {
                    setError(true);
                } else {
                    setProject(found);
                }
            } catch (err) {
                console.error(err);
                setError(true);
            }
        };


        fetchProject();
    }, [id, baseUrl]);

    console.log("Project:", project?.skills);

    if (error) return <ErrorProject />;
    if (!project) return <div className="text-white text-center mt-20"><SpinLoading /> </div>;
    const totalProjects = 4;

    const previousProjectId = project.id === 1 ? totalProjects : project.id - 1;
    const nextProjectId = project.id === totalProjects ? 1 : project.id + 1;


    const SkillBadge = ({ skill }: { skill: Skill }) => (
        <span className="bg-greenPastel-100 text-black text-sm font-medium px-3 py-1 rounded-full">
            {skill.name}
            <Image
                src={skill.image}
                alt={skill.name}
                width={20}
                height={20}
                className="inline ml-2 "
            />
        </span>
    );
    return (
        <div className="h-screen">
            <header className=" top-0 left-0 right-0 w-full h-20 flex mt-4 items-center justify-between px-4">

                <button
                    onClick={() => router.push("/")}

                >{/* Logo */}
                    <Image
                        src="/logoAT.svg"
                        alt="logo"
                        width={95}
                        height={20}
                        priority
                        className="z-20 lg:mb-4"
                    />
                </button>

            </header>
            <div className="flex items-center justify-center w-1/2 mx-auto h-screen  rounded-lg">



                <div className="p-8 ">
                    <div className="flex justify-center">
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={200}
                            height={100}
                            className="rounded-lg animate-fadeInUp shadow-lg"

                        />
                    </div>
                    <h1 className="text-2xl font-bold text-lila-100  items-center justify-center gap-2">{project.name}</h1>
                    <p className="mt-4 whitespace-pre-line">{project.description}</p>
                    {/* <p className="mt-4">{project.skills}</p> */} <br />
                    <h4 className="text-sm md:text-base font-bold text-white ">Technologies utilisées</h4><br />

                    <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill: Skill) => (
                            <SkillBadge key={skill.id} skill={skill} />
                        ))}
                    </div>




                    <div className="mt-8 flex justify-center gap-4">
                        {/* Bouton précédent */}
                        <div className="w-[180px]">
                            <Link
                                href={`/projects/${previousProjectId}`}
                                className={`px-4 py-2 rounded inline-flex items-center w-full justify-center border-2 border-gray-300 hover:bg-lila-200 ${project.id > 1
                                    ? 'bg-lila-100 text-black visible border-2 border-gray-300 hover:bg-lila-200'
                                    // : 'bg-gray-300 text-black visible'
                                    : 'hidden'
                                    }`}
                            >
                                <Image
                                    src="/iconPrevious.png"
                                    alt="previous"
                                    width={10}
                                    height={10}
                                    className="mr-2"
                                />
                                Projet précédent
                            </Link>
                        </div>

                        {/* Bouton suivant */}
                        <div className="w-[180px]">
                            <Link
                                // href={`/projects/${project.id + 1}`}
                                href={`/projects/${nextProjectId}`}
                                className={`px-4 py-2 rounded inline-flex items-center w-full justify-center border-2 border-gray-300 hover:bg-lila-200 ${project.id < 4
                                    ? 'bg-lila-100 text-black visible border-2 border-gray-300 hover:bg-lila-200'
                                    : 'hidden'
                                    }`}
                            >
                                Projet suivant
                                <Image
                                    src="/iconNext.png"
                                    alt="next"
                                    width={10}
                                    height={10}
                                    className="ml-2"
                                />
                            </Link>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push("/")}
                        className="bg-greenPastel-100 hover:bg-greenPastel-200 text-black mt-4 px-4 py-2 rounded flex items-center justify-center gap-2 mx-auto "

                    >
                        <Image
                            src="/iconHome.png"
                            alt="icon home"
                            width={25}
                            height={25}
                            className="inline  mr-2"
                        />
                        Retour à l&apos;accueil
                    </button>
                </div>
            </div >
            <div className=" bottom-0 left-0 right-0 w-full bg-black text-gray-200 py-6">

                <Footer />
            </div>
        </div>
    );
}
