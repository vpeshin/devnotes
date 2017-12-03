// Check off specific todos by clicking
// When li inside ul clicked, run this code
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function (event) {
  // remove parent li
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });

  // stop parent elements from bubbling up
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // Create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

// toggle input field
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});