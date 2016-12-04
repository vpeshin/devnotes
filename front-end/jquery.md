// .addClass() function allows you to add classes to elements
// (suppose that jQuery library and the Animate.css library already included)
  $(document).ready(function() {
    $("button").addClass("animated bounce");  // by type
    $(".well").addClass("animated shake");  // by class
    $("#target3").addClass("animated fadeOut");  // by id
  });

// Remove Classes from an element
$("#target2").removeClass("btn-default");

// Change the CSS of an Element 
$("#target1").css("color", "blue");

// Disable an Element 
$("button").prop("disabled", true);

// Change Text Inside an Element 
$("h3").html("<em>jQuery Playground</em>");
// jQuery also has a similar function called .text() that only alters text without adding tags

// Remove an Element
$("#target4").remove();

// Add text at the beginning of element with id main
$("#main").append("Vladimir");

// Move elements
$("#target4").appendTo("#left-well");

// Clone an Element 
$("#target2").clone().appendTo("#right-well");

// Target the Parent of an Element 
$("#left-well").parent().css("background-color", "blue")

// Target the Children of an Element 
$("#left-well").children().css("color", "blue")

// Target a Specific Child of an Element 
$(".target:nth-child(3)").addClass("animated bounce");

// Target even numbered elements, odd numbered elements
$(".target:even").addClass("animated shake");
$(".target:odd").addClass("animated shake");

// Modify the Entire Page
$("body").addClass("animated fadeOut");