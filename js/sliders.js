if (jQuery(".main-screen__slider").length) {
  jQuery(".main-screen__slider")
    .not(".slick-initialized")
    .slick({
      dots: true,
      appendArrows: jQuery(".main-screen__controls"),
      appendDots: jQuery(".main-screen__controls"),
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
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
}