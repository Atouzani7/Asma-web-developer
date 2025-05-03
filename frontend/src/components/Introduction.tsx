"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonCV from "./ButtonCV";
import ButtonMail from "./ButtonMail";

export default function Introduction() {
    interface Profile {
        id?: number;
        name: string;
        description: string;
        image: string;
        skills: string;
    }


    const [profile, setProfile] = useState<Profile | null>(null);

    const baseUrl = process.env.NEXT_PUBLIC_API_URL
        ? process.env.NEXT_PUBLIC_API_URL
        : 'http://localhost:4000';

    const finalUrl = `${baseUrl}/profile`;
    // const response = await fetch(`${baseUrl}/project`);
    const fetchProfile = async () => {
        try {
            const response = await fetch(finalUrl);
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données");
            }
            const data = await response.json();
            console.log("data", data);
            console.log("data id profil", data.name);
            setProfile(data[0] as Profile);
        } catch (error) {
            console.error("Erreur lors de la récupération des données", error);
        }
    };


    useEffect(() => {
        fetchProfile();
    }, []);


    if (!profile) {
        return <div className="text-white text-center mt-20">Chargement...</div>;
    }


    return (
        <div className="flex justify-center items-center h-[70vh] md:h-[60vh] lg:h-[70vh] max-h-[80vh] p-4 bg-black text-white">
            <div className="w-full max-w-4xl">
                {/* Avatar et introduction */}
                <div className="flex flex-row gap-8 m-auto  p-2 justify-center items-center ">
                    <Image
                        src={profile.image}
                        alt="avatar"
                        width={180}
                        height={38}
                        priority
                        className="rounded-full"
                    />
                    <p className="text-2xl font-GillSans text-center md:text-left">
                        👋 Hello ! Moi c&apos;est {profile.name},<br />
                    </p>
                </div>

                {/* Texte principal */}
                <div className="mt-4">
                    <p className="lg:text-xl font-GillSans text-center mx-auto w-3/4 p-4">
                        {profile?.description}
                    </p>
                </div>

                {/* Boutons */}
                <div className="mt-4 flex justify-center gap-4">
                    <ButtonCV />
                    <ButtonMail />


                    {/* <a href="/CV.Touzani.Asma.pdf" download="/CV.Touzani.Asma.pdf" target="_blank" rel="noopener noreferrer">
                        <button>Télécharger mon CV</button>
                    </a> */}
                </div>
            </div>
        </div >
    );
}
