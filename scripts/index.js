let gammer = "X";
let fim = false;
function winner() {
  let elements = document.getElementById("tabuleiro").children;
  if (
    elements[0].innerText === elements[1].innerText &&
    elements[1].innerText === elements[2].innerText &&
    elements[0].innerText.length !== 0
  ) {
    elements[0].style="background-color: red";
    elements[1].style="background-color: red";
    elements[2].style="background-color: red";
    fim = true;
  }
  if (
    elements[3].innerText === elements[4].innerText &&
    elements[4].innerText === elements[5].innerText &&
    elements[3].innerText.length !== 0
  ) {
    elements[3].style="background-color: red";
    elements[4].style="background-color: red";
    elements[5].style="background-color: red";
    fim = true;
  }
  if (
    elements[6].innerText === elements[7].innerText &&
    elements[7].innerText === elements[8].innerText &&
    elements[6].innerText.length !== 0
  ) {
    elements[6].style="background-color: red";
    elements[7].style="background-color: red";
    elements[8].style="background-color: red";
    fim = true;
  }
  if (
    elements[0].innerText === elements[3].innerText &&
    elements[3].innerText === elements[6].innerText &&
    elements[0].innerText.length !== 0
  ) {
    elements[0].style="background-color: red";
    elements[3].style="background-color: red";
    elements[6].style="background-color: red";
    fim = true;
  }
  if (
    elements[1].innerText === elements[4].innerText &&
    elements[4].innerText === elements[7].innerText &&
    elements[1].innerText.length !== 0
  ) {
    elements[1].style="background-color: red";
    elements[4].style="background-color: red";
    elements[7].style="background-color: red";
    fim = true;
  }
  if (
    elements[2].innerText === elements[5].innerText &&
    elements[5].innerText === elements[8].innerText &&
    elements[2].innerText.length !== 0
  ) {
    elements[2].style="background-color: red";
    elements[5].style="background-color: red";
    elements[8].style="background-color: red";
    fim = true;
  }
  if (
    elements[0].innerText === elements[4].innerText &&
    elements[4].innerText === elements[8].innerText &&
    elements[0].innerText.length !== 0
  ) {
    elements[0].style="background-color: red";
    elements[4].style="background-color: red";
    elements[8].style="background-color: red";
    fim = true;
  }
  if (
    elements[2].innerText === elements[4].innerText &&
    elements[4].innerText === elements[6].innerText &&
    elements[2].innerText.length !== 0
  ) {
    elements[2].style="background-color: red";
    elements[4].style="background-color: red";
    elements[6].style="background-color: red";
    fim = true;
  }
}

function mark(element) {
  if (element.innerText.length === 0) {
    element.innerText = gammer;
    winner();
    if (gammer === "X" && fim == false) {
      gammer = "O";
    } else if (fim == true) {
      gammer ="";
    }
    else {
      gammer = "X";
    }
  }
}
