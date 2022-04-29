import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';





const Contact = () => {
    // email getting
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jf0iode', 'template_8u75x5e', form.current, 'JZnVfs5M-tKd2YID1')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <MdOutlineEmail className='contact-icon' />
                        <h4>Email</h4>
                        <h5>manishrajbhar379@gmail.com</h5>
                        <a href="mailto:manishrajbhar379@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact-option">
                        <RiMessengerLine className='contact-icon' />
                        <h4>Messenger</h4>
                        <h5>Manish Rajbhar</h5>
                        <a href="https://m.me/manish.rajbhar.10485" target="_blank">Send a message</a>
                    </article>

                    <article className="contact-option">
                        <BsWhatsapp className='contact-icon' />
                        <h4>Messenger</h4>
                        <h5>+91 9309509650</h5>
                        <a href="https://api.whatsapp.com/send?phone=9309509650" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* end of contact-option */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name ' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;