var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var roll1 = "images/dice" + randomNumber1 + ".png";
var roll2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", roll1);
document.querySelector(".img2").setAttribute("src", roll2);

if (roll1 > roll2) {
  document.querySelector("h1").innerHTML = "🤍 Player 1 wins ";
} else if (roll1 === roll2) {
  document.querySelector("h1").innerHTML = "Its 🙅‍♀️ a Draw ";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins 💚";
}
