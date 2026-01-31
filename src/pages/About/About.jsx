import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { LuLightbulb, LuBrainCircuit, LuMoonStar, LuPhone, LuMail } from 'react-icons/lu';
import { useContactModal } from '../../context/ContactModalContext';
import './About.css';
import kavyaImg from '../../assets/about-image/kavya-kapoor.png';
import storyLeftImg from '../../assets/about-image/story-left.png';
import storyRightImg from '../../assets/about-image/story-right.png';
import bgaboutimg from '../../assets/home-images/hero-Bg.png';
import aboutimgfloat from '../../assets/home-images/about-bg-blur.png';
import teamWorkingImg from '../../assets/about-image/team-working.png';
import curvedArrowImg from '../../assets/about-image/curved-arrow.png';

const About = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { openModal } = useContactModal();

    const BASE_URL = "https://cms.clickmecha.com";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/about`);
                const result = await response.json();
                if (result.status) {
                    setData(result.data);
                }
            } catch (error) {
                console.error("Error fetching About data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper to get image URL with fallback
    const getImageUrl = (apiPath, defaultImage) => {
        if (!apiPath) return defaultImage;
        if (apiPath.startsWith('http')) return apiPath;
        // Remove leading slash if present in path and BASE_URL doesn't end with one (it doesn't)
        const cleanPath = apiPath.startsWith('/') ? apiPath : `/${apiPath}`;
        return `${BASE_URL}${cleanPath}`;
    };

    // Helper for rendering HTML content safely
    const renderContent = (content, defaultContent) => {
        return content ? <span dangerouslySetInnerHTML={{ __html: content }} /> : <span dangerouslySetInnerHTML={{ __html: defaultContent }} />;
    };

    const general = data?.general || {};
    const milestones = data?.milestones || [];
    const values = data?.values || [];

    // Default stats if API is null
    const stats = [
        {
            value: general.founder_stat1_value || "230+",
            label: general.founder_stat1_label || "Projects Delivered"
        },
        {
            value: general.founder_stat2_value || "10+",
            label: general.founder_stat2_label || "Years Experience"
        },
        {
            value: general.founder_stat3_value || "12+",
            label: general.founder_stat3_label || "Countries Served"
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Text Section */}
            <div
                className="about-hero-wrappe position-relative vh-50 bg-cover bg-center"
                style={{ backgroundImage: `url(${getImageUrl(general.hero_bg_image, bgaboutimg)})` }}
            >
                <div className="hero-image-box">
                    <img src={aboutimgfloat} alt="Story Illustration" className="about-img-float position-absolute bottom-0 start-0 w-25" />
                </div>

                <div className="container section-padding text-center position-relative" >
                    <h1 className="about-title mb-4">
                        {renderContent(general.hero_title, 'Every company has a story, <br /> Ours began with a voice that <br /> <span class="highlight d-block mt-2">refused to stay silent</span>')}
                    </h1>
                    <p className="about-description mx-auto">
                        {renderContent(general.hero_description, 'A founder’s journey that turned rejection into impact — bold strategy, fearless creativity, and results that speak.')}
                    </p>
                </div>
            </div>

            {/* Meet Kavya Section */}
            <section className="meet-kavya-section pb-5">
                <div className="container">
                    <div className="row align-items-center gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="kavya-image-wrapper">
                                <img
                                    src={getImageUrl(general.founder_image, kavyaImg)}
                                    alt={general.founder_title || "Kavya Kapoor"}
                                    className="img-fluid rounded-4"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <span className="section-label-orange">{general.founder_subtitle || "The Voice Behind ClickMecha"}</span>
                            <h2 className="about-subheading mt-2 mb-4">{general.founder_title || "Meet Kavya Kapoor"}</h2>
                            <div className="about-text mb-5">
                                {renderContent(general.founder_description, 'A restless mind and a fearless voice shaped a marketing leader who asks hard questions and demands better results.')}
                            </div>

                            <div className="row stats-row">
                                {stats.map((stat, index) => (
                                    <div className="col-sm-4 mb-4 mb-sm-0" key={index}>
                                        <h3 className="stat-number">{stat.value}</h3>
                                        <p className="stat-label">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="story-section section-padding pt-0">
                <div className="container">
                    <div className="row gx-5">
                        {/* Left Column */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h2 className="story-heading mb-4">
                                {renderContent(general.story_title, 'Where It All <span class="highlight-orange">Started</span>')}
                            </h2>
                            <div className="about-text mb-4">
                                {renderContent(general.story_description, 'Kavya was not born into a wealthy family or a network of business connections. He didn’t inherit a company, a team, or a ready-made opportunity. What he did have was a restless mind and a fearless voice — one that always pushed him to do more, be more, say more.<br/><br/>Growing up, he would look at ads on billboards, TV commercials, and digital campaigns and wonder, “Who creates all this? Who decides what people feel when they see a brand?” He didn’t know it then, but those questions would become the foundation of his future.')}
                            </div>
                            <div className="story-image-wrapper">
                                <img
                                    src={getImageUrl(general.story_image, storyLeftImg)}
                                    alt="Team Collaborating"
                                    className="img-fluid rounded-4"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6">
                            <h2 className="story-heading mb-4">
                                {renderContent(general.struggle_title, 'The Struggles <span class="highlight-orange">No One Saw</span>')}
                            </h2>
                            <div className="about-text mb-4">
                                {renderContent(general.struggle_description, 'Before the first client signed a contract, before the company name meant anything, before even a single rupee was earned — there were years of rejection.<br/><br/>Kavya would walk into offices with nothing but a laptop, a half-pitched idea, and a heart full of confidence. He would pitch to brands who had never heard of him. He would send hundreds of emails that never got replies. He would make calls that ended before he could finish his sentence.<br/><br/>People looked at him — a young boy with big dreams — and said things like: “Come back when your company is bigger.” “Right now, we can’t trust someone new.” “We already have an agency.”<br/><br/>He wasn’t from a fashionable background. He wasn’t someone with contacts. He was simply a fighter, with a loud voice and an even louder belief: I deserve a chance. And when no one gave him one, he created his own.')}
                            </div>
                            <div className="story-image-wrapper mb-5">
                                <img
                                    src={getImageUrl(general.struggle_image, storyRightImg)}
                                    alt="Struggles and Hard Work"
                                    className="img-fluid rounded-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Turning Point Section */}
            <section className="turning-point-section">
                <div className="container turning-point-content">
                    {/* The Turning Point */}
                    <div className="text-center mb-5">
                        <h2 className="story-heading mb-5">{renderContent(general.turning_title, 'The Turning Point')}</h2>
                        <div className="row text-start justify-content-center">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="about-text">
                                    {renderContent(general.turning_left_text, 'There came a day — a day Kavya still remembers — when everything changed. He had been chasing a mid-sized brand for months. After yet another rejection, he sat alone wondering if he should give up.<br/><br/>But something inside him refused to quit. He created an entire digital campaign for that brand — for free. He wrote the strategy, designed creatives, planned ads, crafted messaging, and built the concept overnight.')}
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about-text">
                                    {renderContent(general.turning_right_text, 'The next morning, he walked into their office without a meeting slot, looked the brand manager in the eye and said: “You don’t have to hire me. Just see what I can do.”<br/><br/>That moment changed everything. The brand hired him instantly — and that break opened multiple doors.')}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Milestone Timeline */}
                    <div className="mt-5 pt-4">
                        <h2 className="story-heading text-center mb-5">Milestone Timeline</h2>
                        <div className="timeline-cards-row">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={30}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1200: { slidesPerView: 3 },
                                }}
                                className="timeline-slider"
                            >
                                {milestones.length > 0 ? (
                                    milestones.map((milestone, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="timeline-card-wrapper">
                                                <div className="timeline-card">
                                                    <span className="timeline-badge badge-early-days">{milestone.year || milestone.badge || "MILESTONE"}</span>
                                                    <h3 className="timeline-title">{milestone.title}</h3>
                                                    <div className="timeline-text" dangerouslySetInnerHTML={{ __html: milestone.description }} />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <>
                                        {/* Fallback Static Slides using existing content */}
                                        <SwiperSlide>
                                            <div className="timeline-card-wrapper">
                                                <div className="timeline-card">
                                                    <span className="timeline-badge badge-early-days">EARLY DAYS</span>
                                                    <h3 className="timeline-title">A laptop, a pitch, and endless curiosity</h3>
                                                    <p className="timeline-text">Kavya began pitching with nothing but ideas. The constant questioning of ads became his advantage.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="timeline-card-wrapper">
                                                <div className="timeline-card">
                                                    <span className="timeline-badge badge-growth">GROWTH</span>
                                                    <h3 className="timeline-title">From small brands to big names</h3>
                                                    <p className="timeline-text">Bold work, clear results, and unapologetic creativity attracted bigger brands.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="timeline-card-wrapper">
                                                <div className="timeline-card">
                                                    <span className="timeline-badge badge-the-break">THE BREAK</span>
                                                    <h3 className="timeline-title">Free overnight campaign</h3>
                                                    <p className="timeline-text">Building a full campaign for free and walking it into a client’s office turned a rejection into opportunity.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="timeline-card-wrapper">
                                                <div className="timeline-card">
                                                    <span className="timeline-badge badge-today">TODAY</span>
                                                    <h3 className="timeline-title">A culture of courage</h3>
                                                    <p className="timeline-text">We still do things with the same hunger. We still drive results for every client with the courage that started it all.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="who-we-are-section section-padding">
                <div className="container">
                    <div className="row mb-5 align-items-end">
                        <div className="col-lg-6">
                            <h2 className="story-heading">
                                What Makes Us <br />
                                <span className="highlight-orange">Who We Are</span>
                            </h2>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <p className="who-we-are-intro">
                                A reflection of Kavya’s journey: <br />
                                boldness, honesty, creativity and the <br />
                                hunger to push boundaries.
                            </p>
                        </div>
                    </div>

                    <div className="row gx-5 pb-5">
                        {values.length > 0 ? (
                            values.map((value, index) => (
                                <div className="col-lg-4 mb-4 mb-lg-0 text-center text-lg-start" key={index}>
                                    <div className="icon-box mb-4">
                                        {/* Use a default icon or parse if available. Using LuLightbulb as generic for dynamic */}
                                        {value.icon_image ? <img src={getImageUrl(value.icon_image)} alt="icon" style={{ width: 40, height: 40 }} /> : <LuLightbulb size={40} color="#E89B25" strokeWidth={1.5} />}
                                    </div>
                                    <h3 className="value-title">{value.title}</h3>
                                    <div className="value-desc" dangerouslySetInnerHTML={{ __html: value.description }}></div>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
                                    <div className="icon-box mb-4">
                                        <LuLightbulb size={40} color="#E89B25" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="value-title">Ideas That Make Noise</h3>
                                    <p className="value-desc">Concepts that break the quiet and get noticed.</p>
                                </div>
                                <div className="col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
                                    <div className="icon-box mb-4">
                                        <LuBrainCircuit size={40} color="#E89B25" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="value-title">Strategies That Cut Through</h3>
                                    <p className="value-desc">Tactics built for measurable impact.</p>
                                </div>
                                <div className="col-lg-4 text-center text-lg-start">
                                    <div className="icon-box mb-4">
                                        <LuMoonStar size={40} color="#E89B25" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="value-title">Honesty & Hard Work</h3>
                                    <p className="value-desc">Direct feedback, relentless execution.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Emotional Core Section */}
            <section className="emotional-core-section section-padding pt-0">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="about-team-image-wrapper">
                                <img
                                    src={getImageUrl(general.emotional_image, teamWorkingImg)}
                                    alt="Team Working"
                                    className="img-fluid rounded-4"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 bg-light-creme p-lg-5 p-1 rounded-4 position-relative">
                            <div className="emotional-content">
                                <h2 className="story-heading mb-4 position-relative d-inline-block">
                                    {general.emotional_title || "The Emotional Core Behind the Brand"}
                                    <img src={curvedArrowImg} alt="arrow" className="curved-arrow-icon" />
                                </h2>
                                <div className="about-text mb-3 mb-lg-5">
                                    {renderContent(general.emotional_description, 'Nights of doubt, shoestring budgets, and the small victories that shaped a leader. Every struggle taught resilience and gratitude.')}
                                </div>

                                {/* Handle Emotional Points - API might return string or list. Code assumes string if API, hardcoded list if fallback */}
                                {general.emotional_points ? (
                                    <div className="core-values-list mb-3 mb-lg-5" dangerouslySetInnerHTML={{ __html: general.emotional_points }} />
                                ) : (
                                    <ul className="core-values-list list-unstyled mb-3 mb-lg-5">
                                        <li className="mb-3">Designed the first logo himself due to budget limits</li>
                                        <li className="mb-3">Waited for clients who never showed up</li>
                                        <li className="mb-3">Felt the weight of family expectations</li>
                                    </ul>
                                )}

                                <span className="highlight-tagline">AND KEPT GOING...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section-padding pt-0 pb-0">
                <div className="cta-card position-relative overflow-hidden w-100 rounded-0">
                    <div className="container">
                        <div className="cta-content position-relative z-1">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <h2 className="cta-title text-white">
                                        {renderContent(general.cta_title, 'Ready to <br /> make noise?')}
                                    </h2>
                                </div>
                                <div className="col-lg-6 text-lg-end text-white">
                                    <div className="cta-text mb-0">
                                        {renderContent(general.cta_description, 'We’ll be bold. We’ll be creative. We’ll be honest — so your brand can be heard clearly.')}
                                    </div>
                                </div>
                            </div>

                            <div className="cta-contact-row mt-5 pt-4 d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 text-white">
                                <div className="contact-item d-flex align-items-center gap-3">
                                    <div className="contact-icon-circle">
                                        <LuPhone size={24} />
                                    </div>
                                    <div className="contact-info text-start">
                                        <span className="d-block small opacity-75">Phone Number:</span>
                                        <span className="fw-bold">{general.cta_phone || "+91-99996-73073"}</span>
                                    </div>
                                </div>

                                <div className="contact-item d-flex align-items-center gap-3">
                                    <div className="contact-icon-circle">
                                        <LuPhone size={24} />
                                    </div>
                                    <div className="contact-info text-start">
                                        <span className="d-block small opacity-75">Phone Number:</span>
                                        <span className="fw-bold">{general.cta_phone_2 || "+91 99990 08998"}</span>
                                    </div>
                                </div>

                                <div className="contact-item d-flex align-items-center gap-3">
                                    <div className="contact-icon-circle">
                                        <LuMail size={24} />
                                    </div>
                                    <div className="contact-info text-start">
                                        <span className="d-block small opacity-75">Email:</span>
                                        <span className="fw-bold">{general.cta_email || "kavya@clickmecha.com"}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="cta-button-wrapper text-center mt-5 position-relative d-inline-block start-50 translate-middle-x">
                                <span className="badge-free position-absolute start-50 translate-middle-x">FREE</span>
                                <button onClick={openModal} className="btn btn-white rounded-pill px-4 py-3 fw-bold">
                                    {general.cta_button_text || "BOOK A 30 MIN CALL"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
