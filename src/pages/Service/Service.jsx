import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


// Service Icons
import iconSocial from '../../assets/service-icons/social-media.png';
import iconWeb from '../../assets/service-icons/web-dev.png';
import iconUiUx from '../../assets/service-icons/ui-ux.png';
import iconPush from '../../assets/service-icons/push-notification.png';
import iconEcommerce from '../../assets/service-icons/ecommerce.png';
import iconApp from '../../assets/service-icons/app-dev.png';

import { FaLaptopCode, FaChartLine, FaHome } from 'react-icons/fa';

const Service = () => {
    const services = [
        {
            title: "Social Media Marketing",
            desc: "Amplify Your Brand's Voice: ClickMecha's social media marketing strategies are tailored for impact.",
            icon: iconSocial,
            link: "/contact"
        },
        {
            title: "Website Development",
            desc: "Responsive, SEO-optimized websites built with performance in mind.",
            icon: iconWeb,
            link: "/contact"
        },
        {
            title: "UI/UX & Branding Design",
            desc: "Modern, user-friendly designs and branding that make your business unforgettable.",
            icon: iconUiUx,
            link: "/contact"
        },
        {
            title: "Push Notification",
            desc: "Send timely updates and engage your audience with personalized notifications.",
            icon: iconPush,
            link: "/contact"
        },
        {
            title: "E-Commerce Solutions",
            desc: "Conversion-focused online stores with secure payments and smooth shopping experiences.",
            icon: iconEcommerce,
            link: "/contact"
        },
        {
            title: "Mobile App Development",
            desc: "iOS and Android apps designed for seamless user experiences.",
            icon: iconApp,
            link: "/contact"
        }
    ];

    return (
        <div className="service-page-container">
            <div className="container">
                <div className="service-header text-center">
                    <h1 className="service-main-title">We offer 6 core services</h1>
                </div>

                <div className="row justify-content-center">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="new-service-card">
                                <h3 className="new-service-title">{service.title}</h3>
                                <Link to={service.link} className="new-service-read-more">READ MORE</Link>

                                <div className="new-service-icon-wrapper">
                                    <img src={service.icon} alt={service.title} className="new-service-icon" />
                                </div>

                                <p className="new-service-desc">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Work With Us Section */}
            <div className="why-work-section">
                <div className="container">
                    <div className="section-header-center">
                        <h2 className="why-work-title">Why work with us?</h2>
                        <p className="why-work-subtitle">
                            We build a culture where innovation meets execution. No<br />
                            corporate fluff, just high-impact work.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="why-card">
                                <div className="why-icon-box icon-blue">
                                    <FaLaptopCode />
                                </div>
                                <h3 className="why-card-title">Cutting-Edge Stack</h3>
                                <p className="why-card-desc">
                                    We don't do legacy. Work with React, Node.js, AI Agents, and modern tools.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="why-card">
                                <div className="why-icon-box icon-purple">
                                    <FaChartLine />
                                </div>
                                <h3 className="why-card-title">Impact & Growth</h3>
                                <p className="why-card-desc">
                                    Meritocracy over seniority. Clear paths for promotion and leading projects.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="why-card">
                                <div className="why-icon-box icon-pink">
                                    <FaHome />
                                </div>
                                <h3 className="why-card-title">Flexibility</h3>
                                <p className="why-card-desc">
                                    We value output over hours. Enjoy hybrid and remote options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Service;
