import React from 'react';
import './ServiceDetail.css';
import serviceDetailBg from '../../assets/service-images/service-detail-bg.png';
import { FaCheckCircle } from 'react-icons/fa';

import clientTitan from '../../assets/service-detail-clients/titan.png';
import clientFlipkart from '../../assets/service-detail-clients/flipkart.png';
import clientVoltas from '../../assets/service-detail-clients/voltas.png';
import clientViacom from '../../assets/service-detail-clients/viacom18.png';
import clientTata from '../../assets/service-detail-clients/tata-housing.png';
import clientRustomjee from '../../assets/service-detail-clients/rustomjee.png';

import performanceChart1 from '../../assets/service-images/performance-chart-1.png';
import performanceChart2 from '../../assets/service-images/performance-chart-2.png';

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

const ServiceDetail = () => {
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

                                <button className="sd-book-btn">BOOK A FREE CALL</button>
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

                    <div className="sd-clients-grid">
                        <div className="sd-client-logo-wrapper">
                            <img src={clientTitan} alt="Titan" className="sd-client-logo" />
                        </div>
                        <div className="sd-client-logo-wrapper">
                            <img src={clientViacom} alt="Viacom18" className="sd-client-logo" />
                        </div>
                        <div className="sd-client-logo-wrapper">
                            <img src={clientVoltas} alt="Voltas" className="sd-client-logo" />
                        </div>
                        <div className="sd-client-logo-wrapper">
                            <img src={clientFlipkart} alt="Flipkart" className="sd-client-logo" />
                        </div>
                        <div className="sd-client-logo-wrapper">
                            <img src={clientTata} alt="Tata Housing" className="sd-client-logo" />
                        </div>
                        <div className="sd-client-logo-wrapper">
                            <img src={clientRustomjee} alt="Rustomjee" className="sd-client-logo" />
                        </div>
                    </div>
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
                                    <button className="sd-card-btn">BOOK A FREE CALL</button>
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
        </div>
    );
};

export default ServiceDetail;
