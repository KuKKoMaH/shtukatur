import initSlider from '../../js/initSlider';

initSlider('.zamer__slider', ( $wrapper ) => ({
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'zamer__items',
  slideClass:    'zamer__item',
  navigation:    {
    prevEl: '.navBtn--prev',
    nextEl: '.navBtn--next',
  },
}), { sm: true, md: false, lg: false });
