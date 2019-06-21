// jQuery(function(){
//   initMenu();
//   hideSpan();
//   linkDown();
// });
//
// function initMenu() {
//   var opener = jQuery('.menu-open, .menu-close');
//   var page = jQuery('html');
//   var classActive = 'menu-active';
//
//   var clickHandler = function(e) {
//     e.preventDefault();
//     page.toggleClass(classActive);
//   };
//   opener.on('click', clickHandler);
// }
//
// function hideSpan() {
//   $(".know-more").on("click", function(){
//     $(this).parent(".visible-text").parent(".services-holder").toggleClass("show");
//   })
//   $(".close-wrapp").on("click", function(){
//     $(this).parent(".hover-text").parent(".services-holder").toggleClass("show");
//   })
// }
//
// // link down
// function linkDown() {
//   $(".navigation a").on("click", function(e) {
//     if(this.hash !== "") {
//       e.preventDefault();
//
//       const hash = this.hash;
//
//       $("html, body").animate({
//         scrollTop: $(hash).offset().top
//       }, 1000);
//     }
//   });
// }

jQuery(function(){
  initMenu();
});

function initMenu() {
  var opener = jQuery('.menu-open');
  var page = jQuery('html');
  var classActive = 'menu-active';

  var clickHandler = function(e) {
    e.preventDefault();
    page.toggleClass(classActive);
  };
  opener.on('click', clickHandler);
}
