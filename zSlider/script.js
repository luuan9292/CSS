let slideIndex = 1;
let time = 10000;
//Ham su kien click
function plusSlides(index) {
	showSlides(slideIndex += index )//+1 hoac -1 vao slideIndex
}

//Ham an hien slide
function showSlides(index) {

	let mySlides = document.getElementsByClassName('mySlides');
	let i;

	for(i = 0; i < mySlides.length; i++) {
		mySlides[i].style.display = 'none';
	}//An tat ca cac slide

	if(index > mySlides.length) {
		slideIndex = 1;
	}//Index lon hon chieu dai cua mang thi gan slideIndex bang 1
	if(index < 1) {
		slideIndex = mySlides.length;
	}// index be hon chieu dai cua mang thi gan slideIndex bang chieu dai

	mySlides[slideIndex - 1].style.display = 'block';
}


showSlides(slideIndex);

//Phan auto change image
setInterval(function() {
	plusSlides(1)
}, time)
