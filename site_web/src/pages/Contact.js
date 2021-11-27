import React from 'react';
import Navigation from "../components/Navigation";
import ContactForm from '../components/ContactForm';
import Footer from "../components/Footer";
import background from "../assets/img/contact_img.jpg";


const Contact = () => {
    return (
        <div className="off-canvas-sidebar">
            <Navigation />
            <div className="wrapper wrapper-full-page">
                <div className="page-header contact-page header-filter"
                   style={{ backgroundImage: `url(${background})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 ml-auto mr-auto">
                                <div className="card">
                                    <div className="card-header card-header-warning">
                                        <h1 className="card-title text-center">Contact</h1>
                                    </div>
                                    <p className="contact-subtitle text-center">Envoyez moi un message, je vous réponds dès que possible.</p>
                                    <div className="card-body">
                                        <ContactForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Contact;