let cell = document.querySelectorAll(".cell");
let xImg = document.querySelector("#x");
let oImg = document.querySelector("#o");

let turn = "X";
let flag = false;
let counter = 0;

for (let i = 0; i < cell.length; i++) {
  cell[i].onclick = function () {
    if (turn === "X" && cell[i].textContent === "" && flag === false) {
      cell[i].textContent = "X";
      xImg.src = "xo image/x.png";
      oImg.src = "o.png";
      turn = "O";

      counter++;
    } else if (turn === "O" && cell[i].textContent === "" && flag === false) {
      cell[i].textContent = "O";
      xImg.src = "x.png";
      oImg.src = "xo image/o.png";
      turn = "X";
      counter++;
    }
    if (counter < 9 && winner() === true) {
      winner();
    } else if (counter === 9 && winner() != true) {
      draw();
    }
  };
}

function ending(n) {
  result.textContent = `${cell[n].textContent} Is the winner`;
  oImg.src = "o.png";
  xImg.src = "x.png";
  setInterval(() => {
    result.textContent += ".";
  }, 900);
  setTimeout(() => {
    location.reload();
  }, 3000);
  flag = true;
}

let result = document.querySelector("#result");

function winner() {
  //1st: horizental
  if (
    cell[0].textContent == cell[1].textContent &&
    cell[1].textContent == cell[2].textContent &&
    cell[0].textContent != ""
  ) {
    ending(0);
    return true;
  } else if (
    cell[3].textContent == cell[4].textContent &&
    cell[4].textContent == cell[5].textContent &&
    cell[3].textContent != ""
  ) {
    ending(3);
    return true;
  } else if (
    cell[6].textContent == cell[7].textContent &&
    cell[7].textContent == cell[8].textContent &&
    cell[6].textContent != ""
  ) {
    ending(6);
    return true;
  }
  //2nd: vertical
  else if (
    cell[0].textContent == cell[3].textContent &&
    cell[3].textContent == cell[6].textContent &&
    cell[0].textContent != ""
  ) {
    ending(0);
    return true;
  } else if (
    cell[1].textContent == cell[4].textContent &&
    cell[4].textContent == cell[7].textContent &&
    cell[1].textContent != ""
  ) {
    ending(1);
    return true;
  } else if (
    cell[2].textContent == cell[5].textContent &&
    cell[5].textContent == cell[8].textContent &&
    cell[2].textContent != ""
  ) {
    ending(2);
    return true;
  }

  //3rd: diagonal
  else if (
    cell[0].textContent == cell[4].textContent &&
    cell[4].textContent == cell[8].textContent &&
    cell[0].textContent != ""
  ) {
    ending(0);
    return true;
  } else if (
    cell[2].textContent == cell[4].textContent &&
    cell[4].textContent == cell[6].textContent &&
    cell[2].textContent != ""
  ) {
    ending(2);
    return true;
  }
}

function draw() {
  result.textContent = `Draw,Try Again`;

  setInterval(() => {
    result.textContent += ".";
  }, 900);
  setTimeout(() => {
    location.reload();
  }, 3000);
  flag = true;
}
