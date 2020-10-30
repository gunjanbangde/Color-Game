var colors = generateArrayOfRandomColor(6);
var pickedColor = pickColorFromArray();
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("displayMessage");
var resetButton = document.querySelector("#reset");

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
                //Change the text of reset button on correct guess
                resetButton.textContent = "Play Again?";
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

//Reset Button and get New Colors
resetButton.addEventListener("click", function () {
    //Generate new colors
    colors = generateArrayOfRandomColor(6);
    //Appy new colors to squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    //Select a new correct color from the array of newly generated colors
    pickedColor = pickColorFromArray();
    //Change the text of reset button after correct guess
    resetButton.textContent = "New Colors";
    //Change the h1 content with new correct color
    colorDisplay.textContent = pickedColor;
    //Reset the heading color for new gamr after correct guess
    document.querySelector("h1").style.backgroundColor = "#232323";
});

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