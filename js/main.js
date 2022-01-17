import {
    pizzacrust,
    toppings,
    pizzasizeprices
} from './const.js'

var value;
var crust;

$("#homedelivery").click(function (e) {
    e.preventDefault();

});


// order form

$("form").submit(function (e) {
    e.preventDefault();

    var output;
    if (validateValues()) {

        console.log("validate values");
        var price = 0;
        var small = $('#small').is(':checked');
        var medium = $('#medium').is(':checked');
        var large = $('#large').is(':checked');

        var crispy = $('#crispy').is(':checked');
        var stuffed = $('#stuffed').is(':checked');
        var glut = $('#glut').is(':checked');



        if (small) {
            value = "small";
            price = price + pizzasizeprices[0].price;
        } else if (medium) {
            value = "medium";
            price = price + pizzasizeprices[1].price;

        } else if (large) {
            value = "large";
            price = price + pizzasizeprices[2].price;
        }
        console.log("Price" + price);
        if (crispy) {
            crust = "crispy";
            price = price + pizzacrust[0].price;
        } else if (stuffed) {
            crust = "stuffed";
            price = price + pizzacrust[1].price;

        } else if (glut) {
            crust = "large";
            price = price + pizzacrust[2].price;
        }
        console.log("Price" + price);


        var amount = $("#quanitity").val().trim();


        var array = [];
        var output;
        var output2 = ``;
        var output3;



        const lis = document.getElementById('list').getElementsByTagName('li');

        // Loop through the 
        for (let i = 0; i <= lis.length - 1; i++) {
            array[i] = lis[i].innerHTML;

        }


        for (let i = 0; i < array.length; i++) {

            price = price + toppings[i].price;
            output2 += ` ${array[i]} <br>`;
        }
        console.log("Price" + price);

        console.log(array)




        output = `<h2 class="mt-2 text-uppercase text-decoration-underline">Order checkout</h2>
                  <h2 class="display-5">
                  Order Size
                  </h2> 
                   <p>${value}</p>  
                   <h2 class="display-5">
                Type of crust
                </h2> 
        `

        output3 = `<h2 class="display-5">
        Quantity
        </h2> 
        <p>${amount}</p>
        <p>Total amount is ${totalprice}</p>

        

        `


        $('#ordersummary').html(output);
        $('#ordersummary2').html(output2);
        $('#ordersummary3').html(output3);

        var totalprice = price * amount;

        var button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'Enter Delivery Location';
        button.classList.add('btn');
        button.classList.add('btn-danger');


        button.onclick = function () {

            console.log("Hello world");
            let location = prompt("Please enter your Location:", "");

            alert("your pizza will be delivered at " + location);
        };


        var container = document.getElementById('ordersummary3');
        container.appendChild(button);

        $('#ordersummary3').appendChild(button);


    }
});

$("#Addtoppingbtn").click(function (e) {

    e.preventDefault();

    var topping = $('#top').find(":selected").text();

    var ul = document.getElementById("list");

    var li = document.createElement("li");
    li.classList.add("list-group-item", "w-25", "mt-2");
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


    var errcount = 0;
    var resume;

    if (small) {

        setSuccessSizeMessage("Correct");

    } else if (medium) {
        setSuccessSizeMessage("Correct");
    } else if (large) {
        setSuccessSizeMessage("Correct");

    } else if (!small && !medium && !large) {

        setErrorSizeMessage("please Choose pizza size");
        errcount = errcount + 1;
    }
    if (crispy) {

        setSuccessCrustMessage("Correct");

    } else if (stuffed) {
        setSuccessCrustMessage("Correct");

    } else if (glut) {
        setSuccessCrustMessage("Correct");

    }
    if (!crispy && !stuffed && !glut) {

        setErrorCrustMessage("Please choose crust");
        errcount = errcount + 1;

    }

    if (quantity == "") {
        setErrorQuantityMessage("Please enter quantity");
        errcount = errcount + 1;

    }
    if (!(quantity == "")) {
        if (isNaN(+quantity)) {
            setErrorQuantityMessage("Please input a number")
            errcount = errcount + 1;

        } else {
            setSuccesQuantityMessage("correct");

        }
    }

    if (errcount == 0) {
        resume = true;
    } else if (errcount > 0) {
        resume = false;
    }

    return resume;

}

function setSuccessSizeMessage(message) {


    document.getElementById("SizeMessage").innerHTML = message;

    var icon = document.getElementById("sizesuccessicon");

    icon.classList.remove("d-none")


}

function setErrorSizeMessage(message) {

    document.getElementById("SizeMessage").innerHTML = message;

    var icon = document.getElementById("sizefailureicon");

    icon.classList.remove("d-none")

}

function setSuccessCrustMessage(message) {

    document.getElementById("CrustMessage").innerHTML = message;

    var icon = document.getElementById("crustsuccessicon");

    icon.classList.remove("d-none")

}

function setErrorCrustMessage(message) {

    document.getElementById("CrustMessage").innerHTML = message;

    var icon = document.getElementById("crustfailicon");

    icon.classList.remove("d-none")

}

function setErrorQuantityMessage(message) {

    document.getElementById("QuantityMessage").innerHTML = message;

    var icon = document.getElementById("Quantityerroricon");

    icon.classList.remove("d-none")


}

function setSuccesQuantityMessage(message) {


    document.getElementById("QuantityMessage").innerHTML = message;

    var icon = document.getElementById("quantitysuccesicon");

    icon.classList.remove("d-none")


}