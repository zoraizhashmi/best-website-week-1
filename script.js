// "el" stands for the "element" that was just clicked
function jimmyG(el){
	el.classList.add("opaque");

	var audio = new Audio('audio/thecatch2.wav');
	audio.play();
	
	document.getElementById("niner").src = "image/jimmyg.png";
}

// "el" stands for the "element" that was just clicked
function busterP(el){
	el.classList.add("opaque");

	var audio = new Audio('audio/walkoff.wav');
	audio.play();
	
	document.getElementById("giant").src = "image/bposey.png";
}

// "el" stands for the "element" that was just clicked
function kobeB(el){
	el.classList.add("opaque");

	var audio = new Audio('audio/lakerswin.wav');
	audio.play();
	
	document.getElementById("laker").src = "image/kbryant.png";
}

// "el" stands for the "element" that was just clicked
function jumboJ(el){
	el.classList.add("opaque");
	
	var audio = new Audio('audio/goalhorn.mp3');
	audio.play();
	
	document.getElementById("shark").src = "image/jumbojoe.png";
}