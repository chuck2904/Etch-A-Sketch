
function createMyStuffHTML(withinWhat, createdType, howMany){
	var targetContainer = document.getElementById(withinWhat);	
	var i;
	for (i = 0; i < howMany; i++) {
	  var newThing = document.createElement(createdType);
	targetContainer.appendChild(newThing);
	}
}

function createAllStuff(withinWhat, createdType, howMany){
	//add the event listener "click" to the 3 html game buttons
	const targetContainer = document.querySelectorAll(withinWhat);
	targetContainer.forEach((thingy) => {
		for (i = 0; i < howMany; i++) {
			var newThing = document.createElement(createdType);
			thingy.appendChild(newThing);
		}
	});
}




// ################### CHECK HERE





function addColorEvents(whatStuff){
	var paintingSquares = document.querySelectorAll(whatStuff);
	paintingSquares.forEach(function(square) {
		square.addEventListener('mousedown', colorThis);
	});
}

//var z = colorThis.bind(this);
//var _listener = colorThis();

function colorThis() {
	this.style.background = theColor;
}

function updateColorShiz(e){
	theColor = e.target.value;
	console.log(e.type)
}

var theColor = "red"
const x = 100
createMyStuffHTML('sketch-container','div',x)
createAllStuff('div div','div',x)
addColorEvents('div div div')

var sanchos = document.getElementById('colorPicker');
sanchos.addEventListener('change', updateColorShiz)


