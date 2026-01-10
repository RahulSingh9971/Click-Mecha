import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import Contact from '../../components/Contact/Contact';
import heroImage from '../../assets/blog-images/blog-details-hero.png';

const BlogPost = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Contact Form State
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', text: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        agree: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingSubmit(true);
        setSubmitStatus({ type: '', text: '' });

        try {
            const apiData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: `Inquiry from Blog Post: ${blog ? blog.title : 'Unknown'}`,
                agree: formData.agree ? 1 : 0
            };

            const response = await fetch('https://cms.clickmecha.com/api/contact-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(apiData)
            });

            const contentType = response.headers.get("content-type");
            let data;
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                data = { status: false, message: 'Server error' };
            }

            if (response.ok && data.status) {
                setSubmitStatus({
                    type: 'success',
                    text: data.message || 'Query sent successfully!'
                });
                setFormData({ name: '', email: '', phone: '', agree: false });
            } else {
                setSubmitStatus({
                    type: 'error',
                    text: data.message || 'Failed to send query.'
                });
            }
        } catch (err) {
            console.error("Contact form error:", err);
            setSubmitStatus({
                type: 'error',
                text: 'An error occurred. Please try again.'
            });
        } finally {
            setLoadingSubmit(false);
        }
    };

    useEffect(() => {
        const fetchBlogDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://cms.clickmecha.com/api/blogs/${slug}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                if (result.status && result.data) {
                    setBlog(result.data);
                    setRecentBlogs(result.recent_blogs || []);
                } else {
                    throw new Error(result.message || 'Failed to fetch blog details');
                }
                setError(null);
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError('Blog post not found or has been removed.');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchBlogDetails();
            window.scrollTo(0, 0);
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="blog-post-page">
                <div className="container text-center" style={{ padding: '100px 0' }}>
                    <h2>Loading article...</h2>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="blog-post-page">
                <div className="container text-center" style={{ padding: '100px 0' }}>
                    <h2 className="text-danger">{error || 'Article not found'}</h2>
                    <Link to="/blog" className="btn btn-primary mt-3">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <div className="container">
                {/* Full Width Hero Image */}
                <div className="blog-hero-image-wrapper mb-5">
                    <img
                        src={blog.image_url || heroImage}
                        alt={blog.title}
                        className="blog-hero-image"
                    />
                </div>

                <div className="row">
                    {/* Main Content Column */}
                    <div className="col-lg-8">
                        <div className="blog-post-content">
                            {/* Meta */}
                            <div className="blog-post-meta">
                                {blog.created_at ? new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'DATE LOADING...'} • {blog.read_time || '3 MINUTE READ'}
                            </div>

                            {/* Title */}
                            <h1 className="blog-post-title">
                                {blog.title}
                            </h1>

                            {/* Body Text */}
                            <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: blog.desc }}>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="col-lg-4">
                        <div className="blog-sidebar-sticky">
                            <div className="sidebar-form-card">
                                <h3 className="sidebar-title">Send your Query</h3>
                                {submitStatus.text && (
                                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} p-2 small`}>
                                        {submitStatus.text}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control sidebar-input"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control sidebar-input"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control sidebar-input"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-check mb-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="sidebar-consent"
                                            name="agree"
                                            checked={formData.agree}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <label className="form-check-label sidebar-consent-label" htmlFor="sidebar-consent">
                                            I agree to be contacted about my project.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-sidebar-submit"
                                        disabled={loadingSubmit}
                                    >
                                        {loadingSubmit ? 'SENDING...' : 'SUBMIT QUERY'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles Section */}
                {recentBlogs.length > 0 && (
                    <div className="related-articles-section">
                        <h3 className="mb-4">Recent Articles</h3>
                        <div className="row g-4">
                            {recentBlogs.map(recent => (
                                <div key={recent.id} className="col-md-4">
                                    <Link to={`/blog/${recent.slug || '#'}`} className="text-decoration-none">
                                        <div className="related-card">
                                            <div className="related-img-wrapper">
                                                <img src={recent.image_url || heroImage} alt={recent.title} className="related-img" />
                                            </div>
                                            <div className="related-meta">
                                                {recent.created_at ? new Date(recent.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'OCTOBER 8, 2025'}
                                            </div>
                                            <h4 className="related-title">{recent.title}</h4>
                                            {/* Assuming recent blogs have a short desc or we truncate */}
                                            <p className="related-desc">
                                                {recent.short_desc || 'Read this article to learn more.'}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Contact />
        </div>
    );
};

export default BlogPost;
