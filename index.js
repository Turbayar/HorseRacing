const $roll1 = document.querySelector(".img1");
const $roll2 = document.querySelector(".img2");
const $roll3 = document.querySelector(".img3");
const $roll4 = document.querySelector(".img4");

let $player1 = document.querySelector(".playerLeft");

let count = 0;
let arr = [$roll1, $roll2, $roll3, $roll4];
function onClickStart() {
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    $img1 = "images/shagai" + randomNumber + ".png";
    arr[i].setAttribute("src", $img1);
    if (randomNumber == 1) {
      count++;
    }
  }
  if( count != 0){
    for (let j = 1; j <= count; j++) {
        $player1.style.marginLeft = "100px";
      }
      count = 0;
  }
 
}
