document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".quote-form");
  const popup = document.getElementById("popupForm");
  const modalContent = popup.querySelector(".modal-content");
  const closeBtn = popup.querySelector(".close-btn");

  // Ensure popup is hidden on page load
  popup.style.display = "none";

  // Close popup when user clicks X
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    restoreForm();
  });

  // Optional: open popup when user clicks "Request a quote" button
  const requestBtn = document.getElementById("request-btn");
  if (requestBtn) {
    requestBtn.addEventListener("click", () => {
      popup.style.display = "block";
    });
  }

  // Handle form submission
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new URLSearchParams(new FormData(form));

    fetch("https://script.google.com/macros/s/AKfycbzWh_A4G-LFxn6cVLPobVH42sm4IkhR4n9-T8wS2rsFS_r4OaIYCMl2_7AMp2qJVVZcNA/exec", {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(response => response.text())
    .then(result => {
      if (result.trim() === "OK") {
        showMessage("Form submitted successfully!");
        form.reset();
      } else {
        showMessage("Something went wrong. Please try again.");
      }
    })
    .catch(err => {
      console.error("Error submitting form:", err);
      showMessage("Submission failed. Please try again later.");
    });
  });

  // Function to display a message and auto-close popup
  function showMessage(message) {
    modalContent.innerHTML = `<span class="close-btn">&times;</span><p>${message}</p>`;
    popup.style.display = "block";

    // Re-add close button listener
    modalContent.querySelector(".close-btn").addEventListener("click", () => {
      popup.style.display = "none";
      restoreForm();
    });

    setTimeout(() => {
      popup.style.display = "none";
      restoreForm();
    }, 2000);
  }

  // Restore original form inside popup
  function restoreForm() {
    modalContent.innerHTML = `
      <span class="close-btn">&times;</span>
      <form class="quote-form" autocomplete="on">
        <h2>Request a Quote</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="description">What can we help you with?</label>
        <textarea id="description" name="description" required></textarea>
        <fieldset>
          <legend>Preferred contact method:</legend>
          <label><input type="radio" name="contact-method" value="phone"> Phone</label>
          <label><input type="radio" name="contact-method" value="sms"> SMS/Text</label>
          <label><input type="radio" name="contact-method" value="email" checked> Email</label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    `;

    // Reattach form submit listener
    const newForm = modalContent.querySelector(".quote-form");
    newForm.addEventListener("submit", formSubmitHandler);
  }

  // Keep a reference to the handler so we can reattach after restoring form
  function formSubmitHandler(e) {
    e.preventDefault();
    const data = new URLSearchParams(new FormData(e.target));
    fetch("https://script.google.com/macros/s/AKfycbzWh_A4G-LFxn6cVLPobVH42sm4IkhR4n9-T8wS2rsFS_r4OaIYCMl2_7AMp2qJVVZcNA/exec", {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(response => response.text())
.then(result => {
  console.log("Server returned:", result); // <--- debug line
  if (result.trim() === "OK") {
    showMessage("Form submitted successfully!");
  } else {
    showMessage("Something went wrong. Server returned: " + result);
  }
})
    .catch(err => {
      console.error("Error submitting form:", err);
      showMessage("Submission failed. Please try again later.");
    });
  }
});