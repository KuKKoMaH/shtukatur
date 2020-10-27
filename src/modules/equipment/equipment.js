import initSlider from '../../js/initSlider';

initSlider('.equipment__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'equipment__items',
  slideClass:    'equipment__item',
  navigation:    {
    prevEl: $('.equipment__slider .navBtn--prev')[0],
    nextEl: $('.equipment__slider .navBtn--next')[0],
  },
}, { sm: true, md: false, lg: false });
