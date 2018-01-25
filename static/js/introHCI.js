'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is has taken control");
        $("#testjs").text("Please wait...")
        $("testjs").addClass("active")
        $("testjs").toggleClass("active")
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	function projectClick(e) { 
    // prevent the page from reloading 
		console.log("Project clicked")
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    $(this).css("background-color", "#7fff00");

		$(".project").click(function(){
			 $("#description").toggle();
		})


/*
var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
   }*/
}
	$("a.thumbnail").click(projectClick);
}
