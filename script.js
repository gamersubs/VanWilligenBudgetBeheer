document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.getElementById('dropdownToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  // Dropdown toggle
  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
  });

  // Hamburger toggle
  hamburger.addEventListener('click', function () {
    menu.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', function (e) {
    if (!e.target.matches('#dropdownToggle')) {
      if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
      }
    }
  });
});
