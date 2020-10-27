const $header = $('.order__header');
const $toggle = $header.find('input');
const activeClass = 'order__value--active';
$toggle.on('change', ( e ) => {
  const isOn = $toggle.prop('checked');
  $('.order__value').removeClass(activeClass);
  $(isOn ? '.order__value--right' : '.order__value--left').addClass(activeClass);
});
