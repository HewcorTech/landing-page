document.querySelectorAll('.dropdown-toggle').forEach(toggle => {

    const dropdown = toggle.parentElement.querySelector('.dropdown');

    toggle.addEventListener('change', () => {

        if (toggle.checked) {

            dropdown.style.height = dropdown.scrollHeight + 'px';
            dropdown.style.opacity = '1';

        } else {

            if (dropdown.style.height === 'auto') {
                dropdown.style.height = dropdown.scrollHeight + 'px';
                dropdown.offsetHeight;
            }

            dropdown.style.height = '0px';
            dropdown.style.opacity = '0';
        }
    });

    dropdown.addEventListener('transitionend', e => {

        if (e.propertyName === 'height' && toggle.checked) {
            dropdown.style.height = 'auto';
        }

    });

});

// gallery fade effects
const fadeItems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }

    });
}, {
    threshold: 0.15
});

fadeItems.forEach(item => {
    observer.observe(item);
});


// JavaScript For Services
document.querySelectorAll('.item-square').forEach(square => {

    square.addEventListener('click', () => {

        const overlay = square.querySelector('.overlay');

        overlay.classList.toggle('active');
        square.classList.toggle('active');

    });

});
document.addEventListener("DOMContentLoaded", () => {

    const hash = window.location.hash;

    if (hash) {

        const serviceLink = document.querySelector(hash);

        if (serviceLink) {

            const itemSquare = serviceLink.closest(".item-square");
            const overlay = serviceLink.querySelector(".overlay");

            if (itemSquare && overlay) {

                // Open the card
                itemSquare.classList.add("active");
                overlay.classList.add("active");

                // Scroll to the card after expansion
                setTimeout(() => {
                    itemSquare.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 150);

            }

        }

    }

});