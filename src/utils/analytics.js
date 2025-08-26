// Analytics utility for tracking user interactions
export const trackEvent = (eventName, properties = {}) => {
    // Google Analytics 4 event tracking
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, properties);
    }

    // Custom analytics logging
    console.log('Analytics Event:', eventName, properties);
};

export const trackPageView = (pageName) => {
    trackEvent('page_view', { page_name: pageName });
};

export const trackProjectView = (projectName) => {
    trackEvent('project_view', { project_name: projectName });
};

export const trackContactForm = (formType) => {
    trackEvent('contact_form_submit', { form_type: formType });
};

export const trackDownload = (fileType) => {
    trackEvent('file_download', { file_type: fileType });
};
