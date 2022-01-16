import React from 'react';

const CvButton = () => {

    return (
        <a href={"./content/files/CV_may_laurent.pdf"} download="CV_may_laurent">
            <button className="btn btn-warning">
                Téléchargez mon CV
            </button>
        </a>
    );
};

export default CvButton;