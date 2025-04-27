// export default function Contact() {
//     return (
//         <div className="border-2 border-lila-100 flex justify-center items-center h-[70vh] md:h-[60vh] lg:h-[70vh] max-h-[80vh] p-4 bg-black text-white">

//             <h2 className="text-3xl font-Avenir text-center mb-6 border-2 border-lila-100">Contact</h2>

//             <form action="/my-handling-form-page" method="post">
//                 <p>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" name="user_name" />
//                 </p>
//                 <p>
//                     <label htmlFor="mail">Email:</label>
//                     <input type="email" id="mail" name="user_email" />
//                 </p>
//                 <p>
//                     <label htmlFor="msg">Message:</label>
//                     <textarea id="msg" name="user_message"></textarea>
//                 </p>
//             </form>


//         </div>
//     );
// }


// pages/contact.js
"use client"
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        entreprise: "",
        message: "",
    });

    // const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("loading");

    //     try {
    //       const response = await fetch("/api/contact", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(formData),
    //       });

    //       if (response.ok) {
    //         setStatus("success");
    //         setFormData({ name: "", email: "", message: "" });
    //       } else {
    //         setStatus("error");
    //       }
    //     } catch (error) {
    //       console.error(error);
    //       setStatus("error");
    //     }
    //   };


    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleChange}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full border-2 border-yellow-100 max-w-lg"
            >
                <h1 className="text-2xl mb-4 text-center text-black">Me contacter</h1>
                <h1 className="text-2xl mb-4 text-center text-black">Petit message pour en savoir plus ?</h1>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="name">
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
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="name">
                        Entreprise / services
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
                {status === "error" && <p className="text-red-500 mt-4">Erreur lors de l'envoi. Réessayez plus tard.</p>}
            </form>
        </div>
    );
}
