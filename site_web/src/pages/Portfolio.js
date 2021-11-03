import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import background from "../assets/img/contact_img.jpg";

const Portfolio = () => {
    return (
        <div className="off-canvas-sidebar">
            <Navigation />
            <div className="wrapper wrapper-full-page">
                <div className="page-header contact-page header-filter"
                   style={{ backgroundImage: `url(${background})` }}>
                    <div>
                        <p>Ici projet</p>
                    </div>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;