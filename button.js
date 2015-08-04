/*****************************************
Function: createButton()
Purpose:  Creates a button.  The button is
		  is basically an image tag.  
		  
Parameters: buttonNumber:  the number for the
			button's name. String
			imgsrc:  the image for the button,
			should be a string giving the 
			location of the image.
			
Output:  returns the button after appending it to
		  the html document.  Its name, alt, and
		  src attributes will be set
******************************************/

function createButton(buttonNumber, imgsrc){
	var buttonName = 'button ' + buttonNumber;
	
	//create an image HTML element for the button
	var newButton = document.createElement("img");
	
	//Bad Code Smell Maybe--Should be refactored
	newButton.setAttribute('name',buttonName);
	newButton.setAttribute('alt', buttonName);
	newButton.setAttribute('src', imgsrc);
	
	
		
	
	//temporary ID and will need to be fixed in both HTML and JS
	var buttonTag = document.getElementById("button");
	buttonTag.appendChild(newButton);
	//alert('End of Function');
	return newButton;
}









/*******************************************************
Function: changeImage()
Purpose: to change the image for various mouse events. 
Parameters:  oldButton:  button node object to be changed
			 newImagesrc:  string specifying the file
			 location of the new button image to be used

Return Value:  Returns true if successful
*******************************************************/
function changeImage(oldButton, newImagesrc)
{
	var oldImageName = oldButton.getAttribute("name");
	document.images[oldImageName].src = newImagesrc;
	
	return true;
}




var button1 = createButton(1, 'image1.png');
var button2 = createButton(2, 'image1.png');


wrapInAnchor('http://www.google.com', button1);
wrapInAnchor('http://www.yahoo.com', button2);
