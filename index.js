//Logic to random picking numbers; image
var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
var image1=document.querySelectorAll("img")[0];
//changing source of image
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
//changing the source of image2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Logic of gameOver
if(randomNumber1 > randomNumber2){
    //changing the words in h1
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}