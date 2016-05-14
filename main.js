// ----------------------------------- //
// Slider done by -------------------- //
// JoelSemczyszyn@gmail.com ---------- //
// ----------------------------------- //


// 
// Variables 
// ----------------------------------- //

var bg = document.getElementById("background");
var bgCvs = bg.getContext("2d");

// 
// Canvas Work  
// ----------------------------------- //

// Gradients

var bgGrd = bgCvs.createLinearGradient(0, 0, 1400, 400);
bgGrd.addColorStop(1, "rgb(255,255,255)" );
bgGrd.addColorStop(0.36, "rgb(234,234,234)" );
bgGrd.addColorStop(0.3, "rgb(255,255,255)" );
bgGrd.addColorStop(0, "rgb(242,242,242)" );

// Operations 

bgCvs.fillStyle = bgGrd;
bgCvs.fillRect(0, 0, 1400, 400);