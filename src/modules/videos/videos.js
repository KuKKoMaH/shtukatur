import initSlider from '../../js/initSlider';

initSlider('.videos__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'videos__items',
  slideClass:    'videos__item',
  navigation:    {
    prevEl: $('.videos__slider .navBtn--prev')[0],
    nextEl: $('.videos__slider .navBtn--next')[0],
  },
}, { sm: true, md: true, lg: false });

$('.videos__slider').magnificPopup({
  delegate: '.videos__video',
  type:     'iframe',
  gallery:  {
    enabled:            true,
    navigateByImgClick: true,
    preload:            [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});
