import React from 'react';

const ContactButton = () => {

    return (
        <a href={"/contact"}>
            <button className="btn btn-warning">
                Contactez moi
            </button>
        </a>
    );
};

export default ContactButton;