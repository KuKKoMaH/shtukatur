import initSlider from '../../js/initSlider';

initSlider('.materials__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'materials__items',
  slideClass:    'materials__item',
  navigation:    {
    prevEl: $('.materials__slider .navBtn--prev')[0],
    nextEl: $('.materials__slider .navBtn--next')[0],
  },

}, { sm: true, md: false, lg: false });
