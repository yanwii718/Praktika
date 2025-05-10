function toggleStep(step) {

    document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));

    step.classList.add('active');
}


document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './img/Rectangle_55.png',
        './img/Rectangle_55.png',
        './img/code.png'
    ];

    const rightSection = document.getElementById('right-section');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;
    let interval = null; 

    function changeBackground(index) {
        rightSection.style.backgroundImage = `url('${images[index]}')`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        changeBackground(currentIndex);
    }

    function startSlider() {

        if (interval !== null) {
            clearInterval(interval);
        }

        interval = setInterval(nextSlide, 10000);
    }

    function stopSlider() {

        if (interval !== null) {
            clearInterval(interval);
            interval = null; 
        }
    }


    startSlider();

    // Точки 
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            changeBackground(currentIndex);
            stopSlider(); 
            startSlider(); 
        });
    });

    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
});

function toggleCard(card) {
    document.querySelectorAll('.startups_cards').forEach(el => {
        if (el !== card) {
            el.classList.remove('active');
        }
    });
    card.classList.toggle('active');
}