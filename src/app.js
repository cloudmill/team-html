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
  $("body").css("overflow", "hidden");

  $(".loader").addClass("hidden");
  setTimeout(() => {

    $("body").css("overflow", "");

    AOS.init({
      once: true, 
      offset: 0,
      duration: 1000,
    });

    if (process.env.NODE_ENV === "production") {
      window.scrollTo(0, 0);
    }
  }, 1500);
});