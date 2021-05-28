//Q1
// var number = prompt("Enter NUmber")
// var round = Math.round(number)
// var ceil = Math.ceil(number)
// var floor = Math.floor(number)

// document.write("<h2>Number: "+number+ "<br/> Round off value: "+ round+ "<br/>Ceil value: "+ceil+"<br/> Floor value: "+floor+"</h2>");


//Q2

// var number = prompt("Enter  negative NUmber")
// var round = Math.round(number)
// var ceil = Math.ceil(number)
// var floor = Math.floor(number)

// document.write("<h2>Number: "+number+ "<br/> Round off value: "+ round+ "<br/>Ceil value: "+ceil+"<br/> Floor value: "+floor+"</h2>");

//Q3

// var number = +prompt("Enter NUmber")
//  num = Math.abs(number);
//  document.write("Absolute value "+num +" <br/> User Input "+number)

//Q4

// var round = Math.ceil(Math.random() * 6)
// document.write("<h3>THE DICE GAME</h3> <br/> <h2>Random Dice Number is:   "+round+"</h2>")

//Q5
var player1 =prompt("Enter first player name") 
var player2 =prompt("Enter second player name")
var  coin = prompt("player 1 Enter heads or tail")
var randomside;
var randomNum = Math.round(Math.random())
var flag ="tails";
if (randomNum == 1) { 
randomside="heads"  }
else if ( randomNum == 0){
randomside="tails"   }
else if(randomside.toLowerCase ==="tails"){
    flag="heads"
}
console.log(randomside)
document.write("<div>  its " +randomside+"<h3>  "+player1+" selected "+randomside +"</h3>"+"<h3> "+player2+" selected "+flag+"</h3>  ")
if(coin.toLowerCase === randomside){
    document.write(player1+" Won")
}
else{
    document.write(player2+" Won </div>")
}