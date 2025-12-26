import React from 'react';
import './About.css';
import kavyaImg from '../../assets/about-image/kavya-kapoor.png';
import storyLeftImg from '../../assets/about-image/story-left.png';
import storyRightImg from '../../assets/about-image/story-right.png';
import bgaboutimg from '../../assets/home-images/hero-Bg.png';
import aboutimgfloat from '../../assets/home-images/about-bg-blur.png';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Text Section */}
            <div className="about-hero-wrappe position-relative vh-100 bg-cover bg-center" style={{ backgroundImage: `url(${bgaboutimg})` }}>
                <div className="hero-image-box">
                    <img src={aboutimgfloat} alt="Story Illustration" className="about-img-float position-absolute bottom-0 start-0 w-25" />
                </div>

                <div className="container section-padding text-center position-relative" >
                    <h1 className="about-title mb-4">
                        Every company has a story, <br />
                        Ours began with a voice that <br />
                        <span className="highlight d-block mt-2">refused to stay silent</span>
                    </h1>
                    <p className="about-description mx-auto">
                        A founder’s journey that turned rejection into impact — bold strategy,
                        fearless creativity, and results that speak.
                    </p>
                </div>
            </div>

            {/* Meet Kavya Section */}
            <section className="meet-kavya-section pb-5">
                <div className="container">
                    <div className="row align-items-center gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="kavya-image-wrapper">
                                <img src={kavyaImg} alt="Kavya Kapoor" className="img-fluid rounded-4" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <span className="section-label-orange">The Voice Behind ClickMecha</span>
                            <h2 className="about-subheading mt-2 mb-4">Meet Kavya Kapoor</h2>
                            <p className="about-text mb-5">
                                A restless mind and a fearless voice shaped a marketing leader who asks hard questions
                                and demands better results.
                            </p>

                            <div className="row stats-row">
                                <div className="col-sm-4 mb-4 mb-sm-0">
                                    <h3 className="stat-number">230+</h3>
                                    <p className="stat-label">Projects Delivered</p>
                                </div>
                                <div className="col-sm-4 mb-4 mb-sm-0">
                                    <h3 className="stat-number">10+</h3>
                                    <p className="stat-label">Years Experience</p>
                                </div>
                                <div className="col-sm-4">
                                    <h3 className="stat-number">12+</h3>
                                    <p className="stat-label">Countries Served</p>
                                </div>
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
                                Where It All <span className="highlight-orange">Started</span>
                            </h2>
                            <p className="about-text mb-4">
                                Kavya was not born into a wealthy family or a network of business connections.
                                He didn’t inherit a company, a team, or a ready-made opportunity. What he did have
                                was a restless mind and a fearless voice — one that always pushed him to do more, be more, say more.
                            </p>
                            <p className="about-text mb-5">
                                Growing up, he would look at ads on billboards, TV commercials, and digital campaigns and wonder,
                                “Who creates all this? Who decides what people feel when they see a brand?” He didn’t know it then,
                                but those questions would become the foundation of his future.
                            </p>
                            <div className="story-image-wrapper">
                                <img src={storyLeftImg} alt="Team Collaborating" className="img-fluid rounded-4" />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6">
                            <h2 className="story-heading mb-4">
                                The Struggles <span className="highlight-orange">No One Saw</span>
                            </h2>
                            <p className="about-text mb-4">
                                Before the first client signed a contract, before the company name meant anything,
                                before even a single rupee was earned — there were years of rejection.
                            </p>
                            <p className="about-text mb-4">
                                Kavya would walk into offices with nothing but a laptop, a half-pitched idea, and a heart full of confidence.
                                He would pitch to brands who had never heard of him. He would send hundreds of emails that never got replies.
                                He would make calls that ended before he could finish his sentence.
                            </p>
                            <div className="story-image-wrapper mb-5">
                                <img src={storyRightImg} alt="Struggles and Hard Work" className="img-fluid rounded-4" />
                            </div>
                            <p className="about-text mb-4">
                                People looked at him — a young boy with big dreams — and said things like: “Come back when your company is bigger.”
                                “Right now, we can’t trust someone new.” “We already have an agency.”
                            </p>
                            <p className="about-text">
                                He wasn’t from a fashionable background. He wasn’t someone with contacts. He was simply a fighter,
                                with a loud voice and an even louder belief: I deserve a chance.
                                And when no one gave him one, he created his own.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
