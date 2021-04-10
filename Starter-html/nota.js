function getScore(nota) {
    let scoreA = nota >= 90
    let scoreB = nota >= 80 && nota <= 89
    let scoreC = nota >= 70 && nota <= 79
    let scoreD = nota >= 60 && nota <= 69
    let scoreF = nota < 60
    let scoreFinal;

    if(scoreA) {
        scoreFinal = "Nota A"
    } else if(scoreB) {
        scoreFinal = "Nota B"
         
    } else if(scoreC) {
        scoreFinal = "Nota C"
    } else if(scoreD) {
        scoreFinal = "Nota D"    
    } else if(scoreF) {
        scoreFinal = "Nota F"
    }
    
    console.log(scoreFinal)
}

getScore(85)
getScore(75)
getScore(65)
getScore(55)
