const $roll1 = document.querySelector(".img1");
const $roll2 = document.querySelector(".img2");
const $roll3 = document.querySelector(".img3");
const $roll4 = document.querySelector(".img4");

let count = 0;
let arr = [$roll1, $roll2, $roll3, $roll4];

//road vvsgeh div
const $road = document.querySelector(".road");

for (let i = 0; i < 18; i++) {
  const $mori = document.createElement("div");
  $mori.classList.add("mori");
  $mori.id = "div" + i;
  $mori.style.backgroundImage = "url('./images/shagai1.png')";
  $road.append($mori);
}
let activePlayer = 0;

//Roll
let $playerLeft = document.querySelector(".playerLeft");
let $playerRight = document.querySelector(".playerRight");
let current = 0;
let currentPlayer2 = 0;
function onClickStart() {
  console.log(" --- >", activePlayer);

  if (activePlayer === 0) {
    console.log("palyer1");

    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * 4) + 1;
      $img1 = "images/shagai" + randomNumber + ".png";
      arr[i].setAttribute("src", $img1);
      if (randomNumber == 1) {
        count++;
        console.log("mori too  --- ", count);
      }
    }

    if (count != 0) {
      console.log("margin uguh  ", count);
      current += count;
      $playerLeft.style.marginLeft = `${80 * current}px`;
      count = 0;
    }
    let style = $playerLeft.style;
    let margin = parseInt(style.marginLeft);
    console.log("marginLeft", margin);
    if (margin > 1360) {
      alert("Player1 Won ");
      location.reload();
    }
  }

  if (activePlayer === 1) {
    console.log("player2");

    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * 4) + 1;
      $img1 = "images/shagai" + randomNumber + ".png";
      arr[i].setAttribute("src", $img1);
      if (randomNumber == 1) {
        count++;
        console.log("mori too  --- ", count);
      }
    }
    if (count != 0) {
      currentPlayer2 += count;
      console.log("margin uguh  ", count);
      $playerRight.style.marginLeft = `${80 * currentPlayer2}px`;
      count = 0;
    }
    let styleRight = $playerRight.style;
    let marginLeft = parseInt(styleRight.marginLeft);
    console.log("marginRight", marginLeft);
    if (marginLeft > 1360) {
      alert("Player2 Won ");
      location.reload();
    }
    
   
  }
  if (activePlayer === 1) {
    document.querySelector("#start").innerHTML = "Player 1";
    document.querySelector("#start").style.color = "green";
    activePlayer = 0;
  } else {
    document.querySelector("#start").innerHTML = "Player 2";
    document.querySelector("#start").style.color = "red";

    activePlayer = 1;
  }
}
