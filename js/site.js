// Navbar //

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 700) {
    $(".navbar").addClass("navBg");
    $(".navbar").addClass("fixed-top");
    $(".navbar").removeClass("sticky-top");
} else {
    $('.navbar').removeClass("navBg");
    $('.navbar').removeClass("fixed-top");
    $(".navbar").addClass("sticky-top")
}
    });
})


// Fade In - Name //
$(document).ready(function () {
    $('div.nameHidden').fadeIn(2000).removeClass('nameHidden');
});

// Fade In - Projects //


$(document).ready(function(){
$(window).scroll(function () {
  if ($(window).scrollTop() >= 500) {
      $('div.project1').removeClass('project1Hidden')
      $('div.project1').addClass('animated fadeInLeft')
  }
})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 860) {
      $('div.project2').removeClass('project2Hidden')
      $('div.project2').addClass('animated fadeInRight')
  }
})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1220) {
    $('div.project3').removeClass('project3Hidden')
    $('div.project3').addClass('animated fadeInLeft')
  }
})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1700) {
    $('div.project4').removeClass('project4Hidden')
    $('div.project4').addClass('animated fadeInRight')
  }
})
})


// $(window).resize(function(){
//    $('#projects').height($(window).height());
// });
// $('#projects').height($(window).height());


// Smooth Scrolling //
var scroll = new SmoothScroll('a[href*="#"]', {
  offset: 50
})

// Parallax //
//
$(window).scroll(function () {
   $(".header").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
});

// IMAGES //

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
});
