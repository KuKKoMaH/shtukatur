import initSlider from '../../js/initSlider';

initSlider('.team__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'team__items',
  slideClass:    'team__item',
  navigation:    {
    prevEl: $('.team__slider .navBtn--prev')[0],
    nextEl: $('.team__slider .navBtn--next')[0],
  },
}, { sm: true, md: false, lg: false });
