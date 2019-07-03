jQuery(function(){
  initMenu();
  linkDown();
  // initText();
  // initStickyScrollBlock();
});

function initMenu() {
  const opener      = jQuery(".menu-open");
  const page        = jQuery("html");
  const classActive = "menu-active";

  const clickHandler = function(e) {
    e.preventDefault();
    page.toggleClass(classActive);
  };
  opener.on("click", clickHandler);
}

//  link down
function linkDown() {
  $(".nav a").on("click", function(e) {
    if(this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 1000);
    }
  });
}

// Add input text
function initText() {
  const heading         = document.getElementsByClassName("software__title")[0],
        textInput        = document.getElementsByClassName("form__input")[0],
        textInputValue   = textInput.value;

  if (textInputValue === textInputValue) {
    heading.innerHTML = textInputValue;
    heading.style.display = "inline-block";
  }
}
