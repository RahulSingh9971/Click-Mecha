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
import Work from '../../components/Work/Work';
import Contact from '../../components/Contact/Contact';

// Client Logos
import clientTinder from '../../assets/service-images/logo-tinder.png';
import clientEa from '../../assets/service-images/logo-ea.png';
import clientSlack from '../../assets/service-images/logo-slack.png';
import clientAmazon from '../../assets/service-images/logo-amazon.png';
import clientWalmart from '../../assets/service-images/logo-walmart.png';
import clientGoogle from '../../assets/service-images/logo-google.png';
import clientLinkedin from '../../assets/service-images/logo-linkedin.png';

// Testimonials Asset
import rocketIcon from '../../assets/home-images/rocket.png';

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


    const plans = [
        {
            id: 1,
            price: "₹21,999",
            originalPrice: "₹40,000",
            discount: "SAVE 30%",
            description: "If your mobile conversions lag, UI/UX can ensure your site works smoothly all devices.",
            features: [
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co"
            ],
            highlight: false
        },
        {
            id: 2,
            price: "₹25,999",
            originalPrice: "₹40,000",
            discount: "SAVE 30%",
            description: "If your mobile conversions lag, UI/UX can ensure your site works smoothly all devices.",
            features: [
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co"
            ],
            highlight: true
        },
        {
            id: 3,
            price: "₹29,999",
            originalPrice: "₹40,000",
            discount: "SAVE 30%",
            description: "If your mobile conversions lag, UI/UX can ensure your site works smoothly all devices.",
            features: [
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co",
                "Lorem ipsum dolor sit amet, co"
            ],
            highlight: false
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

    const clientSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    dots: false
                }
            }
        ]
    };


    // Testimonials Data & Settings
    const testimonialsData = [
        {
            title: "Consistent Execution",
            text: "Smart strategies and consistent execution. Our engagement went up, and the campaigns finally felt aligned with our brand. Really impressed with the results.",
            stars: 5
        },
        {
            title: "Modern, and user-friendly",
            text: "The designs were clean, modern, and user-friendly. They understood our product well and delivered a smooth experience that our users instantly appreciated.",
            stars: 5
        },
        {
            title: "Full ownership",
            text: "A well-coordinated team aUI/UXss marketing, design, and development. They took full ownership of the project and delivered work that genuinely elevated our brand.",
            stars: 5
        },
        {
            title: "Consistent Execution",
            text: "Smart strategies and consistent execution. Our engagement went up, and the campaigns finally felt aligned with our brand. Really impressed with the results.",
            stars: 5
        }
    ];

    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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

            {/* Work Showcase Section */}
            <Work />

            {/* Pricing Section */}
            <section className="pricing-section">
                <div className="container">
                    <h2 className="pricing-title text-center">Our plans to get started</h2>

                    <div className="row g-4 justify-content-center align-items-center">
                        {plans.map((plan) => (
                            <div key={plan.id} className="col-lg-4 col-md-6">
                                <div className={`pricing-card ${plan.highlight ? 'highlight-card' : ''}`}>

                                    <div className="discount-badge">{plan.discount}</div>

                                    <div className="price-header">
                                        <h3 className="price">{plan.price}</h3>
                                        <span className="original-price">{plan.originalPrice}</span>
                                    </div>

                                    <p className="plan-description">{plan.description}</p>

                                    <ul className="feature-list">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx}>
                                                {/* Inline SVGs for check icons */}
                                                {plan.highlight ? (
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                                                        <circle cx="12" cy="12" r="10" fill="#0E1D28" />
                                                        <path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                ) : (
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="check-icon">
                                                        <circle cx="12" cy="12" r="10" fill="#F7941E" />
                                                        <path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="btn-book-pricing">BOOK A FREE CALL</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Clients Section */}
            <section className="clients-section">
                <div className="container-fluid">
                    <h2 className="clients-title text-center">Our Clients</h2>
                    <div className="clients-slider-wrapper">
                        <Slider {...clientSliderSettings}>
                            <div className="client-logo-wrapper">
                                <img src={clientTinder} alt="Tinder" className="service-client-logo" />
                            </div>
                            <div className="client-logo-wrapper">
                                <img src={clientEa} alt="EA" className="service-client-logo" />
                            </div>
                            <div className="client-logo-wrapper">
                                <img src={clientSlack} alt="Slack" className="service-client-logo" />
                            </div>
                            <div className="client-logo-wrapper">
                                <img src={clientAmazon} alt="Amazon" className="service-client-logo" />
                            </div>
                            <div className="client-logo-wrapper">
                                <img src={clientGoogle} alt="Google" className="service-client-logo" />
                            </div>
                            <div className="client-logo-wrapper">
                                <img src={clientWalmart} alt="Walmart" className="service-client-logo" />
                            </div>
                            <div className="client-logo-wrapper">
                                <img src={clientLinkedin} alt="LinkedIn" className="service-client-logo" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="service-testimonials-section position-relative">
                {/* <img src={rocketIcon} alt="Rocket" className="service-rocket-icon" /> */}
                <div className="container">
                    <div className="testimonials-header text-center mb-5 position-relative">
                        <h2 className="service-testimonials-headline">
                            What it’s like to <br />
                            <span className="highlight-text">collaborate together</span>
                        </h2>
                    </div>
                    <div className="service-testimonials-slider">
                        <Slider {...testimonialSettings}>
                            {testimonialsData.map((item, index) => (
                                <div key={index} className="px-3">
                                    <div className="service-testimonial-card">
                                        <div className="service-quote-icon">“</div>
                                        <div className="service-stars">
                                            {[...Array(item.stars)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                        <h3 className="service-testimonial-title">{item.title}</h3>
                                        <p className="service-testimonial-desc">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};


export default Service;
