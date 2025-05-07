"use client"
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        entreprise: "",
        message: "",
    });

    const [status, setStatus] = useState<"loading" | "success" | "error" | null>(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();  // Empêcher le rechargement de la page

        setStatus("loading");

        // Envoi du formulaire avec EmailJS
        emailjs.sendForm(
            'service_enef6fj', // ID de service EmailJS (ex: Gmail, Outlook...)
            'template_jr2hfor', // L'ID du template d'email (celui que tu as créé dans EmailJS)
            e.target,  // Référence au formulaire
            'r8A6B-ypNSzLHDgez' // ID utilisateur EmailJS
        )
            .then((result) => {
                console.log("Message envoyé : ", result.text);
                setStatus("success");
                setFormData({ name: "", email: "", entreprise: "", message: "" });  // Réinitialiser le formulaire
            }, (error) => {
                setStatus("error");
                console.error("Erreur lors de l'envoi du message : ", error);
            });
    };

    return (
        <div id="contact" className="min-h-screen flex items-center justify-center">
            <div className="h-1" />
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full border-2 border-yellow-100 max-w-lg"
            >
                <h1 className="text-2xl mb-4 text-center text-black">Me contacter</h1>
                <h1 className="text-2xl mb-4 text-center text-black">Petit message pour en savoir plus ?</h1>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="entreprise">
                        Entreprise / service
                    </label>
                    <input
                        type="text"
                        id="entreprise"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-greenPastel-100 hover:bg-greenPastel-200 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Envoyer
                    </button>
                </div>

                {status === "loading" && <p className="text-blue-500 mt-4">Envoi en cours...</p>}
                {status === "success" && <p className="text-green-500 mt-4">Message envoyé avec succès !</p>}
                {status === "error" && <p className="text-red-500 mt-4">Erreur lors de l&apos;envoi. Réessayez plus tard.</p>}
            </form>
        </div>
    );
}
