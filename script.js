const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const glassMenu = document.getElementById('menu-list');

    menuToggle.addEventListener('click', () => {
      glassMenu.classList.toggle('open');
      if (glassMenu.classList.contains('open')) {
        glassMenu.focus();
        
      }
    });

    menuClose.addEventListener('click', () => {
      glassMenu.classList.remove('open');
      menuToggle.focus();
    });

    document.addEventListener('click', (e) => {
      if (!glassMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        glassMenu.classList.remove('open');
      }
    });

 
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && glassMenu.classList.contains('open')) {
        glassMenu.classList.remove('open');
        menuToggle.focus();
      }
    });