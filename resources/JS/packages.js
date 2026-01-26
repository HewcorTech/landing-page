document.addEventListener("DOMContentLoaded", () => {

  const triggers = document.querySelectorAll(".open-overlay");
  const overlays = document.querySelectorAll(".overlay");

  triggers.forEach(trigger => {

    trigger.addEventListener("click", () => {
      const overlayName = trigger.dataset.overlay;

      overlays.forEach(overlay => {
        overlay.classList.remove("active");
        if (overlay.dataset.overlayId === overlayName) {
          overlay.classList.add("active");
        }
      });
    });

    // Keyboard accessibility
    trigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger.click();
      }
    });

  });

  // Close overlay
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
      e.target.closest(".overlay").classList.remove("active");
    }
  });

});


