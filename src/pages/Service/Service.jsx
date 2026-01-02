import React from 'react';
import './Service.css';
import serviceBg from '../../assets/service-images/service-bg.png';
import avatars from '../../assets/service-images/avatars.png';
import phones from '../../assets/service-images/phones.png';


import Slider from "react-slick";
import teamIcon from '../../assets/service-images/icon-team.png';
import expIcon from '../../assets/service-images/icon-experience.png';
import shopifyIcon from '../../assets/service-images/icon-shopify.png';
import clientsIcon from '../../assets/service-images/icon-clients.png';
import bulbIcon from '../../assets/service-images/icon-bulb.png';

const Service = () => {
    const stats = [
        { icon: teamIcon, text: "IN HOUSE TEAM" },
        { icon: expIcon, text: "10 YEARS OF EXPERIENCE" },
        { icon: shopifyIcon, text: "OFFICIAL SHOPIFY PARTNER" },
        { icon: clientsIcon, text: "450+ CLIENTS GLOBALLY" }
    ];

    const offerings = [
        {
            icon: bulbIcon,
            title: "Website Design",
            desc: "Beautiful, responsive websites that convert visitors into customers through clear, focused UX."
        },
        {
            icon: bulbIcon,
            title: "Mobile App Design",
            desc: "Intuitive mobile apps with delightful interactions, fast performance, and user-centered flows everywhere."
        },
        {
            icon: bulbIcon,
            title: "CRMs Design",
            desc: "Custom CRM interfaces that streamline workflows, automate tasks, and boost team productivity."
        },
        {
            icon: bulbIcon,
            title: "Design Systems",
            desc: "Robust design systems: reusable components, tokens, documentation ensuring consistency and faster development."
        }
    ];


    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false, // Default off for desktop
        responsive: [
            {
                breakpoint: 991, // Tablet/Mobile
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: false
                }
            },
            {
                breakpoint: 576, // Small Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container service-hero-content" style={{ backgroundImage: `url(${serviceBg})` }}>
                    <div className="row align-items-center">

                        {/* Left Text Content */}
                        <div className="col-lg-6 service-text-content">
                            <div className="rating-pill">
                                <img src={avatars} alt="Rated by owners" className="rating-avatars" />
                                <span className="rating-text">4.9 Rated by 450+ Successful B2B Owners</span>
                            </div>

                            <h1 className="hero-heading">
                                <span className="serif-text">UI Design that sings</span><br />
                                <span className="serif-text">beautiful, usable interfaces</span><br />
                                <span className="serif-text">built for real users</span>
                            </h1>

                            <div className="hero-cta-wrapper">
                                <button className="btn-book-hero">BOOK A FREE CALL</button>
                            </div>
                        </div>

                        {/* Right Image Content */}
                        <div className="col-lg-6 service-image-content">
                            <div className="image-wrapper">
                                <img src={phones} alt="Mobile App Design Mockup" className="phones-mockup" />

                                {/* Floating Badge */}
                                <div className="stat-badge">
                                    <div className="stat-percent">55%</div>
                                    <div className="stat-desc">Increase in<br />Conversion Rate</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust Stats Section */}
            <section className="trust-stats-section">
                <div className="container">
                    <div className="desktop-stats-grid d-none d-lg-flex">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <img src={stat.icon} alt={stat.text} className="stat-icon" />
                                <span className="stat-label">{stat.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mobile-stats-slider d-lg-none">
                        <Slider {...sliderSettings}>
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="stat-item">
                                        <img src={stat.icon} alt={stat.text} className="stat-icon" />
                                        <span className="stat-label">{stat.text}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>



            {/* Offerings Section */}
            <section className="offerings-section">
                <div className="container">

                    <div className="offerings-header text-center">
                        <p className="section-intro-text">
                            We craft pixel-perfect interfaces that convert. From<br />
                            research-driven UX foundations to delightful UI polish —<br />
                            we design experiences people remember.
                        </p>

                        <div className="section-badge">UI/UX DESIGN</div>

                        <h2 className="section-title">
                            What we can <br />
                            <span className="text-orange">design for your brand</span>
                        </h2>
                    </div>

                    <div className="row offerings-grid">
                        {offerings.map((offer, index) => (
                            <div key={index} className="col-lg-3 col-md-6 mb-4">
                                <div className="offering-card">
                                    <div className="offering-icon-wrapper">
                                        <img src={offer.icon} alt={offer.title} className="offering-icon" />
                                    </div>
                                    <h3 className="offering-title">{offer.title}</h3>
                                    <p className="offering-desc">{offer.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Pain Points Section */}
            <section className="pain-points-section">
                <div className="container">
                    <div className="pain-points-header text-center">
                        <h2 className="pain-points-title">Could UI/UX Design Benefit Your Brand</h2>
                        <h3 className="pain-points-subtitle">if your brand's website has</h3>
                    </div>

                    <div className="row justify-content-center pain-points-grid">
                        {[
                            {
                                icon: shopifyIcon,
                                title: "Low Conversion Rates",
                                desc: "If your website traffic is high but conversions are low, UI/UX can help increase your success."
                            },
                            {
                                icon: shopifyIcon,
                                title: "High Bounce Rates",
                                desc: "UI/UX can reduce bounce rates by improving the user experience and keeping visitors engaged."
                            },
                            {
                                icon: shopifyIcon,
                                title: "Unclear User Journey",
                                desc: "When customers drop off before completing a purchase, UI/UX can optimize the flow for seamless navigation."
                            },
                            {
                                icon: shopifyIcon,
                                title: "Poor Mobile Performance",
                                desc: "If your mobile conversions lag, UI/UX can ensure your site works smoothly across all devices."
                            },
                            {
                                icon: shopifyIcon,
                                title: "High Abandonment Cart",
                                desc: "If customers frequently abandon their carts, UI/UX can optimize the checkout process to increase completed purchases."
                            }
                        ].map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-5">
                                <div className="pain-point-card">
                                    <div className="pain-point-icon-wrapper">
                                        <img src={item.icon} alt={item.title} className="pain-point-icon" />
                                    </div>
                                    <h4 className="pain-point-title">{item.title}</h4>
                                    <p className="pain-point-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Service;
