// Submiting the form
function showMessage(event) {
  event.preventDefault();
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  submitedForm.innerHTML = `Thank you for your order, ${firstName} ${lastName}! We will send your order as soon as possible. Have a nice day!`;
}

//listening to submiting form
let submitedForm = document.querySelector(".order-form");
submitedForm.addEventListener("submit", showMessage);

//changing images on image slider depending on color
var greenLine = document.getElementById("green_line");
var brownLine = document.getElementById("brown_line");
var whiteLine = document.getElementById("white_line");

function changeIntoGreen(event) {
  event.preventDefault();
  document.querySelector(".box-1").style.backgroundImage =
    "url('media/green_1.jpg')";
  document.querySelector(".box-2").style.backgroundImage =
    "url('media/green_2.jpg')";
  document.querySelector(".box-3").style.backgroundImage =
    "url('media/green_3.jpg')";
  document.querySelector(".box-4").style.backgroundImage =
    "url('media/green_4.jpg')";

  //removing line from the color
  brownLine.classList.remove("clicked");
  whiteLine.classList.remove("clicked");
  if (greenLine.classList.contains("clicked")) {
  } else {
    greenLine.classList.add("clicked");
  }
  //   greenColor.classList.add("clicked");
}

function changeIntoBrown(event) {
  event.preventDefault();
  document.querySelector(".box-1").style.backgroundImage =
    "url('media/brown_1.jpg')";
  document.querySelector(".box-2").style.backgroundImage =
    "url('media/brown_2.jpg')";
  document.querySelector(".box-3").style.backgroundImage =
    "url('media/brown_3.jpg')";
  document.querySelector(".box-4").style.backgroundImage =
    "url('media/brown_4.jpg')";

  //removing/adding line from the color
  greenLine.classList.remove("clicked");
  whiteLine.classList.remove("clicked");
  if (brownLine.classList.contains("clicked")) {
  } else {
    brownLine.classList.add("clicked");
  }
}

function changeIntoWhite(event) {
  event.preventDefault();
  document.querySelector(".box-1").style.backgroundImage =
    "url('media/white_1.jpg')";
  document.querySelector(".box-2").style.backgroundImage =
    "url('media/white_2.jpg')";
  document.querySelector(".box-3").style.backgroundImage =
    "url('media/white_3.jpg')";
  document.querySelector(".box-4").style.backgroundImage =
    "url('media/white_4.jpg')";

  //removing line from the color
  greenLine.classList.remove("clicked");
  brownLine.classList.remove("clicked");
  if (whiteLine.classList.contains("clicked")) {
  } else {
    whiteLine.classList.add("clicked");
  }
}

let greenColor = document.getElementById("green-t-shirt");
greenColor.addEventListener("click", changeIntoGreen);

let brownColor = document.getElementById("brown-t-shirt");
brownColor.addEventListener("click", changeIntoBrown);

let whiteColor = document.getElementById("white-t-shirt");
whiteColor.addEventListener("click", changeIntoWhite);
