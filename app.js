//Global Variables
var finalResult;
var number = 0;
const buttons = document.querySelectorAll("button");
const theNumber = document.getElementById("number");



// Event Listeners
buttons.forEach(button => {
    button.addEventListener("click", doYourMagic);
  });

// Functions
function doYourMagic () {
    let buttonClicked = event.target.id;
    if (buttonClicked === "add"){
        finalResult = number++;
        theNumber.textContent = finalResult;
    } else {
        finalResult = number--;
        theNumber.textContent = finalResult;
    }
}
