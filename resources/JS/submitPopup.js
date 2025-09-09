document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popupForm");
  const modalContent = popup.querySelector(".modal-content");

  // Save the original form HTML once (for reset later)
  const originalContent = modalContent.innerHTML;

  // Hide popup on page load
  popup.style.display = "none";

  // Function to bind the close button event
  function bindCloseButton() {
    const closeBtn = popup.querySelector(".close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
        modalContent.innerHTML = originalContent;
        bindFormHandler(); // rebind form submit
        bindCloseButton(); // rebind close button
      });
    }
  }

  // Function to bind the form submit event
  function bindFormHandler() {
    const form = popup.querySelector(".quote-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new URLSearchParams(new FormData(form));

      // Show popup immediately
      popup.style.display = "block";

      // Send data to Google Sheet (fire and forget)
      fetch("https://script.google.com/macros/s/AKfycbzWh_A4G-LFxn6cVLPobVH42sm4IkhR4n9-T8wS2rsFS_r4OaIYCMl2_7AMp2qJVVZcNA/exec", {
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });

      // Clear the form
      form.reset();

      // Show submitted message
      modalContent.innerHTML = `
        <h2 style="text-align:center;">Submitted!</h2>
        <p style="text-align:center;">Thanks, we'll get back to you soon.</p>
      `;

      // Hide popup and restore form after 2 seconds
      setTimeout(() => {
        popup.style.display = "none";
        modalContent.innerHTML = originalContent;
        bindFormHandler(); // rebind form
        bindCloseButton(); // rebind close button
      }, 2000);
    });
  }

  // Initial bindings
  bindFormHandler();
  bindCloseButton();
});