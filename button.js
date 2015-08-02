/*function to create a button.*/

function createButton(buttonNumber, imgsrc){
	var buttonID = 'button ' + buttonNumber;
	
	//create an image HTML element for the button
	var newButton = document.createElement("img");
	newButton.setAttribute('id',buttonID);
	newButton.setAttribute('alt', buttonID);
	newButton.setAttribute('src', imgsrc);
	
	//temporary ID and will need to be fixed in both HTML and JS
	var buttonTag = document.getElementById("button");
	buttonTag.appendChild(newButton);
	alert('End of Function');
}


createButton(1, 'image1.png');