var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("num-sum");

//-------------------------------------------------
/*
numOne.addEventListener("click", function(){
	console.log("hi");
});
*/


//-------------------------------------------------
/*
-click
-mouseenter
-mouseleave
-mouseup
-mousedown
-mousemove
-kaydown
-keyup
-blur
-focus
-input

numOne.addEventListener("mouseenter", function(){
	alert("hi");
});
*/

//-------------------------------------------------
/*
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
	var one = numOne.value;
	var two = numTwo.value;
	console.log(one, two);
};
*/
//-------------------------------------------------

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	addSum.innerHTML = "Your sum is: " + (one + two);
};