const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Accessibility
  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}',
  }
});
