// dice Game
let player1= Math.floor((Math.random()*6)+1)
let player2=Math.floor((Math.random()*6)+1)
console.log(player1,player2)

let randomDice1= "dies/dice "+player1+".png"
let randomDice2= "dies/dice "+player2+".png"

document.querySelector(".dice1 img").setAttribute("src",randomDice1)
document.querySelector(".dice2 img").setAttribute("src",randomDice2)

if(player1>player2){
    document.querySelector(".winner2").style.visibility="hidden";
    document.querySelector(".winner1tag").style.visibility="visible";
}else if(player2>player1){
    document.querySelector(".winner1").style.visibility="hidden";
    document.querySelector(".winner2tag").style.visibility="visible";
}else{ 
    document.querySelector(".tied").style.visibility="visible";
}