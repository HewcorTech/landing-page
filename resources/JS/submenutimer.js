document.querySelectorAll('.header-menu li').forEach(item => {
  const submenu = item.querySelector('.submenu');
  if (!submenu) return;

  let hideTimeout;

  // Show submenu immediately on hover
  item.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // cancel any pending hide
    submenu.style.display = 'block';
  });

  // Start hide timer when mouse leaves
  item.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      submenu.style.display = 'none';
    }, 300); // stays open for 1 second (1000ms)
  });

  // If you hover back over submenu, cancel the hide timer
  submenu.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });

  // Leaving submenu starts hide timer again
  submenu.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      submenu.style.display = 'none';
    }, 300);
  });
});