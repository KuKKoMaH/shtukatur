import initSlider from '../../js/initSlider';

initSlider('.services__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'services__items',
  slideClass:    'services__item',
  navigation:    {
    prevEl: $('.services__slider .navBtn--prev')[0],
    nextEl: $('.services__slider .navBtn--next')[0],
  },
}, { sm: true, md: true, lg: false });
