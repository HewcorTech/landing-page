document.addEventListener('DOMContentLoaded', () => {
  const requestBtn = document.getElementById('openFormBtn');
  const modal = document.getElementById('popupForm');
  const closeBtn = modal.querySelector('.close-btn');

  requestBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Optional: close modal when clicking outside content
  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});