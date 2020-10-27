import initSlider from '../../js/initSlider';

initSlider('.targets__slider', {
  slidesPerView: 2,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'targets__items',
  slideClass:    'targets__item',
  navigation:    {
    prevEl: $('.targets__slider .navBtn--prev')[0],
    nextEl: $('.targets__slider .navBtn--next')[0],
  },
  breakpoints:   {
    768: {
      slidesPerView: 1,
    },
  },
}, { sm: true, md: true, lg: false });
