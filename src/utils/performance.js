// Performance optimization utilities
export const lazyLoadImage = (imgSrc, placeholder = '/placeholder.jpg') => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(imgSrc);
        img.onerror = () => resolve(placeholder);
        img.src = imgSrc;
    });
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Preload critical resources
export const preloadResources = () => {
    const criticalImages = [
        // Add your critical image URLs here
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
};
