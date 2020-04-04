const $menu = document.querySelector('.opened-menu');
const $btnMenuOpen = document.querySelector('.btnMenu_open');
const $btnMenuClose = document.querySelector('.btnMenu_close');

$btnMenuOpen.addEventListener('click', function() {
  $menu.classList.add('menu_open');
})

$btnMenuClose.addEventListener('click', function() {
  $menu.classList.remove('menu_open');
})
