
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');  // <-- Toggle 'active' class on .nav-links
  });
});




  

