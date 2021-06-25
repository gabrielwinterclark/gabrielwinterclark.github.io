// Grab the form element from HTML
	var form = document.querySelector("form");
	// Grab the pre element from HTML
	var log = document.querySelector("#log");
	// Wait for the user to click Submit
	form.addEventListener("submit", function(event) {
	  // Retrieve the data from the form
	  var data = new FormData(form);
	  // Create a string to store the data
	  var output = "";
	  // Loop through the data and collect the value of
	  // the name tag and the value that the user selected
	  for (const entry of data) {
	    // print out the name and its current value
	    output = output + entry[0] + "=" + entry[1] + "\r";
	  };
	  // print out the result
	  log.innerText = output;
	  event.preventDefault();
	}, false);
