let chance = 0
let arr = ['S','W','G']
let compScore = 0
let myScore = 0
do {
    let choose = prompt("Choose S/W/G")
    let comp = arr[Math.floor(Math.random()*3)];

    if(choose === "S" && comp === "W")
    {   
        alert("You win")
        myScore++
    }
    else if(choose === "S" && comp === "G")
    {   
        alert("You loose")
        compScore++
    }    
    else if(choose === "W" && comp === "S")
    {   
        alert("You loose")
        compScore++
    }    
    else if(choose === "W" && comp === "G")
    {   
        alert("You win")
        myScore++
    }
    else if(choose === "G" && comp === "S")
    {   
        alert("You win")
        myScore++
    }
    else if(choose === "G" && comp === "W")
    {   
        alert("You loose")
        compScore++
    }
    else if(choose === comp)
    {
        alert("Draw")
    }
    chance++
} while (chance < 3);

if(myScore > compScore){
    alert("You win this round" + "\nYour Score - " + myScore + "\nComputer Score - " + compScore)
}
else if (myScore === compScore){
    alert("Round Draw" + "\nYour Score - " + myScore + "\nComputer Score - " + compScore)
}
else{
    alert("Yout loose this round" + "\nYour Score - " + myScore + "\nComputer Score - " + compScore)
}