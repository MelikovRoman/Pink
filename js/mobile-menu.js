const openMenuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.overlay')


openMenuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  mobileMenu.classList.toggle('overlay--active');
  openMenuBtn.classList.toggle('hamburger--active');
})
