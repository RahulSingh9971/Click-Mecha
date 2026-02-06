const API_BASE_URL = 'https://cms.clickmecha.com/api';

/**
 * Fetch all services page data including services list and why choose us items
 */
export const fetchServicesData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/services`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching services data:', error);
        throw error;
    }
};

/**
 * Fetch home page data
 */
export const fetchHomeData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/home`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching home data:', error);
        throw error;
    }
};

/**
 * Fetch about page data
 */
export const fetchAboutData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/about`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching about data:', error);
        throw error;
    }
};

/**
 * Submit contact form
 */
export const submitContactForm = async (formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact-us`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
};
