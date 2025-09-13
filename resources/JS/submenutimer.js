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
  const allSubmenus = document.querySelectorAll('.header-menu .submenu');

  document.querySelectorAll('.header-menu > li').forEach(item => {
    const submenu = item.querySelector('.submenu');
    const link = item.querySelector('a');
    if (!submenu || !link) return;

    let isOpen = false;

    const eventType = ('ontouchstart' in window) ? 'touchstart' : 'click';

    link.addEventListener(eventType, (e) => {
      if (!isOpen) {
        e.preventDefault(); // stop navigation on first tap
        // close all other submenus
        allSubmenus.forEach(s => {
          if (s !== submenu) s.style.display = 'none';
        });

        submenu.style.display = 'block';
        isOpen = true;
      } else {
        // second tap will follow link
        isOpen = false;
      }
    });

    // clicking outside closes submenu
    document.addEventListener(eventType, (e) => {
      if (!item.contains(e.target)) {
        submenu.style.display = 'none';
        isOpen = false;
      }
    });
  });
}