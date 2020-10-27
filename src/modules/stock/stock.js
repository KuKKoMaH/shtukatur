import initSlider from '../../js/initSlider';

initSlider('.stock__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'stock__items',
  slideClass:    'stock__item',
  autoHeight:    true,
  navigation:    {
    prevEl: $('.stock__slider .navBtn--prev')[0],
    nextEl: $('.stock__slider .navBtn--next')[0],
  },
}, { sm: true, md: true, lg: false });
