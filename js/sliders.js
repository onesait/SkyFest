if (jQuery(".clients__slider").length) {
  jQuery(".clients__slider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 6,
      appendArrows: jQuery(".clients__arrows"),
      prevArrow:
        '<button class="slick-prev">\n' +
        '  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M15 18L9 12L15 6" stroke="#949494" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n' +
        '  </svg>\n' +
        '</button>',
      nextArrow:
        '<button class="slick-next">\n' +
        '  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M9 18L15 12L9 6" stroke="#B20003" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n' +
        '  </svg>\n' +
        '</button>',
    });
}