"use strict";

const blocks = document.querySelectorAll(".row-blocks div");
const xCount = document.getElementById("x_count");
const oCount = document.getElementById("o_count");

const winnerDiv = document.getElementById("winner");
const headWinner = document.querySelector("#winner h1");
const next = document.getElementById("next");
const reset = document.getElementById("reset");

const turn = {
  X: 0,
  O: 1,
};

let count = false;
let data_idX = [];
let data_idO = [];

let statue = false; // Means Game is ready

let check = false;

let drawChecker = 0;

// functions

const wincodition = function (type) {
  const win = {
    row: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    column: [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
    xType: [
      [3, 5, 7],
      [7, 5, 3],
      [1, 5, 9],
      [9, 5, 1],
    ],
  };
  if (type == "x") {
    const XDivs = document.querySelectorAll(".X");
    XDivs.forEach((x) => {
      if (XDivs.length >= 3) {
        data_idX.push(Number(x.getAttribute("data-id")));
      }
    });
    if (data_idX.length >= 3) {
      win.row.forEach((e) => {
        let check1 = e
          .sort((a, b) => a - b)
          .every((va) => data_idX.includes(va));
        check1 ? (check = check1) : false;
      });
      win.column.forEach((e) => {
        let check2 = e
          .sort((a, b) => a - b)
          .every((va) => data_idX.includes(va));
        check2 ? (check = check2) : false;
      });
      win.xType.forEach((e) => {
        let check3 = e
          .sort((a, b) => a - b)
          .every((va) => data_idX.includes(va));
        check3 ? (check = check3) : false;
      });
      if (check) {
        statue = true;
        xCount.textContent = Number(xCount.textContent) + 1;
        winnerDiv.classList.add("flex");
        winnerDiv.classList.remove("hidden");
        headWinner.textContent = "X Win!";
      } else {
        statue = false;
      }
    }
  } else {
    const ODivs = document.querySelectorAll(".O");
    ODivs.forEach((o) => {
      if (ODivs.length >= 3) {
        data_idO.push(Number(o.getAttribute("data-id")));
      }
    });
    if (data_idO.length >= 3) {
      win.row.forEach((e) => {
        let check1 = e
          .sort((a, b) => a - b)
          .every((va) => data_idO.includes(va));
        check1 ? (check = check1) : false;
      });
      win.column.forEach((e) => {
        let check2 = e
          .sort((a, b) => a - b)
          .every((va) => data_idO.includes(va));
        check2 ? (check = check2) : false;
      });
      win.xType.forEach((e) => {
        let check3 = e
          .sort((a, b) => a - b)
          .every((va) => data_idO.includes(va));
        check3 ? (check = check3) : false;
      });
      if (check) {
        statue = true;
        oCount.textContent = Number(oCount.textContent) + 1;
        winnerDiv.classList.add("flex");
        winnerDiv.classList.remove("hidden");
        headWinner.textContent = "O Win!";
      } else {
        statue = false;
      }
    }
  }
};

// Event Listener
blocks.forEach((e) => {
  if (!statue) {
    e.addEventListener("click", () => {
      if (!statue && e.classList.length == 0) {
        if (turn.X == Number(count)) {
          e.textContent.length == 0 ? (e.textContent = "X") : 0;

          e.classList.add("X");
          wincodition("x");
        } else {
          e.textContent.length == 0 ? (e.textContent = "O") : 0;
          e.classList.add("O");
          wincodition("o");
        }
        count = !count;
        ++drawChecker;
      }
      if (drawChecker == 9) {
        winnerDiv.classList.remove("flex");
        winnerDiv.classList.add("hidden");
        statue = false;
        check = false;
        blocks.forEach((e) => {
          e.textContent = "";
          e.classList.remove("X", "O");
        });
        data_idX = [];
        data_idO = [];

        drawChecker = 0;
      }
    });
  }
});

next.addEventListener("click", () => {
  winnerDiv.classList.remove("flex");
  winnerDiv.classList.add("hidden");
  statue = false;
  check = false;
  blocks.forEach((e) => {
    e.textContent = "";
    e.classList.remove("X", "O");
  });
  data_idX = [];
  data_idO = [];
  drawChecker = 0;
});

reset.addEventListener("click", function () {
  winnerDiv.classList.remove("flex");
  winnerDiv.classList.add("hidden");
  statue = false;
  check = false;
  blocks.forEach((e) => {
    e.textContent = "";
    e.classList.remove("X", "O");
  });
  data_idX = [];
  data_idO = [];
  xCount.textContent = 0;
  oCount.textContent = 0;
  drawChecker = 0;
});
