
//alert("hello");
var randomNumber1  = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice"+ randomNumber1 +".png";
//console.log(randomNumber1);
var randomDiceSource = "/Dice_Project/images/" + randomDice;

var image1 =document.querySelectorAll('img')[0];
image1.setAttribute("src", randomDiceSource);


var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomDiceSource2 = "/Dice_Project/images/dice" + randomNumber2 + ".png";

var image2 =document.querySelectorAll('img')[1];
image2.setAttribute("src", randomDiceSource2);



if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML ="Player 1 Wons!"
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML ="Player 2 Wons!";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}