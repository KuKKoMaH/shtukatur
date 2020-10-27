import Breakpoints from 'breakpoints-js';

const $container = $('.blogContainer__tags');
let isActive = false;
if ($container.length) {
  $container.on('click', ( e ) => {
    const currentSize = Breakpoints.current();
    if (currentSize.name === 'lg') return;

    if (isActive) return;
    isActive = true;
    e.preventDefault();
    $container.css('height', $container.find('.card__content').outerHeight(true));
    return false;
  });
  $('body').on('click', ( e ) => {
    if (!isActive) return;
    if ($(e.target).closest($container).length) return;
    isActive = false;
    $container.css('height', '');
  });
}
