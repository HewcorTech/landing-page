if (window.innerWidth > 768) {
  const allSubmenus = document.querySelectorAll('.header-menu li .submenu');

  document.querySelectorAll('.header-menu li').forEach(item => {
    const submenu = item.querySelector('.submenu');
    if (!submenu) return;

    let hideTimeout;

    item.addEventListener('mouseenter', () => {
      // Close all other submenus first
      allSubmenus.forEach(s => {
        if (s !== submenu) s.style.display = 'none';
      });

      clearTimeout(hideTimeout); // cancel any pending hide for this submenu
      submenu.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        submenu.style.display = 'none';
      }, 300);
    });

    submenu.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
    });

    submenu.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(() => {
        submenu.style.display = 'none';
      }, 300);
    });
  });
}

if(window.innerWidth <= 768) {
document.querySelectorAll('.header-menu > li').forEach(item => {
  const submenu = item.querySelector('.submenu');
  const link = item.querySelector('a');
  if (!submenu || !link) return;

  let isOpen = false;

  link.addEventListener('click', (e) => {
    // detect mobile/touch
    const isTouch = window.matchMedia('(pointer: coarse)').matches || ('ontouchstart' in window);
    if (isTouch || window.innerWidth <= 900) {
      if (!isOpen) {
        submenu.forEach(list, () => {
          submenu.style.display = 'none';
        });

        e.preventDefault(); // stop navigation first tap
        submenu.style.display = 'block';
        isOpen = true;
      } 
      // second tap will follow link
    }
  });

  // Optional: clicking outside closes submenu
  document.addEventListener('click', (e) => {
    if (!item.contains(e.target)) {
      submenu.style.display = 'none';
      isOpen = false;
    }
  });
});}