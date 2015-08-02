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

function changeImage()
{
	//just test code to make sure it works
	document.images['button 1'].src = "blue_button.jpg";
}


var button1 = createButton(1, 'image1.png');
changeImage();