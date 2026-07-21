// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".header__menu-toggle");
  // Находим всю панель, которая теперь служит выезжающим мобильным меню
  const mobileMenuPanel = document.querySelector(".header__inner-bottom");

  if (menuToggle && mobileMenuPanel) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation(); // Предотвращаем немедленное срабатывание закрытия по документу

      // Переключаем класс active на всей панели меню
      mobileMenuPanel.classList.toggle("active");

      // Проверяем, открылось ли меню
      const isExpanded = mobileMenuPanel.classList.contains("active");

      // Управляем атрибутом доступности для скринридеров
      menuToggle.setAttribute("aria-expanded", isExpanded);

      // Блокируем скролл сайта под меню, чтобы не прокручивался задний фон
      document.body.style.overflow = isExpanded ? "hidden" : "";

      // Анимируем бургер
      updateHamburgerIcon(menuToggle, isExpanded);
    });

    // Закрытие меню при клике в любое место экрана за пределами панели
    document.addEventListener("click", function (event) {
      if (
        !menuToggle.contains(event.target) &&
        !mobileMenuPanel.contains(event.target)
      ) {
        if (mobileMenuPanel.classList.contains("active")) {
          mobileMenuPanel.classList.remove("active");
          menuToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = ""; // Возвращаем скролл сайта
          updateHamburgerIcon(menuToggle, false);
        }
      }
    });
  }

  // Обновление иконки бургера (трансформация в крестик)
  function updateHamburgerIcon(toggle, isActive) {
    const hamburgers = toggle.querySelectorAll(".hamburger");

    if (hamburgers.length === 3) {
      if (isActive) {
        // Трансформируем полоски в крестик X
        hamburgers[0].style.transform = "translateY(8px) rotate(45deg)";
        hamburgers[1].style.opacity = "0";
        hamburgers[2].style.transform = "translateY(-8px) rotate(-45deg)";
      } else {
        // Сбрасываем в исходное состояние (три полоски)
        hamburgers[0].style.transform = "none";
        hamburgers[1].style.opacity = "1";
        hamburgers[2].style.transform = "none";
      }
    }
  }
});
