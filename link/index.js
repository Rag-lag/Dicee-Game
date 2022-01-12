// Declaring variables
var player_1=Math.ceil(6*Math.random());
var player_2=Math.ceil(6*Math.random());
var player_1_dice="images/dice"+player_1+".png";
var player_2_dice="images/dice"+player_2+".png";

// Heading change on win
if(player_1>player_2){
  document.querySelector(".heading").innerHTML="<h1>Player 1 Wins!</h1><span>🏴</span>";
}
else if(player_1<player_2){
  document.querySelector(".heading").innerHTML="<h1>Player 2 Wins!</h1><span>🏳️</span> ";
}else{
  document.querySelector(".heading").innerHTML="<h1>Draw! Refresh Me</h1>";
}

// Image display for player 1
document.querySelector(".img1").setAttribute("src", player_1_dice);


// Image display for player 2
document.querySelector(".img2").setAttribute("src", player_2_dice);
