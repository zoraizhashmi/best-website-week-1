// "el" stands for the "element" that was just clicked
function jimmyG(el){
	var audio = new Audio('audio/jimmygtd.wav');
	audio.play();
	
	document.getElementById("niner").src = "image/jimmyg.png";
	
	document.getElementById("ninerdiv").classList.add("niner-red");

}

// "el" stands for the "element" that was just clicked
function mikeT(el){
	var audio = new Audio('audio/walkoff.wav');
	audio.play();
	
	document.getElementById("angel").src = "image/troutani.png";
	
	document.getElementById("angeldiv").classList.add("angels-navy-blue");

}

// "el" stands for the "element" that was just clicked
function jumboJ(el){
	var audio = new Audio('audio/goalhorn.wav');
	audio.play();
	
	document.getElementById("shark").src = "image/jumbojoe.png";

	document.getElementById("sharkdiv").classList.add("sharks-orange");
	
}

// "el" stands for the "element" that was just clicked
function kobeB(el){
	var audio = new Audio('audio/lakerswin.wav');
	audio.play();
	
	document.getElementById("laker").src = "image/kbryant.png";

	document.getElementById("lakerdiv").classList.add("laker-gold");
	
	document.getElementById("lakerdiv").classList.remove("purp");
}
