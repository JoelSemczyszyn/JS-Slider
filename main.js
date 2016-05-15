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
	mobileCheck = 0;

//
// Functions 
// ------------------------------------ //

function tlMobilePlay() { tlMobile.play(); }
function slide1Play() { tlSlide1.play(); }
function slide2Play() { tlSlide2.play(); }


/* tlSlide + e */

mobileBtn.addEventListener("click", tlMobilePlay);
slide1Btn.addEventListener("click", slidePlay(1));
slide2Btn.addEventListener("click", slidePlay(2));

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
	tlSlide1 = new TimelineLite( {paused:true} ),
	tlSlide2 = new TimelineLite( {paused:true} );

tlMobile.add( TweenMax.staggerFromTo(".mobile", 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, 0.2));
/*	.add( function() {mobileCheck = 1})
	.staggerTo(".slide1", 0.5, {opacity: 1, left: slide2X}, 0.5);*/

tlSlide1.add( TweenMax.fromTo(".slide1", 0.5, {y:5, opacity:0}, {opacity:1, y:0}))
	.add(function() {return slideActive = 1;})
	.add(function(){tlSlide1.pause();})
	.to(".slide1", 0.5, {y:-5, opacity:0})
	.add(function() {slideActive = 0});

tlSlide2.add( TweenMax.fromTo(".slide2", 0.5, {y:5, opacity:0}, {opacity:1, y:0}))
	.add(function() {return slideActive = 1;})
	.add(function(){tlSlide2.pause();})
	.to(".slide2", 0.5, {y:-5, opacity:0})
	.add(function() {slideActive = 0});


function slidePlay(e) { 
	if (e == 1) {
		return slide1Play;
	} else if (e == 2) {
		return slide2Play;
	}
}

