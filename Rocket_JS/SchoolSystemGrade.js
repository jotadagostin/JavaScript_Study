// SCHOOL SYSTEM OF GRADES: NOTES (90,80...) TO LETTERS(A, B, C...):

function getScore(score) {
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score >= 0;

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Invalid grade"
    }

    return scoreFinal;
}

console.log(getScore(90));
// you can change the score and see which letter do you get. :)