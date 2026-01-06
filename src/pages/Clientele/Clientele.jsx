import React from 'react';
import './Clientele.css';

// Importing existing logos to simulate the grid
import logoAmazon from '../../assets/service-images/logo-amazon.png';
import logoGoogle from '../../assets/service-images/logo-google.png';
import logoTinder from '../../assets/service-images/logo-tinder.png';
import logoSack from '../../assets/service-images/logo-slack.png';
import logoEA from '../../assets/service-images/logo-ea.png';
import logoWalmart from '../../assets/service-images/logo-walmart.png';
import logoLinkedin from '../../assets/service-images/logo-linkedin.png';

// Creating a list of logos to display (repeating to likely match the volume in the image)
const clientLogos = [
    { id: 1, src: logoAmazon, alt: 'ITC Limited' }, // Mapping to image mental model
    { id: 2, src: logoGoogle, alt: 'Kalpataru' },
    { id: 3, src: logoTinder, alt: 'Kamani' },
    { id: 4, src: logoSack, alt: 'Kanakia' },
    { id: 5, src: logoEA, alt: 'MTV' },
    { id: 6, src: logoWalmart, alt: 'UTV' },
    { id: 7, src: logoLinkedin, alt: 'NDTV' },
    { id: 8, src: logoAmazon, alt: 'Viacom18' },
    { id: 9, src: logoGoogle, alt: 'Flipkart' },
    { id: 10, src: logoTinder, alt: 'Movies Now' },
    { id: 11, src: logoSack, alt: 'ET Now' },
    { id: 12, src: logoEA, alt: 'Zoom' },
    { id: 13, src: logoWalmart, alt: 'Radio Mirchi' },
    { id: 14, src: logoLinkedin, alt: 'Lodha' },
    { id: 15, src: logoAmazon, alt: 'Imagica' },
    { id: 16, src: logoGoogle, alt: 'Rustomjee' },
    { id: 17, src: logoTinder, alt: 'Titan' },
    { id: 18, src: logoSack, alt: 'Voltas' },
    { id: 19, src: logoEA, alt: 'Godrej' },
    { id: 20, src: logoWalmart, alt: 'New India Assurance' },
    { id: 21, src: logoLinkedin, alt: 'Piramal' },
    { id: 22, src: logoAmazon, alt: 'Phoenix' },
    { id: 23, src: logoGoogle, alt: 'Riso' },
    { id: 24, src: logoTinder, alt: 'Rustomjee' },
    { id: 25, src: logoSack, alt: 'Sahakari' },
    { id: 26, src: logoEA, alt: 'Sony' },
    { id: 27, src: logoWalmart, alt: 'Tata Housing' },
    { id: 28, src: logoLinkedin, alt: 'Tata Value Homes' },
    { id: 29, src: logoAmazon, alt: 'UTV Bindass' },
    { id: 30, src: logoGoogle, alt: 'UTV Movies' },
];

const Clientele = () => {
    return (
        <div className="clientele-page">
            <div className="container">
                <div className="clientele-header text-center">
                    <h1 className="clientele-title">Clientele</h1>
                    <p className="clientele-desc">
                        We are known for executing campaigns in a unique style & fashion. We have a history of
                        delivering successful Outdoor Media Campaigns both locally as well as at the PAN India
                        level. Our work speaks for itself.
                    </p>
                </div>

                <div className="clientele-grid">
                    {clientLogos.map((client) => (
                        <div key={client.id} className="client-logo-card">
                            <img src={client.src} alt={client.alt} className="client-logo-img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clientele;
