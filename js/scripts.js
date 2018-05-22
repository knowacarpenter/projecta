$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var address1Input = $("input#address1").val();
    var address2Input= $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".name").text(nameInput);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#story").show();

    event.preventDefault();
  });
});
