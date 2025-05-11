 window.onload = function () {
      alert("🌙 Welcome to Little Muslims - Islamic Learning for Kids!");
    };

alert("Welcom to my web page");

var name = prompt("Please enter your name:");
alert("Hello, " + name + "! Welcome to my web page.");
 
function showAlert() {
    alert("This is an alert message!");
}
 
function showPrompt() {
    var userInput = prompt("Please enter something:");
    alert("You entered: " + userInput);
}

function showConfirm() {
    var userResponse = confirm("Are you sure you want to proceed?");
    if (userResponse) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
}
