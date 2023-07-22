function talk(){
    var know = {
    "What is VCare?" : "It is a clinic",
    "Where I can find Vcare office?" : "Good :)",
    "How Vcare handle psychology?" : "Good :)",
    "How can we get best psychologist?" : "Good :)",
    "Is Vcare psychological clinic?" : "Good :)",
    "How does online consultation works?" : "Good :)",
    "How to talk to psychologist online?" : "Good :)",
    "What condition that we need therapy?" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }