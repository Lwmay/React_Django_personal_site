import React, { useState } from 'react';
import swal from 'sweetalert';


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById('not-email');
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = 'none';
            return true;
        } else {
            mail.style.display = 'block'
            return false;
        }
    }

    const failMessage = () => {
        let formMess = document.querySelector('.form-message');
        formMess.innerHTML = "Oups ! Merci de remplir tous les champs.";
        document.getElementById('name').classList.add('empty-field');
        document.getElementById('email').classList.add('empty-field');
        document.getElementById('message').classList.add('empty-field');
    }

    const successMessage = () => {
        document.getElementById('name').classList.remove('empty-field');
        document.getElementById('email').classList.remove('empty-field');
        document.getElementById('message').classList.remove('empty-field');
        document.querySelector('.form-message').innerHTML = "";

        swal({
            icon: 'success',
            title:"Votre message a été envoyé",
            text: "Merci pour votre message. Je vous contacte au plus vite.",
            buttonsStyling: false, confirmButtonClass: "btn btn-success"
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && isEmail() && message) {
            sendFeedback("template_7opt1ek", {
                name,
                email,
                message,
            });
        } else {
            failMessage();
        }
    };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_jlxr10c", templateId, variables)
      .then((res) => {
        setName("");
        setEmail("");
        setMessage("");
        successMessage();
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };
    return (
        <div>
            <form className="form" method="" action="">
                <div className="row">
                    <div className="col-md-5 ml-auto">
                        <div className="description">
                            <h4 className="info-title">Mes coordonnées :</h4>
                            <p className="sub-description">
                                Email : contact@laurentmay.fr
                            </p>
                            <p className="sub-description">
                                Téléphone : 06.92.88.73.78
                            </p>
                        </div>
                     </div>
                    <div className="col-md-5 mr-auto">
                        <div className="form-group has-default">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="material-icons">face</i>
                                    </span>
                                </div>
                                <input type="text" id="name" name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" placeholder="Votre nom..."/>
                            </div>
                        </div>
                        <div className="form-group has-default">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="material-icons">mail</i>
                                    </span>
                                </div>
                                <input type="text" id="email" name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control" placeholder="Votre email..."/>
                            </div>
                            <label id="not-email" className="error">Email non valid</label>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="form-group has-default">
                        <div className="input-group">
                            <div className="sub-message">
                                <textarea id="message" name="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Votre message ..." rows="6"
                                    className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-message">

                    </div>
                    <div className="text-center">
                        <input
                            className="btn btn-warning mt-4"
                            type="button"
                            value="Envoyer"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;