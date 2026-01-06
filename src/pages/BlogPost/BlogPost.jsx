import React from 'react';
import './BlogPost.css';
import heroImage from '../../assets/blog-images/blog-details-hero.png';
import related1 from '../../assets/blog-images/blog-1.png';
import related2 from '../../assets/blog-images/blog-2.png';
import related3 from '../../assets/blog-images/blog-3.png';

const BlogPost = () => {
    return (
        <div className="blog-post-page">
            <div className="container">
                {/* Full Width Hero Image */}
                <div className="blog-hero-image-wrapper mb-5">
                    <img src={heroImage} alt="Blog Hero" className="blog-hero-image" />
                </div>

                <div className="row">
                    {/* Main Content Column */}
                    <div className="col-lg-8">
                        <div className="blog-post-content">
                            {/* Meta */}
                            <div className="blog-post-meta">
                                OCTOBER 8, 2025 • 3 MINUTE READ
                            </div>

                            {/* Title */}
                            <h1 className="blog-post-title">
                                Why Good Design Always Beats Guesswork
                            </h1>

                            {/* Body Text */}
                            <div className="blog-post-body">
                                <p>
                                    Good design always outperforms guesswork because it is intentional, data-driven, and user-focused. While guesswork creates confusion, breaks trust, and forces users to think harder, good design guides users effortlessly through clear hierarchy, consistent patterns, and structured flows.
                                </p>
                                <p>
                                    It relies on research, testing, and real behavior—not assumptions—making every pixel purposeful. Thoughtful interfaces reduce friction, increase conversions, and build credibility, while design systems ensure scalability and consistency across products.
                                </p>
                                <p>
                                    Guesswork is random, emotional, and costly; it leads to lost users, higher drop-offs, and expensive redesigns.
                                </p>
                                <p>
                                    Design, on the other hand, solves problems, improves usability, and drives measurable business growth. In every product, clarity beats chaos, strategy beats assumption, and good design always beats guesswork.
                                </p>
                                <p>
                                    Good design always outperforms guesswork because it is intentional, data-driven, and user-focused. While guesswork creates confusion, breaks trust, and forces users to think harder, good design guides users effortlessly through clear hierarchy, consistent patterns, and structured flows.
                                </p>
                                <p>
                                    It relies on research, testing, and real behavior—not assumptions—making every pixel purposeful. Thoughtful interfaces reduce friction, increase conversions, and build credibility, while design systems ensure scalability and consistency across products.
                                </p>
                                <p>
                                    Guesswork is random, emotional, and costly; it leads to lost users, higher drop-offs, and expensive redesigns.
                                </p>
                                <p>
                                    Design, on the other hand, solves problems, improves usability, and drives measurable business growth. In every product, clarity beats chaos, strategy beats assumption, and good design always beats guesswork.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="col-lg-4">
                        <div className="blog-sidebar-sticky">
                            <div className="sidebar-form-card">
                                <h3 className="sidebar-title">Send your Query</h3>
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control sidebar-input" placeholder="Full Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control sidebar-input" placeholder="Email Address" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="tel" className="form-control sidebar-input" placeholder="Phone Number" />
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" id="sidebar-consent" />
                                        <label className="form-check-label sidebar-consent-label" htmlFor="sidebar-consent">
                                            I agree to be contacted about my project.
                                        </label>
                                    </div>

                                    <button type="submit" className="btn-sidebar-submit">SUBMIT QUERY</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles Section */}
                <div className="related-articles-section">
                    <div className="row g-4">
                        {/* Article 1 */}
                        <div className="col-md-4">
                            <div className="related-card">
                                <div className="related-img-wrapper">
                                    <img src={related1} alt="Related 1" className="related-img" />
                                </div>
                                <div className="related-meta">3 MINUTE READ • OCTOBER 8, 2025</div>
                                <h4 className="related-title">Crafting Website Layouts That Convert</h4>
                                <p className="related-desc">
                                    Well-planned layouts guide visitor attention, boost engagement, and encourage action.
                                </p>
                            </div>
                        </div>
                        {/* Article 2 */}
                        <div className="col-md-4">
                            <div className="related-card">
                                <div className="related-img-wrapper">
                                    <img src={related2} alt="Related 2" className="related-img" />
                                </div>
                                <div className="related-meta">3 MINUTE READ • OCTOBER 8, 2025</div>
                                <h4 className="related-title">Future Trends Changing UI Design</h4>
                                <p className="related-desc">
                                    From AI personalization to motion-led interfaces, explore upcoming design trends.
                                </p>
                            </div>
                        </div>
                        {/* Article 3 */}
                        <div className="col-md-4">
                            <div className="related-card">
                                <div className="related-img-wrapper">
                                    <img src={related3} alt="Related 3" className="related-img" />
                                </div>
                                <div className="related-meta">3 MINUTE READ • OCTOBER 8, 2025</div>
                                <h4 className="related-title">Why Your Brand Needs Visual Consistency</h4>
                                <p className="related-desc">
                                    Consistent colors, typography, and spacing build recognition and trust.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
