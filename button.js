/*function to create a button.*/

function createButton(buttonNumber, imgsrc){
	var buttonName = 'button ' + buttonNumber;
	
	//create an image HTML element for the button
	var newButton = document.createElement("img");
	newButton.setAttribute('name',buttonName);
	newButton.setAttribute('alt', buttonName);
	newButton.setAttribute('src', imgsrc);
	
	//temporary ID and will need to be fixed in both HTML and JS
	var buttonTag = document.getElementById("button");
	buttonTag.appendChild(newButton);
	alert('End of Function');
	return newButton;
}

/*function to change the image for various mouse events. */

function changeImage(oldButton, newImagesrc)
{
	var oldImageName = oldButton.getAttribute("name");
	document.images[oldImageName].src = newImagesrc;
	
	return true;
}


var button1 = createButton(1, 'image1.png');
changeImage(button1, "blue_button.jpg");
changeImage(button1, "image1.png")