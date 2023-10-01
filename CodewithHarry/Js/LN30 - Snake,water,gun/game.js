let chance = 0
let arr = ['S','W','G']
let compScore = 0
let myScore = 0
do {
    let choose = prompt("Choose S/W/G")
    let comp = arr[Math.floor(Math.random()*3)];

    if(choose === "S" && comp === "W")
    {   
        document.write(`User:${choose} and Computer:${comp} You win <br>`)
        alert("You win")
        myScore++
    }
    else if(choose === "S" && comp === "G")
    {   
        document.write(`User:${choose} and Computer:${comp} You loose <br>`)
        alert("You loose")
        compScore++
    }    
    else if(choose === "W" && comp === "S")
    {   
        document.write(`User:${choose} and Computer:${comp} You loose <br>`)
        alert("You loose")
        compScore++
    }    
    else if(choose === "W" && comp === "G")
    {   
        document.write(`User:${choose} and Computer:${comp} <br>You win <br>`)
        alert("You win")
        myScore++
    }
    else if(choose === "G" && comp === "S")
    {   
        document.write(`User:${choose} and Computer:${comp} You win <br>`)
        alert("You win")
        myScore++
    }
    else if(choose === "G" && comp === "W")
    {  
        document.write(`User:${choose} and Computer:${comp} You loose <br>`) 
        alert("You loose")
        compScore++
    }
    else if(choose === comp)
    {
        document.write(`User:${choose} and Computer:${comp} Match Draw <br>`)
        alert("Draw")
    }
    chance++
} while (chance < 3);

if(myScore > compScore){
    alert("You win this round" + "\nYour Score - " + myScore + "\nComputer Score - " + compScore)
    document.write("You win this round")
}
else if (myScore === compScore){
    alert("Round Draw" + "\nYour Score - " + myScore + "\nComputer Scoress - " + compScore)
    document.write("You draw this round")
}
else{
    alert("Yout loose this round" + "\nYour Score - " + myScore + "\nComputer Score - " + compScore)
    document.write("You loose this round")
}