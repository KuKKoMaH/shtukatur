import initSlider from '../../js/initSlider';

initSlider('.partners__slider', {
  slidesPerView: 2,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'partners__items',
  slideClass:    'partners__item',
  navigation:    {
    prevEl: $('.partners__slider .navBtn--prev')[0],
    nextEl: $('.partners__slider .navBtn--next')[0],
  },
  breakpoints:   {
    768: {
      slidesPerView: 1,
    },
  },
}, { sm: true, md: false, lg: false });
