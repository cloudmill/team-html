import {mediaQuery} from './mediaQueries'

{
  $(() => {

    if (mediaQuery.matches) {
      // scroll
      const header = $('.header')
      const headerNav = $('.header__nav')
      const headerAccordion = $('.header__template')
      const fps = 120
  
      let isScrolled = false
  
      update()
      $(window).one('scroll', scroll)
  
      function scroll() {
        update()
  
        setTimeout(() => {
          update()
  
          $(window).one('scroll', scroll)
        }, 1000 / fps)
      }
  
      function update() {
        let scrollTop = $(window).scrollTop()
  
        if (scrollTop > 1) {
          header.addClass('header--scroll')
          isScrolled = true
        } 
  
        if (scrollTop < 1) {
          header.removeClass('header--scroll')

          if (isScrolled) {
            isScrolled = false
            headerNav.removeClass('active')
            headerAccordion.slideUp(500)
          }
        }
      }

      // menu
      headerNav.on('mouseenter', function() {
        if (isScrolled) {
          headerAccordion.slideDown(500)
          headerNav.addClass('active')
        }
      })

      headerNav.on('mouseleave', function() {
        if (isScrolled) {
          headerAccordion.slideUp(500)
          headerNav.removeClass('active')
        }
      })
    }
  });
}