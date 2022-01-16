// order form

$("form").submit(function (e) {
    e.preventDefault();



    validateValues();

});

$("#Addtoppingbtn").click(function () {
    
    var topping = $('#top').find(":selected").text();

    var ul = document.getElementById("list");

    var li = document.createElement("li");
    li.classList.add("list-group-item", "w-25" , "mt-2");
    li.appendChild(document.createTextNode(topping));
    ul.appendChild(li);

    // remove selected topping
    var x = document.getElementById("top");
    x.remove(x.selectedIndex);

});

function validateValues() {


    var small = $('#small').is(':checked');
    var medium = $('#medium').is(':checked');
    var large = $('#large').is(':checked');

    var crispy = $('#crispy').is(':checked');
    var stuffed = $('#stuffed').is(':checked');
    var glut = $('#glut').is(':checked');

    var quantity = $("#quanitity").val().trim();



    if (small && medium && large) {

        setSuccessSizeMessage("Correct");
       
    } 
     if (!small || !medium || !large) {

        setErrorSizeMessage("please Choose pizza size");
        
    } 
    if (crispy && stuffed && glut) {

        setSuccessCrustMessage("Correct");
        
    }
    if (!crispy || !stuffed || !glut) {

        setErrorCrustMessage("Please choose crust");
        
    }
    if (quantity == "") {
        setErrorQuantityMessage("Please enter quantity");
    }
    if (!(quantity == "")) {
        setSuccesQuantityMessage("correct");
    }


    function setSuccessSizeMessage(message){


        document.getElementById("SizeMessage").innerHTML = message;

        var icon = document.getElementById("sizesuccessicon");

        icon.classList.remove("d-none")


    }

    function setErrorSizeMessage(message){

        document.getElementById("SizeMessage").innerHTML = message;

        var icon = document.getElementById("sizefailureicon");

        icon.classList.remove("d-none")

    }

    function setSuccessCrustMessage(message){

        document.getElementById("CrustMessage").innerHTML = message;

        var icon = document.getElementById("crustsuccessicon");

        icon.classList.remove("d-none")
        
    }

    function setErrorCrustMessage(message){

        document.getElementById("CrustMessage").innerHTML = message;

        var icon = document.getElementById("crustfailicon");

        icon.classList.remove("d-none")

    }

    function setErrorQuantityMessage(message){

        document.getElementById("QuantityMessage").innerHTML = message;

        var icon = document.getElementById("Quantityerroricon");

        icon.classList.remove("d-none")


    }

    function setSuccesQuantityMessage(message){

       
        document.getElementById("QuantityMessage").innerHTML = message;

        var icon = document.getElementById("quantitysuccesicon");

        icon.classList.remove("d-none")
 

    }



}