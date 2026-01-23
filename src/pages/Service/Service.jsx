import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import serviceBg from '../../assets/service-images/service-bg.png';
import avatars from '../../assets/service-images/avatars.png';
import phones from '../../assets/service-images/phones.png';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import teamIcon from '../../assets/service-images/icon-team.png';
import expIcon from '../../assets/service-images/icon-experience.png';
import shopifyIcon from '../../assets/service-images/icon-shopify.png';
import clientsIcon from '../../assets/service-images/icon-clients.png';
import bulbIcon from '../../assets/service-images/icon-bulb.png';
import Work from '../../components/Work/Work';
import Contact from '../../components/Contact/Contact';

// Client Logos
import logo1 from '../../assets/home-images/imgi_10_nww_c9.png';
import logo2 from '../../assets/home-images/imgi_35_cl5.png';
import logo3 from '../../assets/home-images/imgi_36_cl6.png';
import logo4 from '../../assets/home-images/imgi_49_cl20.png';
import logo5 from '../../assets/home-images/imgi_50_cl23.png';
import logo6 from '../../assets/home-images/imgi_51_cl24.png';

// Testimonials Asset
import rocketIcon from '../../assets/home-images/rocket.png';

const Service = () => {
    const stats = [
        { icon: teamIcon, text: "IN HOUSE TEAM" },
        { icon: expIcon, text: "10 YEARS OF EXPERIENCE" },
        { icon: shopifyIcon, text: "OFFICIAL SHOPIFY PARTNER" },
        { icon: clientsIcon, text: "450+ CLIENTS GLOBALLY" }
    ];

    const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

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


    // Plans Configuration
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

    // Testimonials Data
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
                                <a href="https://calendly.com/clickmecha/15min" target="_blank" rel="noopener noreferrer">
                                    <button className="btn-book-hero">BOOK A FREE CALL</button>
                                </a>
                            </div>
                        </div>

                        {/* Right Image Content */}
                        <div className="col-lg-6 service-image-content">
                            <div className="image-wrapper">
                                <img src={phones} alt="Mobile App Design Mockup" className="phones-mockup" />

                                {/* Floating Badge */}
                                <div className="stat-badge">
                                    <div className="stat-percent">55%</div>
                                    <div className="stat-desc-service">Increase in<br />Conversion Rate</div>
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
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            {stats.map((stat, index) => (
                                <SwiperSlide key={index}>
                                    <div className="stat-item">
                                        <img src={stat.icon} alt={stat.text} className="stat-icon" />
                                        <span className="stat-label">{stat.text}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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


            {/* === Clients Section === */}
            <section className="service-page-clients-section">
                <div className="container-fluid text-center">
                    <h2 className="service-page-clients-headline mb-5">Our Clients</h2>
                    <div className="slider-container">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={5}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            speed={500}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                480: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                1280: {
                                    slidesPerView: 5,
                                }
                            }}
                        >
                            {clientLogos.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className="service-page-client-slide">
                                        <img src={logo} alt={`Client ${index + 1}`} className="service-page-client-logo" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 }
                            }}
                        >
                            {testimonialsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="px-3">
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
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};


export default Service;
