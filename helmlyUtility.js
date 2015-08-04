/******************************************
function:  element wrapName
Purpose:  wrap an html element in an anchor tag
		  homemade jQuery wrap()
		  !!!!NOTE, this will wrap the element AFTER it has been placed in html!!!!!!
		  
Parameters: hyperlink = destination hyper link in String format
			wrapped = element you want wrapped by its name.

********************************************/

function wrapInAnchor(hyperlink, wrapped){
	//create the wrapper anchor tag
	var wrapper = document.createElement('a');
	wrapper.setAttribute('href',hyperlink);
	
	//get the unwrapped element and its parent
	var unwrappedElement = document.getElementsByName(wrapped.getAttribute("name"));
	var parent = wrapped.parentNode;
	
	//add the now anchored tag to the HTML document
	wrapper.appendChild(unwrappedElement[0]);
	parent.appendChild(wrapper);	
}

