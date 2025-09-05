document.addEventListener('DOMContentLoaded', () => {
    const initialHero = document.getElementById('initialHeroImage');
    const startButton = document.getElementById('startAdventureButton');
    const animatedHero = document.getElementById('animatedHero');

    // This function handles the fade out and smooth scroll
    const startAdventure = () => {
        initialHero.style.opacity = '0';
        initialHero.style.pointerEvents = 'none'; // Make it unclickable

        // Smooth scroll to the next section after the fade transition
        initialHero.addEventListener('transitionend', () => {
            animatedHero.scrollIntoView({ behavior: 'smooth' });
        }, { once: true }); // The { once: true } ensures this listener runs only once
    };

    // Event listener for the "START YOUR ADVENTURE" button
    startButton.addEventListener('click', startAdventure);

    // Optional: You could also trigger this automatically after a delay
    // For example, to hide the initial image after a few seconds
    // setTimeout(startAdventure, 5000); // Fades out after 5 seconds
});
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startAdventureButton');
    const gamesSection = document.getElementById('featured-games');
    const initialHero = document.getElementById('initialHeroImage');

    // Smooth scroll on button click
    startButton.addEventListener('click', () => {
        gamesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Slow and subtle fade effect while scrolling
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const fadeEnd = 800;  // fade spreads over 800px scroll
        let opacity = 1 - scrollY / fadeEnd;
        if (opacity < 0.7) opacity = 0.7; // don't fade more than 30%
        initialHero.style.opacity = opacity;
    });
});