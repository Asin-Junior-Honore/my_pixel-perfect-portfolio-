import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
const Form = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_phonenumber: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xzbllzjw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setShowModal(true);
                setFormData({
                    user_name: '',
                    user_phonenumber: '',
                    user_email: '',
                    subject: '',
                    message: ''
                });
            } else {
                console.error('Form submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };
    const closeModal = () => {
        setShowModal(false);
    };
    useEffect(() => {
        if (showModal) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [showModal]);


    return (
        <div>
            <form className='flex flex-col p-6 rounded-lg text-white' onSubmit={handleSubmit}>
                <div className='important lg:space-x-10 flex '>
                    <div>
                        <label>your name</label><br />
                        <input id='text' type='text' name='user_name' value={formData.user_name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>phone number</label><br />
                        <input id='number' type='number' name='user_phonenumber' value={formData.user_phonenumber} onChange={handleChange} required />
                    </div>
                </div>
                <div>
                    <label>Email</label><br />
                    <input id='email' type='email' name='user_email' value={formData.user_email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Subject</label><br />
                    <input id='subject' type='text' name='subject' value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                    <label>Message</label><br />
                    <textarea id='textarea' name='message' value={formData.message} onChange={handleChange} required />
                </div>
                <div className='pt-3'>
                    <button type='submit' className='btn-box-shadow px-10 py-3 rounded-md w-full btn-hover text-xl'>Send Message</button>
                </div>
            </form>

            {/* Modal */}
            {showModal && (
                <div className="fixed top-0 left-0 w-full lg:px-0 px-5 h-full z-30 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <FaCheckCircle className="text-6xl text-[#ff014f] mb-4" />
                        <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                        <p className="mb-4">Thank you for reaching out! Your message has been successfully sent. I'll get back to you as soon as possible.</p>
                        <button onClick={closeModal} className="bg-[#ff014f] text-white px-4 py-2 w-full rounded-md">Close</button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Form;