document.addEventListener("DOMContentLoaded", () => {
    // List of images
    const basePath = "resources/images/";
const images = [
    "smart-devices.jpg",
    "smart-thermostat.jpg",
    "home-setup.jpg",
    "laptop.jpg",
    "solar-field.jpg"
].map(img => basePath + img);

    // Preload images to prevent flash
    const preloadedImages = [];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img);
    });

    // Grab the two image elements
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");

    let index = 1; // next image to show
    let showingSlide1 = true;

    // Start interval for slideshow
    setInterval(() => {
        const nextImage = images[index];

        const imgToShow = showingSlide1 ? slide2 : slide1;
        const imgToHide = showingSlide1 ? slide1 : slide2;

        // Hide the currently visible image
        imgToHide.classList.remove("active");

        // Preload and then show the next image
        const tempImg = new Image();
        tempImg.src = nextImage;
        tempImg.onload = () => {
            imgToShow.src = nextImage;
            imgToShow.classList.add("active");
        };

        // Prepare for next cycle
        showingSlide1 = !showingSlide1;
        index = (index + 1) % images.length;

    }, 4000); // change slide every 4 seconds
});