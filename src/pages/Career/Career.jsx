import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Career.css';
import careerBg from '../../assets/service-images/service-bg.png';
import careerFaces from '../../assets/career-images/career-faces.png';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaArrowRight, FaLaptopCode, FaChartLine, FaHome } from 'react-icons/fa';

const jobsData = [
    {
        id: 1,
        title: 'Video Editor',
        category: 'Designing',
        type: 'Full-Time Role (On-Site)',
        experience: '2++ Years',
        location: 'Netaji Subhash Place',
        desc: 'We are looking for a creative and detail-oriented Video Editor with a strong sense of storytelling and visual composition.',
        tags: ['Adobe Premiere Pro', 'After Effects', 'Davinci Resolve', 'Motion Graphics']
    },
    {
        id: 2,
        title: 'Video Editor Intern',
        category: 'Designing',
        type: 'Full-Time (Remote)',
        experience: '0 - 1+ Years',
        location: 'Remote',
        desc: 'We are seeking a passionate and creative Video Editor Intern to join our content and marketing team. The ideal candidate...',
        tags: ['Adobe Premiere Pro', 'After Effects', 'Motion Graphics']
    },
    {
        id: 3,
        title: 'Frontend Developer',
        category: 'Development',
        type: 'Full-Time Role (On-Site)',
        experience: '1 Year+ Years',
        location: 'Netaji Subhash Place',
        desc: 'We are looking for a passionate Frontend Developer with at least 1 year of hands-on experience to join our dynamic team...',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 4/5', 'jQuery']
    },
    {
        id: 4,
        title: 'Node.js Developer (Backend)',
        category: 'Development',
        type: 'Full-Time Role (On-Site)',
        experience: '1-4 years+ Years',
        location: 'Netaji Subhash Place',
        desc: 'We are seeking a passionate and experienced Node.js Developer to join our growing development team. You will be responsi...',
        tags: ['Node.js', 'Express.js', 'JavaScript (ES6+)', 'TypeScript', 'API Design & Integration']
    },
    {
        id: 5,
        title: 'Full Stack Developer (React + Node.js)',
        category: 'Development',
        type: 'Full-Time Role (On-Site)',
        experience: '2-5 years+ Years',
        location: 'Netaji Subhash Place',
        desc: "We're looking for a highly skilled and motivated Full Stack Developer who can work across the frontend and backend, turn...",
        tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express']
    },
    {
        id: 6,
        title: 'PHP Backend Developer',
        category: 'Development',
        type: 'Full-Time Role (On-Site)',
        experience: '2 Year+ Years',
        location: 'Netaji Subhash Place',
        desc: 'We are seeking a skilled and enthusiastic PHP Backend Developer with 2 years of professional experience to join our deve...',
        tags: ['Laravel', 'CodeIgniter', 'Core PHP', 'MySQL/MariaDB', 'Git']
    },
    {
        id: 7,
        title: 'Graphic Designer',
        category: 'Designing',
        type: 'Full-Time Role (On-Site)',
        experience: '2 Year+ Years',
        location: 'Netaji Subhash Place',
        desc: 'We are looking for a creative and detail-oriented Graphic Designer with over 2 years of professional experience to join...',
        tags: ['Photoshop', 'Illustrator', 'InDesign']
    },
    {
        id: 8,
        title: 'Digital Marketing Executive',
        category: 'Marketing',
        type: 'Full-Time Role (On-Site)',
        experience: '2+ Years+ Years',
        location: 'Netaji Subhash Place',
        desc: 'We are looking for a motivated and results-driven Digital Marketing Executive with 2 years of experience in managing onl...',
        tags: ['Google Ads', 'Meta Ads', 'SEO tools', 'Google Analytics', 'Tag Manager']
    }
];

const Career = () => {
    const [activeTab, setActiveTab] = useState('All Roles');
    const navigate = useNavigate();

    const scrollToPositions = () => {
        const positionsSection = document.getElementById('open-positions');
        if (positionsSection) {
            positionsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const tabs = ['All Roles', 'Development', 'Designing', 'Marketing', 'Management', 'Data Analyst'];

    const filteredJobs = activeTab === 'All Roles'
        ? jobsData
        : jobsData.filter(job => job.category === activeTab);

    return (
        <div className="career-page">
            <div className="container">
                {/* Banner Section */}
                <div
                    className="career-banner mb-5"
                    style={{ backgroundImage: `url(${careerBg})` }}
                >
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="career-banner-content">
                                <h1 className="career-title">
                                    Join the Pack of the <br />
                                    Clickmecha
                                </h1>
                                <button className="btn-open-positions" onClick={scrollToPositions}>
                                    SEE OPEN POSITIONS
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 position-relative text-center text-lg-end">
                            <div className="career-faces-wrapper">
                                <img src={careerFaces} alt="Clickmecha Team" className="career-faces-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                {/* Open Positions Section */}
                <div id="open-positions" className="positions-section">
                    <div className="positions-header d-flex flex-wrap justify-content-between align-items-end mb-5">
                        <div>
                            <h2 className="positions-title">Open Positions</h2>
                            <p className="positions-subtitle">Find your place in The Night Marketers.</p>
                        </div>

                        <div className="positions-tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    className={`position-tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="row g-4">
                        {filteredJobs.map(job => (
                            <div key={job.id} className="col-lg-4 col-md-6">
                                <div className="job-card">
                                    <span className="job-category-badge">{job.category}</span>
                                    <h3 className="job-title">{job.title}</h3>

                                    <div className="job-meta-row">
                                        <div className="job-meta-item">
                                            <FaBriefcase className="me-1" /> {job.type}
                                        </div>
                                        <div className="job-meta-item">
                                            <FaClock className="me-1" /> {job.experience}
                                        </div>
                                    </div>

                                    <p className="job-desc">{job.desc}</p>

                                    <div className="job-tags">
                                        {job.tags.map((tag, idx) => (
                                            <span key={idx} className="job-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="job-footer">
                                        <div className="job-location">
                                            <FaMapMarkerAlt className="me-1" /> {job.location}
                                        </div>
                                        <button className="btn-apply" onClick={() => navigate('/career/detail')}>
                                            Apply Now <FaArrowRight className="ms-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Work With Us Section */}
            <section className="why-us-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="why-us-title">Why work with us?</h2>
                        <p className="why-us-desc">
                            We build a culture where innovation meets execution. No <br />
                            corporate fluff, just high-impact work.
                        </p>
                    </div>

                    <div className="row g-4">
                        {/* Card 1 */}
                        <div className="col-md-4">
                            <div className="why-us-card">
                                <div className="icon-box icon-orange">
                                    <FaLaptopCode />
                                </div>
                                <h3 className="card-title">Cutting-Edge Stack</h3>
                                <p className="card-desc">
                                    We don't do legacy. Work with React, Node.js, AI Agents, and modern tools.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-4">
                            <div className="why-us-card">
                                <div className="icon-box icon-purple">
                                    <FaChartLine />
                                </div>
                                <h3 className="card-title">Impact & Growth</h3>
                                <p className="card-desc">
                                    Meritocracy over seniority. Clear paths for promotion and leading projects.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-4">
                            <div className="why-us-card">
                                <div className="icon-box icon-pink">
                                    <FaHome />
                                </div>
                                <h3 className="card-title">Flexibility</h3>
                                <p className="card-desc">
                                    We value output over hours. Enjoy hybrid and remote options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>


    );
};

export default Career;
