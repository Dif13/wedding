document.addEventListener('DOMContentLoaded', () => {
    const tabProgram = document.getElementById('tab-program');
    const tabGuide = document.getElementById('tab-guide');
    const contentProgram = document.getElementById('content-program');
    const contentGuide = document.getElementById('content-guide');

    tabProgram.addEventListener('click', () => {
        contentProgram.classList.remove('hidden');
        contentGuide.classList.add('hidden');
    });

    tabGuide.addEventListener('click', () => {
        contentGuide.classList.remove('hidden');
        contentProgram.classList.add('hidden');
    });
});