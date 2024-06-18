import React, {useState} from "react";
import './Contacts.css'

function Contacts() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3001/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, message })
            });
            
            if (response.ok) {
                setResponseMessage('Email sent successfully!');
            } else {
                setResponseMessage('Failed to send email.');
            }
        } catch (error) {
            setResponseMessage('An error occurred: ' + error.message);
        }
        
        setEmail('');
        setMessage('');
    }

    const handleTextChange = (e) => {
        setMessage(e.target.value);
        
        e.target.style.height = 'inherit';
        const computed = window.getComputedStyle(e.target);
        const height = e.target.scrollHeight + parseInt(computed.getPropertyValue('border-top-width'), 10) + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
        e.target.style.height = `${height}px`;
    }
    
    return (
        <section className='contact-me'>
            <h2 className="section-header">Contact me</h2>
            <div className="contact-box">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
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
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={handleTextChange}
                                required
                            />
                        </div>
                        <div className="center-button">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                    {responseMessage && <p>{responseMessage}</p>}
                </div>
                <div className="contact-details">
                    <div className="first-row">
                        <p><b>T:</b> <a href="tel:+61405728589">+61405728589</a></p>
                        <p><b>L:</b> <a href="https://maps.app.goo.gl/PCskYNJaWkPb2TgP6">Sydney, Australia</a></p>
                    </div>
                    <p><b>E:</b> <a href="mailto:antoniibondar@gmail.com">antoniibondar@gmail.com</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contacts;