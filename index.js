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
        //Correct Color Clicked
        if (clickedColor == pickedColor) {
            displayMessage.textContent = "Correct";
            for (var i = 0; i < squares.length; i++) {
                //Change heading and all squares to correct color
                document.querySelector("h1").style.backgroundColor = pickedColor;
                squares[i].style.backgroundColor = pickedColor;
            }
        }
        //Incorrect Click
        else {
            //For wrong Selection
            displayMessage.textContent = "Try Again!";
            //Disapper the incorrect squares
            this.style.backgroundColor = "#232323"
        }
    });
}

//Pick the correct answer color from arrray
function pickColorFromArray() {
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