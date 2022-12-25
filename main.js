//Decimal Output
let decimalOutput1 = document.querySelectorAll(
  ".container .decimal-output .a, .b, .c, .d"
);
let decimalOutput2 = [
  ...decimalOutput1,
  ...document.querySelectorAll(".container .decimal-output .f"),
];
let decimalOutput3 = [
  ...decimalOutput2,
  ...document.querySelectorAll(".container .decimal-output .e"),
];
//Correct Order Output
let decimalOutput = [
  ...decimalOutput3,
  ...document.querySelectorAll(".container .decimal-output .g"),
];

//Connector Lines
let connectors = document.querySelectorAll(".container .connectors > span");

// Binary
let binaryCode = [0, 0, 0, 0];
let inputButtons = document.querySelectorAll(
  ".container .binary .binary-inputs button"
);
let inputButtonsConnectors = document.querySelectorAll(
  ".container .binary .binary-inputs .line span"
);

let binaryBits = document.querySelectorAll(
  ".container .binary .binary-output span"
);

inputButtons.forEach((e) => {
  e.onclick = () => {
    //Active Button
    e.classList.toggle("active");

    // Connectors
    if (e.parentElement.className == "first-button") {
      inputConnectors(0);
    } else if (e.parentElement.className == "second-button") {
      inputConnectors(1);
    } else if (e.parentElement.className == "third-button") {
      inputConnectors(2);
    } else {
      inputConnectors(3);
    }
  };
});

function inputConnectors(index) {
  inputButtonsConnectors[index].classList.toggle("top-bottom");
  if (inputButtonsConnectors[index].classList.contains("top-bottom")) {
    binaryCode[index] = 1;
    showBinaryOutput(binaryCode);
  } else {
    binaryCode[index] = 0;
    showBinaryOutput(binaryCode);
  }
}

do {
  hideDecimal(6);
  showDecimal(0, 1, 2, 3, 4, 5);
  hideLines(6);
  showLines(0, 1, 2, 3, 4, 5);
} while (false);

function showBinaryOutput([w, x, y, z]) {
  binaryBits[0].innerHTML = w;
  binaryBits[1].innerHTML = x;
  binaryBits[2].innerHTML = y;
  binaryBits[3].innerHTML = z;

  switch (binaryCode.join("")) {
    case "0000":
      hideDecimal(6);
      showDecimal(0, 1, 2, 3, 4, 5);
      hideLines(6);
      showLines(0, 1, 2, 3, 4, 5);
      break;
    case "0001":
      hideDecimal(0, 3, 4, 5, 6);
      showDecimal(1, 2);
      hideLines(0, 3, 4, 5, 6);
      showLines(1, 2);
      break;
    case "0010":
      hideDecimal(2, 5);
      showDecimal(0, 1, 3, 4, 6);
      hideLines(2, 5);
      showLines(0, 1, 3, 4, 6);
      break;
    case "0011":
      hideDecimal(4, 5);
      showDecimal(0, 1, 2, 3, 6);
      hideLines(4, 5);
      showLines(0, 1, 2, 3, 6);
      break;
    case "0100":
      hideDecimal(0, 3, 4);
      showDecimal(1, 2, 5, 6);
      hideLines(0, 3, 4);
      showLines(1, 2, 5, 6);
      break;
    case "0101":
      hideDecimal(1, 4);
      showDecimal(0, 2, 3, 5, 6);
      hideLines(1, 4);
      showLines(0, 2, 3, 5, 6);
      break;
    case "0110":
      hideDecimal(1);
      showDecimal(0, 2, 3, 4, 5, 6);
      hideLines(1);
      showLines(0, 2, 3, 4, 5, 6);
      break;
    case "0111":
      hideDecimal(3, 4, 5, 6);
      showDecimal(0, 1, 2);
      hideLines(3, 4, 5, 6);
      showLines(0, 1, 2);
      break;
    case "1000":
      showDecimal(0, 1, 2, 3, 4, 5, 6);
      showLines(0, 1, 2, 3, 4, 5, 6);
      break;
    case "1001":
      hideDecimal(4);
      showDecimal(0, 1, 2, 3, 5, 6);
      hideLines(4);
      showLines(0, 1, 2, 3, 5, 6);
      break;
    default:
      hideDecimal(0, 1, 2, 3, 4, 5, 6);
      hideLines(0, 1, 2, 3, 4, 5, 6);
  }
}

function hideDecimal(...arr) {
  for (let i = 0; i < arr.length; i++) {
    decimalOutput[arr[i]].style.background = "#2195f313";
  }
}

function showDecimal(...arr) {
  for (let i = 0; i < arr.length; i++) {
    decimalOutput[arr[i]].style.background = "#2196f3";
  }
}

function hideLines(...arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 || arr[i] == 6) {
      connectors[arr[i]].children[0].classList.remove("top-bottom");
      connectors[arr[i]].children[1].children[0].classList.remove("right-left");
      connectors[arr[i]].children[2].children[0].classList.remove("right-left");
    } else if (arr[i] == 1 || arr[i] == 5) {
      connectors[arr[i]].children[0].classList.remove("top-bottom");
      connectors[arr[i]].children[1].children[0].classList.remove("right-left");
    } else {
      connectors[arr[i]].children[0].classList.remove("top-bottom");
    }
  }
}

function showLines(...arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 || arr[i] == 6) {
      connectors[arr[i]].children[0].classList.add("top-bottom");
      connectors[arr[i]].children[1].children[0].classList.add("right-left");
      connectors[arr[i]].children[2].children[0].classList.add("right-left");
    } else if (arr[i] == 1 || arr[i] == 5) {
      connectors[arr[i]].children[0].classList.add("top-bottom");
      connectors[arr[i]].children[1].children[0].classList.add("right-left");
    } else {
      connectors[arr[i]].children[0].classList.add("top-bottom");
    }
  }
}

let popUp = document.querySelector(".pop-up");
let exitButton = document.querySelector(".pop-up .box .exit");

window.onload = () => {
  popUp.style.transform = "scale(1)";
};

exitButton.onclick = () => {
  popUp.style.transform = "scale(0)";
};
