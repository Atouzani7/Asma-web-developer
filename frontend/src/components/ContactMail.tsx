import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    // Gestion de l'état du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(null);  // Message de succès ou erreur

    // Fonction de gestion des changements dans le formulaire
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Fonction d'envoi du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();  // Empêche le rechargement de la page lors de l'envoi

        // Utilisation de l'API EmailJS
        emailjs.sendForm(
            'service_enef6fj', // Ton ID de service (trouvé dans EmailJS)
            'your_template_id', // Ton ID de template (trouvé dans EmailJS)
            e.target, // L'élément du formulaire
            'your_user_id' // Ton ID utilisateur (trouvé dans EmailJS)
        )
            .then((result) => {
                setStatus('Message envoyé avec succès !');
                setFormData({ name: '', email: '', message: '' });  // Réinitialise le formulaire
            }, (error) => {
                setStatus('Une erreur est survenue, réessayez.');
            });
    };

    return (
        <div>
            <h2>Contactez-moi</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    required
                />
                <button type="submit">Envoyer</button>
            </form>
            {status && <p>{status}</p>} {/* Afficher un message de statut */}
        </div>
    );
};

export default ContactForm;
