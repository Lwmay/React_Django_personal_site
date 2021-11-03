import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="copyright float-right">
                    &copy; Laurent May 2021
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    , made with fun by me in React and Django.
                </div>
            </div>
        </footer>
    );
};

export default Footer;