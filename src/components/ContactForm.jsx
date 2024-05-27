import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [nombre, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="Nombre">Nombre:</label>
                <input
                    type="text"
                    id="Nombre"
                    value={nombre}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="Mensaje">Mensaje:</label>
                <textarea
                    id="Mensaje"
                    value={mensaje}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;

