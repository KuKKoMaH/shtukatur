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
