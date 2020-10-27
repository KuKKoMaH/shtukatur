import initSlider from '../../js/initSlider';

initSlider('.best__slider', {
  slidesPerView: 2,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'best__items',
  slideClass:    'best__item',
  navigation:    {
    prevEl: $('.best__slider .navBtn--prev')[0],
    nextEl: $('.best__slider .navBtn--next')[0],
  },
  breakpoints:   {
    768: {
      slidesPerView: 1,
    },
  },
}, { sm: true, md: true, lg: false });
