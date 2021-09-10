import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
              <div className="footer-navigation">
                  <ul>
                      <li>Accueil</li>
                      <li>Mes projets</li>
                      <li>Me contacter</li>
                  </ul>
              </div>
              <div className="copyright">
                  <p>Site créé avec React et Django par mes soins</p>
                  <p>Copyright - Laurent MAY 2021</p>
              </div>
          </footer>
        </div>
    );
};

export default Footer;