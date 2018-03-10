window.onload = choosePic;

var myPix = new Array("images/21.jpg","images/ghost_in_the_machine.jpg","images/red.jpg","images/thriller.jpg","images/the_division_bell.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));

	document.getElementById("myPicture").src = myPix[randomNum];
};

window.onload = choosePic2;

var myPix2 = new Array("images/21.jpg","images/ghost_in_the_machine.jpg","images/red.jpg","images/thriller.jpg","images/the_division_bell.jpg");

function choosePic2() {
	randomNum2 = Math.floor((Math.random() * myPix2.length));

	document.getElementById("myPicture2").src = myPix2[randomNum2];
};
window.onload = choosePic3;

var myPix3 = new Array("images/the_division_bell.jpg","images/21.jpg","images/ghost_in_the_machine.jpg","images/red.jpg","images/thriller.jpg");

function choosePic3() {
	randomNum3 = Math.floor((Math.random() * myPix3.length));

	document.getElementById("myPicture3").src = myPix3[randomNum3];
};
