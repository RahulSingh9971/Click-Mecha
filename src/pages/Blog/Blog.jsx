import React, { useState } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import images for blog posts
import img1 from '../../assets/blog-images/blog-1.png';
import img2 from '../../assets/blog-images/blog-2.png';
import img3 from '../../assets/blog-images/blog-3.png';
import img4 from '../../assets/blog-images/blog-4.png';
import img5 from '../../assets/blog-images/blog-5.png';

const blogData = [
    {
        id: 1,
        category: 'DESIGN',
        image: img1,
        date: 'OCTOBER 8, 2024',
        readTime: '3 MINUTE READ',
        title: 'Why Good Design Always Beats Guesswork',
        desc: 'Strong design drives clarity, improves conversions, and reduces friction. Learn why intentional UI decisions consistently outperform assumptions.',
        author: 'TEAM CLICKMECHA',
        isFeatured: true
    },
    {
        id: 2,
        category: 'MARKETING',
        image: img2,
        date: 'OCTOBER 6, 2024',
        readTime: '3 MINUTE READ',
        title: 'How Brands Win With Bold Storytelling',
        desc: 'Great UI transforms complexity into clarity. Learn methods designers use to break down complicated systems and create intuitive dashboards users.',
        author: 'TEAM CLICKMECHA',
        isFeatured: true
    },
    {
        id: 3,
        category: 'DESIGN',
        image: img3,
        date: 'OCTOBER 5, 2024',
        readTime: '3 MINUTE READ',
        title: 'How Micro-Interactions Boost User Engagement',
        desc: 'Subtle animations guide users, provide feedback, and increase delight. Discover how micro-interactions transform static interfaces into memorable experiences.',
        author: 'TEAM CLICKMECHA',
        isFeatured: false
    },
    {
        id: 4,
        category: 'AI TRENDS',
        image: img4,
        date: 'OCTOBER 4, 2024',
        readTime: '3 MINUTE READ',
        title: 'Power Of Simplicity In Digital Products',
        desc: 'Clean interfaces reduce cognitive load, improve retention, and enhance experience. Learn how simplifying layouts makes digital products more intuitive.',
        author: 'TEAM CLICKMECHA',
        isFeatured: false
    },
    {
        id: 5,
        category: 'DESIGN',
        image: img5,
        date: 'OCTOBER 1, 2024',
        readTime: '5 MINUTE READ',
        title: 'Why Design Systems Build Faster Teams',
        desc: 'Design systems create consistency, accelerate development, and reduce redesign cycles. See how scalable components empower teams to ship better.',
        author: 'TEAM CLICKMECHA',
        isFeatured: false
    },
    // Dummy extra data for pagination testing
    {
        id: 6,
        category: 'MARKETING',
        image: img1,
        date: 'SEPTEMBER 28, 2024',
        readTime: '4 MINUTE READ',
        title: 'SEO Strategies for 2025',
        desc: 'Stay ahead of the curve with these emerging SEO trends that will define search rankings next year.',
        author: 'TEAM CLICKMECHA',
        isFeatured: false
    },
    {
        id: 7,
        category: 'AI TRENDS',
        image: img2,
        date: 'SEPTEMBER 25, 2024',
        readTime: '6 MINUTE READ',
        title: 'The Future of AI in Web Development',
        desc: 'How artificial intelligence is reshaping the way developers build and maintain modern web applications.',
        author: 'TEAM CLICKMECHA',
        isFeatured: false
    }
];

const Blog = () => {
    const [activeTab, setActiveTab] = useState('ALL');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const tabs = ['ALL', 'LATEST', 'AI TRENDS', 'MARKETING', 'DESIGN'];

    // Filter Logic
    const filteredPosts = activeTab === 'ALL' || activeTab === 'LATEST'
        ? blogData
        : blogData.filter(post => post.category === activeTab);

    // Pagination Logic
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + itemsPerPage);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); // Reset to first page on filter change
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="blog-page">
            <div className="container">

                {/* Filter Tabs */}
                <div className="blog-tabs-wrapper">
                    <div className="blog-tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                className={`blog-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="blog-content">
                    {/* If page 1 and ALL/LATEST, show specific layout (2 Featured + Grid) */}
                    {/* For simplicity and matching design, we'll render first 2 as featured if on page 1, else all grid */}

                    <div className="row g-4 mb-5">
                        {currentPosts.map((post, index) => {
                            // First 2 items on Page 1 get full width featured treatment (col-lg-6)
                            // The rest get grid treatment (col-lg-4)
                            // This logic mimics the design where the top 2 are distinct
                            const isFeaturedDisplay = currentPage === 1 && index < 2;

                            return (
                                <div key={post.id} className={isFeaturedDisplay ? "col-lg-6" : "col-lg-4 col-md-6"}>
                                    <div className={`blog-card ${isFeaturedDisplay ? 'featured-card' : ''}`}>
                                        <div className="blog-img-wrapper">
                                            <img src={post.image} alt={post.title} className="blog-img" />
                                        </div>
                                        <div className="blog-body">
                                            <div className="blog-meta">
                                                {post.date}, {post.readTime}
                                            </div>
                                            <h3 className="blog-title">{post.title}</h3>
                                            <p className="blog-desc">{post.desc}</p>

                                            <div className="blog-footer">
                                                <Link to="/blog/post" className="read-more-link">Read More</Link>
                                                <span className="blog-author-badge">{post.author}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="blog-pagination">
                            <button
                                className="page-btn prev-btn"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <FaArrowLeft className="me-2" /> Previous
                            </button>

                            <div className="page-numbers">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        className={`page-num ${currentPage === i + 1 ? 'active' : ''}`}
                                        onClick={() => handlePageChange(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                {/* Mock high numbers if needed to look like image, but functional is better */}
                            </div>

                            <button
                                className="page-btn next-btn"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next <FaArrowRight className="ms-2" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
