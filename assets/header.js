// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const navigation = document.querySelector('.header__inner-bottom');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', function() {
      // Toggle active class on navigation
      navigation.classList.toggle('active');
      
      // Toggle aria-expanded attribute
      const isExpanded = navigation.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
        navigation.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
});