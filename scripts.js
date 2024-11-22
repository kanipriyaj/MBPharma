document.addEventListener('DOMContentLoaded', function() {
    const reviewsSlider = document.querySelector('.reviews-slider');
    const reviews = document.querySelectorAll('.review');
    let currentIndex = 0;

    function showNextReview() {
        currentIndex = (currentIndex + 1) % reviews.length;
        const offset = -currentIndex * 100;
        reviewsSlider.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextReview, 3000); // Change review every 3 seconds
});

