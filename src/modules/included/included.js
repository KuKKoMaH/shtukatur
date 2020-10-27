import initSlider from '../../js/initSlider';

initSlider('.included__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'included__items',
  slideClass:    'included__item',
  navigation:    {
    prevEl: $('.included__slider .navBtn--prev')[0],
    nextEl: $('.included__slider .navBtn--next')[0],
  },
}, { sm: true, md: false, lg: false });
