$(document).ready(function() {
  $("#customerinfo").submit(function(event){
    event.preventDefault();
    var inputName = $("input#name").val();
    var inputPayment = $("input#payment").val();
    var inputAddress = $("input#address").val();
    var inputNob = $("#nob").val();
    var inputColor = $("input:radio[name=bookcolor]:checked").val();
    var inputColors = $("input:radio[name=crust]:checked").val();
    var inputColorss = $("input:radio[name=cheese]:checked").val();

    $("#nameoutput").text("Name: " + inputName);
    $("#paymentoutput").text("Payment: " + inputPayment);
    $("#addressoutput").text("Shipping Address: " + inputAddress);
    $("#noboutput").text("Number of books: " + inputNob);
    $("#coloroutput").text("Size: " + inputColor);
    $("#crustoutput").text("crust: " + inputColors);
    $("#cheeseoutput").text("cheese: " + inputColorss);


   });
});
