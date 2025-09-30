// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const navigation = document.querySelector('.header__navigation');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', function() {
      // Toggle active class on navigation
      navigation.classList.toggle('active');
      
      // Toggle aria-expanded attribute
      const isExpanded = navigation.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      
      // Update hamburger icon
      updateHamburgerIcon(menuToggle, isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
        navigation.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        updateHamburgerIcon(menuToggle, false);
      }
    });
  }

  // Update hamburger icon based on state
  function updateHamburgerIcon(toggle, isActive) {
    const hamburgers = toggle.querySelectorAll('.hamburger');
    
    if (isActive) {
      // Transform to X icon
      hamburgers[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      hamburgers[1].style.opacity = '0';
      hamburgers[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      // Reset to hamburger icon
      hamburgers[0].style.transform = 'none';
      hamburgers[1].style.opacity = '1';
      hamburgers[2].style.transform = 'none';
    }
  }
});