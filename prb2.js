
function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    let splitedEmail = email.split('@');
    let username = splitedEmail[0];
    let domainName = splitedEmail[1];
    return username +' '+ 'sent you an email from ' + domainName;

}
console.log(sendNotification("zihad.ph@gmail.com")); // Output: zihad.ph sent you an email from gmail.com
console.log(sendNotification("farhan34@yahoo.com")); // Output: example sent you an email from domain.com
console.log(sendNotification("invalidEmail.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));//output asbe
console.log(sendNotification("fahim234.hotmail.com"));//invalid
console.log(sendNotification("sadia8icloud.com")); //invalid
