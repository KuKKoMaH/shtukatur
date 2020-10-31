import initSlider   from '../../js/initSlider';

initSlider('.certificates__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'certificates__items',
  slideClass:    'certificates__item',
  navigation:    {
    prevEl: $('.certificates__slider .navBtn--prev')[0],
    nextEl: $('.certificates__slider .navBtn--next')[0],
  },
}, { sm: true, md: false, lg: false });

$('.certificates__items').magnificPopup({
  delegate: '.certificates__item',
  type:     'image',
  gallery:  {
    enabled:            true,
    navigateByImgClick: true,
    preload:            [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});
