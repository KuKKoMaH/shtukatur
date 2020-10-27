const $menu = $('.header__menu');
const $items = $('.header__items');
const activeClass = 'header__menu--active';

$('.header__menuButton').on('click', () => {
  $menu.addClass(activeClass);
});
$('.header__menuClose').on('click', () => {
  $menu.removeClass(activeClass);
});

$menu.on('click', ( e ) => {
  const $el = $(e.target);
  if ($el.closest($items).length) return;
  if ($el.closest('.header__menuButton').length) return;
  $menu.removeClass(activeClass);
});

// ===============================================================

const $city = $('.header__city');
const $citySelect = $('.header__select');
const selectActiveClass = 'header__select--active';

$city.on('click', () => {
  $citySelect.addClass(selectActiveClass);
  const { bottom, left } = $city[0].getBoundingClientRect();
  $citySelect.css({ top: bottom, left });
});

$('body').on('click', ( e ) => {
  const $el = $(e.target);
  if (!$el.closest($city).length)
    $citySelect.removeClass(selectActiveClass);
});

// ===============================================================

const $document = $(document);
const $menuContainer = $('.header__menuContainer');
const fixedClass = 'header__menuContainer--fixed';
let headerFixed = false;
let menuOffset = $menuContainer.offset().top;

$(window).on('scroll', checkMenuFixed);
$(window).on('resize', () => {
  menuOffset = $menuContainer.offset().top;
  checkMenuFixed();
});


function checkMenuFixed() {
  const scrollTop = $document.scrollTop();
  if (!Breakpoints.is('lg')) {
    if (scrollTop) {
      $menuContainer.addClass(fixedClass);
      headerFixed = true;
    } else {
      $menuContainer.removeClass(fixedClass);
      headerFixed = false;
    }
    return;
  }
  if (scrollTop > menuOffset && !headerFixed) {
    $menuContainer.addClass(fixedClass);
    headerFixed = true;
  } else if (scrollTop < menuOffset && headerFixed) {
    $menuContainer.removeClass(fixedClass);
    headerFixed = false;
  }
}

checkMenuFixed();
