(()=>{var a,e={96:(a,e,n)=>{"use strict";n(394);var t=n(566),o=n(638);o(window).on("load",(function(){var a=o("[data-slider-id]");0!==a.length&&a.each((function(){var a=o(this),e=a.data("slider-id"),n=a.data("slider-prev"),i=a.data("slider-next"),c=o('[data-slider-button="'.concat(n,'"]')),d=o('[data-slider-button="'.concat(i,'"]')),l={slidesPerView:1,on:{init:function(){o(".slider__length").text(this.slides.length)},slideChange:function(a){o(".slider__current").text(a.realIndex+1)}}};switch(e){case 10:l={breakpoints:{}}}var s=new t.Z(a[0],l);c.on("click",(function(){s.slidePrev()})),d.on("click",(function(){s.slideNext()}))}))}));n(917);var i=n(638);i((function(){i.fancybox.defaults.closeExisting=!0,i.fancybox.defaults.touch=!1,i.fancybox.defaults.hideScrollbar=!1,i.fancybox.defaults.baseTpl='<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',i.fancybox.defaults.animationEffect="slide-in-out",i.fancybox.defaults.animationDuration=500,i("[data-fancy-button]").on("click",(function(a){a.preventDefault();var e=i(this).data("fancy-button"),n=i('[data-fancy-modal="'.concat(e,'"]'));switch(e){case"menu":i.fancybox.defaults.closeExisting=!0,i.fancybox.defaults.touch=!1,i.fancybox.defaults.hideScrollbar=!1,i.fancybox.defaults.baseTpl='<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-stage"></div></div>',i.fancybox.defaults.animationEffect="slide-in-out",i.fancybox.defaults.animationDuration=500;break;default:i.fancybox.defaults.closeExisting=!0,i.fancybox.defaults.touch=!1,i.fancybox.defaults.hideScrollbar=!1,i.fancybox.defaults.baseTpl='<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',i.fancybox.defaults.animationEffect="slide-in-out",i.fancybox.defaults.animationDuration=500}i.fancybox.open(n)}))}));var c=1280,d=768,l=window.matchMedia("(min-width: ".concat(c,"px)")),s=(window.matchMedia("(min-width: ".concat(d,"px)")),n(638));s((function(){if(l.matches){var a=function(){var a=s(window).scrollTop();a>1&&(e.addClass("header--scroll"),o||(o=!0,n.slideUp(500))),a<1&&(e.removeClass("header--scroll"),o&&(o=!1,n.slideDown(500),s("[data-header-button]").removeClass("active"),s(".header__template").slideUp(500)))},e=s(".header"),n=s(".header__list"),t=120,o=!1;s(window).one("scroll",(function e(){a(),setTimeout((function(){a(),s(window).one("scroll",e)}),1e3/t)}))}})),s((function(){if(l.matches){var a=s("[data-header-button]"),e=s("[data-header-accordion]");a.on("click",(function(){s(this).toggleClass("active"),e.slideToggle(500)}))}})),n(638)((function(){n(323)}))},394:(a,e,n)=>{var t=n(638);t((function(){t("[data-accordion]").length&&window.addEventListener("click",(function(a){var e=t("[data-accordion]"),n=t(a.target);n.closest("[data-accordion-button]").length&&(n.closest(e).toggleClass("active"),n.closest(e).find("[data-accordion-dropdown]").eq(0).slideToggle())}))}))},323:()=>{}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={exports:{}};return e[a].call(i.exports,i,i.exports,t),i.exports}t.m=e,a=[],t.O=(e,n,o,i)=>{if(!n){var c=1/0;for(s=0;s<a.length;s++){for(var[n,o,i]=a[s],d=!0,l=0;l<n.length;l++)(!1&i||c>=i)&&Object.keys(t.O).every((a=>t.O[a](n[l])))?n.splice(l--,1):(d=!1,i<c&&(c=i));d&&(a.splice(s--,1),e=o())}return e}i=i||0;for(var s=a.length;s>0&&a[s-1][2]>i;s--)a[s]=a[s-1];a[s]=[n,o,i]},t.d=(a,e)=>{for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})},t.o=(a,e)=>Object.prototype.hasOwnProperty.call(a,e),(()=>{var a={143:0,532:0};t.O.j=e=>0===a[e];var e=(e,n)=>{var o,i,[c,d,l]=n,s=0;for(o in d)t.o(d,o)&&(t.m[o]=d[o]);if(l)var r=l(t);for(e&&e(n);s<c.length;s++)i=c[s],t.o(a,i)&&a[i]&&a[i][0](),a[c[s]]=0;return t.O(r)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=t.O(void 0,[74,532],(()=>t(96)));o=t.O(o)})();