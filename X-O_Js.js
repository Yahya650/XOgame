let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let win1 = document.getElementById("win1");
let win2 = document.getElementById("win2");
let win3 = document.getElementById("win3");
let win4 = document.getElementById("win4");
let win5 = document.getElementById("win5");
let win6 = document.getElementById("win6");
let win7 = document.getElementById("win7");
let win8 = document.getElementById("win8");
let XO = document.getElementById("XO");
let Player2 = document.getElementById("Player2");
let XO2 = document.getElementById("XO2");
let resert = document.querySelector("#reset");
document.getElementById("win1").style.display = "none";
document.getElementById("win2").style.display = "none";
document.getElementById("win3").style.display = "none";
document.getElementById("win4").style.display = "none";
document.getElementById("win5").style.display = "none";
document.getElementById("win6").style.display = "none";
document.getElementById("win7").style.display = "none";
document.getElementById("win8").style.display = "none";
document.getElementById("Player2").style.display = "none";

resert.addEventListener("click", () => {
  location.reload();
});

let t = new Array(3);
t[0] = [btn1, btn4, btn7];
t[1] = [btn2, btn5, btn8];
t[2] = [btn3, btn6, btn9];

let w = 0;
function checkWinner() {
  if (
    (t[0][0].innerText == "O" &&
      t[0][1].innerText == "O" &&
      t[0][2].innerText == "O") ||
    (t[0][0].innerText == "X" &&
      t[0][1].innerText == "X" &&
      t[0][2].innerText == "X")
  ) {
    document.getElementById("win1").style.display = "block";
    document.getElementById("Player2").style.display = "block";
    if (t[0][0].innerText == "O") XO2.innerText = "O";
    else XO2.innerText = "X";
    w = 1;
  }

  if (
    (t[1][0].innerText == "O" &&
      t[1][1].innerText == "O" &&
      t[1][2].innerText == "O") ||
    (t[1][0].innerText == "X" &&
      t[1][1].innerText == "X" &&
      t[1][2].innerText == "X")
  ) {
    document.getElementById("win2").style.display = "block";
    document.getElementById("Player2").style.display = "block";
    if (t[1][0].innerText == "O") XO2.innerText = "O";
    else XO2.innerText = "X";
    w = 1;
  }

  if (
    (t[2][0].innerText == "O" &&
      t[2][1].innerText == "O" &&
      t[2][2].innerText == "O") ||
    (t[2][0].innerText == "X" &&
      t[2][1].innerText == "X" &&
      t[2][2].innerText == "X")
  ) {
    document.getElementById("win3").style.display = "block";
    document.getElementById("Player2").style.display = "block";
    if (t[2][0].innerText == "O") XO2.innerText = "O";
    else XO2.innerText = "X";
    w = 1;
  }

  if (
    (t[0][0].innerText == "O" &&
      t[1][0].innerText == "O" &&
      t[2][0].innerText == "O") ||
    (t[0][0].innerText == "X" &&
      t[1][0].innerText == "X" &&
      t[2][0].innerText == "X")
  ) {
    document.getElementById("win4").style.display = "block";
    document.getElementById("Player2").style.display = "block";
    if (t[0][0].innerText == "O") XO2.innerText = "O";
    else XO2.innerText = "X";
    w = 1;
  }
  if (
    (t[0][1].innerText == "O" &&
      t[1][1].innerText == "O" &&
      t[2][1].innerText == "O") ||
    (t[0][1].innerText == "X" &&
      t[1][1].innerText == "X" &&
      t[2][1].innerText == "X")
  ) {
    document.getElementById("win5").style.display = "block";
    document.getElementById("Player2").style.display = "block";
    if (t[0][1].innerText == "O") XO2.innerText = "O";
    else XO2.innerText = "X";
    w = 1;
  }
  if (
    (t[0][2].innerText == "O" &&
      t[1][2].innerText == "O" &&
      t[2][2].innerText == "O") ||
    (t[0][2].innerText == "X" &&
      t[1][2].innerText == "X" &&
      t[2][2].innerText == "X")
  ) {
    document.getElementById("win6").style.display = "block";
    document.getElementById("Player2").style.display = "block";
    if (t[0][2].innerText == "O") XO2.innerText = "O";
    else XO2.innerText = "X";
    w = 1;
  }
  if (
    (btn1.innerText == "O" && btn5.innerText == "O" && btn9.innerText == "O") ||
    (btn1.innerText == "X" && btn5.innerText == "X" && btn9.innerText == "X")
  ) {
    document.getElementById("win8").style.display = "block";
    document.getElementById("Player2").style.display = "block";
    if (btn1.innerText == "O") XO2.innerText = "O";
    else XO2.innerText = "X";
    w = 1;
  }
  if (
    (btn3.innerText == "O" && btn5.innerText == "O" && btn7.innerText == "O") ||
    (btn3.innerText == "X" && btn5.innerText == "X" && btn7.innerText == "X")
  ) {
    document.getElementById("win7").style.display = "block";
    document.getElementById("Player2").style.display = "block";
    if (btn3.innerText == "O") XO2.innerText = "O";
    else XO2.innerText = "X";
    w = 1;
  }
  if (btn1.innerText != "" && btn2.innerText != "" && btn3.innerText != "" && btn4.innerText != "" && btn5.innerText != "" && btn6.innerText != "" && btn7.innerText != "" && btn8.innerText != "" && btn9.innerText != "" && w != 1) {
    Player2.innerText = "ta3adol"
    Player2.style.display = "block";
    setTimeout(function () {
      location.reload()
    }, 2000);
  }
}

let lastXO = "X";

t[0][0].addEventListener("click", function () {
  if (lastXO == "X" && t[0][0].innerText == "" && w == 0) {
    t[0][0].innerText = "O";
    t[0][0].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[0][0].innerText == "" && w == 0) {
    t[0][0].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[0][0].style.cssText = `
        color: #09c372;
        `;
  }
  checkWinner();
});

t[0][1].addEventListener("click", function () {
  if (lastXO == "X" && t[0][1].innerText == "" && w == 0) {
    t[0][1].innerText = "O";
    t[0][1].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[0][1].innerText == "" && w == 0) {
    t[0][1].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[0][1].style.cssText = `
        color: #09c372;
        `;
  }
  checkWinner();
});

t[0][2].addEventListener("click", function () {
  if (lastXO == "X" && t[0][2].innerText == "" && w == 0) {
    t[0][2].innerText = "O";
    t[0][2].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[0][2].innerText == "" && w == 0) {
    t[0][2].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[0][2].style.cssText = `
        color: #09c372;
        `;
  }
  checkWinner();
});

t[1][0].addEventListener("click", function () {
  if (lastXO == "X" && t[1][0].innerText == "" && w == 0) {
    t[1][0].innerText = "O";
    t[1][0].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[1][0].innerText == "" && w == 0) {
    t[1][0].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[1][0].style.cssText = `
        color: #09c372;
        `;
  }
  checkWinner();
});

t[1][1].addEventListener("click", function () {
  if (lastXO == "X" && t[1][1].innerText == "" && w == 0) {
    t[1][1].innerText = "O";
    t[1][1].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[1][1].innerText == "" && w == 0) {
    t[1][1].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[1][1].style.cssText = `
        color: #09c372;
        `;
  }
  checkWinner();
});

t[1][2].addEventListener("click", function () {
  if (lastXO == "X" && t[1][2].innerText == "" && w == 0) {
    t[1][2].innerText = "O";
    t[1][2].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[1][2].innerText == "" && w == 0) {
    t[1][2].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[1][2].style.cssText = `
        color: #09c372;
        `;
  }
  checkWinner();
});

t[2][0].addEventListener("click", function () {
  if (lastXO == "X" && t[2][0].innerText == "" && w == 0) {
    t[2][0].innerText = "O";
    t[2][0].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[2][0].innerText == "" && w == 0) {
    t[2][0].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[2][0].style.cssText = `
        color: #09c372;
        `;
  }
  checkWinner();
});

t[2][1].addEventListener("click", function () {
  if (lastXO == "X" && t[2][1].innerText == "" && w == 0) {
    t[2][1].innerText = "O";
    t[2][1].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[2][1].innerText == "" && w == 0) {
    t[2][1].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[2][1].style.cssText = `
        color: #09c372;
        `;
  }
  checkWinner();
});

t[2][2].addEventListener("click", function () {
  if (lastXO == "X" && t[2][2].innerText == "" && w == 0) {
    t[2][2].innerText = "O";
    t[2][2].style.cssText = `
        color: #498afb;
        `;
    XO.innerText = "X";
    XO.style.cssText = `
        color: #09c372;
        `;
    lastXO = "O";
  } else if (t[2][2].innerText == "" && w == 0) {
    t[2][2].innerText = "X";
    lastXO = "X";
    XO.innerText = "O";
    XO.style.cssText = `
        color: #498afb;
        `;
    t[2][2].style.cssText = `
            color: #09c372;
        `;
  }
  checkWinner();
});
