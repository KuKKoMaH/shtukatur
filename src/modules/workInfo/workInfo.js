import initSlider from '../../js/initSlider';

initSlider('.workInfo__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'workInfo__items',
  slideClass:    'workInfo__item',
  navigation:    {
    prevEl: $('.workInfo__slider .navBtn--prev')[0],
    nextEl: $('.workInfo__slider .navBtn--next')[0],
  },
}, { sm: true, md: false, lg: false });

$('.workInfo__items').magnificPopup({
  delegate: '.workInfo__item',
  type:     'image',
  gallery:  {
    enabled:            true,
    navigateByImgClick: true,
    preload:            [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});
