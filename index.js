var colors = generateArrayOfRandomColor(6);
var pickedColor = pickColorFromArray();
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("displayMessage");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //Appy colors to squares
    squares[i].style.backgroundColor = colors[i];
    //Event Listeners to all squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColor) {
            displayMessage.textContent = "Correct";
            for (var i = 0; i < squares.length; i++) {
                //Change heading and all squares to correct color
                squares[i].style.backgroundColor = pickedColor;
                document.querySelector("h1").style.backgroundColor = pickedColor;
            }
        }
        else {
            //For wrong Selection
            displayMessage.textContent = "Try Again!";
            this.style.backgroundColor = "#232323"
        }
    });
}

function pickColorFromArray() {
    //Pick the correct answer color from arrray
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Generate an array of random colors
function generateArrayOfRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

//generate a string "rgb(r, g, b)" with random r g b between 0-255
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}