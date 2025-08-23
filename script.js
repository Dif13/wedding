document.addEventListener('DOMContentLoaded', () => {
    // --- Preloader Logic ---
    const body = document.body;
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const firstImage = document.getElementById('content-part1');

    // Set a timer to show the loader only if loading is slow
    const loaderTimeout = setTimeout(() => {
        loaderWrapper.style.opacity = '1';
    }, 300); // 300ms delay

    const showContent = () => {
        // Loading is finished, so clear the timer
        clearTimeout(loaderTimeout);
        
        // Start fading out the loader
        loaderWrapper.style.opacity = '0';
        
        // Make the main content visible
        body.classList.remove('content-loading');

        // After the fade-out transition ends, remove the loader from the DOM
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 500); // This must match the transition duration in CSS
    };

    if (firstImage.complete) {
        // If the image is already cached, show content immediately
        showContent();
    } else {
        // Otherwise, wait for the image to load
        firstImage.addEventListener('load', showContent);
    }

    // --- Get all elements ---
    const contentProgram = document.getElementById('content-program');
    const contentGuide = document.getElementById('content-guide');
    const tabsContainer = document.querySelector('.tabs-container');

    // Main tabs
    const tabProgram = document.getElementById('tab-program');
    const tabGuide = document.getElementById('tab-guide');
    const tabGuideScroll = document.getElementById('tab-guide-scroll');

    // New buttons for Part 3
    const part3Buttons = document.querySelectorAll('.part3-button'); // Get all buttons at once
    const anchorBtn1 = document.getElementById('anchor-btn-1');
    const anchorBtn2 = document.getElementById('anchor-btn-2');
    const anchorBtn3 = document.getElementById('anchor-btn-3');
    const backToTopBtn = document.getElementById('back-to-top-btn');

    // --- Content switching functions ---

    function showProgram() {
        contentProgram.classList.remove('hidden');
        contentGuide.classList.add('hidden');
        
        // Show the scroll button that's on Part 2
        tabGuideScroll.classList.remove('hidden');
        
        // Hide all buttons that are on Part 3
        part3Buttons.forEach(button => button.style.display = 'none');
    }

    function showGuide() {
        contentGuide.classList.remove('hidden');
        contentProgram.classList.add('hidden');

        // Hide the scroll button that's on Part 2
        tabGuideScroll.classList.add('hidden');

        // Show all buttons that are on Part 3
        part3Buttons.forEach(button => button.style.display = 'block');
    }

    // --- Scrolling function ---

    function scrollToPercent(percent) {
        if (!contentGuide) return;
        // We need to calculate the scroll position relative to the page, not the element
        const elementRect = contentGuide.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const scrollTarget = absoluteElementTop + (contentGuide.offsetHeight * (percent / 100));
        
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    }

    // --- Event Listeners ---

    // Main tabs
    tabProgram.addEventListener('click', showProgram);
    tabGuide.addEventListener('click', showGuide);
    tabGuideScroll.addEventListener('click', () => {
        showGuide();
        if (tabsContainer) {
            tabsContainer.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    });

    // New Part 3 buttons
    anchorBtn1.addEventListener('click', () => scrollToPercent(11));
    anchorBtn2.addEventListener('click', () => scrollToPercent(46));
    anchorBtn3.addEventListener('click', () => scrollToPercent(79));

    backToTopBtn.addEventListener('click', () => {
        showProgram();
        if (tabsContainer) {
            tabsContainer.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    });

    // --- Initial State ---
    // Ensure the Part 3 buttons are hidden on page load
    part3Buttons.forEach(button => button.style.display = 'none');
});