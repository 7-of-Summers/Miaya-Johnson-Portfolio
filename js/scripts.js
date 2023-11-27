console.log ("Welcome to Miaya Johnson's UX Design Portfolio. Enjoy!")

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
  x[slideIndex-1].style.display = "block";  
}

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

  $(".item").on("mouseover", function() {
    $(this).parent().addClass("is-hovered");
  });
  $(".item").on("mouseout", function() {
    $(this).parent().removeClass("is-hovered");
  });
  
  $(document).ready(function() {
    $('#main-nav li a').click(function(e) {
        
        var targetHref = $(this).attr('href');
        
      $('html, body').animate({
          scrollTop: $(targetHref).offset().top
      }, 1000);
      
      e.preventDefault();
    });
  });
