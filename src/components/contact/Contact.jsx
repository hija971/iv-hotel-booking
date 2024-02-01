import React from 'react'
import "./Contact.css"
import ContactLocation from './ContactLocation'
function Contact() {
    return (
        <div className='contact-bg'>
            <section className='section-sub-banner'>
                <div className="sub-banner">
                    <div className="container">
                        <div className="text1 text-center">
                            <h2>CONTACT WITH US</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-12">
                    <div className="contact">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <div className="text mb-5">
                                    <h2 className='text-2xl font-bold'>CONTACT</h2>
                                    <p className='mt-2 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    <ul className='mt-5'>
                                        <li><i className="fa-solid fa-location-dot" style={{ color: "#e1bd85", }}></i> 225 Beach Street, Australian</li>
                                        <li><i className="fa-solid fa-phone" style={{ color: "#e1bd85", }}></i> +61 2 6854 8496</li>
                                        <li><i className="fa-solid fa-envelope" style={{ color: "#e1bd85", }}></i> lotushotel@gmail.com</li>
                                    </ul>
                                </div>
                                <ContactLocation />
                            </div>
                            <div className="col-span-1">
                                <div className="contact-form">
                                    <form id="send-contact-form" action="send_mail_contact.php" method="post" noValidate>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <input type="text" className="field-text" name="name" placeholder="Name" />
                                            </div>
                                            <div>
                                                <input type="text" className="field-text" name="email" placeholder="Email" />
                                            </div>
                                            <div className="col-span-2">
                                                <input type="text" className="field-text" name="subject" placeholder="Subject" />
                                            </div>
                                            <div className="col-span-2">
                                                <textarea cols="85" rows="10" name="message" className="field-textarea" placeholder="Write what do you want"></textarea>
                                            </div>
                                            <div className="col-span-2 sm:col-span-1">
                                                <button type="submit" className="awe-btn1 awe-btn-13">SEND</button>
                                            </div>
                                        </div>
                                        <div id="contact-content"></div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
