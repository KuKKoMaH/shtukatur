import initSlider from '../../js/initSlider';

initSlider('.related__slider', {
  slidesPerView: 2,
  spaceBetween:  30,
  loop:          false,
  wrapperClass:  'related__items',
  slideClass:    'related__item',
  navigation:    {
    prevEl: $('.related__slider .navBtn--prev')[0],
    nextEl: $('.related__slider .navBtn--next')[0],
  },
  breakpoints:   {
    768: {
      slidesPerView: 1,
    },
  },
}, { sm: true, md: true, lg: false });
