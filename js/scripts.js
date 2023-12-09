console.log ("Welcome to Miaya Johnson's UX Design Portfolio. Enjoy!")


/*Slides Function*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "inline";  
}


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
	var isMobileBreakpoint = window.innerWidth <= 641

  if (x.className === 'navtoggle' && isMobileBreakpoint) {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
