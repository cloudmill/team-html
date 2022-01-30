import 'Styles/_app.scss';

import './scripts/accordion.js'
import './scripts/swipers.js'
import './scripts/fancybox.js'
import './scripts/header.js'
import './scripts/parsley.js'
import AOS from 'aos';

$(() => {
  require("./scripts/backend.js");
})

// loader

$(window).on("load", () => {
  const body = $('body')

  body.addClass('hidden')

  $(".loader").addClass("hidden");
  const loaderItems = document.querySelectorAll('.loader__item')

  for (let i = 1; i < 6; i++) {
    setTimeout(() => {
      loaderItems[i - 1].classList.remove('active')
      loaderItems[i].classList.add('active')
    }, 100 * i);
  }

  setTimeout(() => {
    body.removeClass('hidden')
    
    AOS.init({
      once: true, 
      offset: 0,
      duration: 1000,
    });
    
    if (process.env.NODE_ENV === "production") {
      window.scrollTo(0, 0);
    }
  }, 2000);
});