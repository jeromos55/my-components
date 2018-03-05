

//-------------------------------------------------

// var simon = document.getElementById("simon");
// var simonPic = document.getElementById("simon-pic");
// var bruce = document.getElementById("bruce");
// var brucePic = document.getElementById("bruce-pic");
// var ben = document.getElementById("ben");
// var benPic = document.getElementById("ben-pic");

// simon.addEventListener("click", function () {
// 	if (simonPic.className === "hide") {
// 		simonPic.className = "";
// 	} else {
// 		simonPic.className = "hide";
// 	}
// })

// bruce.addEventListener("click", function () {
// 	if (brucePic.className === "hide") {
// 		brucePic.className = "";
// 	} else {
// 		brucePic.className = "hide";
// 	}
// })

// ben.addEventListener("click", function () {
// 	if (benPic.className === "hide") {
// 		benPic.className = "";
// 	} else {
// 		benPic.className = "hide";
// 	}
// })


//-------------------------------------------------

var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

bruce.addEventListener("click", picLink);
simon.addEventListener("click", picLink);
ben.addEventListener("click", picLink);


function picLink() {
	var allImages = document.querySelectorAll("img");

	for(i=0; i < allImages.length; i++){
		allImages[i].className = "hide";
	}

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide";
	}
}