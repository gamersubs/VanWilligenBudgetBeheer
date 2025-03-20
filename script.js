document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggle = document.getElementById('dropdownToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');

  // Dropdown toggle
  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', function (e) {
    if (!e.target.closest('#dropdownToggle')) {
      dropdownMenu.classList.remove('show');
    }
  });
});
