var fighters = ['Ken', 'Ryo', 'Ehonda', 'Dhalsim', 'M Bison', 'Jack', 'Akuma'];
var userPlayer = prompt('Select your fighter');
if(!fighters.includes(userPlayer)){
    alert("Invalid Selection");
}else{
    var randomNum = Math.floor(Math.random()*fighters.length);
    var openentPlayer = fighters[randomNum];

    console.log('******* Street Figher ******')
    console.log(userPlayer + ' vs ' + openentPlayer);

    var player1Obj = {
        name : userPlayer,
        health : 100
    }

    var player2Obj = {
        name : openentPlayer,
        health : 100
    }

    var moves = {
        punch : 10,
        kick : 15,
        jump : 0,
        specialMove : 30
    }

    while(player1Obj.health > 0 && player2Obj.health>0){
        var askUser = prompt("Enter move");
        var moveList = Object.keys(moves);

        var openentRandomNum = Math.floor(Math.random()*moveList.length);
        var oppenentMoveSelected = moveList[openentRandomNum];

        console.log('Player 1 move ----> ' + askUser);
        console.log('Player 2 move ----> ' + oppenentMoveSelected);

        player2Obj.health = player2Obj.health - moves[askUser];
        console.log('Player 2 Health ', player2Obj.health);

        player1Obj.health = player1Obj.health = moves[oppenentMoveSelected];
        console.log('Player 1 Health ', player1Obj.health);
    }
}