const burgerMenu = document.querySelector('.burger_menu')

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
})
