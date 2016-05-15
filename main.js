// ----------------------------------- //
// Slider done by -------------------- //
// JoelSemczyszyn@gmail.com ---------- //
// ----------------------------------- //


// 
// Variables 
// ----------------------------------- //

var bg = document.getElementById("background"),
	bgCvs = bg.getContext("2d"),
	mobileBtn = document.getElementById("test"),
	slide1Btn = document.getElementById("slide1Btn"),
	slideActive = 0,
	mobileCheck = 0,
	slide2X = 600;

//
// Functions 
// ------------------------------------ //

function tlMobilePlay() { tlMobile.play(); }
function slide1Play() { tlSlide1.play(); }
function slide2Play() { tlSlide2.play(); }
function testFunction() {
	if (mobileCheck == 1) {
		slide2X = slide2X + 50;
	}
}

function slideCheck() {
	var x = 0;
	if (slideActive !== 0) {
		x = "tlSlide" + slideActive;
		document.getElementById("testDisplay").innerHTML = slideActive;
	}
}

mobileBtn.addEventListener("click", tlMobilePlay);
slide1Btn.addEventListener("click", slide1Play);
slide2Btn.addEventListener("click", slide2Play);
consoleBtn.addEventListener("click", slideCheck());

// 
// Canvas Work  
// ----------------------------------- //

// Gradients

var bgGrd = bgCvs.createLinearGradient(0, 0, 0, 400);
bgGrd.addColorStop(0, "rgb(255,255,255)" );
bgGrd.addColorStop(0.7, "rgb(234,234,234)" );
bgGrd.addColorStop(0.76, "rgb(255,255,255)" );
bgGrd.addColorStop(1, "rgb(242,242,242)" );

// Operations 

bgCvs.fillStyle = bgGrd;
bgCvs.fillRect(0, 0, 1400, 400);

// 
// Greensock Animation 
// ------------------------------------- //

// Timelines

var	tlMobile = new TimelineLite( {paused:true} ),
	tlSlide1 = new TimelineLite( {paused:true} );

tlMobile.add( TweenMax.staggerFromTo(".mobile", 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, 0.2));
/*	.add( function() {mobileCheck = 1})
	.staggerTo(".slide1", 0.5, {opacity: 1, left: slide2X}, 0.5);*/

tlSlide1.add( TweenMax.fromTo(".slide1", 0.5, {y:5, opacity:0}, {opacity:1, y:0}))
	.add(function() {return slideActive = 1;})
	.add(function(){tlSlide1.pause();})
	.to(".slide1", 0.5, {y:-5, opacity:0})
	.add(function() {slideActive = 0});

