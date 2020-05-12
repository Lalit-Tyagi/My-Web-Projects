
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
var correctAns;
var numSquares = 6;
var color = [];
starter();
function setModeButton() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}
function setSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color[i];
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === correctAns) {
                message.textContent = "Correct!!";
                header.style.backgroundColor = correctAns;
                changeColor(correctAns);
                resetButton.textContent = "PlayAgain!!"

            }
            else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!!";
            }
        });
    }
}
function starter() {
    setModeButton();
    setSquares();
    reset();
}
function reset() {
    color = genrateRandomColors(numSquares);
    header.style.backgroundColor = "#3264a8";
    correctAns = colorPicker();
    colorDisplay.textContent = correctAns;
    resetButton.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        if (color[i]) {
            squares[i].style.backgroundColor = color[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function genrateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

resetButton.addEventListener("click", reset);


function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function colorPicker() {
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}
