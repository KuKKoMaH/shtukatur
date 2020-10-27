import Breakpoints  from 'breakpoints-js';
import SmoothScroll from 'smooth-scroll';
import noUiSlider   from 'nouislider';
import getNumEnding from './getNumEnding';

Breakpoints({
  sm: {
    min: 0,
    max: 767,
  },
  md: {
    min: 768,
    max: 1299,
  },
  lg: {
    min: 1300,
    max: Infinity,
  },
});

$('.select').selectize({ maxItems: 1 });

$('input[type="tel"]').mask("+7 (999) 999-99-99");

window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container' });

$('.datepicker input').datepicker({
  language: 'ru-RU',
  autoHide: true,
});

$('.slider').each(( i, el ) => {
  const { start, from, to } = el.dataset;

  const $el = $(el);
  $el.hide();
  const $slider = $('<div class="slider"/>');
  $el.after($slider);
  const slider = $slider[0];

  noUiSlider.create(slider, {
    connect:  [true, false],
    tooltips: true,
    start:    +start,
    range:    {
      'min': +from,
      'max': +to,
    },
    pips:     {
      mode:    'values',
      values:  [+from, +to],
      format:  {
        from: ( value ) => value + ' м',
        to:   ( value ) => value + ' м',
        // from: ( value ) => value + ' м<sup>2</sup>',
        // to:   ( value ) => value + ' м<sup>2</sup>',
      },
      density: 100,
    },
    // pips:     {
    //   mode:   'count',
    //   values: 2,
    // },
  });
  slider.noUiSlider.on('update', function ( values, handle ) {
    el.value = values[0];
  });
});

$('.file').each(( i, el ) => {
  const $el = $(el);
  const $name = $el.find('.file__name');
  const originalText = $name.text();
  $el.find('input[type="file"]').on('change', function () {
    const files = $(this)[0].files;
    let text = originalText;
    if (files.length === 1) text = files[0].name;
    if (files.length > 1) text = files.length + ' ' + getNumEnding(files.length, ['файл', 'файла', 'файлов']);
    $name.text(text);
  });
});
