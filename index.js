//some valus for the ground
const groundOptions = {
    y: 550,
    fillColor: 'brown'
}





//some starting values for the playerball
const playerBallOptions = {
    x: 100, 
    y: 500,
    r: 50,
    fillColor: [0, 0, 250],
}
//make a new player ball
const myPlayerBall = new PlayerBall(playerBallOptions); 




function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(210,220,240);
    //draw ground
    drawGround(groundOptions.y, groundOptions.fillColor);

    //check the various arrow keys and move player if they are being pressed
    checkKeyInput();
    //display current position of player ball.
    myPlayerBall.display();



}


function checkKeyInput(){
    if(keyIsDown(RIGHT_ARROW)){
        myPlayerBall.move('x', 1);
    }

    if(keyIsDown(LEFT_ARROW)){
        myPlayerBall.move('x', -1);
    }

    // if(keyIsDown(UP_ARROW)){
    //     myPlayerBall.move('y', -1);
    // }

    // if(keyIsDown(DOWN_ARROW)){
    //     myPlayerBall.move('y', 1);
    // }
}

//just a simple function to add the ground, it's not going to be changing much (at this point)
drawGround = (y, fillColor) => {
    fill(fillColor);
    rect(0, y, width, height-y);
}
