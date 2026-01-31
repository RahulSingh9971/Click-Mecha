import React from 'react';
import './ServiceDetail.css';
import serviceDetailBg from '../../assets/service-images/service-detail-bg.png';
import helpSticker from '../../assets/service-images/help-sticker.png';
import { FaCheckCircle, FaHandPointRight } from 'react-icons/fa';
import Contact from '../../components/Contact/Contact';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useContactModal } from '../../context/ContactModalContext';


import spDigital from '../../assets/specialized-icons/digital-marketing.png';
import spSeo from '../../assets/specialized-icons/seo.png';
import spWordpress from '../../assets/specialized-icons/wordpress.png';
import spPpc from '../../assets/specialized-icons/ppc.png';
import spWebDesign from '../../assets/specialized-icons/web-design.png';
import linkedinIcon from '../../assets/specialized-icons/linkdin.png';
import SocialMediaIcon from '../../assets/specialized-icons/Social Media.png';
import mobileAppIcon from '../../assets/specialized-icons/mobile-app.png';
import affiliateIcon from '../../assets/specialized-icons/affiliate.png';
import emailIcon from '../../assets/specialized-icons/email.png';
import googleAdsIcon from '../../assets/specialized-icons/google-ads.png';
import leadGenIcon from '../../assets/specialized-icons/lead-gen.png';
import youtubeIcon from '../../assets/specialized-icons/youtube.png';
import ecommerceIcon from '../../assets/specialized-icons/ecommerce.png';
import facebookIcon from '../../assets/specialized-icons/facebook.png';
import localBusinessIcon from '../../assets/specialized-icons/local-business.png';
import googleAnalyticsIcon from '../../assets/specialized-icons/google-analytics.png';
import bloggingIcon from '../../assets/specialized-icons/blogging.png';
import instagramIcon from '../../assets/specialized-icons/instagram.png';

import clientTitan from '../../assets/service-detail-clients/titan.png';
import clientFlipkart from '../../assets/service-detail-clients/flipkart.png';
import clientVoltas from '../../assets/service-detail-clients/voltas.png';
import clientViacom from '../../assets/service-detail-clients/viacom18.png';
import clientTata from '../../assets/service-detail-clients/tata-housing.png';
import clientRustomjee from '../../assets/service-detail-clients/rustomjee.png';

import performanceChart1 from '../../assets/service-images/performance-chart-1.png';
import performanceChart2 from '../../assets/service-images/performance-chart-2.png';
import iconBulb from '../../assets/service-images/icon-bulb.png';

import featured1 from '../../assets/featured-in/featured-1.png';
import featured2 from '../../assets/featured-in/featured-2.png';
import featured3 from '../../assets/featured-in/featured-3.png';
import featured4 from '../../assets/featured-in/featured-4.png';
import featured5 from '../../assets/featured-in/featured-5.png';

import processStrategy from '../../assets/process-icons/process-strategy.png';
import processPlanning from '../../assets/process-icons/process-planning.png';
import processBranding from '../../assets/process-icons/process-branding.png';
import processResult from '../../assets/process-icons/process-result.png';

const specializedServices = [
    { title: "Digital Marketing Services", icon: <img src={spDigital} alt="Digital Marketing" /> },
    { title: "Search Engine Optimization Services", icon: <img src={spSeo} alt="SEO" /> },
    { title: "LinkedIn Marketing Services", icon: <img src={linkedinIcon} alt="LinkedIn" /> },
    { title: "WordPress Website Design Services", icon: <img src={spWordpress} alt="WordPress" /> },
    { title: "Pay Per Click Services", icon: <img src={spPpc} alt="PPC" /> },
    { title: "Website Designing Services", icon: <img src={spWebDesign} alt="Web Design" /> },
    { title: "Social Media Services", icon: <img src={SocialMediaIcon} alt="Social Media" /> },
    { title: "Google Adsense Services", icon: <img src={spPpc} alt="AdSense" /> },
    { title: "Affiliate Marketing Services", icon: <img src={affiliateIcon} alt="Affiliate" /> },
    { title: "Mobile App Marketing Services", icon: <img src={mobileAppIcon} alt="App Marketing" /> },
    { title: "Email Marketing Services", icon: <img src={emailIcon} alt="Email Marketing" /> },
    { title: "Lead Generation Services", icon: <img src={leadGenIcon} alt="Lead Gen" /> },
    { title: "Google AdWords Services", icon: <img src={googleAdsIcon} alt="Google Ads" /> },
    { title: "Youtube Marketing Services", icon: <img src={youtubeIcon} alt="Youtube" /> },
    { title: "E-commerce Marketing Services", icon: <img src={ecommerceIcon} alt="Ecommerce" /> },
    { title: "Facebook Marketing Services", icon: <img src={facebookIcon} alt="Facebook" /> },
    { title: "Local Business Listing Services", icon: <img src={localBusinessIcon} alt="Local Listing" /> },
    { title: "Google Analytics Services", icon: <img src={googleAnalyticsIcon} alt="Analytics" /> },
    { title: "Blogging Services", icon: <img src={bloggingIcon} alt="Blogging" /> },
    { title: "Instagram Marketing Services", icon: <img src={instagramIcon} alt="Instagram" /> }
];





const strategies = [
    {
        title: "Digital Marketing Agency Delhi",
        points: [
            "It's important to be first online",
            "Improve the Visibility of your Business online",
            "Target the Right Audience",
            "Elevate User Experiences",
            "Cost-Effective, Comprehensive Marketing"
        ]
    },
    {
        title: "Pay Per Click Advertising",
        points: [
            "It's important to be first online",
            "Improve the Visibility of your Business online",
            "Target the Right Audience",
            "Elevate User Experiences",
            "Cost-Effective, Comprehensive Marketing"
        ]
    },
    {
        title: "Social Media Marketing",
        points: [
            "It's important to be first online",
            "Improve the Visibility of your Business online",
            "Target the Right Audience",
            "Elevate User Experiences",
            "Cost-Effective, Comprehensive Marketing"
        ]
    },
    {
        title: "Website design and development",
        points: [
            "It's important to be first online",
            "Improve the Visibility of your Business online",
            "Target the Right Audience",
            "Elevate User Experiences",
            "Cost-Effective, Comprehensive Marketing"
        ]
    },
    {
        title: "Shopping ads",
        points: [
            "It's important to be first online",
            "Improve the Visibility of your Business online",
            "Target the Right Audience",
            "Elevate User Experiences",
            "Cost-Effective, Comprehensive Marketing"
        ]
    },
    {
        title: "Display ads",
        points: [
            "It's important to be first online",
            "Improve the Visibility of your Business online",
            "Target the Right Audience",
            "Elevate User Experiences",
            "Cost-Effective, Comprehensive Marketing"
        ]
    }
];

const caseStudies = [
    {
        client: "Garg Water Proofing",
        results: [
            { keyword: "waterproofing consultant service in delhi", rank: 1 },
            { keyword: "Waterproofing Agency India", rank: 2 },
            { keyword: "Waterproofing Services In India", rank: 2 },
            { keyword: "Ceramic Bathroom Set Of 3", rank: 2 },
            { keyword: "Waterproofing Services In Westend Colony", rank: 1 },
            { keyword: "Waterproofing Contractors", rank: 2 }
        ]
    },
    {
        client: "3d Paradise",
        results: [
            { keyword: "best 3d printing service", rank: 1 },
            { keyword: "Best 3D printing in Delhi", rank: 2 },
            { keyword: "3d printing for architects in India", rank: 1 },
            { keyword: "3D Printing for Robotics in India", rank: 2 },
            { keyword: "3D Printing Service Faridabad", rank: 2 }
        ]
    },
    {
        client: "Cutting Edge Media Academy",
        results: [
            { keyword: "Color Grading Course in Goregaon", rank: 1 },
            { keyword: "Best Institute For Graphic Designing In Goregaon", rank: 1 },
            { keyword: "Color Grading Course In Jogeshwari", rank: 1 },
            { keyword: "Color Grading Course In Borivali", rank: 1 },
            { keyword: "Film Editing Courses In Malad", rank: 2 }
        ]
    },
    {
        client: "Ele Jungle Elephant Safari",
        results: [
            { keyword: "Hathi Gaon Jaipur Ticket Price", rank: 1 },
            { keyword: "Amer Elephant Safari", rank: 2 },
            { keyword: "Amer fort elephant ride price", rank: 2 },
            { keyword: "Amer fort elephant ride cost", rank: 2 },
            { keyword: "Amer fort elephant ride booking", rank: 2 }
        ]
    },
    {
        client: "Waba Connect WhatsApp Api Services",
        results: [
            { keyword: "WhatsApp Business API In Ajmer", rank: 1 },
            { keyword: "WhatsApp Business API In Allahabad", rank: 1 },
            { keyword: "WhatsApp Business API In Ambala", rank: 2 },
            { keyword: "WhatsApp Business API In Amritsar", rank: 2 },
            { keyword: "WhatsApp Business API In Gorakhpur", rank: 2 }
        ]
    },
    {
        client: "KidsCity.com",
        results: [
            { keyword: "Buy Enfamil NeuroPro India", rank: 3 },
            { keyword: "Buy Hipp Organic Baby Cereal Online", rank: 3 },
            { keyword: "Buy Baby Milk Formula Online", rank: 2 },
            { keyword: "Buy Nestle Cereals for babies Online", rank: 1 },
            { keyword: "Top Heinz Baby Snacks In India", rank: 1 }
        ]
    },
    {
        client: "Clickmecha",
        results: [
            { keyword: "Digital Marketing Expert Delhi", rank: 1 },
            { keyword: "SEO Course Delhi", rank: 1 },
            { keyword: "SMO Course Delhi", rank: 1 },
            { keyword: "PPC Course in Delhi", rank: 1 },
            { keyword: "Seo Service Delhi", rank: 1 }
        ]
    },
    {
        client: "ISM Institute of Stock Market",
        results: [
            { keyword: "Share Market Institute Delhi", rank: 3 },
            { keyword: "Forex Institute", rank: 2 },
            { keyword: "Share Market Institute", rank: 2 },
            { keyword: "Stock trading institute nehru place", rank: 1 },
            { keyword: "Stock market institute karol bagh", rank: 3 }
        ]
    },
    {
        client: "kookee.in",
        results: [
            { keyword: "Buy Ceramic Bathroom Sets", rank: 2 },
            { keyword: "Buy Acrylic Bathroom Sets", rank: 2 },
            { keyword: "Ceramic Bathroom Accessories", rank: 2 },
            { keyword: "Ceramic Bathroom Set Of 3", rank: 2 },
            { keyword: "Shop White Ceramic Soap Dispensers", rank: 1 },
            { keyword: "Acrylic Soap Dispensers", rank: 1 },
            { keyword: "Buy Glass Ashtrays", rank: 2 }
        ]
    },
    {
        client: "fns.co.in",
        results: [
            { keyword: "Cutlery set with stand", rank: 2 },
            { keyword: "18 Piece Cutlery Set", rank: 1 },
            { keyword: "Cutlery Set 24 Piece", rank: 2 },
            { keyword: "Fruit Fork Set", rank: 2 },
            { keyword: "Serving Spoon", rank: 2 },
            { keyword: "Bar Tools Set Silver", rank: 1 },
            { keyword: "Water Pitcher", rank: 2 }
        ]
    },
    {
        client: "thewallstreetschool.com",
        results: [
            { keyword: "Frm Online Classes", rank: 1 },
            { keyword: "Acca Coaching Near Me", rank: 2 },
            { keyword: "Cpa Certification Classes", rank: 2 },
            { keyword: "Frm Coaching Classes", rank: 1 },
            { keyword: "Stock Market Wizard Course", rank: 1 },
            { keyword: "Cima Courses Near Me", rank: 1 },
            { keyword: "Accounting Cpa Classes", rank: 1 }
        ]
    },
    {
        client: "inift.com",
        results: [
            { keyword: "Fashion Designing Institute In Kolkata", rank: 1 },
            { keyword: "Fashion Designing Course In Kolkata", rank: 1 },
            { keyword: "Fashion Design Institute In Kolkata", rank: 1 },
            { keyword: "Interior Designer Courses In Kolkata", rank: 2 },
            { keyword: "Modeling Course in Kolkata", rank: 1 },
            { keyword: "Acting Institute in Kolkata", rank: 2 },
            { keyword: "Modeling institute in Kolkata", rank: 2 }
        ]
    }
];

const whyClickmecha = [
    {
        title: "Result-Driven SEO Strategy",
        desc: "ClickMecha focuses on organic traffic, keyword ranking, and qualified leads that grow your business."
    },
    {
        title: "Data & Keyword Research First",
        desc: "Every SEO campaign is built on in-depth keyword research, search intent, and competitor analysis."
    },
    {
        title: "On-Page & Technical SEO Expertise",
        desc: "From site structure and page speed to metadata and indexing, ClickMecha ensures search-engine-friendly optimization."
    }
];

const detailedServices = [
    {
        title: "Search Engine Optimization (SEO)",
        content: (
            <>
                The team specializes in providing <span className="highlight-text">SEO services</span> that boost your website's visibility on search engines. By optimizing your website's structure, content, and implementing effective link-building strategies, they ensure higher organic rankings and increased website traffic.
            </>
        )
    },
    {
        title: "Pay-Per-Click (PPC) Advertising",
        content: (
            <>
                With the expertise in <span className="highlight-text">PPC advertising</span>, they can create highly targeted campaigns that drive qualified traffic to your website. Through thorough keyword research, strategic ad placement, and continuous optimization, they maximize your return on investment (ROI) and help you generate leads and conversions.
            </>
        )
    },
    {
        title: "Social Media Marketing",
        content: (
            <>
                Professionals harnesses the power of <span className="highlight-text">social media</span> platforms to amplify your brand’s online presence. By creating engaging content, running targeted ad campaigns, and fostering meaningful interactions with your audience, they help you build a strong social media following and drive website traffic.
            </>
        )
    },
    {
        title: "Content Marketing",
        content: (
            <>
                They understand the importance of <span className="highlight-text">quality content</span> in attracting and retaining customers. The team develops content marketing strategies that resonate with your target audience. From blog posts and articles to infographics and videos, they create compelling content that establishes your brand as an industry thought leader.
            </>
        )
    },
    {
        title: "Email Marketing",
        content: (
            <>
                With the result-oriented <span className="highlight-text">email marketing services</span>, Clickmecha helps you nurture leads, retain customers, and increase brand loyalty. They design eye-catching email campaigns, optimize open and click-through rates, and track the performance of your email marketing efforts.
            </>
        )
    },
    {
        title: "Conversion Rate Optimization (CRO)",
        content: (
            <>
                Team analyzes user behavior on your website to identify areas for improvement. By conducting A/B testing, optimizing landing pages, and streamlining the user experience, they increase your website's conversion rates and drive more sales or leads.
            </>
        )
    }
];

const ServiceDetail = () => {
    const { openModal } = useContactModal();
    return (
        <div className="sd-page-wrapper">
            {/* Hero / Query Section */}
            <div className="sd-hero-section">
                <div className="container">
                    <div className="sd-card-container" style={{ backgroundImage: `url(${serviceDetailBg})` }}>
                        <div className="row align-items-center">

                            {/* Left Text Content */}
                            <div className="col-lg-7 sd-content-col">
                                <h1 className="sd-hero-title">Digital Marketing Services In Delhi</h1>
                                <p className="sd-hero-desc">
                                    Digital Marketing Services 10+ Years of Experience in Creating a Successful
                                    Digital Marketing Strategy. Turn your business into a Brand with a top Digital
                                    Marketing Agency in Delhi, We integrate Latest Digital Marketing Services,
                                    Strategies & Techniques. 100% Result Oriented & Affordable.
                                </p>

                                <ul className="sd-features-list">
                                    <li>
                                        <FaCheckCircle className="sd-check-icon" />
                                        <span>10+ year Industry knowledge, customized solutions</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle className="sd-check-icon" />
                                        <span>Proven results, tailored strategies</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle className="sd-check-icon" />
                                        <span>Expert team, client-focused approach</span>
                                    </li>
                                </ul>

                                <button className="sd-book-btn" onClick={openModal}>BOOK A FREE CALL</button>
                            </div>

                            {/* Right Form Content */}
                            <div className="col-lg-5 sd-form-col">
                                <div className="sd-form-box">
                                    <h3 className="sd-form-heading">Send your Query</h3>
                                    <form>
                                        <div className="mb-3">
                                            <input type="text" className="sd-input-field" placeholder="Full Name" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="sd-input-field" placeholder="Email Address" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="tel" className="sd-input-field" placeholder="Phone Number" />
                                        </div>

                                        <div className="sd-checkbox-group mb-4">
                                            <input type="checkbox" id="sdProjectCheck" className="sd-checkbox" />
                                            <label htmlFor="sdProjectCheck" className="sd-checkbox-label">
                                                I agree to be contacted about my project.
                                            </label>
                                        </div>

                                        <button type="submit" className="sd-submit-btn">SUBMIT QUERY</button>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            {/* Clients Section */}
            <div className="sd-clients-section">
                <div className="container">
                    <p className="sd-clients-title">Worked with 400+ Top clients</p>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={6}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                        }}
                        className="sd-clients-slider"
                    >
                        <SwiperSlide>
                            <div className="sd-client-logo-wrapper">
                                <img src={clientTitan} alt="Titan" className="sd-client-logo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sd-client-logo-wrapper">
                                <img src={clientViacom} alt="Viacom18" className="sd-client-logo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sd-client-logo-wrapper">
                                <img src={clientVoltas} alt="Voltas" className="sd-client-logo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sd-client-logo-wrapper">
                                <img src={clientFlipkart} alt="Flipkart" className="sd-client-logo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sd-client-logo-wrapper">
                                <img src={clientTata} alt="Tata Housing" className="sd-client-logo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sd-client-logo-wrapper">
                                <img src={clientRustomjee} alt="Rustomjee" className="sd-client-logo" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>





            {/* Strategies Section */}
            <div className="sd-strategies-section">
                <div className="container">
                    <div className="sd-strategies-header">
                        <h2 className="sd-strategies-title">Complete Digital Marketing Services Delhi</h2>
                        <p className="sd-strategies-subtitle">Our Strategies that Drive Web Traffic & Results</p>
                    </div>

                    <div className="row justify-content-center">
                        {strategies.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="sd-strategy-card">
                                    <h3 className="sd-card-title">{item.title}</h3>
                                    <ul className="sd-card-list">
                                        {item.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                    <button className="sd-card-btn" onClick={openModal}>BOOK A FREE CALL</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Case Studies Section */}
            <div className="sd-case-studies-section">
                <div className="container">
                    <div className="sd-case-header">
                        <h4 className="sd-case-label">Case Studies</h4>
                        <h2 className="sd-case-title">Our Clients SEO Results</h2>
                        <p className="sd-case-desc">
                            We specialize in delivering exceptional and affordable digital marketing services that drive significant growth for our clients. With extensive experience across various industries including healthcare and lifestyle, we have a proven track record of helping companies achieve their goals.
                        </p>
                    </div>

                    <div className="row">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="col-lg-6 mb-5">
                                <div className="sd-case-card">
                                    <h3 className="sd-client-name">Client : <span>{study.client}</span></h3>

                                    <div className="sd-results-table">
                                        <div className="sd-table-header">
                                            <div className="sd-th-keyword">Keyword Search</div>
                                            <div className="sd-th-rank">Rankings</div>
                                        </div>
                                        <div className="sd-table-body">
                                            {study.results.map((res, idx) => (
                                                <div key={idx} className="sd-table-row">
                                                    <div className="sd-td-keyword">{res.keyword}</div>
                                                    <div className="sd-td-rank">{res.rank}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Performance Section */}
            <div className="sd-performance-section">
                <div className="container">
                    <h2 className="sd-performance-title">Our Client Website <br /> Performance and Growth</h2>
                    <div className="row mt-5">
                        <div className="col-lg-6 mb-4">
                            <div className="sd-performance-card">
                                <img src={performanceChart1} alt="Performance Chart 1" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="sd-performance-card">
                                <img src={performanceChart2} alt="Performance Chart 2" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Help Section */}
            <div className="sd-help-section">
                <div className="container">
                    <div className="sd-help-box">

                        {/* Floating Icon (Absolute Positioned) */}
                        <div className="sd-help-floating-icon">
                            <img src={helpSticker} alt="Help" className="sd-help-sticker-img" />
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="sd-help-content">
                                    <h2 className="sd-help-title">Clickmecha here to Help</h2>
                                    <p className="sd-help-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="sd-help-form-area">
                                    <p className="sd-help-rated">4.9 Rated by 450+ Successful B2B Owners</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <input type="text" name="name" className="sd-help-input" placeholder="Name*" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input type="email" name="email" className="sd-help-input" placeholder="Email Id*" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input type="tel" name="phone" className="sd-help-input" placeholder="Phone No*" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input type="text" name="message" className="sd-help-input" placeholder="Message*" required />
                                            </div>
                                        </div>
                                        <button type="submit" className="sd-help-submit-btn">
                                            Submit <FaHandPointRight className="sd-submit-icon" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Clickmecha Section */}
            <div className="sd-why-section">
                <div className="container">
                    <div className="sd-why-header">
                        <h2 className="sd-why-title">Why Clickmecha?</h2>
                        <p className="sd-why-subtitle">Digital Marketing Agency Delhi</p>
                    </div>

                    <div className="row">
                        {whyClickmecha.map((item, index) => (
                            <div key={index} className="col-lg-4 mb-4">
                                <div className="sd-why-card">
                                    <div className="sd-why-icon-wrapper">
                                        <img src={iconBulb} alt="" className="sd-why-icon" />
                                    </div>
                                    <h3 className="sd-why-card-title">{item.title}</h3>
                                    <p className="sd-why-card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>





            {/* Featured In Section */}
            <div className="sd-featured-section">
                <div className="container">
                    <h2 className="sd-featured-title">We Featured In</h2>
                    <div className="sd-featured-grid">

                        <div className="sd-featured-item">
                            <img src={featured2} alt="Featured In 2" />
                        </div>
                        <div className="sd-featured-item">
                            <img src={featured3} alt="Featured In 3" />
                        </div>
                        <div className="sd-featured-item">
                            <img src={featured4} alt="Featured In 4" />
                        </div>
                        <div className="sd-featured-item">
                            <img src={featured5} alt="Featured In 5" />
                        </div>
                    </div>
                </div>
            </div>



            {/* Detailed Services Section */}
            <div className="sd-detailed-services-section">
                <div className="container">
                    <div className="sd-detailed-header">
                        <h2 className="sd-detailed-title">Digital Marketing Services In Delhi</h2>
                        <p className="sd-detailed-desc">
                            The team of experienced professionals is well-versed in the latest trends and techniques in the digital marketing landscape. Whether you are a startup, small business, or enterprise, they have tailored solutions to meet your specific requirements.
                        </p>
                    </div>

                    <div className="row">
                        {detailedServices.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <div className="sd-detail-card">
                                    <h3 className="sd-detail-card-title">{service.title}</h3>
                                    <p className="sd-detail-card-content">{service.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ORM Section */}
                    <div className="sd-orm-section mt-4">
                        <div className="d-flex align-items-center mb-2">
                            <FaCheckCircle className="sd-orm-icon me-2" /> {/* Using CheckCircle as placeholder for Plus/Bullet if needed */}
                            <h3 className="sd-orm-title mb-0">Online Reputation Management (ORM)</h3>
                        </div>
                        <p className="sd-orm-content">
                            Your online reputation plays a vital role in attracting customers. Professionals employs proactive strategies to manage and enhance your brand's reputation across digital channels. They monitor online mentions, address customer feedback, and build a positive brand image.
                        </p>
                    </div>
                </div>
            </div>


            {/* Process Section */}
            <div className="sd-process-section">
                <div className="container">
                    <h2 className="sd-process-title">Our Digital Marketing Process</h2>
                    <div className="sd-process-grid">
                        <div className="sd-process-item">
                            <div className="sd-process-icon-box">
                                <img src={processStrategy} alt="Strategy" />
                            </div>
                            <p className="sd-process-label">Strategy</p>
                        </div>
                        <div className="sd-process-item">
                            <div className="sd-process-icon-box">
                                <img src={processPlanning} alt="Planning" />
                            </div>
                            <p className="sd-process-label">Planning</p>
                        </div>
                        <div className="sd-process-item">
                            <div className="sd-process-icon-box">
                                <img src={processBranding} alt="Branding" />
                            </div>
                            <p className="sd-process-label">Branding</p>
                        </div>
                        <div className="sd-process-item">
                            <div className="sd-process-icon-box">
                                <img src={processResult} alt="Result" />
                            </div>
                            <p className="sd-process-label">Result</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Help Section */}
            <div className="sd-help-section">
                <div className="container">
                    <div className="sd-help-box-bottom">

                        {/* Floating Icon (Absolute Positioned) */}
                        <div className="sd-help-floating-icon">
                            <img src={helpSticker} alt="Help" className="sd-help-sticker-img" />
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="sd-help-content">
                                    <h2 className="sd-help-title">Clickmecha here to Help</h2>
                                    <p className="sd-help-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="sd-help-form-area">
                                    <p className="sd-help-rated">4.9 Rated by 450+ Successful B2B Owners</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <input type="text" name="name" className="sd-help-input" placeholder="Name*" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input type="email" name="email" className="sd-help-input" placeholder="Email Id*" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input type="tel" name="phone" className="sd-help-input" placeholder="Phone No*" required />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <input type="text" name="message" className="sd-help-input" placeholder="Message*" required />
                                            </div>
                                        </div>
                                        <button type="submit" className="sd-help-submit-btn">
                                            Submit <FaHandPointRight className="sd-submit-icon" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Specialized Services Section */}
            <div className="sd-specialized-section">
                <div className="container">
                    <h2 className="sd-specialized-title">Our Specialized Services</h2>
                    <div className="sd-underline"></div>

                    <div className="sd-specialized-grid">
                        {specializedServices.map((service, index) => (
                            <div key={index} className="sd-specialized-card">
                                <div className="sd-specialized-icon">
                                    {service.icon}
                                </div>
                                <h3 className="sd-specialized-name">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Choosing Best Digital Marketing Agency Section */}
            <div className="sd-content-section">
                <div className="container">
                    <h2 className="sd-content-title">Choosing the Best Digital Marketing Agency in Delhi<br />Everything You Need to Know</h2>

                    <div className="sd-content-body">
                        <p>The main success of any digital marketing effort is to reach the desired target audience and the end goal is always to convert that target audience into the customers. But often, digital marketing involves a lot of extra complex factors such as SEO, content manipulation, email outreach, or website managing and many more. So, choosing the right digital marketing agency in Delhi is very important for the success of your business.</p>

                        <p><strong>Best digital marketing agency in Delhi</strong> can come in handy as it can come up with a personalized strategy that meets your needs. A digital marketing need the access to a strategy that goes through your entire marketing goals and analyzing the audience, which helps to tangible efforts.</p>

                        <h3 className="sd-content-subtitle">Types of Digital Marketing Services in Delhi</h3>

                        <p>The choice of a <strong>digital marketing agency</strong> that combines together to serve the purpose of a brand. Below are some of the fundamental of digital marketing services with its agencies in Delhi, India generally provide:</p>

                        <ul className="sd-content-list">
                            <li><strong>Search Engine Optimization (SEO):</strong> SEO is the technique of modifying the different elements of web content in order to rank higher in the list of search engines such as Google. A <strong>digital marketing company in Delhi</strong> that is good at SEO can increase your organic traffic to your site. For instance, SEO specialist Clickmecha.</li>
                            <li><strong>Pay-Per-Click (PPC) Advertising:</strong> PPC is a digital marketing business organizations in enhancing their position on search engines and provides an area reach of the target audience. Agencies manage PPC services such as Facebook pay-per-click advertising by well and advertisements that display in the upper section of the search engine result pages.</li>
                            <li><strong>Content Marketing:</strong> It is marketing strategy aimed at to help in producing information assets and attracting the visitors by the way these contents are shared. A <strong>digital marketing agency near me</strong> can assist you in developing good content that will be relevant to your target market and will assist in the establishment of your brand.</li>
                            <li><strong>Social Media Marketing:</strong> Instagram, Facebook, engagement is communicated through such channels as social networks. Therefore, modern advertising and marketing agencies help in the social media profile management, content creation, and interaction with individuals so as to promote and work with the brand.</li>
                            <li><strong>Email Marketing:</strong> Email marketing is still one of the most effective methods of communication with the customers and engaging them, offering videos, contents, and so on in order to maintain their your brand loyal to an authoritative position in the industry.</li>
                            <li><strong>Website Development and Design:</strong> Any of the strategy ought to have a functional and attractive website in place – in addition to other sections, best digital marketing company in Delhi can do both front end development and as well as the overall look of the site relevant to user friendly and search engine friendly.</li>
                            <li><strong>Conversion Rate Optimization (CRO):</strong> CRO or primarily focuses on enhancing the percentage of visitors to a website who engage with its contents and potentially interact entering a - moreover - apparent- message information and analysis helps in order to optimize the design and the usability of the site/app website.</li>
                        </ul>

                        <h3 className="sd-content-subtitle">Rewards of Working with the Best Digital Marketing Company in Delhi</h3>

                        <p>Partnering with the <strong>best digital marketing company in Delhi</strong> provides numerous benefits, including:</p>

                        <p>For example, the best agencies have the most ideal digital marketing specialists with a couple of specialists' years in experience. These professionals are well conversant with the current trends in the market and therefore will be in a position to develop good strategies for your business. If an expert team is in charge of running the marketing efforts, all the relevant attention can be just focused on the key areas of the business. The first social media marketing agencies provide clients with the engagement information systems that present valuable metrics for their clients, making it easy to track outcomes.</p>

                        <h3 className="sd-content-subtitle">Choosing the Right Digital Marketing Agency Near Me</h3>

                        <p>There are certain factors that if you want to bear in mind and to study <strong>digital marketing agency in Delhi</strong>. Below are some tips to finding a partner:</p>

                        <ul className="sd-content-list">
                            <li><strong>Experience and Expertise:</strong> Select an agency that has worked in your field of business. Did marketing when you wish to accomplish in a rather thing coming.</li>
                            <li><strong>Proven Track Record:</strong> Request for case studies, or testimonials or even references from the agency so that you can be able to tell what other clients. Reviews and Testimonials: The it offers best achieved through the agency's prior customer experiences and overall feedback.</li>
                            <li><strong>Transparency and Communication:</strong> Select an agency that communicates allow you to track the progress of your campaign at any point in time.</li>
                        </ul>

                        <h3 className="sd-content-subtitle">Why Choose Digital Marketing Services in Delhi</h3>

                        <p>Delhi is a business hub and a <strong>digital marketing agency near me</strong>, which are highly creative and result oriented. When it comes to Delhi, digital marketing services, all chances advantage for the business is the local know-how, geographic proximity and knowledge of the diverse sector is likewise.</p>

                        <p>Delhi is the capital city of India and boasts of a vibrant diversity that the Indian landscape possesses and therefore knows how to create any useful events. These benefits are more relevant to the local businesses that are in a position to benefit from the business's HR department and cloud-digital realm.</p>

                        <h3 className="sd-content-subtitle">Expanding Your Reach with Digital Marketing Services in India</h3>

                        <p>If you are a business that wants to expand in India or even outside India or a big brand, <strong>Digital Delhi</strong> marketing parts of the country are adopting new technologies and techniques for the growth of businesses online, with the assistance of the digital marketing services in different states and regions. We have a lot of agencies in India that can help you become your consistent ideal users.</p>

                        <h3 className="sd-content-subtitle">Digital Marketing Company Near Me: Leveraging Local Expertise</h3>

                        <p>When searching for a <strong>digital marketing company near me</strong>, it is important to keep things in the locality where your business is based, one of the direct that you can take would be to look for a marketing company close to me for ideas and approaches on how best to market your business in that locality. Local agencies understand local audiences. This will aid you in the development of the digital marketing that is built a face.</p>

                        <p>Speaking about quality search engine optimization, We never hire people just in the market in Clickmecha. Clickmecha is also a digital influencer who expert both in brand a digital marketing agency and also has helped numerous businesses in getting better ranks in the search engines. However, this is not the case when working with a start-up with individuals and we really prioritize this in the area of SEO leadership of organic traffic is the main target of the business.</p>

                        <h3 className="sd-content-subtitle">Digital Marketing Services That Will Help You Achieve Marketing Mastery</h3>

                        <p>Regardless of whether you are a small business or a large corporation, the right <strong>digital marketing services</strong> can make all the difference. Digital marketing brings together. If you're looking for a Delhi or anyone else who you decide to engage for <strong>digital marketing services near me</strong> or a local agency, you can find one in a package how to grow your business in the long term, which is simply better than doing it on your own, which is simply better than doing it on your own.</p>

                        <h3 className="sd-content-subtitle">Conclusion: Digital Marketing Near Me – Taking the Next Step</h3>

                        <p>It is essential for any online strategy to have an established, allowing, well-structured website in place. Digital marketing agencies also provide web design and development services to ensure that your site is search engine optimized and user-user focused.</p>

                        <h3 className="sd-content-subtitle">FAQs</h3>

                        <div className="sd-faq-section">
                            <div className="sd-faq-item">
                                <h4 className="sd-faq-question">What are the top considerations when it comes to selecting a digital marketing agency to your esteemed work?</h4>
                                <p className="sd-faq-answer">When choosing a <strong>digital marketing company near me</strong> ensure your area, you should think at these knowledge about your niche, the number of years in they possess, even how they are rated by the clients, and how they communicate and report to clients on the progress of campaigns. It is also important to look at the advantage of different uses and knowledge about the marketing territory.</p>
                            </div>

                            <div className="sd-faq-item">
                                <h4 className="sd-faq-question">What problems can I solve with the help of digital marketing services?</h4>
                                <p className="sd-faq-answer">Digital marketing services in Delhi have a number of services to cater to various needs such as SEO, social media, PPC advertising, and content marketing. These services typically will increase in reach to which and sales through improving sales leads generation, measuring ROI customers, and structuring traffic to web's website.</p>
                            </div>

                            <div className="sd-faq-item">
                                <h4 className="sd-faq-question">How can I find the best digital marketing agency to accomplish this goal?</h4>
                                <p className="sd-faq-answer">There are every benefits, such as engaging a meeting with their representatives much understanding of the current trends in marketing in the area, and at the same time, a more fast and efficient delivery. This is more useful, especially for companies that wish to connect their services to a certain region or attract customers within the ESCWA.</p>
                            </div>

                            <div className="sd-faq-item">
                                <h4 className="sd-faq-question">How much time is necessary until the outcomes of digital marketing actions become apparent?</h4>
                                <p className="sd-faq-answer">The time frame of when results can be seen totally depends on the type of digital marketing tactics. For instance, what it involves in SEO it can take quite a number of months before promoting any appreciations happens traffic growth via boosts instantly with pay per click advertising. Social media marketing may also take some time to build a following and engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <Contact />
        </div >
    );
};

export default ServiceDetail;
