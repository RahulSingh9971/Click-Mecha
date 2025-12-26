import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import Work from '../../components/Work/Work';
import Contact from '../../components/Contact/Contact';

// Assets Imports from src/assets/home-images/
// Hero
import heroShape from '../../assets/home-images/hero-shape.png';
import heroAvatar from '../../assets/home-images/hero-avatar.png';
import heroBg from '../../assets/home-images/hero-bg.png';
import heroRatingGroup from '../../assets/home-images/hero-rating-group.png';

// About
import officeImage from '../../assets/home-images/office.png';
import aboutBgBlur from '../../assets/home-images/about-bg-blur.png';
import bottomImage from '../../assets/home-images/Rectangle 7.webp';

// Services
import iconWeb from '../../assets/home-images/icon-web.png';
import iconMobile from '../../assets/home-images/icon-mobile.png';
import iconUI from '../../assets/home-images/icon-ui.png';
import stickerGreatWork from '../../assets/home-images/sticker-great-work.png';
import iconMarketing from '../../assets/home-images/icon-marketing.png';

// Clients
import logo1 from '../../assets/home-images/imgi_10_nww_c9.png';
import logo2 from '../../assets/home-images/imgi_35_cl5.png';
import logo3 from '../../assets/home-images/imgi_36_cl6.png';
import logo4 from '../../assets/home-images/imgi_49_cl20.png';
import logo5 from '../../assets/home-images/imgi_50_cl23.png';
import logo6 from '../../assets/home-images/imgi_51_cl24.png';

// Testimonials
import rocketIcon from '../../assets/home-images/rocket.png';

// Results
import result1 from '../../assets/home-images/result-1.png';
import result2 from '../../assets/home-images/result-2.png';
import result3 from '../../assets/home-images/result-3.png';
import result4 from '../../assets/home-images/result-4.png';

// Growth
import teamMeeting from '../../assets/home-images/team-meeting.png';
import netLikes from '../../assets/home-images/net-likes.png';
import baburaoSticker from '../../assets/home-images/baburao-sticker.png';
import growthBg from '../../assets/home-images/growth-bg.webp';


const Home = () => {

    // === Data & Settings ===

    // Services Data
    const servicesData = [
        {
            title: "Website Development",
            desc: "Responsive, SEO-optimized websites built with performance in mind.",
            icon: iconWeb
        },
        {
            title: "Mobile App Development",
            desc: "iOS and Android apps designed for seamless user experiences.",
            icon: iconMobile
        },
        {
            title: "UI/UX & Branding Design",
            desc: "Modern, user-friendly designs and branding that make your business unforgettable.",
            icon: iconUI
        },
        {
            title: "Digital Marketing",
            desc: "Data-driven SEO, ads, and content strategies that attract traffic and convert leads.",
            icon: iconMarketing
        },
        {
            title: "E-Commerce Solutions",
            desc: "Conversion-focused online stores with secure payments and smooth shopping experiences.",
            icon: iconWeb
        },
        {
            title: "Social Media Marketing",
            desc: "Amplify Your Brand's Voice: ClickMecha's social media marketing strategies are tailored for impact.",
            icon: iconUI
        }
    ];

    // Clients Slider Settings
    const clientSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
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
                }
            }
        ]
    };
    const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

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
        <main>
            {/* === Hero Section === */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 hero-content">
                            <div className="rating-pill mb-4 fade-in-up">
                                <img src={heroRatingGroup} alt="Rating Avatars" className="rating-avatars" />
                                <span className="rating-text">4.9 Rated by 450+ Successful B2B Owners</span>
                            </div>
                            <h1 className="hero-title mb-4 fade-in-up delay-1">
                                Turning Ideas Into <br className="d-none d-md-block" />
                                <span className="highlight-text">Impactful Digital</span> <br className="d-none d-md-block" />
                                Platforms
                            </h1>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block position-relative">
                            <div className="circle-badge fade-in-right delay-2">
                                <div className="circle-text-wrapper">
                                    <svg viewBox="0 0 100 100" width="100" height="100" className="rotating-text">
                                        <defs>
                                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                        </defs>
                                        <text fontSize="11">
                                            <textPath xlinkHref="#circle">
                                                Start Your Journey - Start Your Journey -
                                            </textPath>
                                        </text>
                                    </svg>
                                    <img src={heroAvatar} alt="Avatar" className="center-avatar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-shape-container fade-in-right">
                    <img src={heroShape} alt="Abstract 3D Shape" className="hero-shape-img" />
                </div>

                <div className="hero-floating-desc">
                    <p>
                        We design, build, and market<br />
                        digital solutions that help<br />
                        businesses grow faster.
                    </p>
                </div>
            </section>

            {/* === About Section === */}
            <>
                <section className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                <span className="section-label">WHO WE ARE</span>
                            </div>
                            <div className="col-lg-9 col-md-12">
                                <h2 className="about-headline mb-5">
                                    Click Mecha helps startups and businesses build platforms that <br className="d-none d-lg-block" />
                                    <span className="highlight-text">attract, convert, and retain customers</span>
                                </h2>
                                <div className="about-image-container mb-5">
                                    <img src={officeImage} alt="Modern Office" className="img-fluid rounded-4 w-100" />
                                </div>
                                <div className="row stats-row">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <h3 className="stat-number">230+</h3>
                                        <p className="stat-desc">
                                            Clients served worldwide across industries (tech, retail, healthcare, education).
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="stat-number">2010</h3>
                                        <p className="stat-desc">
                                            Since 2010 helping businesses turn ideas into scalable digital platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-blur-bg">
                        <img src={aboutBgBlur} alt="" />
                    </div>
                </section>
                <img src={bottomImage} alt="" className="about-bottom-image" />
            </>

            {/* === Services Section === */}
            <section className="services-section">
                <div className="container">
                    <div className="row pb-5 align-items-end position-relative">
                        <div className="col-lg-7">
                            <h2 className="services-headline">
                                From <span className="highlight-text">strategy to execution</span>, we provide full-stack digital solutions.
                            </h2>
                        </div>
                        <div className="col-lg-5 text-lg-end position-relative">
                            <button className="btn-quote">REQUEST A QUOTE</button>
                        </div>
                        <img src={stickerGreatWork} alt="Great Work" className="great-work-sticker" />
                    </div>
                    <div className="row g-4">
                        {servicesData.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="service-card">
                                    <h3 className="service-title">{service.title}</h3>
                                    <div className="service-icon-wrapper">
                                        <img src={service.icon} alt={service.title} className="service-icon" />
                                    </div>
                                    <p className="service-desc">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === Work Component (Kept Separate) === */}
            <Work />

            {/* === Clients Section === */}
            <section className="clients-section">
                <div className="container-fluid text-center">
                    <h2 className="clients-headline mb-5">Our Clients</h2>
                    <div className="slider-container">
                        <Slider {...clientSettings}>
                            {clientLogos.map((logo, index) => (
                                <div key={index} className="client-slide">
                                    <img src={logo} alt={`Client ${index + 1}`} className="client-logo" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* === Testimonials Section === */}
            <section className="testimonials-section position-relative">
                <img src={rocketIcon} alt="Rocket" className="rocket-icon" />
                <div className="container">
                    <div className="testimonials-header text-center mb-5 position-relative">
                        <h2 className="testimonials-headline">
                            What it’s like to <br />
                            <span className="highlight-text">collaborate together</span>
                        </h2>
                    </div>
                    <div className="testimonials-slider">
                        <Slider {...testimonialSettings}>
                            {testimonialsData.map((item, index) => (
                                <div key={index} className="px-3">
                                    <div className="testimonial-card">
                                        <div className="quote-icon">“</div>
                                        <div className="stars">
                                            {[...Array(item.stars)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                        <h3 className="testimonial-title">{item.title}</h3>
                                        <p className="testimonial-desc">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* === Results Section === */}
            <section className="results-section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <h2 className="results-headline">
                                Real Results, <br />
                                <span className="highlight-text">Real People</span>
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="results-desc">
                                Discover genuine customer experiences, thoughtfully shared to highlight the real results and refined quality behind our brand.
                            </p>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-6 col-md-3">
                            <div className="result-img-wrapper">
                                <img src={result1} alt="Real Result 1" className="img-fluid result-img" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="result-img-wrapper">
                                <img src={result2} alt="Real Result 2" className="img-fluid result-img" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="result-img-wrapper">
                                <img src={result3} alt="Real Result 3" className="img-fluid result-img" />
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="result-img-wrapper">
                                <img src={result4} alt="Real Result 4" className="img-fluid result-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === Growth Section === */}
            <section className="growth-section" style={{ backgroundImage: `url(${growthBg})` }}>
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-5 mb-5 mb-lg-0 position-relative z-2">
                            <h2 className="growth-headline">
                                Your Digital <br />
                                Growth Partner.
                            </h2>
                            <button className="btn-about">ABOUT THE BRAND</button>
                        </div>
                        <div className="col-lg-7 position-relative">
                            <img src={netLikes} alt="Likes" className="net-sticker" />
                            <div className="growth-image-wrapper">
                                <img src={teamMeeting} alt="Team Meeting" className="img-fluid growth-img" />
                            </div>
                            <div className="growth-content mt-4">
                                <p className="growth-desc">
                                    We’re a team of developers, designers, and marketers helping 200+ businesses worldwide. With 300+ projects delivered, our mission is simple: turn your digital vision into a reality.
                                </p>
                            </div>
                            <img src={baburaoSticker} alt="Baburao Style" className="baburao-sticker" />
                        </div>
                    </div>
                </div>
            </section>

            {/* === Contact Component (Kept Separate) === */}
            <Contact />
        </main>
    );
};

export default Home;
