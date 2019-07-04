jQuery(function(){
  initMenu();
  // initText();
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

// Add input text
function initText() {
  const heading          = document.getElementsByClassName("software__title")[0],
        textInput        = document.getElementsByClassName("form__input")[0],
        textInputValue   = textInput.value;

  if (textInputValue === textInputValue) {
    heading.innerHTML = textInputValue;
    heading.style.display = "inline-block";
  }
}
