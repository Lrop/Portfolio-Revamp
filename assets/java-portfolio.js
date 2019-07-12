// $(document).ready(function () {
//     $("body").hide();
// });

// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
//     $("body").hide();
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Formget" && password == "formget#123"){
// alert ("Login successfully");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }

// console.log('smoke kush')


// $(document).ready(function () {
//     $("body").hide();
    
//     let input = document.getElementById("search");
//         // Execute a function when the user releases a key on the keyboard
//         input.addEventListener("keyup", function(event) {
//             // Number 13 is the "Enter" key on the keyboard
//             if (event.keyCode === 13) {
//                 // Cancel the default action, if needed
//                 event.preventDefault();
//                 // Trigger the button element with a click
//                 document.getElementById("submit").click();
//             }
//         });

//     function displayPub() {

//         $("#submit").on("click", function () {
//             $(".form-container").hide();
//             let search = $("#search").val().trim();
//             let queryUrl = "https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=bar+" + search + "&key=AIzaSyDGbaz8xBuD2ZAX5SI_IlQ8zYeao7KwTPQ";
//             $.ajax({
//                 url: queryUrl,
//                 method: 'GET'
//             }).then(function (data) {
//                 console.log(queryUrl);
//                 showResult(data.results);

//             });
//         });
//     }


// function unhide(clickedButton, divID) {
//     var item = document.getElementById(divID);
//     if (item) {
//         if(item.className=='hidden'){
//             item.className = 'unhidden' ;
//             clickedButton.value = 'hide'
//         }else{
//             item.className = 'hidden';
//             clickedButton.value = 'unhide'
//         }
//     }}
    
$(document).ready(function () {
    $("#main-section").hide();
    
    let input = document.getElementById("submit");
        // Execute a function when the user releases a key on the keyboard
        input.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("submit").click();
            }
        });

    });