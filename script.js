document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements
    const tabProgram = document.getElementById('tab-program');
    const tabGuide = document.getElementById('tab-guide');
    const tabGuideScroll = document.getElementById('tab-guide-scroll'); // New button
    
    const contentProgram = document.getElementById('content-program');
    const contentGuide = document.getElementById('content-guide');
    
    // The container for the images, which we will scroll to
    const tabsContainer = document.querySelector('.tabs-container');

    // --- Reusable functions for showing content ---

    function showProgram() {
        contentProgram.classList.remove('hidden');
        contentGuide.classList.add('hidden');
        // Show the scroll button, as it's on part_2
        tabGuideScroll.classList.remove('hidden');
    }

    function showGuide() {
        contentGuide.classList.remove('hidden');
        contentProgram.classList.add('hidden');
        // Hide the scroll button, as it's not on part_3
        tabGuideScroll.classList.add('hidden');
    }

    // --- Event Listeners ---

    // Tab 1: Show Program
    tabProgram.addEventListener('click', showProgram);

    // Tab 2: Show Guide (no scroll)
    tabGuide.addEventListener('click', showGuide);

    // Tab 3 (New): Show Guide AND scroll to it
    tabGuideScroll.addEventListener('click', () => {
        // First, show the correct content (which will also hide this button)
        showGuide();
        
        // Then, scroll the container into view
        if (tabsContainer) {
            tabsContainer.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    });
});