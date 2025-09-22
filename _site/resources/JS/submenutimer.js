if (window.innerWidth > 768) {
  const allSubmenus = document.querySelectorAll('.header-menu li .submenu');
  let hideTimeout; // global timer

  document.querySelectorAll('.header-menu li').forEach(item => {
    const submenu = item.querySelector('.submenu');
    if (!submenu) return;

    // Show submenu on hover
    item.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout); // cancel any previous hide
      allSubmenus.forEach(s => {
        if (s !== submenu) s.style.display = 'none';
      });
      submenu.style.display = 'block';
    });

    // Start 5-second hide timer when leaving <li>
    item.addEventListener('mouseleave', () => {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        submenu.style.display = 'none';
      }, 1000);
    });

    // Cancel timer if hovering over submenu itself
    submenu.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
    });

    // Start timer when leaving submenu
    submenu.addEventListener('mouseleave', () => {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        submenu.style.display = 'none';
      }, 1000);
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