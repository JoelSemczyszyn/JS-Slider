// ----------------------------------- //
// Slider done by -------------------- //
// JoelSemczyszyn@gmail.com ---------- //
// ----------------------------------- //


// 
// Variables 
// ----------------------------------- //

var bg = document.getElementById("background"),
	bgCvs = bg.getContext("2d"),
	testBtn = document.getElementById("test"),
	mobileCheck = 0,
	slide2X = 600;

//
// Functions 
// ------------------------------------ //

function tlPlay() { tl.play(); }
function testFunction() {
	if (mobileCheck == 1) {
		slide2X = slide2X + 50;
	}
}

testBtn.addEventListener("click", tlPlay);

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

var	tl = new TimelineLite( {paused:true} );


// Main Timeline

tl.add( TweenMax.staggerFromTo(".slide1", 0.5, {opacity: 0, y:10}, {opacity: 1, y:0}, 0.2))
	.add( function() {mobileCheck = 1})
	.staggerTo(".slide2", 0.5, {opacity: 1, left: slide2X}, 0.5);

