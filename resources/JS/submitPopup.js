document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".quote-form");
  const popup = document.getElementById("popupForm"); // the modal
  const closeBtn = popup.querySelector(".close-btn");

  // Ensure popup is hidden on page load
  popup.style.display = "none";

  // Close modal if user clicks the X
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new URLSearchParams(new FormData(form));

    // Show popup immediately on submit
    popup.style.display = "block";

    fetch("https://script.google.com/macros/s/AKfycbzWh_A4G-LFxn6cVLPobVH42sm4IkhR4n9-T8wS2rsFS_r4OaIYCMl2_7AMp2qJVVZcNA/exec", {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(response => response.text())
    .then(result => {
      if (result === "OK") {
        console.log("Form submitted successfully!");

        // Clear the form
        form.reset();

        // Hide popup after 2 seconds
        setTimeout(() => {
          popup.style.display = "none";
        }, 2000);

      } else {
        console.error("Something went wrong with submission");
      }
    })
    .catch(err => console.error("Error submitting form:", err));
  });
});