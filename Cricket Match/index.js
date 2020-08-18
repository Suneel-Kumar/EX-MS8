var askPakistani = prompt('What you select, Head or tail?');

function toss() {
    var randomNum = Math.floor(Math.random() * 2);

    return randomNum === 0 ? 'Head' : 'tail';
}

var afterToss = toss();
var teamToBeat;

if (afterToss === askPakistani) {
    alert('Pakistan won the toss');
    teamToBeat = "Pakistan";
}
else {
    alert('India wont the toss');
    teamToBeat = "India";
}

console.log('------Welcome to Cricket--------')
console.log(teamToBeat + ' to Bat');

var overs = +prompt("Please Enter Overs");
var team1Runs = 0;
var team1Wickets = 0;

for (let i = 0; i < overs; i++) {
    console.log('**************')
    console.log('Overs # ' + (i + 1));
    console.log(team1Runs + ' \ ' + team1Wickets);
    for (let j = 0; j < 6; j++) {
        console.log('ball #' + (j + 1))
        var delivery = Math.floor(Math.random() * 7);

        if (delivery === 0) {
            team1Wickets++;
            console.log('Outay........');
            console.log('Remaining wickets are ' + (5 - team1Wickets));
            sleepFor(2000)
        }
        else {
            team1Runs += delivery;
            if (delivery === 4) {
                console.log('Nice Shot.... 4 Runs')
            }
            else if (delivery === 6) {
                console.log('Oh may! A massive sixer, reminds us BOOM BOOM AFFRIDI')
            }
            else {
                console.log(delivery + ' runs')
            }
        }
        console.log('-----')

        if (team1Wickets === 5) {
            console.log("ALL OUT");
            break;
        }
        sleepFor(4000);
    }
}
console.log(teamToBeat + ' has made ' + team1Runs + ' runs!');
var anotherTeamToBat = teamToBeat === 'Pakistan' ? 'India' : 'Pakistan';
console.log(anotherTeamToBat + ' to Bat')

var team2Run = 0;
var team2Wickets = 0;

for (let i = 0; i < overs; i++) {
    console.log('**************')
    console.log('Over #' + (i+1)) ;
    console.log(team2Run + " \ " + team2Wickets);
    for (let j = 0; j < 6; j++) {
        console.log('ball # ' + (j+1));
        var delivery = Math.floor(Math.random() * 7);
        if(delivery === 0){
            team2Wickets++;
            console.log('Outay......');
            console.log('Remaining wickets are ' + (5-team2Wickets));
            sleepFor(2000)
        }   else{
            team2Run += delivery;
            if(delivery === 4){
                console.log("Nice Shot.... 4 Runs")
            }
            else if(delivery === 6){
                console.log('Oh my! A massive sixer, reminds us BOOM BOOM AFRIDI')
            }
            else{
                console.log(delivery + ' run')
            }
            if(team2Run > team1Runs){
                console.log(anotherTeamToBat + ' has won the match by ' + (5-team2Wickets) + ' Wickets');
                break;
            }
        }  
        console.log('-----');
        if(team2Wickets === 5){
            console.log('ALL OUT');
            break;
        }
        SleepFor(3000)
    }  
    if(team2Wickets === 5){
        console.log('ALL OUT');
        break;
    }
    SleepFor(4000)
    if(i === 4){
        if(team2Run  < team1Runs){
            console.log(teamToBeat + ' has won the match by ' + (team1Runs = team2Run) + ' runs')
        }
    }
}
console.log(anotherTeamToBat + ' has made ' + team2Run + ' runs!')

function SleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){
        // Do Nothing
    }
}






