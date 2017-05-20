// JavaScript Document

$(document).ready(function(){
	"use strict";

	
	
$(window).on('scroll', function(){
	
	

	
		var scrollPosition = $(window).scrollTop();
		console.log(scrollPosition);
		if (scrollPosition > 700) {
			$('.change').addClass('new-look');	
		} else {
			$('.change').removeClass('new-look');	
		}
	
	
	
		
		
				
if (scrollPosition > 200) {
		$('.base').addClass('fadeInUp');
	}
	
if (scrollPosition > 1200) {
		$('.best').addClass('fadeInUp');
	}

if (scrollPosition > 2200) {
		$('.app').addClass('fadeInUp');
	}
	
	
if (scrollPosition > 2900) {
		$('.offers').addClass('fadeInUp');
	}

	
	

	
	});
	

	
		

var id = '#dialog';
	
//Get the screen height and width
var maskHeight = $(document).height();
var maskWidth = $(window).width();
	
//Set heigth and width to mask to fill up the whole screen
$('#mask').css({'width':maskWidth,'height':maskHeight});

//transition effect
$('#mask').fadeIn(500);	
$('#mask').fadeTo("slow",0.9);	
	
//Get the window height and width
var winH = $(window).height();
var winW = $(window).width();
              
//Set the popup window to center
$(id).css('top',  winH/2-$(id).height()/2);
$(id).css('left', winW/2-$(id).width()/2);
	
//transition effect
$(id).fadeIn(2000); 	
	
//if close button is clicked
$('.window .close, .window h5').click(function (e) {
//Cancel the link behavior
e.preventDefault();

$('#mask').hide();
$('.window').hide();
});

//if mask is clicked
$('#mask').click(function () {
$(this).hide();
$('.window').hide();
});

	
	


	
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1;}   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}	
	
	
	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});