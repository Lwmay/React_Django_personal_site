import React from 'react';
import soft_skills_img from "../../assets/img/solft_skills_img.png";

const AreaSoftSkills = () => {
    return (
        <div className="container">
            <div className="areasolftskills">
                <div className="col-md-6 ml-auto mr-auto text-center">
                    <h2 className="title">Mes soft skills</h2>
                </div>
                <div className='soft_skills_img'>
                    <img src={soft_skills_img} alt="soft skills"/>
                </div>
            </div>
        </div>
    );
};

export default AreaSoftSkills;