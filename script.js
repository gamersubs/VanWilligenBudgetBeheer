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
// Get the button:
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}