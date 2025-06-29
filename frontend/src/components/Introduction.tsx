"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonCV from "./ButtonCV";
import ButtonMail from "./ButtonMail";
import SpinLoading from "./SpinLoading";

export default function Introduction() {
    interface Profile {
        id?: number;
        name: string;
        description: string;
        image: string;
        skills: string;
    }


    const [profile, setProfile] = useState<Profile | null>(null);

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const finalUrl = `${baseUrl}/profile`;
    // const response = await fetch(`${baseUrl}/project`);


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // const response = await fetch(finalUrl);
                const response = await fetch("/data/profile.json");
                if (!response.ok) {
                    throw Error("Erreur lors de la récupération des données");
                }
                const data = await response.json();
                console.log("data", data);
                console.log("data id profil", data.name);
                setProfile(data[0] as Profile);
            } catch (error) {
                console.error("Erreur lors de la récupération des données", error);
            }
        };
        fetchProfile();
    }, [finalUrl]);



    if (!profile) {
        return <SpinLoading />;
    }


    return (
        <div id="introduction" className="min-h-screen flex items-center justify-center bg-cover bg-center h-80 ">
            <div className="flex justify-center items-center h-[70vh] md:h-[60vh] lg:h-[70vh] mt-[10vh] lg:mt-0 w-full max-h-[80vh] lg:p-[2vh] bg-black text-white bo">


                <div className="w-full max-w-4xl ">

                    {/* Avatar et introduction */}
                    <div className="flex flex-row gap-8 m-auto  p-2 justify-center items-center ">
                        <Image
                            src={profile.image}
                            alt="avatar"
                            width={180}
                            height={38}
                            priority
                            className="rounded-full animate-fadeInUp mt-4"
                        />
                        <p className="text-2xl font-GillSans text-center md:text-left mt-20 lg:mt-0">
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
                    <div className="mt-4 flex justify-center gap-4 h-[15vh]">
                        <ButtonCV />
                        <ButtonMail />


                    </div>
                </div>
            </div >
        </div>
    );
}
