import initSlider from '../../js/initSlider';

initSlider('.works__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'works__items',
  slideClass:    'works__item',
  navigation:    {
    prevEl: $('.works__slider .navBtn--prev')[0],
    nextEl: $('.works__slider .navBtn--next')[0],
  },
}, { sm: true, md: false, lg: false });
