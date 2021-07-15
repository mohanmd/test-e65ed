import React from 'react'; 
const AboutBusiness = ({ data }) => ( 
    <div className="about_business ">
        <div className="inner">
            <h1 className="section_title">About Business Integra</h1>
            <div className="grid grid-col-3">
                <div className="grid-item">
                    <div className="business_card">
                        <div className="img_wrapper">
                            <img />
                        </div>
                        <div className="content_wrap">
                            <h4>Certifications and Appraisals</h4>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="business_card">
                        <div className="img_wrapper">
                            <img />
                        </div>
                        <div className="content_wrap">
                            <h4>Leadership</h4>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="business_card">
                        <div className="img_wrapper">
                            <img />
                        </div>
                        <div className="content_wrap">
                            <h4>Alliances & Partnerships</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutBusiness;
