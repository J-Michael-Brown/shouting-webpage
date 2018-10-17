$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#user-input").val().toUpperCase();

    $(".user").text(userInput);

    $("#response").show();

    event.preventDefault();
  });
});
