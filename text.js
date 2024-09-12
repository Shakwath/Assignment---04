
//uporer gula dlt kre dite hbe
//problem - 01

function calculateTax(income, expense) {
    if (income >= 0 && expense >= 0 && income >= expense) {
        const profit = income - expense;
        const tax = profit * 0.20;
        return tax;
    } 
    else {
        return "Invalid Input";
    }
}

//prb -02
function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    let splitedEmail = email.split('@');
    let username = splitedEmail[0];
    let domainName = splitedEmail[1];
    return username +' '+ 'sent you an email from ' + domainName;

}
//prb-3
function checkDigitsInName(name) {
    if(typeof name !== 'string'){
       return "Invalid Input";
    }
    for(let letter of name)
    {
     if(!isNaN(letter) && letter !== ' ')
         {
             return true;
         }
    }
      return false;
 }
 //prb - 4
 function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || obj.testScore > 50 || obj.schoolGrade > 30)
        {
        return "Invalid Input";
    }
    var score = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily)
        score += 20;
    if(score >= 80)
        return true;
    else
        return false;
}
//prb- 5 
function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    var n = waitingTimes.length;
    var sum = 0;

    for(var time of waitingTimes)
    {
        sum+= time;
    }
    var avg = Math.round(sum / n);
    var timeLeft = (serialNumber - (n + 1)) * avg;
    return timeLeft;
}


