import React from 'react';
import './CareerDetail.css';
import { FaMapMarkerAlt, FaBriefcase, FaBolt, FaHourglassHalf, FaLaptopCode, FaChartLine, FaHome } from 'react-icons/fa';
import '../Career/Career.css';

const CareerDetail = () => {
    return (
        <div className="career-detail-page">
            {/* Header Section */}
            <header className="career-detail-header">
                <div className="container text-center">
                    <h1 className="detail-job-title">Video Editor Intern</h1>
                    <p className="detail-job-summ">
                        We are seeking a passionate and creative Video Editor Intern to join our content and <br />
                        marketing team. The ideal candidate should have a strong visual sense, a basic <br />
                        understanding of storytelling, and familiarity with editing tools.
                    </p>
                </div>
            </header>

            <div className="container content-container">
                <div className="row">
                    {/* Left Column: Job Info */}
                    <div className="col-lg-8">
                        {/* Quick Info Card */}
                        <div className="job-info-card mb-5">
                            <h3 className="info-card-title">Video Editor Intern</h3>
                            <div className="info-list">
                                <div className="info-item">
                                    <FaMapMarkerAlt className="info-icon" />
                                    <span className="info-label">Location:</span>
                                    <span className="info-value">Remote</span>
                                </div>
                                <div className="info-item">
                                    <FaBriefcase className="info-icon" />
                                    <span className="info-label">Job Type:</span>
                                    <span className="info-value">Full-Time (Remote)</span>
                                </div>
                                <div className="info-item">
                                    <FaBolt className="info-icon" />
                                    <span className="info-label">Required Skills:</span>
                                    <span className="info-value">Adobe Premiere Pro, After Effects, Motion Graphics</span>
                                </div>
                                <div className="info-item">
                                    <FaHourglassHalf className="info-icon" />
                                    <span className="info-label">Minimum Experience:</span>
                                    <span className="info-value">0 - 1</span>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Content */}
                        <div className="job-description-content">
                            <section className="desc-section">
                                <h3 className="section-title">Job Summary:</h3>
                                <p>
                                    We are seeking a passionate and creative Video Editor Intern to join our content and marketing team. The ideal candidate should have a strong visual sense, a basic understanding of storytelling, and familiarity with editing tools. You'll work on real brand projects — from social media ads to promotional films — while learning how to create professional, high-converting videos in a fast-paced agency environment.
                                </p>
                            </section>

                            <section className="desc-section">
                                <h3 className="section-title">Key Responsibilities:</h3>
                                <ul>
                                    <li>Edit short-form and long-form video content for social media, ads, and campaigns.</li>
                                    <li>Add motion graphics, text animations, transitions, and sound design elements.</li>
                                    <li>Assist in organizing raw footage, maintaining project files, and ensuring smooth post-production workflow.</li>
                                    <li>Collaborate with designers and marketing teams to bring creative ideas to life.</li>
                                    <li>Adapt edits for different platforms and formats (Instagram Reels, YouTube Shorts, etc.).</li>
                                    <li>Research and stay updated on the latest editing trends and transitions.</li>
                                </ul>
                            </section>

                            <section className="desc-section">
                                <h3 className="section-title">Required Skills:</h3>
                                <ul>
                                    <li>Basic experience in Adobe Premiere Pro and familiarity with After Effects.</li>
                                    <li>Good sense of timing, visual composition, and storytelling.</li>
                                    <li>Understanding of pacing and rhythm for short-form content.</li>
                                    <li>Creativity and attention to detail.</li>
                                    <li>Ability to handle feedback and work within timelines.</li>
                                    <li>A portfolio or sample videos that demonstrate your editing skills.</li>
                                </ul>
                            </section>

                            <section className="desc-section">
                                <h3 className="section-title">Nice to Have:</h3>
                                <ul>
                                    <li>Experience with color correction, sound mixing, or basic animation.</li>
                                    <li>Knowledge of tools like CapCut, DaVinci Resolve, or Final Cut Pro.</li>
                                    <li>Basic understanding of social media video trends and ad content.</li>
                                    <li>Familiarity with Canva or Photoshop for thumbnails and graphics.</li>
                                    <li>Interest in motion graphics and 3D elements (bonus).</li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Right Column: Application Form */}
                    <div className="col-lg-4">
                        <div className="application-form-card sticky-sidebar">
                            <h3 className="form-title">Apply Now</h3>
                            <p className="form-subtitle">Fill out the form below to apply for this position.</p>

                            <form>
                                <div className="mb-3">
                                    <label className="form-label required">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label required">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label required">Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="Enter Your Number" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label required">Position Applying For</label>
                                    <select className="form-select">
                                        <option selected>Video Editor Intern</option>
                                        <option>Frontend Developer</option>
                                        <option>Graphic Designer</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label required">State</label>
                                    <select className="form-select">
                                        <option selected disabled>Select your state</option>
                                        <option>Delhi</option>
                                        <option>Maharashtra</option>
                                        <option>Karnataka</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label required">Experience</label>
                                    <select className="form-select">
                                        <option selected disabled>Select experience</option>
                                        <option>Fresher</option>
                                        <option>1-2 Years</option>
                                        <option>3-5 Years</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label required">Resume</label>
                                    <input type="file" className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">LinkedIn</label>
                                    <input type="url" className="form-control" placeholder="Enter Your LinkedIn" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Cover Letter</label>
                                    <textarea className="form-control" rows="4" placeholder="Tell us why you're interested in this position"></textarea>
                                </div>

                                <div className="mb-4">
                                    <div className="captcha-mockup">
                                        <input type="checkbox" id="human-check" />
                                        <label htmlFor="human-check">I am human</label>
                                        <span className="captcha-logo">🔄</span>
                                    </div>
                                </div>

                                <button type="submit" className="btn-submit-app">SUBMIT APPLICATION</button>
                            </form>
                        </div>
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
        </div >
    );
};

export default CareerDetail;
